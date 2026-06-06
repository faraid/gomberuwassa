import { Droplet, Handshake, Toilet, Users } from "lucide-react";
import { galleryCategories } from "../../data/gallery";
import type { GalleryCategory } from "../../data/gallery";
import type { LucideIcon } from "lucide-react";

const categoryMeta: Record<
  GalleryCategory,
  { icon: LucideIcon; tone: "blue" | "green"; body: string }
> = {
  "Water Projects": {
    icon: Droplet,
    tone: "blue",
    body: "Photos of boreholes, tanks, water points, and supply schemes.",
  },
  "Community Engagement": {
    icon: Users,
    tone: "green",
    body: "Community participation, outreach, and local ownership activities.",
  },
  "Sanitation & Hygiene": {
    icon: Toilet,
    tone: "blue",
    body: "Hygiene promotion, sanitation awareness, and school WASH activities.",
  },
  "Stakeholder Meetings": {
    icon: Handshake,
    tone: "green",
    body: "Coordination meetings with partners, agencies, and community leaders.",
  },
};

export default function GalleryCategories() {
  return (
    <section className="gallery-categories">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">GALLERY AREAS</p>
          <h2>Photo Categories</h2>
          <p>
            Gallery content is organized by service area so future CMS uploads
            can be classified and displayed consistently.
          </p>
        </div>

        <div className="gallery-category-grid">
          {galleryCategories.map((category) => {
            const meta = categoryMeta[category];
            const Icon = meta.icon;

            return (
              <article className="gallery-category-card" key={category}>
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
