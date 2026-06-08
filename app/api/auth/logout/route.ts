import { NextRequest, NextResponse } from 'next/server';
import { logout } from '@/lib/services/auth.service';
import { getSessionId, clearSessionCookie } from '@/lib/auth';
import { withErrorHandler } from '@/lib/api';

export const POST = withErrorHandler(async (req: NextRequest) => {
  const sessionId = await getSessionId(req);

  if (sessionId) {
    await logout(sessionId);
  }

  const res = NextResponse.json({ data: { message: 'Logged out.' } }, { status: 200 });
  clearSessionCookie(res);
  return res;
});
