import { cookies } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { getArticleById, listCategories } from '@/lib/services/news.service';
import ArticleForm from '../../ArticleForm';

export default async function EditArticlePage({
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
  if (session.role === 'Viewer') redirect('/admin/news');

  const [article, categories] = await Promise.all([
    getArticleById(id),
    listCategories(),
  ]);

  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/admin/news" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Article</h1>
        <p className="text-sm text-gray-500 mt-1 font-mono">{article.slug}</p>
      </div>

      <ArticleForm
        categories={categories}
        mode="edit"
        articleId={article.id}
        isSuperAdmin={session.role === 'Super_Admin'}
        defaultValues={{
          title: article.title,
          excerpt: article.excerpt,
          body: article.body,
          categoryId: article.categoryId,
          featuredImageUrl: article.featuredImageUrl,
          thumbnailUrl: article.thumbnailUrl,
          status: article.status,
          featured: article.featured,
        }}
      />
    </div>
  );
}
