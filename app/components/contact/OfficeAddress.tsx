import { Building, Landmark, Map, Navigation, ShieldCheck } from 'lucide-react';
import { contactDefaults, type ContactSettings } from '@/lib/constants/contact';

interface Props {
  settings?: ContactSettings;
}

function mapSrc(input: string) {
  const srcMatch = input.match(/src=["']([^"']+)["']/i);
  return srcMatch?.[1] ?? input.trim();
}

export default function OfficeAddress({ settings = contactDefaults }: Props) {
  const addressDetails = [
    { label: 'Agency', value: settings.agencyName },
    { label: 'Location', value: settings.addressLocation },
    { label: 'Country', value: settings.country },
  ];
  const embedSrc = mapSrc(settings.mapEmbedUrl);

  return (
    <section className="office-address" id="office-address">
      <div className="wrap office-address-grid">
        <div className="office-address-card">
          <p className="eyebrow">{settings.addressSectionLabel}</p>
          <h2>{settings.addressHeading}</h2>
          <p>{settings.addressDescription}</p>

          <dl className="address-list">
            {addressDetails.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="office-guidance">
            <ShieldCheck size={20} strokeWidth={2.2} />
            <span>{settings.visitorNotice}</span>
          </div>
        </div>

        {embedSrc ? (
          <iframe
            className="google-map-placeholder"
            src={embedSrc}
            title="RUWASA Headquarters map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div
            className="google-map-placeholder"
            role="img"
            aria-label="Google Maps location placeholder for RUWASA headquarters"
          >
            <div className="map-grid-lines" aria-hidden="true" />
            <span className="map-marker">
              <Navigation size={30} strokeWidth={2.4} />
            </span>
            <div className="map-placeholder-content">
              <Map size={58} strokeWidth={1.25} />
              <h3>Google Maps Placeholder</h3>
              <p>
                Embedded map for RUWASA Headquarters, Gombe State will appear
                here.
              </p>
            </div>
            <div className="map-location-chip">
              <Building size={16} strokeWidth={2.2} />
              RUWASA Headquarters
            </div>
            <div className="map-gov-chip">
              <Landmark size={16} strokeWidth={2.2} />
              Gombe State
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

