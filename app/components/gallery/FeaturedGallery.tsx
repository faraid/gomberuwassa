import Image from 'next/image';
import { CalendarDays, MapPin, Tag } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import type { PublicGalleryItem } from '@/lib/services/gallery.service';

type GalleryDisplayItem = PublicGalleryItem & {
  location?: string;
  date?: string;
};

function fallbackItems(): GalleryDisplayItem[] {
  return galleryItems
    .filter((item) => item.featured)
    .slice(0, 3)
    .map((item) => ({
      id: item.id,
      slug: item.id,
      title: item.title,
      category: item.category,
      caption: item.description,
      imageUrl: item.image,
      featured: Boolean(item.featured),
      displayOrder: 0,
      location: item.location,
      date: item.date,
    }));
}

interface Props {
  items?: PublicGalleryItem[];
}

export default function FeaturedGallery({ items }: Props) {
  const featured = items && items.length > 0 ? items : fallbackItems();
  const lead = featured[0] as GalleryDisplayItem | undefined;
  const side = featured.slice(1) as GalleryDisplayItem[];

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
              <Image src={lead.imageUrl} fill sizes="560px" alt={lead.title} />
            </div>
            <div className="featured-gallery-caption">
              <div className="gallery-meta-line">
                <span><Tag size={13} /> {lead.category}</span>
                {lead.location && <span><MapPin size={13} /> {lead.location}</span>}
                {lead.date && <span><CalendarDays size={13} /> {lead.date}</span>}
              </div>
              <h3>{lead.title}</h3>
              <p>{lead.caption}</p>
            </div>
          </article>

          <div className="featured-gallery-side">
            {side.map((item) => (
              <article className="featured-gallery-small" key={item.id}>
                <div className="featured-gallery-small-image">
                  <Image src={item.imageUrl} fill sizes="260px" alt={item.title} />
                </div>
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.location ?? item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
