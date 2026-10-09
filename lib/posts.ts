import crypto from 'node:crypto';
import { cache } from 'react';
import { db } from './db';
import {
  RESERVED_SLUGS,
  slugify,
  stripHtml,
  type Faq,
  type Post,
  type PostInput,
} from './post-types';
import { SITE } from './site';

/**
 * Blog storage: one row per post in the `posts` table (see lib/db.ts).
 * Public pages read through these helpers when they are (re)generated; the admin API writes.
 */

export class PostError extends Error {
  status: number;
  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

function str(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

function isoOrNull(value: unknown): string | null {
  if (typeof value !== 'string' || !value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function cleanTags(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const tags: string[] = [];
  for (const raw of value) {
    const tag = str(raw).trim().slice(0, 40);
    const key = tag.toLowerCase();
    if (tag && !seen.has(key)) {
      seen.add(key);
      tags.push(tag);
    }
  }
  return tags.slice(0, 12);
}

function cleanFaqs(value: unknown): Faq[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => ({
      q: str((item as Faq | undefined)?.q).trim().slice(0, 200),
      a: str((item as Faq | undefined)?.a).trim().slice(0, 1200),
    }))
    .filter((f) => f.q && f.a)
    .slice(0, 12);
}

function num(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.round(value) : null;
}

/** Fill in defaults so rows written by an older version never break a page. */
function normalize(raw: Record<string, unknown>): Post {
  const now = new Date().toISOString();
  return {
    id: str(raw.id),
    slug: str(raw.slug),
    title: str(raw.title),
    excerpt: str(raw.excerpt),
    content: str(raw.content),
    coverImage: str(raw.coverImage),
    coverAlt: str(raw.coverAlt),
    coverWidth: num(raw.coverWidth),
    coverHeight: num(raw.coverHeight),
    ogImage: str(raw.ogImage),
    category: str(raw.category, 'Guides') || 'Guides',
    tags: cleanTags(raw.tags),
    author: str(raw.author, SITE.defaultAuthor) || SITE.defaultAuthor,
    status: raw.status === 'published' ? 'published' : 'draft',
    publishedAt: isoOrNull(raw.publishedAt),
    createdAt: isoOrNull(raw.createdAt) ?? now,
    updatedAt: isoOrNull(raw.updatedAt) ?? now,
    seoTitle: str(raw.seoTitle),
    seoDescription: str(raw.seoDescription),
    focusKeyword: str(raw.focusKeyword),
    faqs: cleanFaqs(raw.faqs),
    noindex: raw.noindex === true,
  };
}

/** Every post. Wrapped in React `cache` so one page render queries the database once. */
export const readAllPosts = cache(async (): Promise<Post[]> => {
  const client = await db();
  const result = await client.execute('SELECT id, data FROM posts');
  const posts: Post[] = [];
  for (const row of result.rows) {
    try {
      const post = normalize(JSON.parse(String(row.data)));
      if (post.id && post.slug) posts.push(post);
    } catch (err) {
      console.warn(`[posts] Skipping unreadable post ${String(row.id)}:`, err);
    }
  }
  return posts;
});

/** Everything, newest edit first. For the admin dashboard. */
export async function getAllPostsForAdmin(): Promise<Post[]> {
  return [...(await readAllPosts())].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

/** Published posts, newest first. This is what the public site lists. */
export async function getPublishedPosts(): Promise<Post[]> {
  return (await readAllPosts())
    .filter((p) => p.status === 'published')
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return (await readAllPosts()).find((p) => p.id === id);
}

/** Public lookup: drafts are never returned here (they have their own signed-in preview page). */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return (await getPublishedPosts()).find((p) => p.slug === slug);
}

export type Category = { name: string; slug: string; count: number };

export async function getCategories(): Promise<Category[]> {
  const map = new Map<string, Category>();
  for (const post of await getPublishedPosts()) {
    const slug = slugify(post.category);
    if (!slug) continue;
    const entry = map.get(slug);
    if (entry) entry.count += 1;
    else map.set(slug, { name: post.category, slug, count: 1 });
  }
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  return (await getPublishedPosts()).filter((p) => slugify(p.category) === categorySlug);
}

export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
  const tags = new Set(post.tags.map((t) => t.toLowerCase()));
  return (await getPublishedPosts())
    .filter((p) => p.id !== post.id)
    .map((p) => ({
      post: p,
      score:
        (p.category === post.category ? 3 : 0) +
        p.tags.filter((t) => tags.has(t.toLowerCase())).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.post);
}

export function getExcerpt(post: Post, max = 170): string {
  if (post.excerpt) return post.excerpt;
  const text = stripHtml(post.content);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

export function getSeoTitle(post: Post): string {
  return post.seoTitle || post.title;
}

export function getSeoDescription(post: Post): string {
  return post.seoDescription || getExcerpt(post, 158);
}

function newId(): string {
  return Date.now().toString(36) + crypto.randomBytes(3).toString('hex');
}

/**
 * Create (no id) or update (id) a post. `input.content` must already be sanitized HTML.
 * Throws PostError with an HTTP-ish status for anything the editor should show the author.
 */
export async function savePost(input: PostInput, id?: string): Promise<Post> {
  if (id !== undefined && !/^[a-z0-9]+$/.test(id)) throw new PostError('Post not found', 404);

  const all = await readAllPosts();
  const existing = id ? all.find((p) => p.id === id) : undefined;
  if (id && !existing) throw new PostError('Post not found', 404);

  const title = str(input.title).trim().slice(0, 160);
  if (!title) throw new PostError('Please add a title.');

  const slug = slugify(str(input.slug).trim() || title);
  if (!slug) throw new PostError('The URL slug needs at least one letter or number.');
  if (RESERVED_SLUGS.includes(slug)) {
    throw new PostError(`"${slug}" is a reserved URL. Please choose a different slug.`);
  }
  const slugTaken = `Another post already uses the URL slug "${slug}".`;
  if (all.some((p) => p.slug === slug && p.id !== id)) throw new PostError(slugTaken, 409);

  const status = input.status === 'published' ? 'published' : 'draft';
  const content = str(input.content, existing?.content ?? '');
  if (status === 'published' && !stripHtml(content)) {
    throw new PostError('Write some content before publishing.');
  }

  const now = new Date().toISOString();
  let publishedAt =
    input.publishedAt !== undefined ? isoOrNull(input.publishedAt) : existing?.publishedAt ?? null;
  if (status === 'published' && !publishedAt) publishedAt = now;

  const post: Post = {
    id: existing?.id ?? newId(),
    slug,
    title,
    excerpt: str(input.excerpt, existing?.excerpt ?? '').trim().slice(0, 320),
    content,
    coverImage: str(input.coverImage, existing?.coverImage ?? '').trim(),
    coverAlt: str(input.coverAlt, existing?.coverAlt ?? '').trim().slice(0, 200),
    coverWidth: input.coverWidth !== undefined ? num(input.coverWidth) : existing?.coverWidth ?? null,
    coverHeight: input.coverHeight !== undefined ? num(input.coverHeight) : existing?.coverHeight ?? null,
    ogImage: str(input.ogImage, existing?.ogImage ?? '').trim(),
    category: str(input.category, existing?.category ?? '').trim().slice(0, 40) || 'Guides',
    tags: input.tags !== undefined ? cleanTags(input.tags) : existing?.tags ?? [],
    author: str(input.author, existing?.author ?? '').trim().slice(0, 80) || SITE.defaultAuthor,
    status,
    publishedAt,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    seoTitle: str(input.seoTitle, existing?.seoTitle ?? '').trim().slice(0, 120),
    seoDescription: str(input.seoDescription, existing?.seoDescription ?? '').trim().slice(0, 320),
    focusKeyword: str(input.focusKeyword, existing?.focusKeyword ?? '').trim().slice(0, 80),
    faqs: input.faqs !== undefined ? cleanFaqs(input.faqs) : existing?.faqs ?? [],
    noindex: input.noindex !== undefined ? input.noindex === true : existing?.noindex ?? false,
  };

  if (!post.coverImage) {
    post.coverAlt = '';
    post.coverWidth = null;
    post.coverHeight = null;
    post.ogImage = '';
  }

  const client = await db();
  try {
    await client.execute({
      sql: `INSERT INTO posts (id, slug, status, published_at, updated_at, data)
            VALUES (?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
              slug = excluded.slug,
              status = excluded.status,
              published_at = excluded.published_at,
              updated_at = excluded.updated_at,
              data = excluded.data`,
      args: [post.id, post.slug, post.status, post.publishedAt, post.updatedAt, JSON.stringify(post)],
    });
  } catch (err) {
    // Two saves racing for the same slug: the database's UNIQUE constraint is the final word.
    if (/UNIQUE constraint failed/i.test(String(err))) throw new PostError(slugTaken, 409);
    throw err;
  }
  return post;
}

/** Returns the deleted post so callers can refresh the pages it appeared on. */
export async function deletePost(id: string): Promise<Post> {
  const post = /^[a-z0-9]+$/.test(id) ? await getPostById(id) : undefined;
  if (!post) throw new PostError('Post not found', 404);
  const client = await db();
  await client.execute({ sql: 'DELETE FROM posts WHERE id = ?', args: [id] });
  return post;
}
