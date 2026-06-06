"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

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

export default function SiteHeader({ activePage }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (label: string, href: string) => {
    if (activePage) {
      return label === activePage;
    }

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`topbar${isMenuOpen ? " menu-open" : ""}`}>
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
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
        </button>
        <nav id="primary-navigation" className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={isActive(item.label, item.href) ? "is-active" : ""}
              aria-current={isActive(item.label, item.href) ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
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
