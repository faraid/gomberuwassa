'use client';

import { useActionState, useState } from 'react';
import { Save } from 'lucide-react';
import { setFeaturedProjectsAction } from './actions';

interface ProjectRow {
  id: string;
  title: string;
  lga: string;
  community: string;
  status: string;
}

interface FeaturedProjectsEditorProps {
  projects: ProjectRow[];
  featuredIds: string[];
}

export function FeaturedProjectsEditor({ projects, featuredIds }: FeaturedProjectsEditorProps) {
  const [state, formAction, pending] = useActionState(setFeaturedProjectsAction, {});
  const [selected, setSelected] = useState<string[]>(featuredIds);

  const toggleProject = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">3. Ongoing Water Projects Section</h2>
      <p className="text-sm text-gray-500 mb-4">
        Select which projects to feature on the homepage. Selected projects will appear in order.
      </p>

      <form action={formAction} className="space-y-4">
        <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-lg divide-y divide-gray-100">
          {projects.map((project) => {
            const isSelected = selected.includes(project.id);
            return (
              <label
                key={project.id}
                className={
                  'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors hover:bg-gray-50 ' +
                  (isSelected ? 'bg-blue-50' : '')
                }
              >
                <input
                  type="checkbox"
                  name="projectIds"
                  value={project.id}
                  checked={isSelected}
                  onChange={() => toggleProject(project.id)}
                  className="rounded"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{project.title}</p>
                  <p className="text-xs text-gray-400">{project.community}, {project.lga} - {project.status}</p>
                </div>
                {isSelected && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Featured</span>
                )}
              </label>
            );
          })}
          {projects.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-8">
              No projects found. Create projects first.
            </p>
          )}
        </div>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
        {state?.success && <p className="text-sm text-green-600">Featured projects saved.</p>}

        <button type="submit" disabled={pending} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
          <Save className="w-4 h-4" /> {pending ? 'Saving...' : 'Save Featured Projects'}
        </button>
      </form>
    </section>
  );
}
