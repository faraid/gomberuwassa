

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listProjects } from '@/lib/services/projects.service';
import { ProjectStatus } from '@/generated/prisma';
import ProjectRowActions from './ProjectRowActions';

function statusBadge(status: ProjectStatus) {
  const map: Record<ProjectStatus, string> = {
    planned:   'bg-yellow-100 text-yellow-700',
    ongoing:   'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
  };
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded capitalize ${map[status]}`}>
      {status}
    </span>
  );
}

export default async function ProjectsPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const projects = await listProjects();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-sm text-gray-500 mt-1">
            {projects.length} project{projects.length !== 1 ? 's' : ''} total
          </p>
        </div>
        {session.role !== 'Viewer' && (
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Project
          </Link>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Title</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Type</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">LGA</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Year</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Updated</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide sr-only">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900 max-w-xs">
                  <p className="truncate">{project.title}</p>
                  <p className="text-xs text-gray-400 font-normal truncate">{project.community}, {project.lga}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">
                  {project.projectType.name}
                </td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">
                  {project.lga}
                </td>
                <td className="px-5 py-3.5">{statusBadge(project.status)}</td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">
                  {project.year}
                </td>
                <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                  {new Date(project.updatedAt).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </td>
                <td className="px-5 py-3.5">
                  <ProjectRowActions project={{ id: project.id, title: project.title }} />
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">
                  No projects yet. Create one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
