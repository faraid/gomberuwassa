export interface ProgramsHeroData {
  title: string;
  subtitle: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

const defaultData: ProgramsHeroData = {
  title: "Our Programs",
  subtitle: "Integrated Water, Sanitation & Community Development Services",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
  ],
};

export default function ProgramsHero({
  data = defaultData,
}: {
  data?: ProgramsHeroData;
}) {
  const lastIndex = data.breadcrumbs.length - 1;

  return (
    <section className="page-hero programs-hero" aria-labelledby="page-hero-title">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="wrap page-hero-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {data.breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="breadcrumb-item">
              {i < lastIndex ? (
                <>
                  <a href={crumb.href}>{crumb.label}</a>
                  <span className="breadcrumb-sep" aria-hidden="true">›</span>
                </>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 id="page-hero-title">{data.title}</h1>
        <p className="page-hero-subtitle">{data.subtitle}</p>
      </div>
    </section>
  );
}
