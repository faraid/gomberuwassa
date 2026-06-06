import { Building, Landmark, Map, Navigation, ShieldCheck } from "lucide-react";

const addressDetails = [
  { label: "Agency", value: "Gombe State Rural Water Supply and Sanitation Agency" },
  { label: "Location", value: "RUWASA Headquarters, Gombe, Gombe State" },
  { label: "Country", value: "Nigeria" },
];

export default function OfficeAddress() {
  return (
    <section className="office-address" id="office-address">
      <div className="wrap office-address-grid">
        <div className="office-address-card">
          <p className="eyebrow">OFFICE ADDRESS</p>
          <h2>Visit the RUWASA Headquarters</h2>
          <p>
            The Agency receives official visitors, community representatives,
            contractors, development partners, and stakeholders through the
            appropriate administrative desks.
          </p>

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
            <span>
              Visitors are encouraged to call ahead for appointments, field
              reports, and document submissions.
            </span>
          </div>
        </div>

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
      </div>
    </section>
  );
}
