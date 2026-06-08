import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus, UserCheck, UserX, LockOpen } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listUsers, countActiveSuperAdmins } from '@/lib/services/users.service';
import { Role } from '@/generated/prisma';
import UserRowActions from './UserRowActions';

function roleBadge(role: Role) {
  const map: Record<Role, string> = {
    Super_Admin: 'bg-purple-100 text-purple-700',
    Editor: 'bg-blue-100 text-blue-700',
    Viewer: 'bg-gray-100 text-gray-600',
  };
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${map[role]}`}>
      {role.replace('_', ' ')}
    </span>
  );
}

function statusBadge(active: boolean, locked: boolean) {
  if (locked) return <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-red-100 text-red-700">Locked</span>;
  if (active) return <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-green-100 text-green-700">Active</span>;
  return <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">Inactive</span>;
}

export default async function UsersPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role !== Role.Super_Admin) redirect('/admin');

  const [users, superAdminCount] = await Promise.all([
    listUsers(),
    countActiveSuperAdmins(),
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-sm text-gray-500 mt-1">{users.length} user{users.length !== 1 ? 's' : ''} total</p>
        </div>
        <Link
          href="/admin/users/new"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          New User
        </Link>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1"><UserCheck className="w-3 h-3 text-green-600" /> Active</span>
        <span className="flex items-center gap-1"><UserX className="w-3 h-3 text-gray-400" /> Inactive</span>
        <span className="flex items-center gap-1"><LockOpen className="w-3 h-3 text-red-500" /> Locked</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Name</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Role</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Created</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-xs font-semibold text-blue-700">
                        {user.fullName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    {user.fullName}
                    {user.id === session.userId && (
                      <span className="text-xs text-gray-400">(you)</span>
                    )}
                  </div>
                </td>
                <td className="px-5 py-3.5 text-gray-600">{user.email}</td>
                <td className="px-5 py-3.5">{roleBadge(user.role)}</td>
                <td className="px-5 py-3.5">
                  {statusBadge(user.active, user.lockedAt !== null)}
                </td>
                <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                  {new Date(user.createdAt).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </td>
                <td className="px-5 py-3.5">
                  <UserRowActions
                    user={{
                      id: user.id,
                      fullName: user.fullName,
                      role: user.role,
                      active: user.active,
                      locked: user.lockedAt !== null,
                    }}
                    currentUserId={session.userId}
                    isLastSuperAdmin={
                      user.role === Role.Super_Admin && superAdminCount <= 1
                    }
                  />
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-gray-400 text-sm">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
