import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { getProgramById } from '@/lib/services/programs.service';
import ProgramForm from '../../ProgramForm';

export default async function EditProgramPage({
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
  if (session.role === 'Viewer') redirect('/admin/programs');

  const program = await getProgramById(id);
  if (!program) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/programs" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Programs
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Program</h1>
        <p className="text-sm text-gray-500 mt-1">{program.title}</p>
      </div>

      <ProgramForm
        mode="edit"
        programId={program.id}
        defaultValues={{
          title: program.title,
          slug: program.slug,
          category: program.category,
          status: program.status,
          iconName: program.iconName,
          tone: program.tone,
          summary: program.summary,
          description: program.description,
          beneficiaries: program.beneficiaries,
          coverage: program.coverage,
          leadUnit: program.leadUnit,
          featuredImageUrl: program.featuredImageUrl ?? undefined,
          bannerImageUrl: program.bannerImageUrl ?? undefined,
          displayOrder: program.displayOrder,
          published: program.published,
          featured: program.featured,
        }}
      />
    </div>
  );
}
