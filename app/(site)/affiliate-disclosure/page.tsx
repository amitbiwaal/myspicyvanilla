import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Affiliate Disclosure',
  description:
    'myspicyvanilla.net earns a commission when readers sign up to My Spicy Vanilla through our links. Here is exactly how that works.',
  path: '/affiliate-disclosure/',
});

export default function AffiliateDisclosurePage() {
  return (
    <>
      <header className="page-hero narrow">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Affiliate Disclosure', path: '/affiliate-disclosure/' },
            ]}
          />
          <h1>Affiliate Disclosure</h1>
          <p className="updated">
            Last updated: <time dateTime="2026-10-09">October 9, 2026</time>
          </p>
        </div>
      </header>

      <section className="legal" aria-label="Affiliate disclosure">
        <div className="wrap">
          <div className="prose">
            <div className="note">
              <p>
                <strong>In one sentence:</strong> if you sign up to My Spicy Vanilla after following a link on this
                site, we may be paid a commission, and it never costs you anything extra.
              </p>
            </div>

            <h2>How affiliate links work</h2>
            <p>
              myspicyvanilla.net is an affiliate partner of My Spicy Vanilla. Some buttons and links on this site
              take you to the official My Spicy Vanilla website using a tracking link. If you create an account or
              buy a plan after following one of those links, we may receive a commission from My Spicy Vanilla.
            </p>

            <h2>What it means for you</h2>
            <ul>
              <li>You pay the same price whether or not you use our link.</li>
              <li>You are never required to use our links to read anything on this site.</li>
              <li>We do not see your account, your stories or your payment details.</li>
            </ul>

            <h2>How we keep it honest</h2>
            <p>
              This site exists to explain and promote My Spicy Vanilla, and we want that to be obvious rather than
              hidden. Our guides are written to be useful on their own, and where we describe features, we describe
              them as accurately as we can. Features and pricing can change, so always check the official website for
              the latest details before you sign up.
            </p>

            <h2>How to spot an affiliate link</h2>
            <p>
              Buttons and links that invite you to start, write or generate a story on the official My Spicy Vanilla
              website should be treated as affiliate links. Links between pages on this site, such as links to our
              blog articles, are not affiliate links.
            </p>

            <h2>Questions</h2>
            <p>
              If anything here is unclear, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or visit our{' '}
              <a href="/contact/">contact page</a>. You can also read our <a href="/privacy-policy/">privacy policy</a>{' '}
              and <a href="/terms/">terms of use</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
