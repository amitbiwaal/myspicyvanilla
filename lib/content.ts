import { slugify, stripHtml } from './post-types';

export type TocItem = { id: string; text: string; level: 2 | 3 };

/**
 * Prepare stored post HTML for display: give every H2/H3 a stable id (for the table of
 * contents and deep links) and collect the outline. Stored HTML is already sanitized,
 * so headings carry no attributes.
 */
export function renderContent(html: string): { html: string; toc: TocItem[] } {
  const used = new Set<string>();
  const toc: TocItem[] = [];

  const out = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_match, level: string, inner: string) => {
    const text = stripHtml(inner);
    const base = slugify(text) || 'section';
    let id = base;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    toc.push({ id, text, level: Number(level) as 2 | 3 });
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });

  return { html: out, toc };
}
