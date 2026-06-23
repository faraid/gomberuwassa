'use client';

import { useActionState, useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { saveValueCardAction, deleteValueCardAction } from './actions';
import { IconPicker, getIconComponent } from './IconPicker';

interface CardData {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tone: string;
  displayOrder: number;
  active: boolean;
}

interface ValueCardsEditorProps {
  cards: CardData[];
}

function ValueCardForm({ card, onDelete }: { card?: CardData; onDelete?: (id: string) => void }) {
  const [state, formAction, pending] = useActionState(saveValueCardAction, {});
  const [iconName, setIconName] = useState(card?.iconName || 'Droplet');
  const [active, setActive] = useState(card?.active ?? true);
  const [tone, setTone] = useState(card?.tone || 'blue');
  const Icon = getIconComponent(iconName);

  return (
    <form action={formAction} className="border border-gray-200 rounded-lg p-4 space-y-3">
      <input type="hidden" name="id" value={card?.id || ''} />
      
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
            <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
            <input name="title" defaultValue={card?.title || ''} required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Tone</label>
            <select name="tone" value={tone} onChange={e => setTone(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
        <textarea name="description" defaultValue={card?.description || ''} rows={2} required className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Display Order</label>
          <input name="displayOrder" type="number" defaultValue={card?.displayOrder || 0} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>
        <div className="flex items-center gap-2 pt-5">
          <input type="checkbox" name="active" id="active-vc" checked={active} onChange={e => setActive(e.target.checked)} className="rounded" />
          <label htmlFor="active-vc" className="text-sm text-gray-700">Active</label>
        </div>
      </div>

      {state?.error && <p className="text-xs text-red-600">{state.error}</p>}
      {state?.success && <p className="text-xs text-green-600">Saved!</p>}

      <div className="flex gap-2">
        <button type="submit" disabled={pending} className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50">
          <Save className="w-3 h-3" /> Save
        </button>
        {card && onDelete && (
          <button type="button" onClick={() => onDelete(card.id)} className="flex items-center gap-1 text-red-600 hover:text-red-700 text-xs px-3 py-1.5">
            <Trash2 className="w-3 h-3" /> Delete
          </button>
        )}
      </div>
    </form>
  );
}

export function ValueCardsEditor({ cards }: ValueCardsEditorProps) {
  const [showNew, setShowNew] = useState(false);

  const handleDelete = async (id: string) => {
    if (confirm('Delete this value card?')) {
      await deleteValueCardAction(id);
    }
  };

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">2. Value/Feature Cards</h2>
        <button onClick={() => setShowNew(!showNew)} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700">
          <Plus className="w-4 h-4" /> {showNew ? 'Cancel' : 'Add Card'}
        </button>
      </div>

      {showNew && (
        <div className="mb-4">
          <ValueCardForm />
        </div>
      )}

      <div className="space-y-4">
        {cards.map((card) => (
          <ValueCardForm key={card.id} card={card} onDelete={handleDelete} />
        ))}
        {cards.length === 0 && !showNew && (
          <p className="text-sm text-gray-400 text-center py-8">No value cards yet. Click &quot;Add Card&quot; to create one.</p>
        )}
      </div>
    </section>
  );
}
