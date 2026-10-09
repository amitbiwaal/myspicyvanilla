import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import JsonLd from '../../components/JsonLd';
import PostCard from '../../components/PostCard';
import { getCategories, getPublishedPosts } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { SITE, absoluteUrl } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Romance Guides & Story Ideas for Couples',
  description: SITE.blogDescription,
  path: '/blog/',
});

// Prerendered and cached; saving a post in the admin refreshes it at once (lib/revalidate.ts).
export const revalidate = 3600;

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();
  const categories = await getCategories();

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: SITE.blogTitle,
          description: SITE.blogDescription,
          url: absoluteUrl('/blog/'),
          inLanguage: SITE.language,
          publisher: { '@type': 'Organization', name: SITE.name, url: absoluteUrl('/') },
          blogPost: posts.slice(0, 20).map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            url: absoluteUrl(`/blog/${post.slug}/`),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
          })),
        }}
      />

      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Blog', path: '/blog/' },
            ]}
          />
          <span className="eyebrow">Blog</span>
          <h1>{SITE.blogTitle}</h1>
          <p className="lede">
            Practical, judgment-free guides to romance heat levels, tropes, story prompts and reading together as a
            couple.
          </p>
        </div>
      </header>

      <section aria-label="Articles">
        <div className="wrap">
          {categories.length > 1 ? (
            <nav className="chips" aria-label="Blog categories">
              <a className="chip" href="/blog/" aria-current="page">
                All articles <span className="count">{posts.length}</span>
              </a>
              {categories.map((c) => (
                <a className="chip" key={c.slug} href={`/blog/category/${c.slug}/`}>
                  {c.name} <span className="count">{c.count}</span>
                </a>
              ))}
            </nav>
          ) : null}

          {posts.length ? (
            <div className="post-grid">
              {posts.map((post, i) => (
                <PostCard key={post.id} post={post} featured={i === 0} eager={i === 0} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>New articles are on the way</h2>
              <p>
                We are writing our first guides now. In the meantime, <a href="/">explore the story generator</a>.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
