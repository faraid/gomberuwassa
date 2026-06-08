'use client';

import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { createArticleAction, updateArticleAction, type ActionState } from './actions';

interface Category { id: string; name: string }

interface Props {
  categories: Category[];
  mode: 'create' | 'edit';
  articleId?: string;
  isSuperAdmin?: boolean;
  defaultValues?: {
    title?: string;
    excerpt?: string;
    body?: string;
    categoryId?: string;
    featuredImageUrl?: string;
    thumbnailUrl?: string;
    status?: string;
    featured?: boolean;
  };
}

const initialState: ActionState = {};

export default function ArticleForm({ categories, mode, articleId, isSuperAdmin, defaultValues }: Props) {
  const action = mode === 'edit' && articleId
    ? updateArticleAction.bind(null, articleId)
    : createArticleAction;

  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title" name="title" type="text" required
          defaultValue={defaultValues?.title ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Article headline"
        />
        {state.fieldErrors?.title && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.title[0]}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-1">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          id="categoryId" name="categoryId" required
          defaultValue={defaultValues?.categoryId ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category…</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        {state.fieldErrors?.categoryId && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.categoryId[0]}</p>
        )}
      </div>

      {/* Status + Featured row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Status — Super_Admin only */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          {isSuperAdmin ? (
            <select
              id="status" name="status"
              defaultValue={defaultValues?.status ?? 'draft'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          ) : (
            <>
              <input type="hidden" name="status" value="draft" />
              <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500">
                Draft (Editors cannot publish directly)
              </div>
            </>
          )}
        </div>

        {/* Featured toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Featured</label>
          <label className="flex items-center gap-3 px-3 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              name="featured"
              value="on"
              defaultChecked={defaultValues?.featured ?? false}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-700">Mark as featured</span>
          </label>
          <p className="text-xs text-gray-400 mt-1">Featured articles appear in the top section.</p>
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
          Excerpt <span className="text-red-500">*</span>
          <span className="text-gray-400 font-normal ml-1">(max 300 chars)</span>
        </label>
        <textarea
          id="excerpt" name="excerpt" required rows={3}
          maxLength={300}
          defaultValue={defaultValues?.excerpt ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Short summary shown on listing pages…"
        />
        {state.fieldErrors?.excerpt && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.excerpt[0]}</p>
        )}
      </div>

      {/* Body */}
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
          Body Content <span className="text-red-500">*</span>
        </label>
        <textarea
          id="body" name="body" required rows={10}
          defaultValue={defaultValues?.body ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y font-mono"
          placeholder="Full article content…"
        />
        {state.fieldErrors?.body && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.body[0]}</p>
        )}
      </div>

      {/* Image URLs */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Images</p>
        <div>
          <label htmlFor="featuredImageUrl" className="block text-xs font-medium text-gray-600 mb-1">
            Featured Image URL
          </label>
          <input
            id="featuredImageUrl" name="featuredImageUrl" type="text"
            defaultValue={defaultValues?.featuredImageUrl ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="/uploads/image.jpg or https://..."
          />
          <p className="text-xs text-gray-400 mt-1">
            Paste an image URL or leave blank to use the default placeholder.
          </p>
        </div>
        <div>
          <label htmlFor="thumbnailUrl" className="block text-xs font-medium text-gray-600 mb-1">
            Thumbnail URL
          </label>
          <input
            id="thumbnailUrl" name="thumbnailUrl" type="text"
            defaultValue={defaultValues?.thumbnailUrl ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="/uploads/thumb.jpg or https://..."
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit" disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? 'Saving…' : mode === 'create' ? 'Create Article' : 'Save Changes'}
        </button>
        <a href="/admin/news" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
