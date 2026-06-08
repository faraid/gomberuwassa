import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const SESSION_COOKIE_NAME = 'sid';
// 60-minute idle timeout in seconds
const SESSION_MAX_AGE = 60 * 60;

/**
 * Read the session ID from the request cookie.
 * Works in both Route Handlers (NextRequest) and Server Components (next/headers).
 */
export async function getSessionId(
  req?: NextRequest,
): Promise<string | undefined> {
  if (req) {
    return req.cookies.get(SESSION_COOKIE_NAME)?.value;
  }
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value;
}

/**
 * Attach the session cookie to a NextResponse.
 * HttpOnly + SameSite=Lax always; Secure only in production.
 */
export function setSessionCookie(res: NextResponse, sessionId: string): void {
  res.cookies.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });
}

/**
 * Clear the session cookie on a NextResponse.
 */
export function clearSessionCookie(res: NextResponse): void {
  res.cookies.set(SESSION_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}
