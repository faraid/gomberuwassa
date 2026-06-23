import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/services/auth.service';
import { getAboutSettings } from '@/lib/services/about.service';
import AboutEditor from './AboutEditor';

export default async function AdminAboutPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const settings = await getAboutSettings();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">About Us Editor</h1>
        <p className="text-sm text-gray-500 mt-1">Manage all content sections displayed on the public About page.</p>
      </div>
      <AboutEditor settings={settings} canEdit={session.role !== 'Viewer'} />
    </div>
  );
}

