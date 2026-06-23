'use client';

import { useActionState, useState } from 'react';
import { Save } from 'lucide-react';
import { saveHeroAction } from './actions';
import HomepageImageUpload from './ImageUpload';

interface HeroEditorProps {
  hero: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    heroImageUrl: string;
    primaryBtnText: string;
    primaryBtnLink: string;
    secondaryBtnText: string;
    secondaryBtnLink: string;
  };
}

export function HomepageHeroEditor({ hero }: HeroEditorProps) {
  const [state, formAction, pending] = useActionState(saveHeroAction, {});
  const [heroImage, setHeroImage] = useState(hero.heroImageUrl);

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">1. Hero Section</h2>
      
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
            <input name="title" defaultValue={hero.title} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subtitle</label>
            <input name="subtitle" defaultValue={hero.subtitle} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hero Description</label>
          <textarea name="description" defaultValue={hero.description} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>

        <div>
          <HomepageImageUpload
            module="homepage"
            inputName="heroImageUrl"
            currentUrl={heroImage}
            label="Hero Image"
            onUploadComplete={(url) => setHeroImage(url)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Button Text</label>
            <input name="primaryBtnText" defaultValue={hero.primaryBtnText} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Primary Button Link</label>
            <input name="primaryBtnLink" defaultValue={hero.primaryBtnLink} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Button Text</label>
            <input name="secondaryBtnText" defaultValue={hero.secondaryBtnText} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Button Link</label>
            <input name="secondaryBtnLink" defaultValue={hero.secondaryBtnLink} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
        {state?.success && <p className="text-sm text-green-600">Hero section saved.</p>}

        <button type="submit" disabled={pending} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
          <Save className="w-4 h-4" /> {pending ? 'Saving...' : 'Save Hero'}
        </button>
      </form>
    </section>
  );
}
