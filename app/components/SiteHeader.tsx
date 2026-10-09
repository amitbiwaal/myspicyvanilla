'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { GENERATOR_LINKS } from '@/lib/site';

/**
 * Sticky header for the content pages (blog, about, contact, legal).
 * Same structure/classes as the homepage header so home.css styles it; adds a
 * "Generators" dropdown that becomes a plain link list inside the mobile menu.
 */
export default function SiteHeader() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!dropOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [dropOpen]);

  const current = (href: string) =>
    (href === '/' ? pathname === '/' : pathname.startsWith(href.replace(/\/$/, ''))) ? 'page' : undefined;

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
            if ((e.target as HTMLElement).tagName === 'A') {
              setOpen(false);
              setDropOpen(false);
            }
          }}
        >
          <a href="/" aria-current={current('/')}>
            Home
          </a>
          <div className="nav-drop" ref={dropRef}>
            <button
              type="button"
              className="nav-drop-btn"
              aria-expanded={dropOpen}
              aria-controls="generatorMenu"
              onClick={() => setDropOpen((v) => !v)}
            >
              Generators
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`nav-drop-menu${dropOpen ? ' open' : ''}`} id="generatorMenu">
              {GENERATOR_LINKS.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <a href="/blog/" aria-current={current('/blog/')}>
            Blog
          </a>
          <a href="/about/" aria-current={current('/about/')}>
            About
          </a>
          <a href="/contact/" aria-current={current('/contact/')}>
            Contact
          </a>
        </nav>
        <a className="btn btn-primary nav-cta" href="/">
          Start a Story
        </a>
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
