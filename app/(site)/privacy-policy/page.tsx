import type { Metadata } from 'next';
import Breadcrumbs from '../../components/Breadcrumbs';
import { pageMetadata } from '@/lib/seo';
import { SITE } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How myspicyvanilla.net handles your information: what this website collects, what it does not, and how affiliate links and third-party services work.',
  path: '/privacy-policy/',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="page-hero narrow">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Privacy Policy', path: '/privacy-policy/' },
            ]}
          />
          <h1>Privacy Policy</h1>
          <p className="updated">
            Last updated: <time dateTime="2026-10-09">October 9, 2026</time>
          </p>
        </div>
      </header>

      <section className="legal" aria-label="Privacy policy">
        <div className="wrap">
          <div className="prose">
            <div className="note">
              <p>
                <strong>The short version:</strong> this website has no accounts, no comment forms and no
                advertising trackers. We do not ask for or store personal information when you read it.
              </p>
            </div>

            <h2>Who this policy covers</h2>
            <p>
              This policy applies to myspicyvanilla.net (&quot;this site&quot;, &quot;we&quot;, &quot;us&quot;). This
              site is an informational and affiliate website about My Spicy Vanilla. It does not apply to the
              official My Spicy Vanilla app, where accounts, generated stories and payments are handled. That
              service has its own privacy policy, which you should read before signing up.
            </p>

            <h2>Information we collect</h2>
            <h3>Information you give us</h3>
            <p>
              We only receive personal information when you choose to email us. In that case we receive your email
              address and whatever you write in your message. The contact form on this site opens your own email app.
              It does not send or store anything on our servers.
            </p>
            <h3>Information collected automatically</h3>
            <p>
              Like almost every website, our hosting provider keeps standard server logs. These can include your IP
              address, browser type, the pages requested and the time of the request. Logs are used to keep the site
              secure and working, and are not used to identify individual readers.
            </p>

            <h2>Cookies and tracking</h2>
            <p>
              This site does not set advertising cookies and does not currently run analytics or tracking scripts. If
              that ever changes, we will update this policy before the change takes effect.
            </p>

            <h2>Third-party services</h2>
            <ul>
              <li>
                <strong>Web fonts.</strong> Pages load fonts from Google Fonts. Your browser connects to Google&apos;s
                servers to fetch them, which shares your IP address with Google.
              </li>
              <li>
                <strong>Affiliate links.</strong> Some links take you to the official My Spicy Vanilla website. When
                you follow one, that website or its affiliate platform may use cookies to record that you arrived
                from us. What happens on that site is governed by its own privacy policy. See our{' '}
                <a href="/affiliate-disclosure/">affiliate disclosure</a>.
              </li>
              <li>
                <strong>Hosting.</strong> The site is served by a third-party hosting provider, which processes the
                server logs described above on our behalf.
              </li>
            </ul>

            <h2>How we use information</h2>
            <p>We use the limited information described above to:</p>
            <ul>
              <li>reply to messages you send us;</li>
              <li>keep the site secure and diagnose technical problems;</li>
              <li>understand, in aggregate, whether the site is working as intended.</li>
            </ul>
            <p>We do not sell personal information and we do not build advertising profiles.</p>

            <h2>How long we keep it</h2>
            <p>
              Emails are kept only as long as needed to deal with your request and for reasonable record keeping.
              Server logs are retained by our hosting provider for a limited period according to its own retention
              schedule.
            </p>

            <h2>Adults only</h2>
            <p>
              This site is intended for adults aged 18 and over. We do not knowingly collect information from anyone
              under 18. If you believe a minor has contacted us, please let us know and we will delete the message.
            </p>

            <h2>Your choices and rights</h2>
            <p>
              Depending on where you live, you may have the right to ask what personal information we hold about you
              and to have it corrected or deleted. Because we hold so little, the simplest way to exercise any of
              these rights is to email us and we will respond.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of the page shows when it was last
              revised.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or visit our{' '}
              <a href="/contact/">contact page</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
