import { ClipboardCheck, FileText, MapPinned } from 'lucide-react';
import { contactDefaults, type ContactSettings } from '@/lib/constants/contact';

interface Props {
  settings?: ContactSettings;
}

export default function ContactGuidance({ settings = contactDefaults }: Props) {
  const guidanceItems = [
    {
      icon: ClipboardCheck,
      title: settings.prepareTitle,
      body: settings.prepareDescription,
    },
    {
      icon: MapPinned,
      title: settings.locationTitle,
      body: settings.locationDescription,
    },
    {
      icon: FileText,
      title: settings.officialRequestsTitle,
      body: settings.officialRequestsDescription,
    },
  ];

  return (
    <section className="contact-form-section" aria-labelledby="contact-guidance-title">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">{settings.guidanceSectionLabel}</p>
          <h2 id="contact-guidance-title">{settings.guidanceHeading}</h2>
          <p>{settings.guidanceDescription}</p>
        </div>

        <div className="contact-support-list">
          {guidanceItems.map(({ icon: Icon, title, body }) => (
            <article className="contact-support-item" key={title}>
              <span aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

