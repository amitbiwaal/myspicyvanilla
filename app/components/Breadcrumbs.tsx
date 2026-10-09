import JsonLd from './JsonLd';
import { absoluteUrl } from '@/lib/site';

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. The last item is the current page. */
export default function Breadcrumbs({ items, structuredData = true }: { items: Crumb[]; structuredData?: boolean }) {
  return (
    <>
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, i) => (
            <li key={item.path}>
              {i === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <a href={item.path}>{item.name}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {structuredData ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.name,
              item: absoluteUrl(item.path),
            })),
          }}
        />
      ) : null}
    </>
  );
}
