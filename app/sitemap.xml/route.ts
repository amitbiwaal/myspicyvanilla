import { getCategories, getPostsByCategory, getPublishedPosts } from '@/lib/posts';
import { STATIC_PAGES, absoluteUrl, escapeXml } from '@/lib/site';

// Built fresh on every request. Next.js treats /sitemap.xml as a special metadata route whose
// cached copy is not cleared by revalidatePath(), so caching it would leave new posts out for
// up to an hour. It is only fetched by crawlers, so one small database read per request is fine.
export const dynamic = 'force-dynamic';

type Entry = { loc: string; lastmod: string; changefreq: string; priority: string; image?: string };

/** XML sitemap: static pages plus every indexable blog post and category, generated from the CMS content. */
export async function GET() {
  const posts = (await getPublishedPosts()).filter((post) => !post.noindex);
  const newest = posts.reduce((max, post) => (post.updatedAt > max ? post.updatedAt : max), '');

  const entries: Entry[] = STATIC_PAGES.map((page) => ({
    loc: absoluteUrl(page.path),
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
    image: page.image ? absoluteUrl(page.image) : undefined,
  }));

  entries.push({
    loc: absoluteUrl('/blog/'),
    lastmod: (newest || new Date().toISOString()).slice(0, 10),
    changefreq: 'weekly',
    priority: '0.8',
  });

  for (const category of await getCategories()) {
    const inCategory = (await getPostsByCategory(category.slug)).filter((post) => !post.noindex);
    if (!inCategory.length) continue;
    const lastmod = inCategory.reduce((max, post) => (post.updatedAt > max ? post.updatedAt : max), '');
    entries.push({
      loc: absoluteUrl(`/blog/category/${category.slug}/`),
      lastmod: lastmod.slice(0, 10),
      changefreq: 'weekly',
      priority: '0.5',
    });
  }

  for (const post of posts) {
    entries.push({
      loc: absoluteUrl(`/blog/${post.slug}/`),
      lastmod: post.updatedAt.slice(0, 10),
      changefreq: 'monthly',
      priority: '0.7',
      image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    });
  }

  const body = entries
    .map((entry) =>
      [
        '  <url>',
        `    <loc>${escapeXml(entry.loc)}</loc>`,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        entry.image
          ? `    <image:image>\n      <image:loc>${escapeXml(entry.image)}</image:loc>\n    </image:image>`
          : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n'),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
