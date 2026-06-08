import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { getUserById } from '@/lib/services/users.service';
import { Role } from '@/generated/prisma';
import ResetPasswordForm from './ResetPasswordForm';

export default async function ResetPasswordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role !== Role.Super_Admin) redirect('/admin');

  const user = await getUserById(id);
  if (!user) notFound();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <Link
          href="/admin/users"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Users
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Reset Password</h1>
        <p className="text-sm text-gray-500 mt-1">
          Set a new password for <strong>{user.fullName}</strong> ({user.email})
        </p>
      </div>

      <ResetPasswordForm userId={user.id} />
    </div>
  );
}
