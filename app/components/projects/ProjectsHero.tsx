export interface ProjectsHeroData {
  title: string;
  subtitle: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

const defaultData: ProjectsHeroData = {
  title: "Our Projects",
  subtitle: "Water Supply & Sanitation Infrastructure Across Gombe State",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
  ],
};

export default function ProjectsHero({ data = defaultData }: { data?: ProjectsHeroData }) {
  const lastIndex = data.breadcrumbs.length - 1;

  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
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
