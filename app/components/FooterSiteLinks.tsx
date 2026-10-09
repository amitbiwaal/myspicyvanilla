import { COMPANY_LINKS, LEGAL_LINKS } from '@/lib/site';

/** Blog, company and legal links appended to each landing page's footer nav. */
export default function FooterSiteLinks() {
  return (
    <>
      {[...COMPANY_LINKS, ...LEGAL_LINKS].map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </>
  );
}
