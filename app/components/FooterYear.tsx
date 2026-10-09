'use client';

import { useEffect, useState } from 'react';

/** Mirrors: document.getElementById('year').textContent = new Date().getFullYear() */
export default function FooterYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span id="year">{year}</span>;
}
