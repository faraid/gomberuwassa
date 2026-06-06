import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import ContactCTA from "../components/contact/ContactCTA";
import ContactFormSection from "../components/contact/ContactFormSection";
import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import OfficeAddress from "../components/contact/OfficeAddress";
import ContactGuidance from "./ContactGuidance";

export const metadata: Metadata = {
  title: "Contact RUWASA | Gombe State Rural Water Supply and Sanitation Agency",
  description:
    "Contact Gombe State RUWASA for enquiries, community water reports, partnerships, office address, and official correspondence.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="Contact" />
      <main id="main-content">
        <ContactHero />
        <ContactInformation />
        <ContactFormSection />
        <ContactGuidance />
        <OfficeAddress />
        <ContactCTA />
      </main>
    </div>
  );
}
