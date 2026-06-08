import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { resetPassword } from '@/lib/services/auth.service';
import { withErrorHandler, errorResponse } from '@/lib/api';

const confirmSchema = z.object({
  token: z.string().min(1, 'Token is required.'),
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password must be at most 128 characters.'),
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { token, newPassword } = confirmSchema.parse(body);

  const result = await resetPassword(token, newPassword);

  if (!result.ok) {
    const status = result.code === 'EXPIRED_TOKEN' ? 410 : 400;
    return errorResponse(result.code, result.message, status);
  }

  return NextResponse.json(
    { data: { message: 'Password has been reset successfully. Please log in.' } },
    { status: 200 },
  );
});
