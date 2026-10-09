import Breadcrumbs from './Breadcrumbs';
import JsonLd from './JsonLd';
import PostCard from './PostCard';
import ReadingProgress from './ReadingProgress';
import { renderContent } from '@/lib/content';
import { countWords, formatDate, readingMinutes, slugify, type Post } from '@/lib/post-types';
import { getSeoDescription } from '@/lib/posts';
import { SITE, absoluteUrl } from '@/lib/site';

/**
 * A full blog article: header, cover, body with table of contents, FAQ, author and related posts.
 * Shared by the public post page and the signed-in draft preview (`preview`), which shows a
 * banner and leaves out structured data.
 */
export default function ArticleView({
  post,
  related,
  preview = false,
}: {
  post: Post;
  related: Post[];
  preview?: boolean;
}) {
  const url = absoluteUrl(`/blog/${post.slug}/`);
  const { html, toc } = renderContent(post.content);
  const categoryPath = `/blog/category/${slugify(post.category)}/`;
  const minutes = readingMinutes(post.content);
  const wasUpdated =
    post.publishedAt !== null && post.updatedAt.slice(0, 10) > post.publishedAt.slice(0, 10);
  const shareImage = absoluteUrl(post.ogImage || post.coverImage || SITE.defaultOgImage);

  const structuredData: Array<Record<string, unknown>> = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      headline: post.title.slice(0, 110),
      description: getSeoDescription(post),
      image: [shareImage],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { '@type': 'Organization', name: post.author, url: absoluteUrl('/about/') },
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
        url: absoluteUrl('/'),
        logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo) },
      },
      articleSection: post.category,
      keywords: post.tags.join(', ') || undefined,
      wordCount: countWords(post.content),
      inLanguage: SITE.language,
      isFamilyFriendly: false,
    },
  ];
  if (post.faqs.length) {
    structuredData.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    });
  }

  return (
    <>
      <ReadingProgress />
      {preview ? null : <JsonLd data={structuredData} />}

      {preview ? (
        <div className="draft-banner" role="status">
          {post.status === 'published'
            ? 'Preview. Only you can see this page while signed in.'
            : 'Draft preview. Only you can see this page while signed in. It is not on the live blog until you publish it.'}
        </div>
      ) : null}

      <article id="top">
        <header className="post-head">
          <div className="wrap">
            <Breadcrumbs
              structuredData={!preview}
              items={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog/' },
                { name: post.category, path: categoryPath },
                { name: post.title, path: `/blog/${post.slug}/` },
              ]}
            />
            <div className="post-meta">
              <a className="cat" href={categoryPath}>
                {post.category}
              </a>
            </div>
            <h1>{post.title}</h1>
            {post.excerpt ? <p className="lede">{post.excerpt}</p> : null}
            <div className="post-byline">
              <span>
                By <strong>{post.author}</strong>
              </span>
              {post.publishedAt ? (
                <>
                  <span className="sep" aria-hidden="true">
                    •
                  </span>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </>
              ) : null}
              {wasUpdated ? (
                <>
                  <span className="sep" aria-hidden="true">
                    •
                  </span>
                  <span>
                    Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                  </span>
                </>
              ) : null}
              <span className="sep" aria-hidden="true">
                •
              </span>
              <span>{minutes} min read</span>
            </div>
          </div>
        </header>

        {post.coverImage ? (
          <div className="post-cover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              width={post.coverWidth ?? 1200}
              height={post.coverHeight ?? 675}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        ) : null}

        <div className="wrap post-layout">
          <div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

            {post.faqs.length ? (
              <div className="post-faq">
                <h2 id="faq">Frequently asked questions</h2>
                {post.faqs.map((faq) => (
                  <div className="item" key={faq.q}>
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {post.tags.length ? (
              <ul className="tag-list" aria-label="Topics">
                {post.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="inline-cta">
              <h2>Ready to try it together?</h2>
              <p>
                Describe a scene, set the heat level, and My Spicy Vanilla writes a personalized, illustrated story for
                the two of you.
              </p>
              <a className="btn btn-primary" href="/">
                Explore the Story Generator
              </a>
            </div>

            <div className="author-box">
              <span className="avatar" aria-hidden="true">
                MSV
              </span>
              <div>
                <b>{post.author}</b>
                <p>
                  We write practical, judgment-free guides to romance fiction and shared storytelling for adults.{' '}
                  <a href="/about/">More about us</a>.
                </p>
              </div>
            </div>
          </div>

          <aside className="post-aside">
            {toc.length >= 2 ? (
              <nav className="toc" aria-label="Table of contents">
                <h2>On this page</h2>
                <ol>
                  {toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? 'l3' : undefined}>
                      <a href={`#${item.id}`}>{item.text}</a>
                    </li>
                  ))}
                  {post.faqs.length ? (
                    <li>
                      <a href="#faq">Frequently asked questions</a>
                    </li>
                  ) : null}
                </ol>
              </nav>
            ) : null}
            <div className="cta-box">
              <h2>Turn the idea into a story</h2>
              <p>Personalized, illustrated stories for couples. Free to start and private by design.</p>
              <a className="btn btn-primary" href="/">
                Start a Story
              </a>
            </div>
          </aside>
        </div>
      </article>

      {related.length ? (
        <section className="related" aria-labelledby="related-title">
          <div className="wrap">
            <div className="sec-head">
              <h2 id="related-title">Keep reading</h2>
            </div>
            <div className="post-grid">
              {related.map((item) => (
                <PostCard key={item.id} post={item} heading="h3" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
