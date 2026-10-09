import { formatDate, readingMinutes, slugify, type Post } from '@/lib/post-types';
import { getExcerpt } from '@/lib/posts';

/** Blog listing card. `featured` renders the wide lead card; `heading` keeps the outline correct per page. */
export default function PostCard({
  post,
  featured = false,
  heading: Heading = 'h2',
  eager = false,
}: {
  post: Post;
  featured?: boolean;
  heading?: 'h2' | 'h3';
  eager?: boolean;
}) {
  const href = `/blog/${post.slug}/`;
  return (
    <article className={`post-card${featured ? ' featured' : ''}`}>
      <div className="thumb" aria-hidden={post.coverImage ? undefined : true}>
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.coverAlt}
            width={post.coverWidth ?? 1200}
            height={post.coverHeight ?? 675}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : null}
      </div>
      <div className="body">
        <div className="post-meta">
          <a className="cat" href={`/blog/category/${slugify(post.category)}/`}>
            {post.category}
          </a>
          {post.publishedAt ? <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> : null}
          <span>{readingMinutes(post.content)} min read</span>
        </div>
        <Heading className="title">
          <a href={href}>{post.title}</a>
        </Heading>
        <p>{getExcerpt(post, featured ? 220 : 150)}</p>
        <span className="more" aria-hidden="true">
          Read article →
        </span>
      </div>
    </article>
  );
}
