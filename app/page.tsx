import Image from "next/image";
import StatCounter from "./components/StatCounter";
import {
  Award,
  Droplet,
  Handshake,
  MapPin,
  Phone,
  Sprout,
  Toilet,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Programs", href: "/programs" },
  { label: "News & Updates", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const values = [
  {
    icon: Droplet,
    title: "Clean Water",
    body: "Expanding access to safe and reliable water supply.",
    tone: "blue",
  },
  {
    icon: Users,
    title: "Healthy Communities",
    body: "Promoting hygiene and sanitation for better health.",
    tone: "green",
  },
  {
    icon: Handshake,
    title: "Sustainable Solutions",
    body: "Implementing durable and community-driven solutions.",
    tone: "blue",
  },
  {
    icon: TrendingUp,
    title: "Accountability",
    body: "Transparent management and responsible service.",
    tone: "green",
  },
  {
    icon: Users,
    title: "Community Focused",
    body: "Working together with communities for lasting impact.",
    tone: "blue",
  },
];

const projects = [
  {
    image: "/project-solar.png",
    badge: "IN PROGRESS",
    location: "Dukku, Gombe LGA",
    title: "Solar Borehole Scheme",
    body: "Construction of solar-powered borehole to provide clean water to the community.",
    progress: 75,
  },
  {
    image: "/project-rural.png",
    badge: "IN PROGRESS",
    location: "Funakaye LGA",
    title: "Rural Water Supply Scheme",
    body: "Provision of sustainable piped water supply to rural communities.",
    progress: 60,
  },
  {
    image: "/project-tank.png",
    badge: "COMPLETED",
    location: "Billiri LGA",
    title: "Borehole & Overhead Tank",
    body: "Successfully delivered clean water facility to the community.",
    progress: 100,
  },
];

const news = [
  {
    image: "/news-meeting.png",
    title: "RUWASA Holds Stakeholders Meeting on Sustainable Water Services",
    date: "May 15, 2024",
    body: "The meeting focused on strengthening partnership and improving service delivery across the state...",
  },
  {
    image: "/news-water-day.png",
    title: "World Water Day 2024: RUWASA Promotes Water Conservation in Gombe",
    date: "March 22, 2024",
    body: "Community sensitization and awareness campaign held across several LGAs to promote water conservation...",
  },
  {
    image: "/news-commissioning.png",
    title: "Commissioning of Water Facility in Kwami Community",
    date: "Feb 10, 2024",
    body: "A new water facility commissioned to improve access to clean and safe water in the community...",
  },
];

const programs = [
  {
    icon: Wrench,
    title: "Water Supply",
    body: "Expanding access to clean and safe water in rural areas.",
    tone: "blue",
  },
  {
    icon: Toilet,
    title: "Sanitation & Hygiene",
    body: "Promoting sanitation and hygiene for healthier communities.",
    tone: "green",
  },
  {
    icon: Users,
    title: "Capacity Building",
    body: "Building local capacity for sustainable water and sanitation services.",
    tone: "blue",
  },
  {
    icon: Sprout,
    title: "Community Engagement",
    body: "Engaging communities in planning and managing water resources.",
    tone: "blue",
  },
];

const stats = [
  { icon: Droplet, value: "312+", label: "Water Points Constructed" },
  { icon: Users, value: "245,000+", label: "People with Improved Water Access" },
  { icon: MapPin, value: "114+", label: "Communities Served" },
  { icon: Handshake, value: "25+", label: "Partners & Donors" },
  { icon: Award, value: "100%", label: "Commitment to Service Excellence" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="wrap header-grid">
          <Image
            className="logo"
            src="/brand-logo.png"
            width={265}
            height={88}
            alt="Gombe State RUWASA"
            priority
          />
          <nav className="nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={item.label === "Home" ? "is-active" : ""}
                aria-current={item.label === "Home" ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="phone" href="tel:08132696321">
            <Phone size={22} strokeWidth={3} />
            <span>
              <strong>0813 269 6321</strong>
              <small>info@ruwasa.gombe.gov.ng</small>
            </span>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>
              Providing Sustainable
              <br />
              Water &amp; Sanitation
              <br />
              Services
            </h1>
            <p className="hero-lead">for Rural Communities in Gombe State</p>
            <p className="hero-text">
              We are committed to improving access to clean water, promoting
              sanitation and enhancing the quality of life in every rural
              community.
            </p>
            <div className="actions">
              <a className="button button-primary" href="#">Learn More</a>
              <a className="button button-secondary" href="#">Our Projects</a>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/hero-water-facility.png"
              alt="Children washing hands at a Gombe State RUWASA water facility"
              fill
              priority
              sizes="580px"
            />
          </div>
        </div>
      </section>

      <section className="values">
        <div className="wrap value-grid">
          {values.map(({ icon: Icon, title, body, tone }) => (
            <article className="value-card" key={title}>
              <span className={`round-icon ${tone}`}>
                <Icon size={29} strokeWidth={2.25} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects">
        <div className="wrap project-grid">
          <div className="project-intro">
            <p className="eyebrow">OUR IMPACT</p>
            <h2>Ongoing Water Projects</h2>
            <p>
              We are implementing sustainable water supply schemes across
              communities to ensure no one is left behind.
            </p>
            <a className="button button-primary arrow" href="#">View All Projects <span>→</span></a>
          </div>
          <div className="cards">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="card-image">
                  <Image src={project.image} fill sizes="210px" alt="" />
                  <b className={project.badge === "COMPLETED" ? "done" : ""}>
                    {project.badge}
                  </b>
                </div>
                <div className="card-body">
                  <p className="place"><MapPin size={13} />{project.location}</p>
                  <h3>{project.title}</h3>
                  <p>{project.body}</p>
                  <strong>{project.progress}% Complete</strong>
                  <span className="meter"><i style={{ width: `${project.progress}%` }} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-programs">
        <div className="wrap lower-grid">
          <div>
            <div className="section-line">
              <h2>Latest News &amp; Updates</h2>
              <a href="#">View All News <span>→</span></a>
            </div>
            <div className="news-list">
              {news.map((item) => (
                <article className="news-item" key={item.title}>
                  <Image src={item.image} width={147} height={84} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <time>{item.date}</time>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <aside className="programs">
            <h2>Our Programs</h2>
            {programs.map(({ icon: Icon, title, body, tone }) => (
              <article className="program" key={title}>
                <span className={`program-icon ${tone}`}>
                  <Icon size={29} strokeWidth={2.5} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
                <b>→</b>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stat-grid">
          {stats.map(({ icon: Icon, value, label }) => (
            <article className="stat" key={label}>
              <Icon size={50} strokeWidth={2.2} />
              <div>
                <strong><StatCounter value={value} /></strong>
                <p>{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
