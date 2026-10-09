'use client';

import { useEffect, useState } from 'react';

/** Canonical cross-site link set — used by the nav and referenced by every footer. */
export const SITE_LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/ai-fanfiction-generator/', label: 'AI Fanfiction', key: 'fanfiction' },
  { href: '/ai-erotic-story-generator/', label: 'Erotic', key: 'erotic' },
  { href: '/ai-femdom-story-generator/', label: 'Femdom', key: 'femdom' },
  { href: '/ai-pegging-story-generator/', label: 'Pegging', key: 'pegging' },
  { href: '/ai-cuckold-story-generator/', label: 'Cuckold', key: 'cuckold' },
  { href: '/blog/', label: 'Blog', key: 'blog' },
];

/**
 * Shared sticky site nav for the generator landing pages.
 * Structure is fixed (brand, cross-links, CTA, mobile toggle); each page's
 * route-scoped CSS styles `.site-header`/`.nav`/`.nav-links`/... to its own design.
 */
export default function SiteNav({
  current,
  ctaText = 'Generate Free',
}: {
  current?: string;
  ctaText?: string;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <a className="brand" href="/" aria-label="My Spicy Vanilla home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo"
            src="/images/logo.png"
            alt="My Spicy Vanilla"
            width={154}
            height={42}
          />
        </a>
        <nav
          className={`nav-links${open ? ' open' : ''}`}
          id="navLinks"
          aria-label="Primary navigation"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === 'A') setOpen(false);
          }}
        >
          {SITE_LINKS.map((l) => (
            <a key={l.key} href={l.href} aria-current={l.key === current ? 'page' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="btn btn-primary nav-cta"
        >
          {ctaText}
        </button>
        <button
          className="menu-toggle"
          id="menuToggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
