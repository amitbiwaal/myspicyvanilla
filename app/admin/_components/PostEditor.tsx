'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import LocalTime from './LocalTime';
import RichTextEditor from './RichTextEditor';
import { shrinkImage } from '@/lib/client-image';
import { countWords, slugify, stripHtml, type Faq, type Post } from '@/lib/post-types';

const SITE_HOST = 'myspicyvanilla.net';
const TITLE_SUFFIX = ' | My Spicy Vanilla';

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverAlt: string;
  coverWidth: number | null;
  coverHeight: number | null;
  ogImage: string;
  category: string;
  tags: string;
  author: string;
  status: 'draft' | 'published';
  publishedAt: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  faqs: Faq[];
  noindex: boolean;
};

/** ISO timestamp ↔ value for <input type="datetime-local"> (which works in local time). */
function toLocalInput(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fromLocalInput(value: string): string | null {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function initialState(post: Post | undefined, defaultAuthor: string): FormState {
  return {
    title: post?.title ?? '',
    slug: post?.slug ?? '',
    excerpt: post?.excerpt ?? '',
    content: post?.content ?? '',
    coverImage: post?.coverImage ?? '',
    coverAlt: post?.coverAlt ?? '',
    coverWidth: post?.coverWidth ?? null,
    coverHeight: post?.coverHeight ?? null,
    ogImage: post?.ogImage ?? '',
    category: post?.category ?? 'Guides',
    tags: (post?.tags ?? []).join(', '),
    author: post?.author ?? defaultAuthor,
    status: post?.status ?? 'draft',
    publishedAt: toLocalInput(post?.publishedAt ?? null),
    seoTitle: post?.seoTitle ?? '',
    seoDescription: post?.seoDescription ?? '',
    focusKeyword: post?.focusKeyword ?? '',
    faqs: post?.faqs ?? [],
    noindex: post?.noindex ?? false,
  };
}

function Counter({ value, min, max }: { value: number; min: number; max: number }) {
  const state = value === 0 ? '' : value >= min && value <= max ? ' ok' : ' warn';
  return (
    <span className={`adm-count${state}`}>
      {value} / {max}
    </span>
  );
}

export default function PostEditor({
  post,
  categories,
  defaultAuthor,
  flash,
}: {
  post?: Post;
  categories: string[];
  defaultAuthor: string;
  flash?: string;
}) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(() => initialState(post, defaultAuthor));
  const [slugTouched, setSlugTouched] = useState(Boolean(post));
  const [saving, setSaving] = useState<null | 'draft' | 'published'>(null);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [savedAt, setSavedAt] = useState<string>(post?.updatedAt ?? '');
  const [message, setMessage] = useState<{ type: 'ok' | 'err'; text: string } | null>(
    flash === 'published'
      ? { type: 'ok', text: 'Published. It is live on the blog now.' }
      : flash === 'draft'
        ? { type: 'ok', text: 'Draft saved.' }
        : null,
  );
  const coverInput = useRef<HTMLInputElement>(null);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setDirty(true);
  }

  // Warn before closing the tab with unsaved work.
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  function onTitle(value: string) {
    setForm((prev) => ({ ...prev, title: value, slug: slugTouched ? prev.slug : slugify(value) }));
    setDirty(true);
  }

  async function uploadCover(file: File) {
    setUploadingCover(true);
    setMessage(null);
    try {
      const body = new FormData();
      body.append('file', await shrinkImage(file));
      body.append('kind', 'cover');
      const res = await fetch('/api/admin/upload/', { method: 'POST', body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Upload failed.');
      setForm((prev) => ({
        ...prev,
        coverImage: data.url,
        coverWidth: data.width,
        coverHeight: data.height,
        ogImage: data.ogImage,
      }));
      setDirty(true);
    } catch (err) {
      setMessage({ type: 'err', text: err instanceof Error ? err.message : 'Upload failed.' });
    } finally {
      setUploadingCover(false);
      if (coverInput.current) coverInput.current.value = '';
    }
  }

  async function save(status: 'draft' | 'published') {
    setSaving(status);
    setMessage(null);
    const payload = {
      ...form,
      status,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      publishedAt: fromLocalInput(form.publishedAt),
    };
    try {
      const res = await fetch(post ? `/api/admin/posts/${post.id}/` : '/api/admin/posts/', {
        method: post ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) {
        setMessage({ type: 'err', text: 'Your session expired. Sign in again in a new tab, then press save.' });
        return;
      }
      if (!res.ok) throw new Error(data.error || 'Could not save.');

      const saved: Post = data.post;
      setDirty(false);
      if (!post) {
        // First save: move to the permanent edit URL for this post.
        router.replace(`/admin/posts/${saved.id}/?saved=${status}`);
        return;
      }
      setForm((prev) => ({
        ...prev,
        slug: saved.slug,
        status: saved.status,
        publishedAt: toLocalInput(saved.publishedAt),
        category: saved.category,
        author: saved.author,
      }));
      setSavedAt(saved.updatedAt);
      setMessage({
        type: 'ok',
        text:
          status === 'published'
            ? 'Published. It is live on the blog now.'
            : 'Draft saved.',
      });
      router.refresh();
    } catch (err) {
      setMessage({ type: 'err', text: err instanceof Error ? err.message : 'Could not save.' });
    } finally {
      setSaving(null);
    }
  }

  const effectiveTitle = form.seoTitle.trim() || (form.title.trim() ? form.title.trim() + TITLE_SUFFIX : '');
  const effectiveDescription = form.seoDescription.trim() || form.excerpt.trim();
  const slug = slugify(form.slug || form.title);

  // Live on-page SEO checks. Each one maps to something a search engine or reader actually sees.
  const checks = useMemo(() => {
    // Plain string matching (not DOMParser) so the server render and the browser agree.
    const html = form.content;
    const words = countWords(html);
    const h2 = (html.match(/<h2[\s>]/g) ?? []).length;
    const images = html.match(/<img\b[^>]*>/g) ?? [];
    const missingAlt = images.filter((tag) => !/\balt="[^"]*\S[^"]*"/.test(tag)).length;
    const internalLinks = Array.from(html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)).filter(
      ([, href]) => href.startsWith('/') || href.includes(SITE_HOST),
    ).length;
    const firstParagraph = stripHtml(html.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? '').toLowerCase();
    const keyword = form.focusKeyword.trim().toLowerCase();
    const titleLength = effectiveTitle.length;
    const descriptionLength = effectiveDescription.length;

    const list = [
      { ok: titleLength >= 30 && titleLength <= 60, label: `Search title is 30–60 characters (now ${titleLength})` },
      {
        ok: descriptionLength >= 120 && descriptionLength <= 160,
        label: `Meta description is 120–160 characters (now ${descriptionLength})`,
      },
      { ok: words >= 600, label: `At least 600 words (now ${words})` },
      { ok: h2 >= 2, label: `At least two H2 sections (now ${h2})` },
      { ok: Boolean(form.coverImage && form.coverAlt.trim()), label: 'Cover image with alt text' },
      { ok: missingAlt === 0, label: 'Every image in the article has alt text' },
      { ok: internalLinks >= 1, label: `Links to another page on this site (now ${internalLinks})` },
      { ok: slug.length > 0 && slug.length <= 60, label: 'Short, readable URL' },
    ];
    if (keyword) {
      list.push(
        { ok: effectiveTitle.toLowerCase().includes(keyword), label: 'Focus keyword in the search title' },
        { ok: effectiveDescription.toLowerCase().includes(keyword), label: 'Focus keyword in the meta description' },
        { ok: firstParagraph.includes(keyword), label: 'Focus keyword in the first paragraph' },
        { ok: slug.includes(slugify(keyword)), label: 'Focus keyword in the URL' },
      );
    } else {
      list.push({ ok: false, label: 'Set a focus keyword' });
    }
    return list;
  }, [form.content, form.coverImage, form.coverAlt, form.focusKeyword, effectiveTitle, effectiveDescription, slug]);

  const passed = checks.filter((c) => c.ok).length;
  const isPublished = form.status === 'published';

  return (
    <>
      <div className="adm-head">
        <div>
          <h1>{post ? 'Edit post' : 'New post'}</h1>
          <p className="adm-sub">
            <span className={`adm-badge ${form.status}`}>{form.status}</span>
            {dirty ? (
              ' · Unsaved changes'
            ) : savedAt ? (
              <>
                {' · Last saved '}
                <LocalTime iso={savedAt} />
              </>
            ) : null}
          </p>
        </div>
        {post ? (
          <a className="adm-btn" href={isPublished ? `/blog/${form.slug}/` : `/preview/${post.id}/`} target="_blank" rel="noopener">
            {isPublished ? 'View post' : 'Preview draft'}
          </a>
        ) : null}
      </div>

      {message ? (
        <div className={`adm-msg ${message.type}`} role={message.type === 'err' ? 'alert' : 'status'}>
          {message.text}
        </div>
      ) : null}

      <div className="adm-editor">
        <div>
          <label className="adm-label" htmlFor="post-title">
            Title
          </label>
          <input
            id="post-title"
            className="adm-title"
            type="text"
            placeholder="Article title"
            value={form.title}
            maxLength={160}
            onChange={(e) => onTitle(e.target.value)}
          />
          <div className="adm-slug">
            <label htmlFor="post-slug">{SITE_HOST}/blog/</label>
            <input
              id="post-slug"
              type="text"
              aria-label="URL slug"
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                set('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, '-'));
              }}
              onBlur={() => {
                const clean = slugify(form.slug);
                if (clean !== form.slug) set('slug', clean);
              }}
            />
          </div>

          <RichTextEditor value={form.content} onChange={(html) => set('content', html)} />

          <div className="adm-card" style={{ marginTop: 16 }}>
            <h2>Frequently asked questions (optional)</h2>
            <p className="adm-hint" style={{ marginBottom: 12 }}>
              Shown at the end of the article and added to the page as FAQ structured data.
            </p>
            {form.faqs.map((faq, i) => (
              <div className="adm-faq" key={i}>
                <div className="adm-field">
                  <label htmlFor={`faq-q-${i}`}>Question {i + 1}</label>
                  <input
                    id={`faq-q-${i}`}
                    type="text"
                    value={faq.q}
                    onChange={(e) =>
                      set('faqs', form.faqs.map((f, n) => (n === i ? { ...f, q: e.target.value } : f)))
                    }
                  />
                </div>
                <div className="adm-field">
                  <label htmlFor={`faq-a-${i}`}>Answer</label>
                  <textarea
                    id={`faq-a-${i}`}
                    value={faq.a}
                    onChange={(e) =>
                      set('faqs', form.faqs.map((f, n) => (n === i ? { ...f, a: e.target.value } : f)))
                    }
                  />
                </div>
                <button
                  type="button"
                  className="adm-btn small danger"
                  onClick={() => set('faqs', form.faqs.filter((_, n) => n !== i))}
                >
                  Remove question
                </button>
              </div>
            ))}
            <button
              type="button"
              className="adm-btn small"
              onClick={() => set('faqs', [...form.faqs, { q: '', a: '' }])}
            >
              + Add question
            </button>
          </div>
        </div>

        <aside className="adm-side" aria-label="Post settings">
          <div className="adm-card">
            <h2>Publish</h2>
            <div className="adm-savebar">
              <button
                type="button"
                className="adm-btn"
                disabled={saving !== null}
                onClick={() => save('draft')}
              >
                {saving === 'draft' ? 'Saving…' : isPublished ? 'Switch to draft' : 'Save draft'}
              </button>
              <button
                type="button"
                className="adm-btn primary"
                disabled={saving !== null}
                onClick={() => save('published')}
              >
                {saving === 'published' ? 'Saving…' : isPublished ? 'Update' : 'Publish'}
              </button>
            </div>
            <div className="adm-field" style={{ marginTop: 14 }}>
              <label htmlFor="post-date">Publish date</label>
              <input
                id="post-date"
                type="datetime-local"
                value={form.publishedAt}
                onChange={(e) => set('publishedAt', e.target.value)}
              />
              <p className="adm-hint">Leave empty to use the moment you publish.</p>
            </div>
          </div>

          <div className="adm-card">
            <h2>Cover image</h2>
            {form.coverImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="adm-cover" src={form.coverImage} alt="" />
            ) : null}
            <div className="adm-field">
              <label htmlFor="post-cover">{form.coverImage ? 'Replace image' : 'Upload image'}</label>
              <input
                id="post-cover"
                ref={coverInput}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
                disabled={uploadingCover}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) uploadCover(file);
                }}
              />
              <p className="adm-hint">
                {uploadingCover ? 'Uploading…' : 'Wide images work best (about 1600×900). Converted to WebP automatically.'}
              </p>
            </div>
            <div className="adm-field">
              <label htmlFor="post-cover-alt">Cover alt text</label>
              <input
                id="post-cover-alt"
                type="text"
                value={form.coverAlt}
                onChange={(e) => set('coverAlt', e.target.value)}
              />
            </div>
            {form.coverImage ? (
              <button
                type="button"
                className="adm-btn small danger"
                onClick={() => {
                  setForm((prev) => ({
                    ...prev,
                    coverImage: '',
                    coverAlt: '',
                    coverWidth: null,
                    coverHeight: null,
                    ogImage: '',
                  }));
                  setDirty(true);
                }}
              >
                Remove cover
              </button>
            ) : null}
          </div>

          <div className="adm-card">
            <h2>Details</h2>
            <div className="adm-field">
              <label htmlFor="post-excerpt">
                Excerpt <Counter value={form.excerpt.length} min={80} max={200} />
              </label>
              <textarea
                id="post-excerpt"
                value={form.excerpt}
                maxLength={320}
                onChange={(e) => set('excerpt', e.target.value)}
              />
              <p className="adm-hint">One or two sentences shown on the blog page and under the title.</p>
            </div>
            <div className="adm-field">
              <label htmlFor="post-category">Category</label>
              <input
                id="post-category"
                type="text"
                list="post-categories"
                value={form.category}
                onChange={(e) => set('category', e.target.value)}
              />
              <datalist id="post-categories">
                {categories.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
            </div>
            <div className="adm-field">
              <label htmlFor="post-tags">Tags</label>
              <input
                id="post-tags"
                type="text"
                placeholder="romance, heat levels, couples"
                value={form.tags}
                onChange={(e) => set('tags', e.target.value)}
              />
              <p className="adm-hint">Separate with commas.</p>
            </div>
            <div className="adm-field">
              <label htmlFor="post-author">Author</label>
              <input
                id="post-author"
                type="text"
                value={form.author}
                onChange={(e) => set('author', e.target.value)}
              />
            </div>
          </div>

          <div className="adm-card">
            <h2>Search engine preview</h2>
            <div className="adm-serp" aria-label="How this post may look in Google">
              <div className="u">
                {SITE_HOST} › blog › {slug || 'your-post'}
              </div>
              <div className="t">{effectiveTitle || 'Your post title'}</div>
              <div className="d">
                {effectiveDescription || 'Write an excerpt or meta description to control this text.'}
              </div>
            </div>
            <div className="adm-field">
              <label htmlFor="post-seo-title">
                SEO title <Counter value={effectiveTitle.length} min={30} max={60} />
              </label>
              <input
                id="post-seo-title"
                type="text"
                placeholder={form.title ? form.title + TITLE_SUFFIX : 'Defaults to the post title'}
                value={form.seoTitle}
                onChange={(e) => set('seoTitle', e.target.value)}
              />
            </div>
            <div className="adm-field">
              <label htmlFor="post-seo-description">
                Meta description <Counter value={effectiveDescription.length} min={120} max={160} />
              </label>
              <textarea
                id="post-seo-description"
                placeholder="Defaults to the excerpt"
                value={form.seoDescription}
                onChange={(e) => set('seoDescription', e.target.value)}
              />
            </div>
            <div className="adm-field">
              <label htmlFor="post-keyword">Focus keyword</label>
              <input
                id="post-keyword"
                type="text"
                value={form.focusKeyword}
                onChange={(e) => set('focusKeyword', e.target.value)}
              />
            </div>
            <label className="adm-check">
              <input type="checkbox" checked={form.noindex} onChange={(e) => set('noindex', e.target.checked)} />
              Hide this post from search engines (noindex)
            </label>
          </div>

          <div className="adm-card">
            <h2>
              SEO checklist{' '}
              <span className="adm-score">
                {passed}/{checks.length}
              </span>
            </h2>
            <ul className="adm-checks">
              {checks.map((check) => (
                <li key={check.label} className={check.ok ? 'pass' : 'fail'}>
                  <span className="dot" aria-hidden="true">
                    {check.ok ? '✓' : '!'}
                  </span>
                  <span>
                    <span className="sr-only">{check.ok ? 'Done: ' : 'To do: '}</span>
                    {check.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
