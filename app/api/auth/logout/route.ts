import { NextRequest, NextResponse } from 'next/server';
import { logout } from '@/lib/services/auth.service';
import { getSessionId, clearSessionCookie } from '@/lib/auth';
import { withErrorHandler } from '@/lib/api';

/**
 * POST /api/auth/logout
 * Used by the sidebar sign-out button (fetch call).
 */
export const POST = withErrorHandler(async (req: NextRequest) => {
  const sessionId = await getSessionId(req);

  if (sessionId) {
    await logout(sessionId);
  }

  const res = NextResponse.json(
    { data: { message: 'Logged out.' } },
    { status: 200 },
  );
  clearSessionCookie(res);
  return res;
});

/**
 * GET /api/auth/logout
 * Used by the admin layout when a session cookie exists but the session is
 * invalid/expired. Clears the cookie and redirects to /admin/login so the
 * browser drops the stale cookie before the middleware sees it again.
 */
export const GET = withErrorHandler(async (req: NextRequest) => {
  const sessionId = await getSessionId(req);

  if (sessionId) {
    // Best-effort DB cleanup — ignore errors (session may already be gone)
    try {
      await logout(sessionId);
    } catch {
      // silent
    }
  }

  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = '/admin/login';
  loginUrl.search = '';

  const res = NextResponse.redirect(loginUrl, { status: 302 });
  clearSessionCookie(res);
  return res;
});
