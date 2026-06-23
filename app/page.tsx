import Image from "next/image";
import Link from "next/link";
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
import {
  getHomepageHero,
  getActiveValueCards,
  getActiveStatistics,
  getFeaturedProjectIds,
  getFeaturedNewsIds,
  getActivePrograms,
  getSiteSettings,
} from "@/lib/services/homepage.service";
import { listPublishedProjects } from "@/lib/services/projects.service";
import { listPublishedArticles } from "@/lib/services/news.service";

const iconMap: Record<string, React.ElementType> = {
  Droplet, Users, Handshake, TrendingUp, Award, MapPin,
  Wrench, Toilet, Sprout, Phone, Mail: Users, Globe: Users,
  Shield: Award, Sun: Award, Heart: Users, BookOpen: Users,
  Target: Award, Activity: TrendingUp,
};

function getIcon(name: string): React.ElementType {
  return iconMap[name] || Droplet;
}

export default async function Home() {
  const [hero, values, stats, featuredProjectIds, featuredNewsIds, programs, settings] = await Promise.all([
    getHomepageHero(),
    getActiveValueCards(),
    getActiveStatistics(),
    getFeaturedProjectIds(),
    getFeaturedNewsIds(),
    getActivePrograms(),
    getSiteSettings(),
  ]);

  const allProjects = await listPublishedProjects();
  const featuredProjects = featuredProjectIds.length > 0
    ? allProjects.filter(p => featuredProjectIds.includes(p.id))
    : allProjects.slice(0, 3);
  
  const allNews = await listPublishedArticles();
  const featuredNews = featuredNewsIds.length > 0
    ? allNews.filter(n => featuredNewsIds.includes(n.id))
    : allNews.slice(0, 3);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="wrap header-grid">
          <Link href="/" aria-label="Gombe State RUWASA - Go to homepage">
            <Image
              className="logo"
              src={settings.logo}
              width={236}
              height={78}
              alt="Gombe State RUWASA"
              priority
            />
          </Link>
          <nav className="nav" aria-label="Primary navigation">
            <Link href="/" className="is-active" aria-current="page">Home</Link>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/programs">Programs</a>
            <a href="/news">News &amp; Updates</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </nav>
          <a className="phone" href={"tel:" + settings.phone.replace(/[^0-9]/g, "")}>
            <Phone size={22} strokeWidth={3} />
            <span>
              <strong>{settings.phone}</strong>
              <small>{settings.email}</small>
            </span>
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1 dangerouslySetInnerHTML={{ __html: hero.title.replace(/\n/g, "<br />") }} />
            <p className="hero-lead">{hero.subtitle}</p>
            <p className="hero-text">{hero.description}</p>
            <div className="actions">
              <a className="button button-primary" href={hero.primaryBtnLink}>{hero.primaryBtnText}</a>
              <a className="button button-secondary" href={hero.secondaryBtnLink}>{hero.secondaryBtnText}</a>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src={hero.heroImageUrl}
              alt="Gombe State RUWASA water facility"
              fill
              priority
              sizes="580px"
            />
          </div>
        </div>
      </section>

      <section className="values">
        <div className="wrap value-grid">
          {values.map(({ iconName, title, description, tone }) => {
            const Icon = getIcon(iconName);
            return (
              <article className="value-card" key={title + tone}>
                <span className={"round-icon " + tone}>
                  <Icon size={29} strokeWidth={2.25} />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
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
            <a className="button button-primary arrow" href="/projects">View All Projects <span>&rarr;</span></a>
          </div>
          <div className="cards">
            {featuredProjects.map((project) => (
              <Link href={"/projects/" + project.id} className="project-card" key={project.id}>
                <div className="card-image">
                  <Image src={project.featuredImageUrl || "/project-solar.png"} fill sizes="210px" alt="" />
                  <b className={project.status === "completed" ? "done" : ""}>
                    {project.status === "ongoing" ? "IN PROGRESS" : project.status.toUpperCase()}
                  </b>
                </div>
                <div className="card-body">
                  <p className="place"><MapPin size={13} />{project.lga}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong>{project.progress}% Complete</strong>
                  <span className="meter"><i style={{ width: project.progress + "%" }} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="news-programs">
        <div className="wrap lower-grid">
          <div>
            <div className="section-line">
              <h2>Latest News &amp; Updates</h2>
              <a href="/news">View All News <span>&rarr;</span></a>
            </div>
            <div className="news-list">
              {featuredNews.map((item) => (
                <Link href={"/news/" + item.slug} className="news-item" key={item.id}>
                  <Image src={item.featuredImageUrl || "/news-meeting.png"} width={147} height={84} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <time>{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : ""}</time>
                    <p>{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <aside className="programs">
            <h2>Our Programs</h2>
            {programs.map(({ iconName, title, description, tone, linkUrl }) => {
              const Icon = getIcon(iconName);
              return (
                <Link href={linkUrl} className="program" key={title + tone}>
                  <span className={"program-icon " + tone}>
                    <Icon size={29} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <b>&rarr;</b>
                </Link>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stat-grid">
          {stats.map(({ iconName, value, label }) => {
            const Icon = getIcon(iconName);
            return (
              <article className="stat" key={label}>
                <Icon size={50} strokeWidth={2.2} />
                <div>
                  <strong><StatCounter value={value} /></strong>
                  <p>{label}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
