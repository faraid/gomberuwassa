import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

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

export default function SiteHeader({ activePage = "Home" }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <div className="wrap header-grid">
        <Link href="/" aria-label="Gombe State RUWASA - Go to homepage">
          <Image
            className="logo"
            src="/brand-logo.png"
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
        <a className="phone" href="tel:08132696321">
          <Phone size={22} strokeWidth={3} />
          <span>
            <strong>0813 269 6321</strong>
            <small>info@ruwasa.gombe.gov.ng</small>
          </span>
        </a>
      </div>
    </header>
  );
}
