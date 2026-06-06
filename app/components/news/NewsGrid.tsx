import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";
import { newsArticles } from "../../data/news";

export default function NewsGrid() {
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
          {newsArticles.map((article) => (
            <article className="news-card" key={article.id}>
              <div className="news-card-image">
                <Image src={article.image} fill sizes="320px" alt={article.title} />
              </div>
              <div className="news-card-body">
                <div className="news-meta-line">
                  <span><Tag size={13} /> {article.category}</span>
                  <span><CalendarDays size={13} /> {article.date}</span>
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
