import { Map, Info } from "lucide-react";

export default function ProjectMapPlaceholder() {
  return (
    <section className="map-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">GIS INTEGRATION</p>
          <h2>Project Locations Across Gombe State</h2>
          <p>
            An interactive GIS map showing all RUWASA project sites, water points,
            and infrastructure across all 11 LGAs.
          </p>
        </div>

        <div className="map-placeholder-box" role="img" aria-label="Interactive map coming soon">
          <span className="map-icon" aria-hidden="true">
            <Map size={64} strokeWidth={1.2} />
          </span>
          <h3>Project Mapping System</h3>
          <p>
            An interactive GIS map showing all project locations across Gombe State
            is currently under development.
          </p>
          <p className="map-coming-soon">Coming Soon</p>
        </div>

        <p className="map-note">
          <Info size={15} />
          The mapping system will display real-time project status, water point locations,
          and coverage data integrated with the National Water Resources Information System (NWRIS).
        </p>
      </div>
    </section>
  );
}
