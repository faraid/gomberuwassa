import { programs } from "../../data/programs";

export default function ProgramsOverview() {
  const items = [
    { value: programs.length, label: "Core Programs" },
    { value: "11", label: "LGAs Covered" },
    { value: "4", label: "Service Pillars" },
    { value: "100%", label: "Community Focus" },
  ];

  return (
    <section className="programs-overview" aria-label="Programs overview">
      <div className="wrap proj-overview-grid">
        {items.map((item) => (
          <div className="proj-overview-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
