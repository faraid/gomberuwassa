import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listArticles } from '@/lib/services/news.service';
import { ArticleStatus } from '@/generated/prisma';
import NewsRowActions from './NewsRowActions';

function statusBadge(status: ArticleStatus) {
  const map: Record<ArticleStatus, string> = {
    draft:     'bg-gray-100 text-gray-600',
    review:    'bg-yellow-100 text-yellow-700',
    scheduled: 'bg-blue-100 text-blue-700',
    published: 'bg-green-100 text-green-700',
    deleted:   'bg-red-100 text-red-600',
  };
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded capitalize ${map[status]}`}>
      {status}
    </span>
  );
}

export default async function NewsPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const articles = await listArticles();
  const canPublish = session.role === 'Super_Admin';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">News Articles</h1>
          <p className="text-sm text-gray-500 mt-1">
            {articles.length} article{articles.length !== 1 ? 's' : ''} total
          </p>
        </div>
        {session.role !== 'Viewer' && (
          <Link
            href="/admin/news/new"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Article
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
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Published</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Updated</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide sr-only">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3.5 font-medium text-gray-900 max-w-xs">
                  <p className="truncate">{article.title}</p>
                  <p className="text-xs text-gray-400 font-normal truncate">{article.slug}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">
                  {article.category.name}
                </td>
                <td className="px-5 py-3.5">{statusBadge(article.status)}</td>
                <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: 'numeric',
                      })
                    : '—'}
                </td>
                <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                  {new Date(article.updatedAt).toLocaleDateString('en-GB', {
                    day: '2-digit', month: 'short', year: 'numeric',
                  })}
                </td>
                <td className="px-5 py-3.5">
                  <NewsRowActions
                    article={{ id: article.id, title: article.title, status: article.status }}
                    canPublish={canPublish}
                  />
                </td>
              </tr>
            ))}
            {articles.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-gray-400 text-sm">
                  No articles yet. Create one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
