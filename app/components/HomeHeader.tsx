'use client';

import { useEffect, useState } from 'react';

/**
 * Homepage sticky header: brand, primary nav, CTA and mobile menu toggle.
 * Ports the original mobile-menu toggle and the sticky-header scroll shadow.
 */
export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav">
        <a className="brand" href="#top" aria-label="My Spicy Vanilla home">
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
            if ((e.target as HTMLElement).tagName === 'A') closeMenu();
          }}
        >
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#genres">Genres</a>
          <a href="/ai-fanfiction-generator/">AI Fanfiction</a>
          <a href="/blog/">Blog</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button
          type="button"
          className="btn btn-primary nav-cta"
        >
          Generate Free
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
