import { programs } from "../../data/programs";

const STATUS_LABEL = {
  active: "Active",
  expanding: "Expanding",
  planned: "Planned",
};

export default function ProgramsList() {
  return (
    <section className="program-list-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Core RUWASA Programs</h2>
          <p>
            These programme areas organize RUWASA&apos;s field delivery,
            stakeholder coordination, and community support work across Gombe State.
          </p>
        </div>

        <div className="program-list-grid">
          {programs.map(({ icon: Icon, tone, title, category, status, summary, objectives, beneficiaries, coverage, leadUnit }) => (
            <article className="program-detail-card" key={title}>
              <div className="program-detail-head">
                <span className={`program-detail-icon ${tone}`} aria-hidden="true">
                  <Icon size={30} strokeWidth={2.35} />
                </span>
                <div>
                  <span className="program-category">{category}</span>
                  <h3>{title}</h3>
                </div>
                <b className={`program-status status-${status}`}>{STATUS_LABEL[status]}</b>
              </div>
              <p className="program-summary">{summary}</p>
              <ul className="program-objectives">
                {objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
              <dl className="program-meta">
                <div>
                  <dt>Beneficiaries</dt>
                  <dd>{beneficiaries}</dd>
                </div>
                <div>
                  <dt>Coverage</dt>
                  <dd>{coverage}</dd>
                </div>
                <div>
                  <dt>Lead Unit</dt>
                  <dd>{leadUnit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
