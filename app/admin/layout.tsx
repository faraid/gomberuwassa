import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getSession } from '@/lib/services/auth.service';
import AdminSidebar from './components/AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;

  // No cookie at all — safe to redirect directly to login
  if (!sessionId) {
    redirect('/admin/login');
  }

  // Cookie exists — validate the session against the DB
  const session = await getSession(sessionId).catch(() => null);

  if (!session) {
    // The cookie is stale (expired or invalidated). Redirect through the
    // GET logout endpoint which clears the cookie before landing on /admin/login.
    // This breaks the middleware loop: once the cookie is cleared, middleware
    // lets /admin/login through unconditionally.
    redirect('/api/auth/logout');
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar
        role={session.role}
        fullName={session.fullName}
        email={session.email}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-gray-200 flex items-center px-6 shrink-0">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-gray-900">Gombe State RUWASA</span>
            <span>/</span>
            <span>Admin Portal</span>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
