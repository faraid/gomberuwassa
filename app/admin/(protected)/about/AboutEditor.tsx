'use client';

import { useActionState, useRef, useState } from 'react';
import { FileUp, Loader2, Save } from 'lucide-react';
import { saveAboutAction } from './actions';
import type { AboutSettings } from '@/lib/constants/about';

interface Props {
  settings: AboutSettings;
  canEdit: boolean;
}

function Field({ label, name, value, disabled }: { label: string; name: string; value: string; disabled: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input name={name} defaultValue={value} disabled={disabled} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm disabled:bg-gray-50" />
    </div>
  );
}

function Area({ label, name, value, disabled, rows = 3 }: { label: string; name: string; value: string; disabled: boolean; rows?: number }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea name={name} defaultValue={value} disabled={disabled} rows={rows} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-y disabled:bg-gray-50" />
    </div>
  );
}

function JsonArea({ label, name, value, disabled }: { label: string; name: string; value: unknown; disabled: boolean }) {
  return <Area label={label} name={name} value={JSON.stringify(value, null, 2)} disabled={disabled} rows={8} />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

function AboutFileUpload({ value, disabled, onChange }: { value: string; disabled: boolean; onChange: (url: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function upload(file: File) {
    setError('');
    setUploading(true);
    try {
      const body = new FormData();
      body.append('file', file);
      body.append('module', 'about');
      const res = await fetch('/api/upload', { method: 'POST', body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">Organisational Structure Image/PDF</label>
      <input type="hidden" name="organization.mediaUrl" value={value} />
      <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
        <button type="button" disabled={disabled || uploading} onClick={() => inputRef.current?.click()} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 disabled:text-gray-400">
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileUp className="w-4 h-4" />}
          {uploading ? 'Uploading...' : 'Upload image or PDF'}
        </button>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif,application/pdf" className="hidden" onChange={(event) => { const file = event.target.files?.[0]; if (file) void upload(file); }} />
        {value && <p className="text-xs text-gray-500 mt-2 break-all">{value}</p>}
        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default function AboutEditor({ settings, canEdit }: Props) {
  const [state, formAction, pending] = useActionState(saveAboutAction, {});
  const [mediaUrl, setMediaUrl] = useState(settings.organization.mediaUrl);
  const disabled = !canEdit || pending;

  return (
    <form action={formAction} className="space-y-8">
      {state?.error && <p className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">{state.error}</p>}
      {state?.success && <p className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">About Us content saved.</p>}

      <Section title="1. Hero Banner">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Title" name="hero.title" value={settings.hero.title} disabled={disabled} />
          <Field label="Subtitle" name="hero.subtitle" value={settings.hero.subtitle} disabled={disabled} />
        </div>
      </Section>

      <Section title="2. Who We Are">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Eyebrow" name="overview.eyebrow" value={settings.overview.eyebrow} disabled={disabled} />
          <Field label="Heading" name="overview.heading" value={settings.overview.heading} disabled={disabled} />
        </div>
        <JsonArea label="Paragraphs JSON" name="overview.paragraphs" value={settings.overview.paragraphs} disabled={disabled} />
        <JsonArea label="Highlights JSON" name="overview.highlights" value={settings.overview.highlights} disabled={disabled} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Image URL" name="overview.image" value={settings.overview.image ?? ''} disabled={disabled} />
          <Field label="Image alt text" name="overview.imageAlt" value={settings.overview.imageAlt ?? ''} disabled={disabled} />
        </div>
      </Section>

      <Section title="3. Vision & Mission">
        <Field label="Vision heading" name="vision.heading" value={settings.visionMission.vision.heading} disabled={disabled} />
        <Area label="Vision body" name="vision.body" value={settings.visionMission.vision.body} disabled={disabled} />
        <Field label="Mission heading" name="mission.heading" value={settings.visionMission.mission.heading} disabled={disabled} />
        <Area label="Mission body" name="mission.body" value={settings.visionMission.mission.body} disabled={disabled} />
      </Section>

      <Section title="4. Key Functions & Responsibilities">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Eyebrow" name="mandates.eyebrow" value={settings.mandates.eyebrow} disabled={disabled} />
          <Field label="Heading" name="mandates.heading" value={settings.mandates.heading} disabled={disabled} />
        </div>
        <Area label="Description" name="mandates.description" value={settings.mandates.description} disabled={disabled} />
        <JsonArea label="Functions JSON" name="mandates.items" value={settings.mandates.items} disabled={disabled} />
      </Section>

      <Section title="5. Organizational Structure">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Eyebrow" name="organization.eyebrow" value={settings.organization.eyebrow} disabled={disabled} />
          <Field label="Heading" name="organization.heading" value={settings.organization.heading} disabled={disabled} />
        </div>
        <Area label="Description" name="organization.description" value={settings.organization.description} disabled={disabled} />
        <AboutFileUpload value={mediaUrl} disabled={disabled} onChange={setMediaUrl} />
        <Area label="Note" name="organization.note" value={settings.organization.note} disabled={disabled} />
        <JsonArea label="Structure JSON" name="organization.structure" value={settings.organization.structure} disabled={disabled} />
      </Section>

      <Section title="6. Management Team">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Eyebrow" name="team.eyebrow" value={settings.team.eyebrow} disabled={disabled} />
          <Field label="Heading" name="team.heading" value={settings.team.heading} disabled={disabled} />
        </div>
        <Area label="Description" name="team.description" value={settings.team.description} disabled={disabled} />
        <JsonArea label="Team members JSON" name="team.members" value={settings.team.members} disabled={disabled} />
      </Section>

      <Section title="7. Partners & Stakeholders">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Eyebrow" name="partners.eyebrow" value={settings.partners.eyebrow} disabled={disabled} />
          <Field label="Heading" name="partners.heading" value={settings.partners.heading} disabled={disabled} />
        </div>
        <Area label="Description" name="partners.description" value={settings.partners.description} disabled={disabled} />
        <JsonArea label="Partners JSON" name="partners.items" value={settings.partners.items} disabled={disabled} />
      </Section>

      <Section title="8. Call To Action">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Eyebrow" name="cta.eyebrow" value={settings.cta.eyebrow} disabled={disabled} />
          <Field label="Heading" name="cta.heading" value={settings.cta.heading} disabled={disabled} />
        </div>
        <Area label="Body" name="cta.body" value={settings.cta.body} disabled={disabled} />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Primary label" name="cta.primaryLabel" value={settings.cta.primaryLabel} disabled={disabled} />
          <Field label="Primary link" name="cta.primaryHref" value={settings.cta.primaryHref} disabled={disabled} />
          <Field label="Secondary label" name="cta.secondaryLabel" value={settings.cta.secondaryLabel} disabled={disabled} />
          <Field label="Secondary link" name="cta.secondaryHref" value={settings.cta.secondaryHref} disabled={disabled} />
        </div>
      </Section>

      <button type="submit" disabled={disabled} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
        <Save className="w-4 h-4" /> {pending ? 'Saving...' : 'Save About Us'}
      </button>
    </form>
  );
}

