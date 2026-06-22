'use client';



import { useActionState } from 'react';
import { Loader2 } from 'lucide-react';
import { createProjectAction, updateProjectAction, type ActionState } from './actions';
import ImageUpload from '@/app/components/shared/ImageUpload';

interface ProjectType { id: string; name: string }

interface Props {
  projectTypes: ProjectType[];
  allLgas: string[];
  allYears: number[];
  mode: 'create' | 'edit';
  projectId?: string;
  defaultValues?: {
    title?: string;
    lga?: string;
    community?: string;
    typeId?: string;
    status?: string;
    year?: number;
    progress?: number;
    beneficiaries?: number;
    description?: string;
    featuredImageUrl?: string;
    thumbnailUrl?: string;
    featured?: boolean;
  };
}

const initialState: ActionState = {};

export default function ProjectForm({ projectTypes, allLgas, allYears, mode, projectId, defaultValues }: Props) {
  const action = mode === 'edit' && projectId
    ? updateProjectAction.bind(null, projectId)
    : createProjectAction;

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
          placeholder="Project name"
        />
        {state.fieldErrors?.title && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.title[0]}</p>
        )}
      </div>

      {/* LGA + Community row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="lga" className="block text-sm font-medium text-gray-700 mb-1">
            LGA <span className="text-red-500">*</span>
          </label>
          <select
            id="lga" name="lga" required
            defaultValue={defaultValues?.lga ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select LGA…</option>
            {allLgas.map((lga) => (
              <option key={lga} value={lga}>{lga}</option>
            ))}
          </select>
          {state.fieldErrors?.lga && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.lga[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="community" className="block text-sm font-medium text-gray-700 mb-1">
            Community <span className="text-red-500">*</span>
          </label>
          <input
            id="community" name="community" type="text" required
            defaultValue={defaultValues?.community ?? ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Community name"
          />
          {state.fieldErrors?.community && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.community[0]}</p>
          )}
        </div>
      </div>

      {/* Type + Status row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="typeId" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type <span className="text-red-500">*</span>
          </label>










          {projectTypes.length === 0 ? (
            <div className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-yellow-50 text-yellow-800">
              No project types found. Run seed to populate, or contact the administrator.
            </div>
          ) : (
            <select
              id="typeId" name="typeId" required
              defaultValue={defaultValues?.typeId ?? ''}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type…</option>
              {projectTypes.map((t) => (
                <option key={t.id} value={t.id}>{t.name}</option>
              ))}
            </select>
          )}
          {state.fieldErrors?.typeId && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.typeId[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status" name="status"
            defaultValue={defaultValues?.status ?? 'planned'}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="planned">Planned</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Year + Featured row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <select
            id="year" name="year"
            defaultValue={defaultValues?.year ?? new Date().getFullYear()}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {allYears.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          {state.fieldErrors?.year && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.year[0]}</p>
          )}
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
            <span className="text-sm text-gray-700">Mark as featured</span>
          </label>
          <p className="text-xs text-gray-400 mt-1">Featured projects appear in the top section.</p>
        </div>
      </div>

      {/* Progress + Beneficiaries row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">
            Progress (%) <span className="text-gray-400 font-normal">(0–100)</span>
          </label>
          <input
            id="progress" name="progress" type="number" min={0} max={100}
            defaultValue={defaultValues?.progress ?? 0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {state.fieldErrors?.progress && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.progress[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="beneficiaries" className="block text-sm font-medium text-gray-700 mb-1">
            Beneficiaries
          </label>
          <input
            id="beneficiaries" name="beneficiaries" type="number" min={0}
            defaultValue={defaultValues?.beneficiaries ?? 0}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {state.fieldErrors?.beneficiaries && (
            <p className="text-xs text-red-600 mt-1">{state.fieldErrors.beneficiaries[0]}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description" name="description" required rows={4}
          defaultValue={defaultValues?.description ?? ''}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          placeholder="Project summary and key details…"
        />
        {state.fieldErrors?.description && (
          <p className="text-xs text-red-600 mt-1">{state.fieldErrors.description[0]}</p>
        )}
      </div>



      
      {/* Images */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-700">Images</p>









        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ImageUpload
            module="projects"
            inputName="featuredImageUrl"
            currentUrl={defaultValues?.featuredImageUrl}
            label="Featured Image"
          />













          <ImageUpload
            module="projects"
            inputName="thumbnailUrl"
            currentUrl={defaultValues?.thumbnailUrl}
            label="Thumbnail"
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
          {pending ? 'Saving…' : mode === 'create' ? 'Create Project' : 'Save Changes'}
        </button>
        <a href="/admin/projects" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
