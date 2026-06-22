import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Star } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listGalleryItems } from '@/lib/services/gallery.service';
import GalleryRowActions from './GalleryRowActions';

export default async function AdminGalleryPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const items = await listGalleryItems();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
          <p className="text-sm text-gray-500 mt-1">
            {items.length} item{items.length !== 1 ? 's' : ''} total
          </p>
        </div>
        {session.role !== 'Viewer' && (
          <Link
            href="/admin/gallery/new"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Gallery Item
          </Link>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Image</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Title</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Order</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Published</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Updated</th>
              <th className="px-5 py-3 sr-only">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="relative h-14 w-20 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={item.imageUrl} alt="" fill sizes="80px" className="object-cover" />
                  </div>
                </td>
                <td className="px-5 py-3.5 font-medium text-gray-900 max-w-xs">
                  <div className="flex items-center gap-2">
                    <p className="truncate">{item.title}</p>
                    {item.featured && <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />}
                  </div>
                  <p className="text-xs text-gray-400 font-normal truncate">{item.slug}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{item.category.name}</td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{item.displayOrder}</td>
                <td className="px-5 py-3.5">
                  {item.published ? (
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
                  {new Date(item.updatedAt).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </td>
                <td className="px-5 py-3.5">
                  {session.role !== 'Viewer' && (
                    <GalleryRowActions item={{ id: item.id, title: item.title, published: item.published }} />
                  )}
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">
                  No gallery items yet. Create one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
