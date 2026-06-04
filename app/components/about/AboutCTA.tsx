export interface AboutCTAData {
  eyebrow: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

const defaultData: AboutCTAData = {
  eyebrow: "GET INVOLVED",
  heading: "Join Us in Delivering\nClean Water to Every Community",
  body: "Explore our ongoing projects, learn how we work, or reach out to partner with RUWASA in bringing safe water and sanitation to rural Gombe State.",
  primaryLabel: "View Our Projects",
  primaryHref: "/projects",
  secondaryLabel: "Contact RUWASA",
  secondaryHref: "/contact",
};

export default function AboutCTA({ data = defaultData }: { data?: AboutCTAData }) {
  return (
    <section className="about-cta">
      <div className="wrap">
        <p className="eyebrow about-cta-eyebrow">{data.eyebrow}</p>
        <h2>
          {data.heading.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p>{data.body}</p>
        <div className="actions">
          <a className="button button-white" href={data.primaryHref}>
            {data.primaryLabel}
          </a>
          <a className="button button-outline-white" href={data.secondaryHref}>
            {data.secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
