'use client';

import { useEffect, useState } from 'react';

/**
 * Timestamp in the viewer's own locale and time zone. Filled in after mount, because the
 * server would format it differently and React would report a hydration mismatch.
 */
export default function LocalTime({ iso, dateOnly = false }: { iso: string; dateOnly?: boolean }) {
  const [text, setText] = useState('');

  useEffect(() => {
    const date = new Date(iso);
    setText(dateOnly ? date.toLocaleDateString() : date.toLocaleString());
  }, [iso, dateOnly]);

  return <time dateTime={iso}>{text}</time>;
}
