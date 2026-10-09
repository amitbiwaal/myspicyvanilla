import sanitizeHtml from 'sanitize-html';
import { SITE } from './site';

const siteHost = new URL(SITE.url).host;

function isExternal(href: string): boolean {
  try {
    const url = new URL(href, SITE.url);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    return url.host !== siteHost && url.host !== `www.${siteHost}`;
  } catch {
    return false;
  }
}

/**
 * Clean editor HTML before it is stored. Only the tags the editor can produce survive;
 * external links are forced to open safely in a new tab (keeping nofollow/sponsored if the
 * author set them) and images are lazy-loaded.
 */
export function sanitizeContent(dirty: string): string {
  const clean = sanitizeHtml(dirty, {
    allowedTags: [
      'h2', 'h3', 'h4', 'p', 'br', 'strong', 'em', 'u', 's', 'a',
      'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'hr', 'img',
    ],
    allowedAttributes: {
      a: ['href', 'rel', 'target', 'title'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading', 'decoding'],
      ol: ['start'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowedSchemesByTag: { img: ['http', 'https'] },
    allowProtocolRelative: false,
    // An image whose address was stripped (e.g. a pasted data: URI) is just an empty box; drop it.
    exclusiveFilter: (frame) => frame.tag === 'img' && !frame.attribs.src,
    transformTags: {
      h1: 'h2',
      b: 'strong',
      i: 'em',
      a: (_tagName, attribs) => {
        const href = (attribs.href || '').trim();
        const out: Record<string, string> = { href };
        if (attribs.title) out.title = attribs.title;
        if (isExternal(href)) {
          const keep = (attribs.rel || '')
            .split(/\s+/)
            .filter((token) => ['nofollow', 'sponsored', 'ugc'].includes(token));
          out.rel = [...keep, 'noopener', 'noreferrer'].join(' ');
          out.target = '_blank';
        }
        return { tagName: 'a', attribs: out };
      },
      img: (_tagName, attribs) => ({
        tagName: 'img',
        attribs: { ...attribs, alt: attribs.alt || '', loading: 'lazy', decoding: 'async' },
      }),
    },
  });

  // The editor always leaves an empty trailing paragraph; don't store it.
  return clean.replace(/(?:\s*<p>(?:\s|<br\s*\/?>)*<\/p>)+\s*$/g, '').trim();
}
