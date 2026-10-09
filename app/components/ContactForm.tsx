'use client';

import { useState } from 'react';

const TOPICS = ['General question', 'Feedback on an article', 'Partnership or press', 'Report a problem with this site'];

/**
 * The site is static (no server), so this form composes an email in the visitor's own
 * mail app instead of posting anywhere. Nothing typed here is sent to or stored by the site.
 */
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `${topic}${name ? ` from ${name}` : ''}`;
    const body = `${message}\n\n${name ? `— ${name}` : ''}`.trim();
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="contact-topic">Topic</label>
        <select id="contact-topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Open in My Email App
      </button>
      <p className="hint">
        This opens a ready-to-send email in your own mail app. Nothing you type here is stored on this site.
      </p>
    </form>
  );
}
