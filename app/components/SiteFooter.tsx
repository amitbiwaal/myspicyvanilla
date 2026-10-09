import FooterYear from './FooterYear';
import { COMPANY_LINKS, GENERATOR_LINKS, LEGAL_LINKS } from '@/lib/site';

/** Full footer for the content pages (blog, about, contact, legal). Styled by home.css + site.css. */
export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="brand" href="/" aria-label="My Spicy Vanilla home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="brand-logo footer-logo"
                src="/images/logo.png"
                alt="My Spicy Vanilla"
                width={154}
                height={42}
                loading="lazy"
              />
            </a>
            <p className="footer-tagline">
              Personalized, illustrated stories for couples. Fictional, consent-first and for adults 18+ only.
            </p>
          </div>
          <nav aria-label="Story generators">
            <h4>Generators</h4>
            <ul>
              {GENERATOR_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Site">
            <h4>Site</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Legal">
            <h4>Legal</h4>
            <ul>
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; <FooterYear /> My Spicy Vanilla. All rights reserved. All characters are fictional and 18+.{' '}
            <span className="age-badge">18+ Adults Only</span>
          </p>
          <p className="disclosure-mini">
            <strong>Affiliate disclosure:</strong> This site contains affiliate links. If you sign up through them, we
            may earn a commission at no extra cost to you. <a href="/affiliate-disclosure/">Learn more</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
