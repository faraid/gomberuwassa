import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { contactDefaults, type ContactSettings } from '@/lib/constants/contact';

interface Props {
  settings?: ContactSettings;
}

export default function ContactInformation({ settings = contactDefaults }: Props) {
  const contactItems = [
    {
      icon: Phone,
      title: 'Phone',
      detail: settings.phoneNumber,
      note: settings.phoneHelper,
      href: `tel:${settings.phoneNumber.replace(/\s+/g, '')}`,
      tone: 'blue',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: settings.emailAddress,
      note: settings.emailHelper,
      href: `mailto:${settings.emailAddress}`,
      tone: 'green',
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: settings.officeTitle,
      note: settings.officeHelper,
      href: '#office-address',
      tone: 'blue',
    },
    {
      icon: Clock,
      title: 'Hours',
      detail: settings.workingHours,
      note: settings.hoursHelper,
      href: '#contact-form',
      tone: 'green',
    },
  ];

  return (
    <section className="contact-information">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">{settings.infoSectionLabel}</p>
          <h2>{settings.infoHeading}</h2>
          <p>{settings.infoDescription}</p>
        </div>

        <div className="contact-info-grid">
          {contactItems.map(({ icon: Icon, title, detail, note, href, tone }) => (
            <a className="contact-info-card" href={href} key={title}>
              <span className={`contact-info-icon ${tone}`}>
                <Icon size={27} strokeWidth={2.2} />
              </span>
              <span className="contact-info-label">{title}</span>
              <strong>{detail}</strong>
              <span className="contact-info-note">{note}</span>
            </a>
          ))}
        </div>

        <div className="contact-service-note">
          <Send size={18} strokeWidth={2.2} />
          <p>{settings.communityReportNotice}</p>
        </div>
      </div>
    </section>
  );
}

