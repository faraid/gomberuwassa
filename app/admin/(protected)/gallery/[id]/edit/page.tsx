import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { getGalleryItemById, listGalleryCategories } from '@/lib/services/gallery.service';
import GalleryForm from '../../GalleryForm';

export default async function EditGalleryItemPage({
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
  if (session.role === 'Viewer') redirect('/admin/gallery');

  const [item, categories] = await Promise.all([
    getGalleryItemById(id),
    listGalleryCategories(),
  ]);
  if (!item) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/gallery" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Gallery Item</h1>
        <p className="text-sm text-gray-500 mt-1">{item.title}</p>
      </div>
      <GalleryForm
        mode="edit"
        itemId={item.id}
        categories={categories}
        defaultValues={{
          title: item.title,
          slug: item.slug,
          category: item.category.name,
          imageUrl: item.imageUrl,
          caption: item.caption,
          published: item.published,
          featured: item.featured,
          displayOrder: item.displayOrder,
        }}
      />
    </div>
  );
}
