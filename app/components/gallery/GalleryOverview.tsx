import { galleryCategories, galleryItems } from "../../data/gallery";

export default function GalleryOverview() {
  const items = [
    { value: galleryItems.length, label: "Gallery Items" },
    { value: galleryCategories.length, label: "Photo Categories" },
    { value: galleryItems.filter((item) => item.featured).length, label: "Featured Photos" },
    { value: "11", label: "LGAs Represented" },
  ];

  return (
    <section className="gallery-overview" aria-label="Gallery overview">
      <div className="wrap proj-overview-grid">
        {items.map((item) => (
          <div className="proj-overview-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
