'use client';

import { useActionState } from 'react';
import { Loader2, Save } from 'lucide-react';
import { updateContactSettingsAction, type ActionState } from './actions';
import type { ContactSettings } from '@/lib/constants/contact';

interface Props {
  settings: ContactSettings;
  canEdit: boolean;
}

const initialState: ActionState = {};

function TextField({ name, label, value, disabled }: { name: keyof ContactSettings; label: string; value: string; disabled: boolean }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      <input
        name={name}
        defaultValue={value}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
      />
    </label>
  );
}

function TextArea({ name, label, value, disabled, rows = 3 }: { name: keyof ContactSettings; label: string; value: string; disabled: boolean; rows?: number }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      <textarea
        name={name}
        defaultValue={value}
        disabled={disabled}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y disabled:bg-gray-50 disabled:text-gray-500"
      />
    </label>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      {children}
    </section>
  );
}

export default function ContactSettingsForm({ settings, canEdit }: Props) {
  const [state, formAction, pending] = useActionState(updateContactSettingsAction, initialState);
  const disabled = !canEdit || pending;

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm">
          Contact page content saved.
        </div>
      )}

      <Section title="Contact Information">
        <div className="grid grid-cols-2 gap-4">
          <TextField name="infoSectionLabel" label="Section label" value={settings.infoSectionLabel} disabled={disabled} />
          <TextField name="infoHeading" label="Main heading" value={settings.infoHeading} disabled={disabled} />
        </div>
        <TextArea name="infoDescription" label="Description" value={settings.infoDescription} disabled={disabled} />
        <div className="grid grid-cols-2 gap-4">
          <TextField name="phoneNumber" label="Phone number" value={settings.phoneNumber} disabled={disabled} />
          <TextField name="phoneHelper" label="Phone helper text" value={settings.phoneHelper} disabled={disabled} />
          <TextField name="emailAddress" label="Email address" value={settings.emailAddress} disabled={disabled} />
          <TextField name="emailHelper" label="Email helper text" value={settings.emailHelper} disabled={disabled} />
          <TextField name="officeTitle" label="Office title/address" value={settings.officeTitle} disabled={disabled} />
          <TextField name="officeHelper" label="Office helper text" value={settings.officeHelper} disabled={disabled} />
          <TextField name="workingHours" label="Working hours" value={settings.workingHours} disabled={disabled} />
          <TextField name="hoursHelper" label="Hours helper text" value={settings.hoursHelper} disabled={disabled} />
        </div>
        <TextArea name="communityReportNotice" label="Community report notice" value={settings.communityReportNotice} disabled={disabled} />
      </Section>

      <Section title="Contact Form Content">
        <div className="grid grid-cols-2 gap-4">
          <TextField name="formSectionLabel" label="Section label" value={settings.formSectionLabel} disabled={disabled} />
          <TextField name="formHeading" label="Heading" value={settings.formHeading} disabled={disabled} />
        </div>
        <TextArea name="formDescription" label="Description" value={settings.formDescription} disabled={disabled} />
        <div className="grid grid-cols-2 gap-4">
          <TextField name="officialCorrespondenceTitle" label="Official Correspondence title" value={settings.officialCorrespondenceTitle} disabled={disabled} />
          <TextArea name="officialCorrespondenceDescription" label="Official Correspondence description" value={settings.officialCorrespondenceDescription} disabled={disabled} />
          <TextField name="communitySupportTitle" label="Community Support title" value={settings.communitySupportTitle} disabled={disabled} />
          <TextArea name="communitySupportDescription" label="Community Support description" value={settings.communitySupportDescription} disabled={disabled} />
          <TextField name="responseHandlingTitle" label="Response Handling title" value={settings.responseHandlingTitle} disabled={disabled} />
          <TextArea name="responseHandlingDescription" label="Response Handling description" value={settings.responseHandlingDescription} disabled={disabled} />
        </div>
      </Section>

      <Section title="Contact Guidance">
        <div className="grid grid-cols-2 gap-4">
          <TextField name="guidanceSectionLabel" label="Section label" value={settings.guidanceSectionLabel} disabled={disabled} />
          <TextField name="guidanceHeading" label="Heading" value={settings.guidanceHeading} disabled={disabled} />
        </div>
        <TextArea name="guidanceDescription" label="Description" value={settings.guidanceDescription} disabled={disabled} />
        <div className="grid grid-cols-2 gap-4">
          <TextField name="prepareTitle" label="Prepare Your Enquiry title" value={settings.prepareTitle} disabled={disabled} />
          <TextArea name="prepareDescription" label="Prepare Your Enquiry description" value={settings.prepareDescription} disabled={disabled} />
          <TextField name="locationTitle" label="Share Location Details title" value={settings.locationTitle} disabled={disabled} />
          <TextArea name="locationDescription" label="Share Location Details description" value={settings.locationDescription} disabled={disabled} />
          <TextField name="officialRequestsTitle" label="Official Requests title" value={settings.officialRequestsTitle} disabled={disabled} />
          <TextArea name="officialRequestsDescription" label="Official Requests description" value={settings.officialRequestsDescription} disabled={disabled} />
        </div>
      </Section>

      <Section title="Office Address">
        <div className="grid grid-cols-2 gap-4">
          <TextField name="addressSectionLabel" label="Section label" value={settings.addressSectionLabel} disabled={disabled} />
          <TextField name="addressHeading" label="Heading" value={settings.addressHeading} disabled={disabled} />
        </div>
        <TextArea name="addressDescription" label="Description" value={settings.addressDescription} disabled={disabled} />
        <div className="grid grid-cols-2 gap-4">
          <TextField name="agencyName" label="Agency name" value={settings.agencyName} disabled={disabled} />
          <TextField name="addressLocation" label="Address/location" value={settings.addressLocation} disabled={disabled} />
          <TextField name="country" label="Country" value={settings.country} disabled={disabled} />
          <TextField name="visitorNotice" label="Visitor notice" value={settings.visitorNotice} disabled={disabled} />
        </div>
      </Section>

      <Section title="Map and Social Links">
        <TextArea name="mapEmbedUrl" label="Google Maps embed URL or iframe" value={settings.mapEmbedUrl} disabled={disabled} rows={4} />
        <div className="grid grid-cols-2 gap-4">
          <TextField name="facebookUrl" label="Facebook URL" value={settings.facebookUrl} disabled={disabled} />
          <TextField name="twitterUrl" label="Twitter/X URL" value={settings.twitterUrl} disabled={disabled} />
          <TextField name="instagramUrl" label="Instagram URL" value={settings.instagramUrl} disabled={disabled} />
          <TextField name="youtubeUrl" label="YouTube URL" value={settings.youtubeUrl} disabled={disabled} />
        </div>
      </Section>

      <div className="flex items-center justify-end gap-3 sticky bottom-0 bg-gray-50 py-4">
        {!canEdit && <p className="text-sm text-gray-500">Viewer role can view but not edit contact content.</p>}
        <button
          type="submit"
          disabled={disabled}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          {pending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          {pending ? 'Saving...' : 'Save Contact Content'}
        </button>
      </div>
    </form>
  );
}

