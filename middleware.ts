import { NextRequest, NextResponse } from 'next/server';

// ─── Route permission map ─────────────────────────────────────────────────────
// Routes listed here require the Super_Admin role.
// All other /admin/* and /api/* routes require any authenticated session.

const SUPER_ADMIN_ROUTES: string[] = [
  '/admin/users',
  '/admin/settings',
  '/admin/audit',
  '/api/users',
  '/api/settings',
  '/api/audit',
];

const SESSION_COOKIE = 'sid';

function isProtectedAdminRoute(pathname: string): boolean {
  return pathname.startsWith('/admin') && !pathname.startsWith('/admin/login');
}

function isProtectedApiRoute(pathname: string): boolean {
  return (
    pathname.startsWith('/api') && !pathname.startsWith('/api/auth')
  );
}

function isSuperAdminRoute(pathname: string): boolean {
  return SUPER_ADMIN_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/'),
  );
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { pathname } = req.nextUrl;

  const isAdmin = isProtectedAdminRoute(pathname);
  const isApi = isProtectedApiRoute(pathname);

  // Pass through all other routes
  if (!isAdmin && !isApi) {
    return NextResponse.next();
  }

  const sessionId = req.cookies.get(SESSION_COOKIE)?.value;

  // ── Unauthenticated ────────────────────────────────────────────────────────
  if (!sessionId) {
    if (isApi) {
      return NextResponse.json(
        { error: { code: 'UNAUTHENTICATED', message: 'Authentication required.' } },
        { status: 401 },
      );
    }
    // Admin page — redirect to login, preserving the intended destination
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Session validation via internal API ────────────────────────────────────
  // Middleware runs on the Edge runtime, so we cannot import Prisma directly.
  // We call the /api/auth/me route handler to validate the session server-side.
  let role: string | null = null;

  try {
    const meUrl = req.nextUrl.clone();
    meUrl.pathname = '/api/auth/me';
    meUrl.search = '';

    const meRes = await fetch(meUrl.toString(), {
      headers: { cookie: req.headers.get('cookie') ?? '' },
      // Ensure this fetch does not get cached
      cache: 'no-store',
    });

    if (meRes.ok) {
      const json = (await meRes.json()) as {
        data?: { role?: string };
      };
      role = json.data?.role ?? null;
    }
  } catch {
    // Network error reaching internal API — fail open to login redirect
    role = null;
  }

  // ── Invalid / expired session ──────────────────────────────────────────────
  if (!role) {
    if (isApi) {
      return NextResponse.json(
        { error: { code: 'UNAUTHENTICATED', message: 'Session expired or invalid.' } },
        { status: 401 },
      );
    }
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Role enforcement ───────────────────────────────────────────────────────
  if (isSuperAdminRoute(pathname) && role !== 'Super_Admin') {
    if (isApi) {
      return NextResponse.json(
        { error: { code: 'FORBIDDEN', message: 'You do not have permission to access this resource.' } },
        { status: 403 },
      );
    }
    const forbiddenUrl = req.nextUrl.clone();
    forbiddenUrl.pathname = '/admin';
    return NextResponse.redirect(forbiddenUrl);
  }

  // ── Pass through with role header for downstream handlers ─────────────────
  const res = NextResponse.next();
  res.headers.set('x-user-role', role);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match /admin/* and /api/* but exclude:
     * - /api/auth/* (login, logout, password reset — always public)
     * - Next.js internals (_next/static, _next/image, favicon)
     */
    '/admin/:path*',
    '/api/((?!auth/).*)',
  ],
};
