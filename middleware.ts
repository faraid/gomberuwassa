import { NextRequest, NextResponse } from 'next/server';

// ─── Public routes — always pass through, no auth check ──────────────────────
const PUBLIC_PATHS: string[] = [
  '/admin/login',
  '/api/auth/login',
  '/api/auth/logout',
  '/api/auth/me',
  '/api/auth/password-reset/request',
  '/api/auth/password-reset/confirm',
];

// ─── Super_Admin-only routes ──────────────────────────────────────────────────
const SUPER_ADMIN_ROUTES: string[] = [
  '/admin/users',
  '/admin/settings',
  '/admin/audit',
  '/api/users',
  '/api/settings',
  '/api/audit',
];

const SESSION_COOKIE = 'sid';

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/'),
  );
}

function isProtectedAdminRoute(pathname: string): boolean {
  return pathname.startsWith('/admin/') || pathname === '/admin';
}

function isProtectedApiRoute(pathname: string): boolean {
  return pathname.startsWith('/api/');
}

function isSuperAdminRoute(pathname: string): boolean {
  return SUPER_ADMIN_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + '/'),
  );
}

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;

  // ── Always allow public paths ──────────────────────────────────────────────
  if (isPublicPath(pathname)) {
    // If an authenticated user visits /admin/login, send them to the dashboard
    const sessionId = req.cookies.get(SESSION_COOKIE)?.value;
    if (sessionId && pathname === '/admin/login') {
      const dashboardUrl = req.nextUrl.clone();
      dashboardUrl.pathname = '/admin';
      dashboardUrl.search = '';
      return NextResponse.redirect(dashboardUrl);
    }
    return NextResponse.next();
  }

  const isAdmin = isProtectedAdminRoute(pathname);
  const isApi = isProtectedApiRoute(pathname);

  // ── Pass through non-admin, non-API routes (public website) ───────────────
  if (!isAdmin && !isApi) {
    return NextResponse.next();
  }

  // ── Check session cookie ───────────────────────────────────────────────────
  // We only check cookie presence here — full session validation (expiry,
  // active flag) happens in the Route Handler / Server Component via
  // getSession(). This avoids recursive middleware invocations from
  // internal fetch calls and keeps middleware on the Edge runtime.
  const sessionId = req.cookies.get(SESSION_COOKIE)?.value;

  if (!sessionId) {
    if (isApi) {
      return NextResponse.json(
        { error: { code: 'UNAUTHENTICATED', message: 'Authentication required.' } },
        { status: 401 },
      );
    }
    // Redirect to login, preserving intended destination
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    loginUrl.search = '';
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Role enforcement via x-user-role header (set by /api/auth/me) ─────────
  // For Super_Admin-only routes we rely on the route handler to do fine-grained
  // checks after calling getSession(). The middleware only enforces the cookie
  // presence gate to keep it stateless and avoid DB calls on the Edge.
  //
  // The x-user-role header is read from a previous request; if absent we let
  // the downstream handler enforce role (it always calls getSession()).
  const role = req.headers.get('x-user-role');

  if (role && isSuperAdminRoute(pathname) && role !== 'Super_Admin') {
    if (isApi) {
      return NextResponse.json(
        {
          error: {
            code: 'FORBIDDEN',
            message: 'You do not have permission to access this resource.',
          },
        },
        { status: 403 },
      );
    }
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = '/admin';
    dashboardUrl.search = '';
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run middleware on:
     *   /admin  and  /admin/<anything>
     *   /api/<anything>
     *
     * Next.js internals (_next/*, favicon.ico, public files) are
     * automatically excluded by the framework before reaching middleware.
     */
    '/admin',
    '/admin/:path*',
    '/api/:path*',
  ],
};
