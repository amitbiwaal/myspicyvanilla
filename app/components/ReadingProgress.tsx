'use client';

import { useEffect } from 'react';

/**
 * Reading-progress bar for the fanfiction page.
 * Renders the bar and updates its width based on scroll through `#top`,
 * mirroring the original vanilla-JS behaviour.
 */
export default function ReadingProgress() {
  useEffect(() => {
    const bar = document.getElementById('progress');
    const main = document.getElementById('top');
    if (!bar || !main) return;

    function update() {
      const total = main!.offsetHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY - main!.offsetTop) / total : 0;
      bar!.style.width = Math.max(0, Math.min(1, pct)) * 100 + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="progress" id="progress" aria-hidden="true" />;
}
