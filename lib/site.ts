/** Site-wide constants shared by pages, SEO routes and the CMS. */
export const SITE = {
  name: 'My Spicy Vanilla',
  url: 'https://myspicyvanilla.net',
  officialUrl: 'https://myspicyvanilla.com/',
  /** Shown on the Contact / legal pages. Change this to your real inbox. */
  email: 'contact@myspicyvanilla.net',
  locale: 'en_US',
  language: 'en',
  defaultOgImage: '/images/og-share.jpg',
  logo: '/images/logo.png',
  defaultAuthor: 'My Spicy Vanilla Editorial Team',
  blogTitle: 'The My Spicy Vanilla Blog',
  blogDescription:
    'Guides to romance heat levels, tropes, story prompts and shared reading for couples, from the My Spicy Vanilla editorial team.',
} as const;

export const GENERATOR_LINKS = [
  { href: '/ai-fanfiction-generator/', label: 'AI Fanfiction Generator', short: 'AI Fanfiction' },
  { href: '/ai-erotic-story-generator/', label: 'AI Erotic Story Generator', short: 'Erotic Stories' },
  { href: '/ai-femdom-story-generator/', label: 'AI Femdom Story Generator', short: 'Femdom Stories' },
  { href: '/ai-pegging-story-generator/', label: 'AI Pegging Story Generator', short: 'Pegging Stories' },
  { href: '/ai-cuckold-story-generator/', label: 'AI Cuckold Story Generator', short: 'Cuckold Stories' },
] as const;

export const COMPANY_LINKS = [
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

export const LEGAL_LINKS = [
  { href: '/privacy-policy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms of Use' },
  { href: '/affiliate-disclosure/', label: 'Affiliate Disclosure' },
] as const;

/**
 * Static (non-blog) pages for the XML sitemap.
 * `lastmod` is the date the page content last changed in a meaningful way.
 */
export const STATIC_PAGES: Array<{
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  image?: string;
}> = [
  { path: '/', lastmod: '2026-10-09', changefreq: 'weekly', priority: '1.0', image: '/images/hero-collage.webp' },
  { path: '/ai-fanfiction-generator/', lastmod: '2026-07-10', changefreq: 'weekly', priority: '0.9', image: '/images/story-worlds-wide.webp' },
  { path: '/ai-erotic-story-generator/', lastmod: '2026-07-11', changefreq: 'weekly', priority: '0.9' },
  { path: '/ai-femdom-story-generator/', lastmod: '2026-07-11', changefreq: 'weekly', priority: '0.9' },
  { path: '/ai-pegging-story-generator/', lastmod: '2026-07-11', changefreq: 'weekly', priority: '0.9' },
  { path: '/ai-cuckold-story-generator/', lastmod: '2026-07-11', changefreq: 'weekly', priority: '0.9' },
  { path: '/about/', lastmod: '2026-10-09', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact/', lastmod: '2026-10-09', changefreq: 'yearly', priority: '0.4' },
  { path: '/privacy-policy/', lastmod: '2026-10-09', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms/', lastmod: '2026-10-09', changefreq: 'yearly', priority: '0.3' },
  { path: '/affiliate-disclosure/', lastmod: '2026-10-09', changefreq: 'yearly', priority: '0.3' },
];

/** Absolute URL on the canonical host for a site-relative path (or pass-through for full URLs). */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return SITE.url + (path.startsWith('/') ? path : `/${path}`);
}

/** JSON-LD is embedded in a <script>; escape `<` so content can never close the tag. */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
