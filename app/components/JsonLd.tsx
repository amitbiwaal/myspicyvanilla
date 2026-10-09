import { jsonLdString } from '@/lib/site';

/** Structured data block. Accepts one schema.org object or several. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(item) }} />
      ))}
    </>
  );
}
