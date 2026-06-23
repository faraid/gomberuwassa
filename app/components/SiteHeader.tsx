import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { getSiteSettings } from "@/lib/services/homepage.service";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Programs", href: "/programs" },
  { label: "News & Updates", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

interface SiteHeaderProps {
  activePage?: string;
}

export default async function SiteHeader({ activePage = "Home" }: SiteHeaderProps) {
  const settings = await getSiteSettings();

  return (
    <header className="topbar">
      <div className="wrap header-grid">
        <Link href="/" aria-label="Gombe State RUWASA - Go to homepage">
          <Image
            className="logo"
            src={settings.logo}
            width={265}
            height={88}
            alt=""
            priority
          />
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.label === activePage ? "is-active" : ""}
              aria-current={item.label === activePage ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="phone" href={"tel:" + settings.phone.replace(/[^0-9]/g, "")}>
          <Phone size={22} strokeWidth={3} />
          <span>
            <strong>{settings.phone}</strong>
            <small>{settings.email}</small>
          </span>
        </a>
      </div>
    </header>
  );
}
