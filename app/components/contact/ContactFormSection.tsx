import { Building2, MailCheck, MessageSquareText, PhoneCall } from "lucide-react";

const supportLines = [
  {
    icon: Building2,
    title: "Official Correspondence",
    body: "Submit letters, project enquiries, partnership requests, and administrative messages.",
  },
  {
    icon: PhoneCall,
    title: "Community Support",
    body: "Report rural water supply and sanitation issues for proper routing to the relevant desk.",
  },
  {
    icon: MailCheck,
    title: "Response Handling",
    body: "The form layout captures the information needed for clear follow-up and record keeping.",
  },
];

export default function ContactFormSection() {
  return (
    <section className="contact-form-section" id="contact-form">
      <div className="wrap contact-form-grid">
        <div className="contact-form-copy">
          <p className="eyebrow">SEND A MESSAGE</p>
          <h2>Submit an Enquiry to RUWASA</h2>
          <p>
            Use the contact form to reach the Agency on rural water supply,
            sanitation, hygiene promotion, project updates, procurement, and
            partnership matters.
          </p>

          <div className="contact-support-list">
            {supportLines.map(({ icon: Icon, title, body }) => (
              <article className="contact-support-item" key={title}>
                <span>
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

        <form className="contact-form-card" aria-label="Contact form">
          <div className="form-head">
            <span>
              <MessageSquareText size={25} strokeWidth={2.2} />
            </span>
            <div>
              <h3>Contact Form</h3>
              <p>All fields marked with an asterisk are required.</p>
            </div>
          </div>

          <div className="form-row">
            <label>
              Full Name *
              <input type="text" name="name" placeholder="Enter your full name" />
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" placeholder="Enter your phone number" />
            </label>
          </div>

          <label>
            Email Address
            <input type="email" name="email" placeholder="name@example.com" />
          </label>

          <label>
            Enquiry Type *
            <select name="type" defaultValue="">
              <option value="" disabled>
                Select enquiry type
              </option>
              <option>General enquiry</option>
              <option>Community water report</option>
              <option>Project information</option>
              <option>Partnership request</option>
              <option>Media enquiry</option>
            </select>
          </label>

          <label>
            Message *
            <textarea
              name="message"
              rows={6}
              placeholder="Describe your enquiry or request"
            />
          </label>

          <button className="button button-primary contact-submit" type="button">
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}
