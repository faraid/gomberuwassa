import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/services/auth.service';
import { getSessionId } from '@/lib/auth';
import { withErrorHandler, errorResponse } from '@/lib/api';

export const GET = withErrorHandler(async (req: NextRequest) => {
  const sessionId = await getSessionId(req);

  if (!sessionId) {
    return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);
  }

  const session = await getSession(sessionId);

  if (!session) {
    return errorResponse('UNAUTHENTICATED', 'Session expired or invalid.', 401);
  }

  return NextResponse.json(
    {
      data: {
        userId: session.userId,
        fullName: session.fullName,
        email: session.email,
        role: session.role,
      },
    },
    { status: 200 },
  );
});
