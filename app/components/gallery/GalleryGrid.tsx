import Image from 'next/image';
import { MapPin, Tag } from 'lucide-react';
import { galleryItems } from '../../data/gallery';
import type { PublicGalleryItem } from '@/lib/services/gallery.service';

type GalleryDisplayItem = PublicGalleryItem & {
  location?: string;
  date?: string;
};

function fallbackItems(): GalleryDisplayItem[] {
  return galleryItems.map((item) => ({
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

export default function GalleryGrid({ items }: Props) {
  const gallery = items && items.length > 0 ? items : fallbackItems();

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
          {(gallery as GalleryDisplayItem[]).map((item) => (
            <article className="gallery-card" key={item.id}>
              <div className="gallery-card-image">
                <Image src={item.imageUrl} fill sizes="320px" alt={item.title} />
                {item.date && <b>{item.date}</b>}
              </div>
              <div className="gallery-card-body">
                <div className="gallery-meta-line compact">
                  <span><Tag size={12} /> {item.category}</span>
                  {item.location && <span><MapPin size={12} /> {item.location}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
