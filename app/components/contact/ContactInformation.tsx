import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    detail: "0813 269 6321",
    note: "Monday to Friday, official working hours",
    href: "tel:08132696321",
    tone: "blue",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@ruwasa.gombe.gov.ng",
    note: "Send enquiries, requests, and official correspondence",
    href: "mailto:info@ruwasa.gombe.gov.ng",
    tone: "green",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "Gombe State RUWASA Headquarters",
    note: "Gombe, Gombe State, Nigeria",
    href: "#office-address",
    tone: "blue",
  },
  {
    icon: Clock,
    title: "Hours",
    detail: "8:00 AM - 4:00 PM",
    note: "Monday to Friday, excluding public holidays",
    href: "#contact-form",
    tone: "green",
  },
];

export default function ContactInformation() {
  return (
    <section className="contact-information">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2>Speak With the Right RUWASA Desk</h2>
          <p>
            Our administrative and technical teams receive public enquiries,
            community reports, partnership requests, and project-related
            correspondence.
          </p>
        </div>

        <div className="contact-info-grid">
          {contactItems.map(({ icon: Icon, title, detail, note, href, tone }) => (
            <a className="contact-info-card" href={href} key={title}>
              <span className={`contact-info-icon ${tone}`}>
                <Icon size={27} strokeWidth={2.2} />
              </span>
              <span className="contact-info-label">{title}</span>
              <strong>{detail}</strong>
              <span className="contact-info-note">{note}</span>
            </a>
          ))}
        </div>

        <div className="contact-service-note">
          <Send size={18} strokeWidth={2.2} />
          <p>
            For community water point reports, include the LGA, ward, community
            name, facility type, and a reachable phone number.
          </p>
        </div>
      </div>
    </section>
  );
}
