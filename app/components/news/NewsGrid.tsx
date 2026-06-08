import Image from 'next/image';
import { CalendarDays, Tag } from 'lucide-react';
import type { PublicArticle } from '@/lib/services/news.service';

interface Props {
  articles: PublicArticle[];
}

function formatDate(d: Date): string {
  return new Date(d).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

export default function NewsGrid({ articles }: Props) {
  if (articles.length === 0) {
    return (
      <section className="news-grid-section">
        <div className="wrap">
          <div className="section-header">
            <p className="eyebrow">ALL UPDATES</p>
            <h2>News Archive</h2>
            <p>Browse agency updates, water supply activities, sanitation campaigns, partnerships, and community engagement stories.</p>
          </div>
          <p className="text-center text-gray-400 py-12">No published articles yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="news-grid-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">ALL UPDATES</p>
          <h2>News Archive</h2>
          <p>
            Browse agency updates, water supply activities, sanitation campaigns,
            partnerships, and community engagement stories.
          </p>
        </div>

        <div className="news-archive-grid">
          {articles.map((article) => (
            <article className="news-card" key={article.id}>
              <div className="news-card-image">
                <Image
                  src={article.featuredImageUrl || '/news-meeting.png'}
                  fill sizes="320px" alt={article.title}
                />
              </div>
              <div className="news-card-body">
                <div className="news-meta-line">
                  <span><Tag size={13} /> {article.category.name}</span>
                  <span><CalendarDays size={13} /> {formatDate(article.publishedAt)}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a className="news-link" href={`/news/${article.slug}`}>
                  Read update →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
