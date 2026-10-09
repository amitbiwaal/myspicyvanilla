'use client';

import { useState } from 'react';

export default function LoginForm({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Could not sign in.');
        setBusy(false);
        return;
      }
      window.location.href = '/admin/';
    } catch {
      setError('Could not reach the server. Please try again.');
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {!configured ? (
        <div className="adm-msg err" role="alert">
          No admin password is set. Add ADMIN_PASSWORD and ADMIN_SECRET to the site's environment variables.
        </div>
      ) : null}
      {error ? (
        <div className="adm-msg err" role="alert">
          {error}
        </div>
      ) : null}
      <div className="adm-field">
        <label htmlFor="admin-password">Password</label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          required
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="adm-btn primary" disabled={busy || !configured}>
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
