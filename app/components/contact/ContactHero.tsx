const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function ContactHero() {
  const lastIndex = breadcrumbs.length - 1;

  return (
    <section className="page-hero contact-hero" aria-labelledby="page-hero-title">
      <div className="page-hero-bg" aria-hidden="true" />
      <div className="wrap page-hero-content">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="breadcrumb-item">
              {i < lastIndex ? (
                <>
                  <a href={crumb.href}>{crumb.label}</a>
                  <span className="breadcrumb-sep" aria-hidden="true">
                    &rsaquo;
                  </span>
                </>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>
        <h1 id="page-hero-title">Contact RUWASA</h1>
        <p className="page-hero-subtitle">
          Reach our team for enquiries, partnerships, reports, and support
        </p>
      </div>
    </section>
  );
}
