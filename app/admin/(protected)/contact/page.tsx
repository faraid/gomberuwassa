import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Inbox } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { getContactSettings } from '@/lib/services/contact.service';
import ContactSettingsForm from './ContactSettingsForm';

export default async function AdminContactPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const settings = await getContactSettings();
  const canEdit = session.role !== 'Viewer';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage public contact page content, map, and social links.</p>
        </div>
        <Link
          href="/admin/contact/enquiries"
          className="flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <Inbox className="w-4 h-4" />
          Enquiries
        </Link>
      </div>

      <ContactSettingsForm settings={settings} canEdit={canEdit} />
    </div>
  );
}
