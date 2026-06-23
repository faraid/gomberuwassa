'use client';

import { useActionState, useState } from 'react';
import { Save } from 'lucide-react';
import { saveSiteSettingsAction } from './actions';
import HomepageImageUpload from './ImageUpload';

interface SettingsProps {
  settings: {
    logo: string;
    phone: string;
    email: string;
    address: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    footerText: string;
  };
}

export function SiteSettingsEditor({ settings }: SettingsProps) {
  const [state, formAction, pending] = useActionState(saveSiteSettingsAction, {});
  const [logoUrl, setLogoUrl] = useState(settings.logo);

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">7. Header and Footer Settings</h2>

      <form action={formAction} className="space-y-4">
        <div>
          <HomepageImageUpload
            module="homepage"
            inputName="logo_url"
            currentUrl={logoUrl}
            label="Logo"
            onUploadComplete={(url) => setLogoUrl(url)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input name="phone_primary" defaultValue={settings.phone} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input name="email_primary" defaultValue={settings.email} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
          <input name="office_address" defaultValue={settings.address} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
            <input name="facebook_url" defaultValue={settings.facebook} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Twitter/X URL</label>
            <input name="twitter_url" defaultValue={settings.twitter} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
            <input name="instagram_url" defaultValue={settings.instagram} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
            <input name="linkedin_url" defaultValue={settings.linkedin} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">YouTube URL</label>
            <input name="youtube_url" defaultValue={settings.youtube} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Footer Text</label>
          <textarea name="footer_text" defaultValue={settings.footerText} rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" />
        </div>

        {state?.error && <p className="text-sm text-red-600">{state.error}</p>}
        {state?.success && <p className="text-sm text-green-600">Settings saved.</p>}

        <button type="submit" disabled={pending} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
          <Save className="w-4 h-4" /> {pending ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </section>
  );
}
