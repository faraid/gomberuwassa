import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ContactCTA from "../components/contact/ContactCTA";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import OfficeAddress from "../components/contact/OfficeAddress";
import { createPageMetadata, siteRoutes } from "../lib/seo";

const route = siteRoutes.find((item) => item.path === "/contact");

export const metadata: Metadata = createPageMetadata({
  title: route?.title ?? "Contact RUWASA",
  description:
    route?.description ??
    "Contact Gombe State RUWASA for enquiries, community water reports, partnerships, office address, and official correspondence.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="Contact" />
      <main id="main-content">
        <ContactHero />
        <ContactInformation />
        <ContactFormSection />
        <OfficeAddress />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
