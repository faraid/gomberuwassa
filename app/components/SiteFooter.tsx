import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Programs", href: "/programs" },
  { label: "News & Updates", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Image
            className="footer-logo"
            src="/brand-logo.png"
            width={265}
            height={88}
            alt="Gombe State RUWASA"
          />
          <p>
            Delivering sustainable rural water supply and sanitation services
            across communities in Gombe State.
          </p>
          <div className="footer-socials" aria-label="Social media placeholders">
            <span aria-label="Facebook placeholder">
              <Facebook size={17} strokeWidth={2.3} />
            </span>
            <span aria-label="Twitter placeholder">
              <Twitter size={17} strokeWidth={2.3} />
            </span>
            <span aria-label="Instagram placeholder">
              <Instagram size={17} strokeWidth={2.3} />
            </span>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer quick links">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <Phone size={17} strokeWidth={2.4} />
              <a href="tel:08132696321">0813 269 6321</a>
            </li>
            <li>
              <Mail size={17} strokeWidth={2.4} />
              <a href="mailto:info@ruwasa.gombe.gov.ng">info@ruwasa.gombe.gov.ng</a>
            </li>
            <li>
              <MapPin size={17} strokeWidth={2.4} />
              <span>RUWASA Headquarters, Gombe State, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <p>&copy; 2026 Gombe State RUWASA. All rights reserved.</p>
          <p>Rural Water Supply and Sanitation Agency</p>
        </div>
      </div>
    </footer>
  );
}
