'use client';

import { useEffect } from 'react';

/**
 * Animated stat counters for `.n[data-count]` elements.
 * Supports data-count, data-suffix and data-divide (used across both pages).
 */
export default function StatCounters({ duration = 1600 }: { duration?: number }) {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.n[data-count]');
    if (!counters.length) return;

    function format(n: number, suffix: string, divide: number) {
      let v = divide ? n / divide : n;
      v = v % 1 === 0 ? v : Math.round(v * 10) / 10;
      return v + (suffix || '');
    }

    function run(el: HTMLElement) {
      const target = +(el.getAttribute('data-count') || '0');
      const suffix = el.getAttribute('data-suffix') || '';
      const divide = +(el.getAttribute('data-divide') || '0') || 1;
      let start: number | null = null;
      const dur = duration;
      function step(ts: number) {
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = format(Math.floor(eased * target), suffix, divide);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = format(target, suffix, divide);
      }
      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(run);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            run(en.target as HTMLElement);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [duration]);

  return null;
}
