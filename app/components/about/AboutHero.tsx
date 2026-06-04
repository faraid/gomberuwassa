export interface AboutHeroData {
  title: string;
  subtitle: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

const defaultData: AboutHeroData = {
  title: "About RUWASA",
  subtitle: "Gombe State Rural Water Supply and Sanitation Agency",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
  ],
};

export default function AboutHero({ data = defaultData }: { data?: AboutHeroData }) {
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
