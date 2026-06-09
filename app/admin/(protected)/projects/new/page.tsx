import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listProjectTypes, listLGAs, listYears } from '@/lib/services/projects.service';
import ProjectForm from '../ProjectForm';

export default async function NewProjectPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/projects');

  const [projectTypes, allLgas, allYears] = await Promise.all([
    listProjectTypes(),
    listLGAs(),
    listYears(),
  ]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/projects" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">New Project</h1>
        <p className="text-sm text-gray-500 mt-1">Fill in the details to create a new project record.</p>
      </div>
      <ProjectForm projectTypes={projectTypes} allLgas={allLgas} allYears={allYears} mode="create" />
    </div>
  );
}
