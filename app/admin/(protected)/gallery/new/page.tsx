import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listGalleryCategories } from '@/lib/services/gallery.service';
import GalleryForm from '../GalleryForm';

export default async function NewGalleryItemPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/gallery');

  const categories = await listGalleryCategories();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/gallery" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">New Gallery Item</h1>
        <p className="text-sm text-gray-500 mt-1">Upload and publish a new gallery photo.</p>
      </div>
      <GalleryForm mode="create" categories={categories} />
    </div>
  );
}
