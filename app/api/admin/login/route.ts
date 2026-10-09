import { NextResponse } from 'next/server';
import {
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  adminConfigured,
  checkPassword,
  clearLoginFailures,
  clientAddress,
  createSessionToken,
  loginBlocked,
  recordLoginFailure,
  sameOrigin,
  sessionCookieOptions,
} from '@/lib/auth';

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: 'Cross-site request blocked.' }, { status: 403 });
  }
  if (!adminConfigured()) {
    return NextResponse.json(
      { error: 'No admin password is set. Add ADMIN_PASSWORD and ADMIN_SECRET to the environment variables.' },
      { status: 500 },
    );
  }

  const client = clientAddress(request);
  if (await loginBlocked(client)) {
    return NextResponse.json({ error: 'Too many attempts. Please wait a few minutes.' }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const password = typeof body?.password === 'string' ? body.password : '';
  if (!checkPassword(password)) {
    await recordLoginFailure(client);
    // A short pause makes automated guessing slower without bothering a real person.
    await new Promise((resolve) => setTimeout(resolve, 400));
    return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
  }

  await clearLoginFailures(client);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, createSessionToken(), sessionCookieOptions(SESSION_MAX_AGE));
  return response;
}
