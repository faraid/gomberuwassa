'use client';

import { useActionState, useState } from 'react';
import { Save } from 'lucide-react';
import { setFeaturedNewsAction } from './actions';

interface ArticleRow {
  id: string;
  title: string;
  status: string;
  publishedAt: string | Date | null;
  category: { id: string; name: string };
}

interface FeaturedNewsEditorProps {
  articles: ArticleRow[];
  featuredIds: string[];
}

export function FeaturedNewsEditor({ articles, featuredIds }: FeaturedNewsEditorProps) {
  const [state, formAction, pending] = useActionState(setFeaturedNewsAction, {});
  const [selected, setSelected] = useState<string[]>(featuredIds);

  const toggleArticle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const publishedArticles = articles.filter(a => a.status === 'published');

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">4. Latest News & Updates Section</h2>
      <p className="text-sm text-gray-500 mb-4">
        Select news articles to feature on the homepage. Only published articles are shown.
      </p>

      <form action={formAction} className="space-y-4">
        <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-lg divide-y divide-gray-100">
          {publishedArticles.map((article) => {
            const isSelected = selected.includes(article.id);
            let dateStr = '';
            if (article.publishedAt) {
              dateStr = new Date(article.publishedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
            }
            return (
              <label
                key={article.id}
                className={'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50 ' + (isSelected ? 'bg-blue-50' : '')}
              >
                <input
                  type="checkbox"
                  name="articleIds"
                  value={article.id}
                  checked={isSelected}
                  onChange={() => toggleArticle(article.id)}
                  className="rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{article.title}</p>
                  <p className="text-xs text-gray-400">
                    {article.category?.name}
                    {dateStr ? ' - ' + dateStr : ''}
                  </p>
                </div>
                {isSelected && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Featured</span>
                )}
              </label>
            );
          })}
          {publishedArticles.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">
              No published articles found. Publish news articles first.
            </p>
          )}
        </div>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
        {state?.success && <p className="text-sm text-green-600">Featured news saved.</p>}

        <button type="submit" disabled={pending} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
          <Save className="w-4 h-4" /> {pending ? 'Saving...' : 'Save Featured News'}
        </button>
      </form>
    </section>
  );
}
