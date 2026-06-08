import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

// ─── Response helpers ─────────────────────────────────────────────────────────

export function ok<T>(data: T, status = 200): NextResponse {
  return NextResponse.json({ data }, { status });
}

export function created<T>(data: T): NextResponse {
  return NextResponse.json({ data }, { status: 201 });
}

export function errorResponse(
  code: string,
  message: string,
  status: number,
  fields?: Record<string, string[] | string>,
): NextResponse {
  return NextResponse.json({ error: { code, message, ...(fields ? { fields } : {}) } }, { status });
}

// ─── withErrorHandler HOF ─────────────────────────────────────────────────────

type RouteHandler = (
  req: NextRequest,
  ctx: { params: Promise<Record<string, string>> },
) => Promise<NextResponse | Response>;

export function withErrorHandler(handler: RouteHandler): RouteHandler {
  return async (req, ctx) => {
    try {
      return await handler(req, ctx);
    } catch (err) {
      if (err instanceof ZodError) {
        return NextResponse.json(
          {
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Validation failed.',
              fields: err.flatten().fieldErrors,
            },
          },
          { status: 422 },
        );
      }

      // Prisma unique constraint violation
      if (
        typeof err === 'object' &&
        err !== null &&
        'code' in err &&
        (err as { code: string }).code === 'P2002'
      ) {
        return NextResponse.json(
          { error: { code: 'CONFLICT', message: 'A record with that value already exists.' } },
          { status: 409 },
        );
      }

      console.error('[api] Unhandled error:', err);
      return NextResponse.json(
        { error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred.' } },
        { status: 500 },
      );
    }
  };
}
