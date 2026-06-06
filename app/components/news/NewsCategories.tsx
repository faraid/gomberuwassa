import { Droplet, Handshake, Megaphone, Newspaper, Toilet, Users } from "lucide-react";
import { newsCategories } from "../../data/news";
import type { NewsCategory } from "../../data/news";

const categoryMeta: Record<NewsCategory, { icon: typeof Newspaper; tone: "blue" | "green"; body: string }> = {
  "Agency Updates": {
    icon: Newspaper,
    tone: "blue",
    body: "Official announcements and operational updates from the agency.",
  },
  "Water Supply": {
    icon: Droplet,
    tone: "green",
    body: "Updates on boreholes, water schemes, and clean water access.",
  },
  "Sanitation & Hygiene": {
    icon: Toilet,
    tone: "blue",
    body: "Stories on hygiene promotion and improved sanitation services.",
  },
  "Community Engagement": {
    icon: Users,
    tone: "green",
    body: "Field activities involving communities, leaders, and local groups.",
  },
  Partnerships: {
    icon: Handshake,
    tone: "blue",
    body: "Partner coordination, donor support, and stakeholder collaboration.",
  },
};

export default function NewsCategories() {
  return (
    <section className="news-categories">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">NEWS AREAS</p>
          <h2>Coverage Categories</h2>
          <p>
            News content is prepared around core agency themes so future CMS
            publishing can be organized and easy to browse.
          </p>
        </div>

        <div className="news-category-grid">
          {newsCategories.map((category) => {
            const meta = categoryMeta[category];
            const Icon = meta.icon === Newspaper ? Megaphone : meta.icon;

            return (
              <article className="news-category-card" key={category}>
                <span className={`round-icon ${meta.tone}`} aria-hidden="true">
                  <Icon size={24} strokeWidth={2.25} />
                </span>
                <h3>{category}</h3>
                <p>{meta.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
