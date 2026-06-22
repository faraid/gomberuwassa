'use client';

import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { createProgramAction, updateProgramAction, type ActionState } from './actions';
import ImageUpload from '@/app/components/shared/ImageUpload';

interface Props {
  mode: 'create' | 'edit';
  programId?: string;
  defaultValues?: {
    title?: string;
    slug?: string;
    category?: string;
    status?: string;
    iconName?: string;
    tone?: string;
    summary?: string;
    description?: string;
    beneficiaries?: string;
    coverage?: string;
    leadUnit?: string;
    featuredImageUrl?: string;
    bannerImageUrl?: string;
    displayOrder?: number;
    published?: boolean;
    featured?: boolean;
  };
}

const initialState: ActionState = {};

export default function ProgramForm({ mode, programId, defaultValues }: Props) {
  const action = mode === 'edit' && programId
    ? updateProgramAction.bind(null, programId)
    : createProgramAction;

  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}

      {/* Title + Slug row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title" name="title" type="text" required
            defaultValue={defaultValues?.title ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Rural Water Supply"
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
            id="slug" name="slug" type="text" required
            defaultValue={defaultValues?.slug ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="rural-water-supply"
          />
          {state.fieldErrors?.slug && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.slug[0]}</p>
          )}
          <p className="text-xs text-gray-400 mt-1">Lowercase with hyphens. Must be unique.</p>
        </div>
      </div>

      {/* Category + Status + Tone row */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category" name="category" required
            defaultValue={defaultValues?.category ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select…</option>
            <option value="Water Supply">Water Supply</option>
            <option value="Sanitation & Hygiene">Sanitation & Hygiene</option>
            <option value="Capacity Building">Capacity Building</option>
            <option value="Community Engagement">Community Engagement</option>
          </select>
          {state.fieldErrors?.category && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.category[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            id="status" name="status"
            defaultValue={defaultValues?.status ?? 'active'}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="expanding">Expanding</option>
            <option value="planned">Planned</option>
          </select>
        </div>
        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700 mb-1">Accent Tone</label>
          <select
            id="tone" name="tone"
            defaultValue={defaultValues?.tone ?? 'blue'}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
      </div>

      {/* Summary */}
      <div>
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">
          Summary <span className="text-red-500">*</span>
        </label>
        <textarea
          id="summary" name="summary" required rows={2}
          defaultValue={defaultValues?.summary ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          placeholder="Brief description shown in program cards…"
        />
        {state.fieldErrors?.summary && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.summary[0]}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          id="description" name="description" rows={6}
          defaultValue={defaultValues?.description ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          placeholder="Full program description (optional)…"
        />
      </div>

      {/* Meta fields row */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="beneficiaries" className="block text-sm font-medium text-gray-700 mb-1">Beneficiaries</label>
          <input
            id="beneficiaries" name="beneficiaries" type="text"
            defaultValue={defaultValues?.beneficiaries ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Rural households"
          />
        </div>
        <div>
          <label htmlFor="coverage" className="block text-sm font-medium text-gray-700 mb-1">Coverage</label>
          <input
            id="coverage" name="coverage" type="text"
            defaultValue={defaultValues?.coverage ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. All 11 LGAs"
          />
        </div>
        <div>
          <label htmlFor="leadUnit" className="block text-sm font-medium text-gray-700 mb-1">Lead Unit</label>
          <input
            id="leadUnit" name="leadUnit" type="text"
            defaultValue={defaultValues?.leadUnit ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Water Supply & Engineering"
          />
        </div>
      </div>

      {/* Display Order + Published + Featured row */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="displayOrder" className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
          <input
            id="displayOrder" name="displayOrder" type="number" min={0}
            defaultValue={defaultValues?.displayOrder ?? 0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-400 mt-1">Lower numbers appear first.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Published</label>
          <label className="flex items-center gap-3 px-3 py-2.5 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox" name="published" value="on"
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
              type="checkbox" name="featured" value="on"
              defaultChecked={defaultValues?.featured ?? false}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-700">Highlight as featured</span>
          </label>
        </div>
      </div>

      {/* Image */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-700">Featured Image</p>
        <ImageUpload
          module="programs"
          inputName="featuredImageUrl"
          currentUrl={defaultValues?.featuredImageUrl}
          label="Program Image"
        />
      </div>

      {/* Icon Name */}
      <div>
        <label htmlFor="iconName" className="block text-sm font-medium text-gray-700 mb-1">Icon Name</label>
        <select
          id="iconName" name="iconName"
          defaultValue={defaultValues?.iconName ?? 'FileText'}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Droplet">Droplet</option>
          <option value="Toilet">Toilet</option>
          <option value="GraduationCap">GraduationCap</option>
          <option value="Users">Users</option>
          <option value="ShieldCheck">ShieldCheck</option>
          <option value="Handshake">Handshake</option>
          <option value="Megaphone">Megaphone</option>
          <option value="Wrench">Wrench</option>
          <option value="FileText">FileText</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit" disabled={pending}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending && <Loader2 className="w-4 h-4 animate-spin" />}
          {pending ? 'Saving…' : mode === 'create' ? 'Create Program' : 'Save Changes'}
        </button>
        <a href="/admin/programs" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
