import { getExcerpt, getPublishedPosts } from '@/lib/posts';
import { SITE, absoluteUrl, escapeXml } from '@/lib/site';

// Generated once and cached; saving a post in the admin refreshes it (lib/revalidate.ts).
export const dynamic = 'force-static';
export const revalidate = 3600;

/** RSS 2.0 feed of the latest published blog posts. */
export async function GET() {
  const posts = (await getPublishedPosts()).filter((post) => !post.noindex).slice(0, 30);
  const updated = posts[0]?.publishedAt ?? new Date().toISOString();

  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}/`);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${new Date(post.publishedAt ?? post.updatedAt).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(getExcerpt(post, 300))}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.blogTitle)}</title>
    <link>${absoluteUrl('/blog/')}</link>
    <description>${escapeXml(SITE.blogDescription)}</description>
    <language>${SITE.language}</language>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
