import { NextRequest, NextResponse } from 'next/server';
import { withErrorHandler, errorResponse } from '@/lib/api';
import { getSessionId } from '@/lib/auth';
import { getSession } from '@/lib/services/auth.service';
import {
  getUserById,
  updateUser,
  activateUser,
  deactivateUser,
} from '@/lib/services/users.service';
import { updateUserSchema } from '@/lib/validation/schemas/user.schema';
import { Role } from '@/generated/prisma';

type Ctx = { params: Promise<Record<string, string>> };

export const GET = withErrorHandler(async (req: NextRequest, ctx: Ctx) => {
  const sessionId = await getSessionId(req);
  if (!sessionId) return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);
  const session = await getSession(sessionId);
  if (!session) return errorResponse('UNAUTHENTICATED', 'Session expired.', 401);
  if (session.role !== Role.Super_Admin) return errorResponse('FORBIDDEN', 'Super_Admin only.', 403);

  const { id } = await ctx.params;
  const user = await getUserById(id);
  if (!user) return errorResponse('NOT_FOUND', 'User not found.', 404);

  return NextResponse.json({ data: user });
});

export const PUT = withErrorHandler(async (req: NextRequest, ctx: Ctx) => {
  const sessionId = await getSessionId(req);
  if (!sessionId) return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);
  const session = await getSession(sessionId);
  if (!session) return errorResponse('UNAUTHENTICATED', 'Session expired.', 401);
  if (session.role !== Role.Super_Admin) return errorResponse('FORBIDDEN', 'Super_Admin only.', 403);

  const { id } = await ctx.params;
  const body = await req.json();
  const data = updateUserSchema.parse(body);

  const user = await updateUser(id, {
    fullName: data.fullName,
    role: data.role as Role | undefined,
  });

  return NextResponse.json({ data: user });
});

export const DELETE = withErrorHandler(async (req: NextRequest, ctx: Ctx) => {
  const sessionId = await getSessionId(req);
  if (!sessionId) return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);
  const session = await getSession(sessionId);
  if (!session) return errorResponse('UNAUTHENTICATED', 'Session expired.', 401);
  if (session.role !== Role.Super_Admin) return errorResponse('FORBIDDEN', 'Super_Admin only.', 403);

  const { id } = await ctx.params;

  // Determine action from query param: ?action=deactivate|activate
  const action = req.nextUrl.searchParams.get('action') ?? 'deactivate';

  try {
    if (action === 'activate') {
      await activateUser(id);
    } else {
      await deactivateUser(id);
    }
  } catch (err) {
    if (err instanceof Error && err.message === 'LAST_SUPER_ADMIN') {
      return errorResponse('CONFLICT', 'Cannot deactivate the last Super_Admin account.', 409);
    }
    throw err;
  }

  return NextResponse.json({ data: { success: true } });
});
