'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { MoreHorizontal, Pencil, Trash2, Globe, EyeOff } from 'lucide-react';
import {
  publishArticleAction,
  unpublishArticleAction,
  deleteArticleAction,
} from './actions';

interface ArticleMini {
  id: string;
  title: string;
  status: string;
}

interface Props {
  article: ArticleMini;
  canPublish: boolean; // Super_Admin only
}

export default function NewsRowActions({ article, canPublish }: Props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const isPublished = article.status === 'published';

  function handleTogglePublish() {
    setOpen(false);
    const label = isPublished ? 'Unpublish' : 'Publish';
    if (!confirm(`${label} "${article.title}"?`)) return;

    startTransition(async () => {
      const result = isPublished
        ? await unpublishArticleAction(article.id)
        : await publishArticleAction(article.id);
      if (result.error) setError(result.error);
    });
  }

  function handleDelete() {
    setOpen(false);
    if (!confirm(`Delete "${article.title}"? This cannot be undone.`)) return;

    startTransition(async () => {
      const result = await deleteArticleAction(article.id);
      if (result.error) setError(result.error);
    });
  }

  return (
    <div className="relative flex justify-end">
      {error && <p className="text-xs text-red-600 mr-2 self-center">{error}</p>}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={isPending}
        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Actions"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-8 z-20 bg-white border border-gray-200 rounded-xl shadow-lg py-1 w-44 text-sm">
            <Link
              href={`/admin/news/${article.id}/edit`}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <Pencil className="w-3.5 h-3.5 text-gray-400" />
              Edit
            </Link>

            {canPublish && (
              <button
                type="button"
                onClick={handleTogglePublish}
                className={`flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 ${
                  isPublished ? 'text-amber-600' : 'text-green-600'
                }`}
              >
                {isPublished
                  ? <><EyeOff className="w-3.5 h-3.5" />Unpublish</>
                  : <><Globe className="w-3.5 h-3.5" />Publish</>
                }
              </button>
            )}

            <div className="border-t border-gray-100 my-1" />
            <button
              type="button"
              onClick={handleDelete}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-50 text-red-600"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
