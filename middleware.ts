import { NextRequest, NextResponse } from 'next/server';

/**
 * Public paths: always pass through, no authentication check whatsoever.
 * This list must cover /admin/login and all /api/auth/* variants.
 */
const PUBLIC_PREFIXES: string[] = [
  '/admin/login',
  '/api/auth/',
  // Next.js internals (belt-and-suspenders — framework also excludes these)
  '/_next/',
  '/favicon.ico',
];

/**
 * Super_Admin-only admin pages. Route handlers do the fine-grained DB check;
 * middleware only enforces the cookie-presence gate.
 */
const SUPER_ADMIN_PAGE_PREFIXES: string[] = [
  '/admin/users',
  '/admin/settings',
  '/admin/audit',
];

const SUPER_ADMIN_API_PREFIXES: string[] = [
  '/api/users',
  '/api/settings',
  '/api/audit',
];

const SESSION_COOKIE = 'sid';

function isPublic(pathname: string): boolean {
  return PUBLIC_PREFIXES.some(
    (p) => pathname === p.replace(/\/$/, '') || pathname.startsWith(p),
  );
}

function requiresAdmin(pathname: string): boolean {
  return pathname === '/admin' || pathname.startsWith('/admin/');
}

function requiresApi(pathname: string): boolean {
  return pathname.startsWith('/api/');
}

export function middleware(req: NextRequest): NextResponse {
  const { pathname } = req.nextUrl;

  // ── 1. Always let public paths through — no cookie check, no redirect ──────
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  // ── 2. Only run auth logic for /admin/* and /api/* ─────────────────────────
  const needsAdminAuth = requiresAdmin(pathname);
  const needsApiAuth = requiresApi(pathname);

  if (!needsAdminAuth && !needsApiAuth) {
    return NextResponse.next(); // public website — untouched
  }

  // ── 3. Cookie presence check ───────────────────────────────────────────────
  // We only check that the cookie exists. Full validation (expiry, DB lookup)
  // happens in the Server Component layout / Route Handler via getSession().
  // This keeps middleware stateless and avoids recursive fetch calls.
  const hasCookie = Boolean(req.cookies.get(SESSION_COOKIE)?.value);

  if (!hasCookie) {
    if (needsApiAuth) {
      return NextResponse.json(
        { error: { code: 'UNAUTHENTICATED', message: 'Authentication required.' } },
        { status: 401 },
      );
    }
    // Admin page — redirect to login
    const url = req.nextUrl.clone();
    url.pathname = '/admin/login';
    url.search = '';
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  // ── 4. Super_Admin page enforcement (cookie-only, best-effort) ────────────
  // Real role enforcement is always re-checked server-side in the layout/handler.
  // Here we can only act if the role header was forwarded from a prior response.
  const role = req.headers.get('x-user-role') ?? '';

  if (role) {
    const isAdminOnlyPage = SUPER_ADMIN_PAGE_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(p + '/'),
    );
    const isAdminOnlyApi = SUPER_ADMIN_API_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(p + '/'),
    );

    if ((isAdminOnlyPage || isAdminOnlyApi) && role !== 'Super_Admin') {
      if (needsApiAuth) {
        return NextResponse.json(
          { error: { code: 'FORBIDDEN', message: 'Access denied.' } },
          { status: 403 },
        );
      }
      const url = req.nextUrl.clone();
      url.pathname = '/admin';
      url.search = '';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Run on every request EXCEPT Next.js internals and static files.
     * Public paths are handled inside the function body (early return).
     */
    '/((?!_next/static|_next/image|favicon\\.ico).*)',
  ],
};
