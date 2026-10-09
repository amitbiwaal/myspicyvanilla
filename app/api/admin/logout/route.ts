import { NextResponse } from 'next/server';
import { SESSION_COOKIE, sameOrigin, sessionCookieOptions } from '@/lib/auth';

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ error: 'Cross-site request blocked.' }, { status: 403 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, '', sessionCookieOptions(0));
  return response;
}
