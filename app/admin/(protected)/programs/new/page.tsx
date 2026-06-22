import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import ProgramForm from '../ProgramForm';

export default async function NewProgramPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/programs');

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/programs" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">New Program</h1>
        <p className="text-sm text-gray-500 mt-1">Create a new program to display on the website.</p>
      </div>
      <ProgramForm mode="create" />
    </div>
  );
}
