import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { db } from './db';

/**
 * Session auth for the admin panel. Credentials come from environment variables
 * (ADMIN_PASSWORD and ADMIN_SECRET): set them in the Vercel project, and in .env.local for local use.
 */
export const SESSION_COOKIE = 'msv_admin';
export const SESSION_MAX_AGE = 60 * 60 * 12; // 12 hours

export function adminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SECRET);
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', process.env.ADMIN_SECRET || '').update(payload).digest('hex');
}

export function createSessionToken(): string {
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_MAX_AGE);
  return `${expires}.${sign(expires)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token || !adminConfigured()) return false;
  const [expires, signature] = token.split('.');
  if (!expires || !signature) return false;
  const expected = Buffer.from(sign(expires));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !crypto.timingSafeEqual(expected, given)) return false;
  return Number(expires) > Date.now() / 1000;
}

export function checkPassword(candidate: string): boolean {
  const real = process.env.ADMIN_PASSWORD || '';
  if (!real) return false;
  const a = crypto.createHash('sha256').update(candidate).digest();
  const b = crypto.createHash('sha256').update(real).digest();
  return crypto.timingSafeEqual(a, b);
}

export async function isAuthed(): Promise<boolean> {
  return verifySessionToken((await cookies()).get(SESSION_COOKIE)?.value);
}

/** Options for the session cookie. `Secure` is skipped on http://localhost during development. */
export function sessionCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    sameSite: 'strict' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge,
  };
}

/** Reject requests that a different website made the browser send (CSRF). */
export function sameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const host = request.headers.get('host');
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

/** For admin API routes: returns an error response when the request is not allowed, else null. */
export async function guard(request: Request): Promise<Response | null> {
  if (request.method !== 'GET' && !sameOrigin(request)) {
    return Response.json({ error: 'Cross-site request blocked.' }, { status: 403 });
  }
  if (!(await isAuthed())) {
    return Response.json({ error: 'Your session has expired. Please sign in again.' }, { status: 401 });
  }
  return null;
}

// ---------- Sign-in throttling (stored in the database so it holds across serverless instances) ----------

const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;

/** Best available client address. Vercel sets these headers itself, so visitors cannot forge them. */
export function clientAddress(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return (request.headers.get('x-real-ip') || forwarded || 'local').slice(0, 64);
}

/** True when this client has used up its failed sign-in attempts for the current window. */
export async function loginBlocked(client: string): Promise<boolean> {
  const database = await db();
  const result = await database.execute({
    sql: 'SELECT count, window_start FROM login_attempts WHERE client = ?',
    args: [client],
  });
  const row = result.rows[0];
  if (!row) return false;
  if (Date.now() - Number(row.window_start) > WINDOW_MS) {
    await clearLoginFailures(client);
    return false;
  }
  return Number(row.count) >= MAX_ATTEMPTS;
}

export async function recordLoginFailure(client: string): Promise<void> {
  const database = await db();
  await database.execute({
    sql: `INSERT INTO login_attempts (client, count, window_start) VALUES (?, 1, ?)
          ON CONFLICT(client) DO UPDATE SET count = count + 1`,
    args: [client, Date.now()],
  });
}

export async function clearLoginFailures(client: string): Promise<void> {
  const database = await db();
  await database.execute({ sql: 'DELETE FROM login_attempts WHERE client = ?', args: [client] });
}
