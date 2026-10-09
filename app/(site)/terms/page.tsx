import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Use',
  description:
    'The terms for using myspicyvanilla.net: adults-only access, how our content and affiliate links work, and the limits of our responsibility.',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <>
      <header className="page-hero narrow">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Terms of Use', path: '/terms/' },
            ]}
          />
          <h1>Terms of Use</h1>
          <p className="updated">
            Last updated: <time dateTime="2026-10-09">October 9, 2026</time>
          </p>
        </div>
      </header>

      <section className="legal" aria-label="Terms of use">
        <div className="wrap">
          <div className="prose">
            <p>
              These terms apply to your use of myspicyvanilla.net (&quot;this site&quot;). By using this site you
              agree to them. If you do not agree, please do not use the site.
            </p>

            <h2>1. Adults only</h2>
            <p>
              This site discusses romance and erotic fiction and is intended only for adults. You must be at least 18
              years old, or the age of majority where you live if that is higher, to use it. If viewing this kind of
              material is not legal where you are, please leave the site.
            </p>

            <h2>2. What this site is</h2>
            <p>
              This site provides information and guides about My Spicy Vanilla and about sensual fiction in general.
              It is not the My Spicy Vanilla app. Accounts, story generation and payments take place on the official
              My Spicy Vanilla website and are governed by that website&apos;s own terms and privacy policy.
            </p>

            <h2>3. Affiliate relationship</h2>
            <p>
              Some links on this site are affiliate links. If you sign up through one, we may earn a commission at no
              extra cost to you. Full details are in our <a href="/affiliate-disclosure/">affiliate disclosure</a>.
            </p>

            <h2>4. Fiction and general information</h2>
            <p>
              Everything described on this site is fiction or general information. All characters referred to are
              fictional adults. Nothing here is medical, psychological, legal or relationship advice. If you need
              that kind of help, please speak to a qualified professional.
            </p>

            <h2>5. Acceptable use</h2>
            <p>When using this site you agree not to:</p>
            <ul>
              <li>use it if you are under 18;</li>
              <li>copy, scrape or republish its content at scale without permission;</li>
              <li>attempt to disrupt, damage or gain unauthorized access to the site;</li>
              <li>use it for anything unlawful.</li>
            </ul>

            <h2>6. Intellectual property</h2>
            <p>
              The text, design, images and logos on this site belong to us or to the relevant rights holders and are
              protected by law. You may share links to our pages and quote short passages with credit. Anything more
              than that needs our written permission.
            </p>

            <h2>7. Links to other websites</h2>
            <p>
              This site links to other websites, including the official My Spicy Vanilla website. We do not control
              those websites and are not responsible for their content, products or practices.
            </p>

            <h2>8. No warranties</h2>
            <p>
              This site is provided &quot;as is&quot;. We work to keep it accurate and available, but we do not
              promise that it will always be error-free, complete or up to date. Features, pricing and availability
              of the My Spicy Vanilla service can change, so please check the official website for current details.
            </p>

            <h2>9. Limitation of liability</h2>
            <p>
              To the fullest extent allowed by law, we are not liable for any indirect or consequential loss arising
              from your use of this site or of any website we link to. Nothing in these terms limits liability that
              cannot be limited by law.
            </p>

            <h2>10. Changes</h2>
            <p>
              We may update these terms from time to time. The date at the top of the page shows the latest version.
              Continuing to use the site after a change means you accept the updated terms.
            </p>

            <h2>11. Contact</h2>
            <p>
              Questions about these terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or visit our{' '}
              <a href="/contact/">contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
