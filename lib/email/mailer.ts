import nodemailer from 'nodemailer';

interface MailOptions {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
}

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'localhost',
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * Send an email. Failures are logged but do NOT throw — email delivery
 * is non-blocking for the primary operation (password reset, lockout notice).
 */
export async function sendMail(options: MailOptions): Promise<void> {
  try {
    const transporter = createTransport();
    await transporter.sendMail({
      from: `"RUWASA CMS" <${process.env.SMTP_USER ?? 'no-reply@ruwasa.go.ng'}>`,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      text: options.text,
      html: options.html ?? options.text,
    });
  } catch (err) {
    console.error('[mailer] Failed to send email:', err);
  }
}
