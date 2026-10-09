'use client';

import { useState } from 'react';

/**
 * Fanfiction page sticky header: brand, primary nav, CTA and mobile menu toggle.
 * Ports the original mobile-menu toggle behaviour.
 */
export default function FanficHeader() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="shell nav">
        <a className="brand" href="/" aria-label="My Spicy Vanilla home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-img"
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
          <a href="/">Home</a>
          <a href="#top" aria-current="page">
            AI Fanfiction
          </a>
          <a href="#c-how">How It Works</a>
          <a href="#c-tropes">Tropes</a>
          <a href="#c-faq">FAQ</a>
          <a href="/blog/">Blog</a>
        </nav>
        <button
          type="button"
          className="btn btn-primary nav-cta"
        >
          Write Free
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
