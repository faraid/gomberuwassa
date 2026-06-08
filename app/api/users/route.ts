import { NextRequest, NextResponse } from 'next/server';
import { withErrorHandler, errorResponse } from '@/lib/api';
import { getSessionId } from '@/lib/auth';
import { getSession } from '@/lib/services/auth.service';
import { createUser, listUsers } from '@/lib/services/users.service';
import { createUserSchema } from '@/lib/validation/schemas/user.schema';
import { Role } from '@/generated/prisma';

export const GET = withErrorHandler(async (req: NextRequest) => {
  const sessionId = await getSessionId(req);
  if (!sessionId) return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);

  const session = await getSession(sessionId);
  if (!session) return errorResponse('UNAUTHENTICATED', 'Session expired.', 401);
  if (session.role !== Role.Super_Admin) return errorResponse('FORBIDDEN', 'Super_Admin only.', 403);

  const users = await listUsers();
  return NextResponse.json({ data: users }, { status: 200 });
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const sessionId = await getSessionId(req);
  if (!sessionId) return errorResponse('UNAUTHENTICATED', 'Not authenticated.', 401);

  const session = await getSession(sessionId);
  if (!session) return errorResponse('UNAUTHENTICATED', 'Session expired.', 401);
  if (session.role !== Role.Super_Admin) return errorResponse('FORBIDDEN', 'Super_Admin only.', 403);

  const body = await req.json();
  const data = createUserSchema.parse(body);

  const user = await createUser({
    fullName: data.fullName,
    email: data.email,
    password: data.password,
    role: data.role as Role,
    createdById: session.userId,
  });

  return NextResponse.json({ data: user }, { status: 201 });
});
