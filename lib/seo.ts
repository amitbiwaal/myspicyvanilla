import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site';

type PageSeo = {
  /** Page title. The "| My Spicy Vanilla" suffix is added unless `absoluteTitle` is set. */
  title: string;
  description: string;
  /** Site-relative path with trailing slash, e.g. "/about/". */
  path: string;
  absoluteTitle?: boolean;
  /** Social share image. Defaults to the site-wide 1200x630 card. */
  image?: { url: string; width?: number | null; height?: number | null };
  type?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
};

/** One place that builds canonical, robots, Open Graph and Twitter tags for a content page. */
export function pageMetadata(seo: PageSeo): Metadata {
  const url = absoluteUrl(seo.path);
  const share = seo.image?.url ? seo.image : { url: SITE.defaultOgImage, width: 1200, height: 630 };
  const image = absoluteUrl(share.url);
  const fullTitle = seo.absoluteTitle ? seo.title : `${seo.title} | ${SITE.name}`;

  return {
    title: seo.absoluteTitle ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
      types: { 'application/rss+xml': [{ url: absoluteUrl('/feed.xml'), title: SITE.blogTitle }] },
    },
    robots: seo.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    openGraph: {
      title: fullTitle,
      description: seo.description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [
        share.width && share.height ? { url: image, width: share.width, height: share.height } : { url: image },
      ],
      ...(seo.type === 'article'
        ? {
            type: 'article' as const,
            publishedTime: seo.publishedTime,
            modifiedTime: seo.modifiedTime,
            authors: seo.authors,
            tags: seo.tags,
          }
        : { type: 'website' as const }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: seo.description,
      images: [image],
    },
    other: { rating: 'adult' },
  };
}
