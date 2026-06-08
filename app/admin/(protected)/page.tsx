import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  Newspaper,
  FolderKanban,
  Images,
  BookOpen,
  Mail,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';

interface SummaryCardProps {
  label: string;
  value: string | number;
  href: string;
  icon: React.ElementType;
  colour: 'blue' | 'green' | 'amber' | 'purple';
}

const COLOUR_MAP: Record<SummaryCardProps['colour'], string> = {
  blue:   'bg-blue-50 text-blue-700 border-blue-100',
  green:  'bg-green-50 text-green-700 border-green-100',
  amber:  'bg-amber-50 text-amber-700 border-amber-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-100',
};

function SummaryCard({ label, value, href, icon: Icon, colour }: SummaryCardProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-5 rounded-xl border ${COLOUR_MAP[colour]} hover:shadow-sm transition-shadow`}
    >
      <div className="p-2 rounded-lg bg-white/60">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs font-medium opacity-80 mt-0.5">{label}</p>
      </div>
      <ArrowRight className="w-4 h-4 opacity-50 shrink-0" />
    </Link>
  );
}

interface QuickLinkProps {
  label: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

function QuickLink({ label, description, href, icon: Icon }: QuickLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all group"
    >
      <div className="p-2 bg-gray-50 group-hover:bg-blue-50 rounded-lg transition-colors">
        <Icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700">{label}</p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
    </Link>
  );
}

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');

  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session.fullName.split(' ')[0]}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here&apos;s an overview of your content.
        </p>
      </div>

      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Content Summary
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard label="Published News"   value="—" href="/admin/news?status=published" icon={Newspaper}    colour="blue"   />
          <SummaryCard label="Total Projects"   value="—" href="/admin/projects"               icon={FolderKanban} colour="green"  />
          <SummaryCard label="Gallery Items"    value="—" href="/admin/gallery"                icon={Images}       colour="purple" />
          <SummaryCard label="Unread Messages"  value="—" href="/admin/contact?read=false"     icon={Mail}         colour="amber"  />
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Recent Activity
        </h2>
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="flex items-center gap-3 px-5 py-4">
            <Clock className="w-4 h-4 text-gray-300 shrink-0" />
            <p className="text-sm text-gray-500">No recent activity yet.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Manage Content
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <QuickLink label="News Articles"        description="Create and publish news"      href="/admin/news"     icon={Newspaper}    />
          <QuickLink label="Projects"             description="Track field projects"         href="/admin/projects" icon={FolderKanban} />
          <QuickLink label="Gallery"              description="Upload and organise images"   href="/admin/gallery"  icon={Images}       />
          <QuickLink label="Programs"             description="Update programme content"     href="/admin/programs" icon={BookOpen}     />
          <QuickLink label="Contact Submissions"  description="View public enquiries"        href="/admin/contact"  icon={Mail}         />
        </div>
      </section>
    </div>
  );
}
