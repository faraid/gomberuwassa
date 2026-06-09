import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { getProjectById, listProjectTypes, listLGAs, listYears } from '@/lib/services/projects.service';
import ProjectForm from '../../ProjectForm';

export default async function EditProjectPage({
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
  if (session.role === 'Viewer') redirect('/admin/projects');

  const [project, projectTypes, allLgas, allYears] = await Promise.all([
    getProjectById(id),
    listProjectTypes(),
    listLGAs(),
    listYears(),
  ]);

  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/projects" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Project</h1>
        <p className="text-sm text-gray-500 mt-1">{project.title}</p>
      </div>

      <ProjectForm
        projectTypes={projectTypes}
        allLgas={allLgas}
        allYears={allYears}
        mode="edit"
        projectId={project.id}
        defaultValues={{
          title: project.title,
          lga: project.lga,
          community: project.community,
          typeId: project.typeId,
          status: project.status,
          year: project.year,
          progress: project.progress,
          beneficiaries: project.beneficiaries,
          description: project.description,
          featuredImageUrl: project.featuredImageUrl,
          thumbnailUrl: project.thumbnailUrl,
          featured: project.featured,
        }}
      />
    </div>
  );
}
