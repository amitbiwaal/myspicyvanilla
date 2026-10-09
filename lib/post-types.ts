/** Blog post shapes shared by the server data layer and the admin editor (no Node imports here). */

export type PostStatus = 'draft' | 'published';

export type Faq = { q: string; a: string };

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /** Sanitized HTML produced by the editor. */
  content: string;
  coverImage: string;
  coverAlt: string;
  coverWidth: number | null;
  coverHeight: number | null;
  /** 1200x630 JPG generated from the cover, used for social sharing. */
  ogImage: string;
  category: string;
  tags: string[];
  author: string;
  status: PostStatus;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  faqs: Faq[];
  noindex: boolean;
};

/** What the editor sends to the API. */
export type PostInput = Partial<Omit<Post, 'id' | 'createdAt' | 'updatedAt'>> & { title: string };

export const RESERVED_SLUGS = ['category', 'page', 'tag', 'feed', 'admin'];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
}

export function stripHtml(html: string): string {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

export function countWords(html: string): number {
  const text = stripHtml(html);
  return text ? text.split(' ').length : 0;
}

export function readingMinutes(html: string): number {
  return Math.max(1, Math.round(countWords(html) / 220));
}

export function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
