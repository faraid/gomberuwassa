'use client';

import { useState, type FormEvent } from 'react';
import { Building2, MailCheck, MessageSquareText, PhoneCall } from 'lucide-react';
import { contactDefaults, type ContactSettings } from '@/lib/constants/contact';

interface Props {
  settings?: ContactSettings;
}

export default function ContactFormSection({ settings = contactDefaults }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const supportLines = [
    {
      icon: Building2,
      title: settings.officialCorrespondenceTitle,
      body: settings.officialCorrespondenceDescription,
    },
    {
      icon: PhoneCall,
      title: settings.communitySupportTitle,
      body: settings.communitySupportDescription,
    },
    {
      icon: MailCheck,
      title: settings.responseHandlingTitle,
      body: settings.responseHandlingDescription,
    },
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus('submitting');
    setMessage('');

    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      enquiryType: String(formData.get('enquiryType') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus('error');
        setMessage(json.error?.message ?? 'Please check the form and try again.');
        return;
      }

      form.reset();
      setStatus('success');
      setMessage('Your enquiry has been submitted. RUWASA will review and route it to the right desk.');
    } catch {
      setStatus('error');
      setMessage('A network error occurred. Please try again.');
    }
  }

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="wrap contact-form-grid">
        <div className="contact-form-copy">
          <p className="eyebrow">{settings.formSectionLabel}</p>
          <h2>{settings.formHeading}</h2>
          <p>{settings.formDescription}</p>

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

        <form className="contact-form-card" aria-label="Contact form" onSubmit={handleSubmit}>
          <div className="form-head">
            <span>
              <MessageSquareText size={25} strokeWidth={2.2} />
            </span>
            <div>
              <h3>Contact Form</h3>
              <p>All fields marked with an asterisk are required.</p>
            </div>
          </div>

          {message && (
            <p className={status === 'success' ? 'text-sm text-green-700' : 'text-sm text-red-700'}>
              {message}
            </p>
          )}

          <div className="form-row">
            <label>
              Full Name *
              <input type="text" name="name" placeholder="Enter your full name" required />
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" placeholder="Enter your phone number" required />
            </label>
          </div>

          <label>
            Email Address
            <input type="email" name="email" placeholder="name@example.com" />
          </label>

          <label>
            Enquiry Type *
            <select name="enquiryType" defaultValue="" required>
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
              required
            />
          </label>

          <button className="button button-primary contact-submit" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

