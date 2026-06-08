import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getSession } from '@/lib/services/auth.service';
import AdminSidebar from '../components/AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

/**
 * This layout only applies to routes inside app/admin/(protected)/.
 * It does NOT apply to /admin/login because that sits outside this group.
 */
export default async function AdminProtectedLayout({ children }: AdminLayoutProps) {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;

  if (!sessionId) {
    redirect('/admin/login');
  }

  const session = await getSession(sessionId).catch(() => null);

  if (!session) {
    // Stale cookie — redirect through logout to clear it first, preventing
    // the middleware from seeing the cookie and looping back here.
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
