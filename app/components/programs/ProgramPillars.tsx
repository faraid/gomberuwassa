import { programPillars } from "../../data/programs";

export default function ProgramPillars() {
  return (
    <section className="program-pillars">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">PROGRAM APPROACH</p>
          <h2>How RUWASA Delivers Lasting Impact</h2>
          <p>
            Each programme is structured to combine infrastructure delivery,
            behaviour change, local ownership, and long-term service support.
          </p>
        </div>

        <div className="program-pillar-grid">
          {programPillars.map(({ icon: Icon, tone, title, body }) => (
            <article className="program-pillar-card" key={title}>
              <span className={`round-icon ${tone}`} aria-hidden="true">
                <Icon size={24} strokeWidth={2.25} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
