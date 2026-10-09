import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContactForm from '../../components/ContactForm';
import JsonLd from '../../components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { SITE, absoluteUrl } from '@/lib/site';

const DESCRIPTION =
  'Get in touch with the My Spicy Vanilla site team about our guides, partnerships or a problem with this website.';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description: DESCRIPTION,
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact My Spicy Vanilla',
          description: DESCRIPTION,
          url: absoluteUrl('/contact/'),
          inLanguage: SITE.language,
        }}
      />

      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Contact', path: '/contact/' },
            ]}
          />
          <span className="eyebrow">Contact</span>
          <h1>Contact Us</h1>
          <p className="lede">
            Questions about a guide, a correction, or a partnership idea? Send us a note and we will get back to you.
          </p>
        </div>
      </header>

      <section aria-label="Contact options">
        <div className="wrap contact-grid">
          <div className="contact-stack">
            <div className="card">
              <h2>Email us</h2>
              <p>The quickest way to reach the people who run this site.</p>
              <p>
                <a className="contact-email" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
            </div>
            <div className="card">
              <h2>Account, story or billing help</h2>
              <p>
                Accounts, generated stories and payments are handled on the official My Spicy Vanilla website, not
                here. For help with any of those, please contact support through the{' '}
                <a href={SITE.officialUrl} rel="noopener noreferrer" target="_blank">
                  official site
                </a>
                .
              </p>
            </div>
            <div className="card">
              <h2>Before you write</h2>
              <p>
                This site is for adults 18 and over. Please do not send personal stories, passwords or payment
                details by email. See our <a href="/privacy-policy/">privacy policy</a> for how we handle messages.
              </p>
            </div>
          </div>

          <div className="card">
            <h2>Send a message</h2>
            <ContactForm email={SITE.email} />
          </div>
        </div>
      </section>
    </>
  );
}
