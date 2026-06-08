import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { requestPasswordReset } from '@/lib/services/auth.service';
import { withErrorHandler } from '@/lib/api';

const requestSchema = z.object({
  email: z.string().trim().email('Invalid email address.'),
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();
  const { email } = requestSchema.parse(body);

  // Always succeeds from the client's perspective to prevent user enumeration
  await requestPasswordReset(email);

  return NextResponse.json(
    {
      data: {
        message:
          'If that email address is registered, a reset link has been sent.',
      },
    },
    { status: 200 },
  );
});
