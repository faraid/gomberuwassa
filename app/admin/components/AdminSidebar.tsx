'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Newspaper,
  FolderKanban,
  Images,
  BookOpen,
  Mail,
  Users,
  Settings,
  ScrollText,
  LogOut,
  ChevronRight,
  Home,
  Info,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  superAdminOnly?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Homepage', href: '/admin/homepage', icon: Home },
  { label: 'About Us', href: '/admin/about', icon: Info },
  { label: 'News', href: '/admin/news', icon: Newspaper },
  { label: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { label: 'Gallery', href: '/admin/gallery', icon: Images },
  { label: 'Programs', href: '/admin/programs', icon: BookOpen },
  { label: 'Contact', href: '/admin/contact', icon: Mail },
  { label: 'Users', href: '/admin/users', icon: Users, superAdminOnly: true },
  { label: 'Settings', href: '/admin/settings', icon: Settings, superAdminOnly: true },
  { label: 'Audit Log', href: '/admin/audit', icon: ScrollText, superAdminOnly: true },
];

interface AdminSidebarProps {
  role: string;
  fullName: string;
  email: string;
}

export default function AdminSidebar({ role, fullName, email }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const visibleItems = NAV_ITEMS.filter(
    (item) => !item.superAdminOnly || role === 'Super_Admin',
  );

  function isActive(href: string): boolean {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.replace('/admin/login');
  }

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Brand */}
      <div className="px-6 py-5 border-b border-gray-100">
        <span className="text-base font-bold text-blue-700 tracking-tight">RUWASA CMS</span>
        <p className="text-xs text-gray-400 mt-0.5">Admin Portal</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-0.5">
          {visibleItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors group ' + (active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <Icon
                    className={'w-4 h-4 shrink-0 ' + (active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600')}
                  />
                  <span className="flex-1">{item.label}</span>
                  {active && <ChevronRight className="w-3 h-3 text-blue-400" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User + Logout */}
      <div className="border-t border-gray-100 px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-blue-700">
              {fullName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{fullName}</p>
            <p className="text-xs text-gray-400 truncate">{email}</p>
          </div>
        </div>
        <div className="mb-2">
          <span className="inline-block text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
            {role.replace('_', ' ')}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}


