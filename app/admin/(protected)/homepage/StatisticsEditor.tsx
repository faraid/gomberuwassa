'use client';

import { useActionState, useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { saveStatisticAction, deleteStatisticAction } from './actions';
import { IconPicker, getIconComponent } from './IconPicker';

interface StatData {
  id: string;
  iconName: string;
  value: string;
  label: string;
  displayOrder: number;
  active: boolean;
}

interface StatisticsEditorProps {
  stats: StatData[];
}

function StatisticForm({ stat, onDelete }: { stat?: StatData; onDelete?: (id: string) => void }) {
  const [state, formAction, pending] = useActionState(saveStatisticAction, {});
  const [iconName, setIconName] = useState(stat?.iconName || 'Droplet');
  const [active, setActive] = useState(stat?.active ?? true);
  const Icon = getIconComponent(iconName);

  return (
    <form action={formAction} className="border border-gray-200 rounded-lg p-4 space-y-3">
      <input type="hidden" name="id" value={stat?.id || ''} />
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Icon</label>
          <div className="flex items-center gap-2 mb-1">
            <Icon className="w-5 h-5 text-blue-600" />
            <span className="text-xs text-gray-400">{iconName}</span>
          </div>
          <IconPicker value={iconName} onChange={setIconName} name="iconName" />
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Value / Number</label>
            <input name="value" defaultValue={stat?.value || ''} required placeholder="e.g. 312+" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
            <input name="label" defaultValue={stat?.label || ''} required placeholder="e.g. Water Points Constructed" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
          <input name="displayOrder" type="number" defaultValue={stat?.displayOrder || 0} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div className="flex items-center gap-2 pt-5">
          <input type="checkbox" name="active" id="active-stat" checked={active} onChange={e => setActive(e.target.checked)} className="rounded" />
          <label htmlFor="active-stat" className="text-sm text-gray-700">Active</label>
        </div>
      </div>

      {state?.error && <p className="text-xs text-red-600">{state.error}</p>}
      {state?.success && <p className="text-xs text-green-600">Saved!</p>}

      <div className="flex gap-2">
        <button type="submit" disabled={pending} className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50">
          <Save className="w-3 h-3" /> Save
        </button>
        {stat && onDelete && (
          <button type="button" onClick={() => onDelete(stat.id)} className="flex items-center gap-1 text-red-600 hover:text-red-700 text-xs px-3 py-1.5">
            <Trash2 className="w-3 h-3" /> Delete
          </button>
        )}
      </div>
    </form>
  );
}

export function StatisticsEditor({ stats }: StatisticsEditorProps) {
  const [showNew, setShowNew] = useState(false);

  const handleDelete = async (id: string) => {
    if (confirm('Delete this statistic?')) {
      await deleteStatisticAction(id);
    }
  };

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">6. Impact Statistics</h2>
        <button onClick={() => setShowNew(!showNew)} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <Plus className="w-4 h-4" /> {showNew ? 'Cancel' : 'Add Stat'}
        </button>
      </div>

      {showNew && <div className="mb-4"><StatisticForm /></div>}

      <div className="space-y-4">
        {stats.map((stat) => (
          <StatisticForm key={stat.id} stat={stat} onDelete={handleDelete} />
        ))}
        {stats.length === 0 && !showNew && (
          <p className="text-sm text-gray-400 text-center py-8">No statistics yet.</p>
        )}
      </div>
    </section>
  );
}
