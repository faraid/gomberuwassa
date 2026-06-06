import Image from "next/image";
import { CalendarDays, Tag } from "lucide-react";
import { newsArticles } from "../../data/news";

export default function FeaturedNews() {
  const featured = newsArticles.filter((article) => article.featured).slice(0, 3);
  const lead = featured[0];
  const side = featured.slice(1);

  if (!lead) return null;

  return (
    <section className="featured-news-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">FEATURED NEWS</p>
          <h2>Latest from RUWASA</h2>
          <p>
            Follow recent activities, project milestones, stakeholder engagements,
            and community updates from across Gombe State.
          </p>
        </div>

        <div className="featured-news-grid">
          <article className="featured-news-lead">
            <div className="featured-news-image">
              <Image src={lead.image} fill sizes="520px" alt={lead.title} />
            </div>
            <div className="featured-news-body">
              <div className="news-meta-line">
                <span><Tag size={13} /> {lead.category}</span>
                <span><CalendarDays size={13} /> {lead.date}</span>
              </div>
              <h3>{lead.title}</h3>
              <p>{lead.excerpt}</p>
              <a className="button button-primary news-read-btn" href={`/news/${lead.slug}`}>
                Read More →
              </a>
            </div>
          </article>

          <div className="featured-news-side">
            {side.map((article) => (
              <article className="featured-news-small" key={article.id}>
                <Image src={article.image} width={147} height={84} alt={article.title} />
                <div>
                  <div className="news-meta-line compact">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
