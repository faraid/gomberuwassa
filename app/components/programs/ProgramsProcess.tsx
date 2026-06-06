const steps = [
  {
    title: "Community Assessment",
    body: "RUWASA identifies needs through community engagement, LGA coordination, and field verification.",
  },
  {
    title: "Programme Planning",
    body: "Technical teams align interventions with available resources, sustainability needs, and implementation priorities.",
  },
  {
    title: "Delivery & Mobilization",
    body: "Infrastructure, training, hygiene promotion, and stakeholder activities are implemented with community participation.",
  },
  {
    title: "Monitoring & Support",
    body: "Programme outcomes are monitored through reporting, maintenance feedback, and continued community support.",
  },
];

export default function ProgramsProcess() {
  return (
    <section className="program-process">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">DELIVERY MODEL</p>
          <h2>From Community Need to Sustained Service</h2>
          <p>
            RUWASA programmes follow a practical delivery model that connects
            assessment, implementation, and post-project support.
          </p>
        </div>

        <div className="process-track">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
