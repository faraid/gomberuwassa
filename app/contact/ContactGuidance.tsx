import { ClipboardCheck, FileText, MapPinned } from "lucide-react";

const guidanceItems = [
  {
    icon: ClipboardCheck,
    title: "Prepare Your Enquiry",
    body: "Include your name, phone number, LGA, ward, community, and the specific water or sanitation matter that needs attention.",
  },
  {
    icon: MapPinned,
    title: "Share Location Details",
    body: "For facility reports, mention the nearest landmark and whether the issue affects a borehole, hand pump, overhead tank, or sanitation facility.",
  },
  {
    icon: FileText,
    title: "Official Requests",
    body: "For partnerships, procurement, media, or formal correspondence, provide a clear subject and organization details for proper routing.",
  },
];

export default function ContactGuidance() {
  return (
    <section className="contact-form-section" aria-labelledby="contact-guidance-title">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">CONTACT GUIDANCE</p>
          <h2 id="contact-guidance-title">Help Us Route Your Request Quickly</h2>
          <p>
            Clear details help RUWASA direct enquiries, community reports, and
            official requests to the appropriate administrative or technical
            desk.
          </p>
        </div>

        <div className="contact-support-list">
          {guidanceItems.map(({ icon: Icon, title, body }) => (
            <article className="contact-support-item" key={title}>
              <span aria-hidden="true">
                <Icon size={24} strokeWidth={2.2} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
