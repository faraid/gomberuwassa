


import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listPrograms } from '@/lib/services/programs.service';
import ProgramRowActions from './ProgramRowActions';

export default async function ProgramsPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const programs = await listPrograms();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Programs</h1>
          <p className="text-sm text-gray-500 mt-1">
            {programs.length} program{programs.length !== 1 ? 's' : ''} total
          </p>
        </div>
        {session.role !== 'Viewer' && (
          <Link
            href="/admin/programs/new"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Program
          </Link>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Title</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Order</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Published</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Updated</th>
              <th className="px-5 py-3 sr-only">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {programs.map((program) => (
              <tr key={program.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900 max-w-xs">
                  <p className="truncate">{program.title}</p>
                  <p className="text-xs text-gray-400 font-normal">{program.slug}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{program.category}</td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{program.displayOrder}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded capitalize ${
                    program.status === 'active' ? 'bg-green-100 text-green-700' :
                    program.status === 'expanding' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {program.status}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  {program.published ? (
                    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-green-100 text-green-700">
                      Published
                    </span>
                  ) : (
                    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                  {new Date(program.updatedAt).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </td>
                <td className="px-5 py-3.5">
                  <ProgramRowActions program={{ id: program.id, title: program.title, published: program.published }} />
                </td>
              </tr>
            ))}
            {programs.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">
                  No programs yet. Create one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
