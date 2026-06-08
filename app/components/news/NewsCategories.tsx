import {
  Droplet,
  Handshake,
  Megaphone,
  Newspaper,
  Toilet,
  Users,
  Tag,
} from 'lucide-react';

interface DbCategory {
  id: string;
  name: string;
}

interface Props {
  categories: DbCategory[];
}

// Best-effort icon + tone mapping for known category names; fallback for custom ones
const KNOWN: Record<string, { icon: React.ElementType; tone: 'blue' | 'green'; body: string }> = {
  'Agency Updates': {
    icon: Newspaper,
    tone: 'blue',
    body: 'Official announcements and operational updates from the agency.',
  },
  'Water Supply': {
    icon: Droplet,
    tone: 'green',
    body: 'Updates on boreholes, water schemes, and clean water access.',
  },
  'Sanitation & Hygiene': {
    icon: Toilet,
    tone: 'blue',
    body: 'Stories on hygiene promotion and improved sanitation services.',
  },
  'Community Engagement': {
    icon: Users,
    tone: 'green',
    body: 'Field activities involving communities, leaders, and local groups.',
  },
  Partnerships: {
    icon: Handshake,
    tone: 'blue',
    body: 'Partner coordination, donor support, and stakeholder collaboration.',
  },
};

const FALLBACK_ICONS = [Megaphone, Tag, Droplet, Handshake];

export default function NewsCategories({ categories }: Props) {
  return (
    <section className="news-categories">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">NEWS AREAS</p>
          <h2>Coverage Categories</h2>
          <p>
            News content is organised around core agency themes for easy browsing.
          </p>
        </div>

        <div className="news-category-grid">
          {categories.map((cat, i) => {
            const meta = KNOWN[cat.name];
            const Icon = meta?.icon ?? FALLBACK_ICONS[i % FALLBACK_ICONS.length];
            const tone = meta?.tone ?? (i % 2 === 0 ? 'blue' : 'green');
            const body = meta?.body ?? `Latest updates on ${cat.name.toLowerCase()}.`;

            return (
              <article className="news-category-card" key={cat.id}>
                <span className={`round-icon ${tone}`} aria-hidden="true">
                  <Icon size={24} strokeWidth={2.25} />
                </span>
                <h3>{cat.name}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
