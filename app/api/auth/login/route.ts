import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { login } from '@/lib/services/auth.service';
import { setSessionCookie } from '@/lib/auth';
import { withErrorHandler, errorResponse } from '@/lib/api';

const loginSchema = z.object({
  email: z.string().trim().email('Invalid email address.'),
  password: z.string().min(1, 'Password is required.'),
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { email, password } = loginSchema.parse(body);

  const result = await login(email, password);

  if (!result.ok) {
    const status =
      result.code === 'ACCOUNT_LOCKED' || result.code === 'ACCOUNT_INACTIVE'
        ? 403
        : 401;
    return errorResponse(result.code, result.message, status);
  }

  const res = NextResponse.json(
    {
      data: {
        userId: result.session.userId,
        fullName: result.session.fullName,
        email: result.session.email,
        role: result.session.role,
      },
    },
    { status: 200 },
  );

  setSessionCookie(res, result.session.sessionId);
  return res;
});
