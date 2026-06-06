import { newsArticles, newsCategories } from "../../data/news";

export default function NewsOverview() {
  const items = [
    { value: newsArticles.length, label: "Published Updates" },
    { value: newsCategories.length, label: "News Categories" },
    { value: newsArticles.filter((item) => item.featured).length, label: "Featured Stories" },
    { value: "2024", label: "Latest Reporting Year" },
  ];

  return (
    <section className="news-overview" aria-label="News overview">
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
