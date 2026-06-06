import Image from "next/image";
import { MapPin, Tag } from "lucide-react";
import { galleryItems } from "../../data/gallery";

export default function GalleryGrid() {
  return (
    <section className="gallery-grid-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">PHOTO ARCHIVE</p>
          <h2>Project &amp; Programme Gallery</h2>
          <p>
            Browse selected visuals from RUWASA-supported water supply,
            sanitation, hygiene, and community engagement activities.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.id}>
              <div className="gallery-card-image">
                <Image src={item.image} fill sizes="320px" alt={item.title} />
                <b>{item.date}</b>
              </div>
              <div className="gallery-card-body">
                <div className="gallery-meta-line compact">
                  <span><Tag size={12} /> {item.category}</span>
                  <span><MapPin size={12} /> {item.location}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
