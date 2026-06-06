import Image from "next/image";
import { CalendarDays, MapPin, Tag } from "lucide-react";
import { galleryItems } from "../../data/gallery";

export default function FeaturedGallery() {
  const featured = galleryItems.filter((item) => item.featured).slice(0, 3);
  const lead = featured[0];
  const side = featured.slice(1);

  if (!lead) return null;

  return (
    <section className="featured-gallery-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">FEATURED PHOTOS</p>
          <h2>RUWASA in the Field</h2>
          <p>
            A visual record of clean water infrastructure, community engagement,
            sanitation activities, and stakeholder collaboration across Gombe State.
          </p>
        </div>

        <div className="featured-gallery-grid">
          <article className="featured-gallery-lead">
            <div className="featured-gallery-image">
              <Image src={lead.image} fill sizes="560px" alt={lead.title} />
            </div>
            <div className="featured-gallery-caption">
              <div className="gallery-meta-line">
                <span><Tag size={13} /> {lead.category}</span>
                <span><MapPin size={13} /> {lead.location}</span>
                <span><CalendarDays size={13} /> {lead.date}</span>
              </div>
              <h3>{lead.title}</h3>
              <p>{lead.description}</p>
            </div>
          </article>

          <div className="featured-gallery-side">
            {side.map((item) => (
              <article className="featured-gallery-small" key={item.id}>
                <div className="featured-gallery-small-image">
                  <Image src={item.image} fill sizes="260px" alt={item.title} />
                </div>
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
