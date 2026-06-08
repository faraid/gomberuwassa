import type { NewsStats } from '@/lib/services/news.service';

interface Props {
  stats: NewsStats;
}

export default function NewsOverview({ stats }: Props) {
  const items = [
    { value: stats.publishedCount, label: 'Published Updates' },
    { value: stats.categoryCount, label: 'News Categories' },
    { value: stats.featuredCount, label: 'Featured Stories' },
    { value: stats.latestYear, label: 'Latest Reporting Year' },
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
