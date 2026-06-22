'use client';

import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import ImageUpload from '@/app/components/shared/ImageUpload';
import { createGalleryItemAction, updateGalleryItemAction, type ActionState } from './actions';

interface CategoryOption {
  id: string;
  name: string;
}

interface Props {
  mode: 'create' | 'edit';
  itemId?: string;
  categories: CategoryOption[];
  defaultValues?: {
    title?: string;
    slug?: string;
    category?: string;
    imageUrl?: string;
    caption?: string;
    published?: boolean;
    featured?: boolean;
    displayOrder?: number;
  };
}

const initialState: ActionState = {};

export default function GalleryForm({ mode, itemId, categories, defaultValues }: Props) {
  const action = mode === 'edit' && itemId
    ? updateGalleryItemAction.bind(null, itemId)
    : createGalleryItemAction;

  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            defaultValue={defaultValues?.title ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Solar borehole commissioning"
          />
          {state.fieldErrors?.title && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.title[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
            Slug <span className="text-red-500">*</span>
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            required
            defaultValue={defaultValues?.slug ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="solar-borehole-commissioning"
          />
          {state.fieldErrors?.slug && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.slug[0]}</p>
          )}
          <p className="text-xs text-gray-400 mt-1">Lowercase with hyphens. Must be unique.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <input
            id="category"
            name="category"
            type="text"
            required
            list="gallery-categories"
            defaultValue={defaultValues?.category ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Water Projects"
          />
          <datalist id="gallery-categories">
            {categories.map((category) => (
              <option key={category.id} value={category.name} />
            ))}
            <option value="Water Projects" />
            <option value="Community Engagement" />
            <option value="Sanitation & Hygiene" />
            <option value="Stakeholder Meetings" />
          </datalist>
          {state.fieldErrors?.category && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.category[0]}</p>
          )}
        </div>

        <div>
          <label htmlFor="displayOrder" className="block text-sm font-medium text-gray-700 mb-1">
            Display Order
          </label>
          <input
            id="displayOrder"
            name="displayOrder"
            type="number"
            min={0}
            defaultValue={defaultValues?.displayOrder ?? 0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-400 mt-1">Featured items appear first, then lower numbers.</p>
        </div>
      </div>

      <div>
        <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-1">
          Caption
        </label>
        <textarea
          id="caption"
          name="caption"
          rows={4}
          maxLength={400}
          defaultValue={defaultValues?.caption ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          placeholder="Short description displayed under the photo."
        />
        {state.fieldErrors?.caption && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.caption[0]}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Published</label>
          <label className="flex items-center gap-3 px-3 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              name="published"
              value="on"
              defaultChecked={defaultValues?.published ?? false}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-700">Visible on website</span>
          </label>
        </div>

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
            <span className="text-sm text-gray-700">Show before standard gallery items</span>
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Image</p>
        <ImageUpload
          module="gallery"
          inputName="imageUrl"
          currentUrl={defaultValues?.imageUrl}
          label="Gallery Image"
        />
        {state.fieldErrors?.imageUrl && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.imageUrl[0]}</p>
        )}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? 'Saving...' : mode === 'create' ? 'Create Gallery Item' : 'Save Changes'}
        </button>
        <a href="/admin/gallery" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
