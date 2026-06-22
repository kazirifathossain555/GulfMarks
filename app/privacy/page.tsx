'use client';

import { ProtectedEmail, ProtectedPhone } from '@/components/ContactInfo';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate prose-sm max-w-none">
          <Section title="1. Introduction">
            <p>
              GulfMarks ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website or use our services.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business name when you fill out our contact form or communicate with us via WhatsApp.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sites.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type, and IP address.</li>
              <li><strong>Communications:</strong> Records of correspondence when you contact us for support or inquiries.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver services you have requested</li>
              <li>Send you relevant updates about your project (only when you've requested a service)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Information Sharing">
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share your data with trusted third-party service providers who assist us in operating our website
              and conducting our business, such as:
            </p>
            <ul>
              <li>Hosting providers</li>
              <li>Email service providers</li>
              <li>Analytics platforms</li>
            </ul>
            <p>
              These third parties are obligated to keep your information confidential and are prohibited from using
              it for any other purpose.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{' '}
              <ProtectedEmail className="text-[#14B8A6] hover:underline" />.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience.
              You can set your browser to refuse cookies, but some features of the website may become unavailable.
            </p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children under 18. If you believe we have collected information from a child under 18,
              please contact us immediately.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <ul>
              <li>Email: <ProtectedEmail className="text-[#14B8A6] hover:underline" /></li>
              <li>Phone: <ProtectedPhone className="text-[#14B8A6]" /></li>
            </ul>
          </Section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <a href="/" className="text-[#14B8A6] font-medium text-sm hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-poppins text-lg font-semibold text-[#0F172A] mb-4">
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}
