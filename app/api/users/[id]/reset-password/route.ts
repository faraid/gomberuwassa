import { NextRequest, NextResponse } from 'next/server';
import { withErrorHandler, errorResponse } from '@/lib/api';
import { getSessionId } from '@/lib/auth';
import { getSession } from '@/lib/services/auth.service';
import { adminResetPassword } from '@/lib/services/users.service';
import { resetPasswordSchema } from '@/lib/validation/schemas/user.schema';
import { Role } from '@/generated/prisma';

type Ctx = { params: Promise<Record<string, string>> };

export const POST = withErrorHandler(async (req: NextRequest, ctx: Ctx) => {
  const sessionId = await getSessionId(req);
  if (!sessionId) return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);
  const session = await getSession(sessionId);
  if (!session) return errorResponse('UNAUTHENTICATED', 'Session expired.', 401);
  if (session.role !== Role.Super_Admin) return errorResponse('FORBIDDEN', 'Super_Admin only.', 403);

  const { id } = await ctx.params;
  const body = await req.json();
  const { newPassword } = resetPasswordSchema.parse(body);

  await adminResetPassword(id, newPassword);

  return NextResponse.json({ data: { message: 'Password reset successfully.' } });
});
