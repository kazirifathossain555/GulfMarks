'use client';

import { ProtectedEmail, ProtectedPhone } from '@/components/ContactInfo';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <h1 className="font-poppins text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
          Terms of Service
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate prose-sm max-w-none">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the GulfMarks website and services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services.
            </p>
          </Section>

          <Section title="2. Services Description">
            <p>
              GulfMarks provides website design, development, and digital marketing services for businesses in the Gulf region.
              Our services include but are not limited to:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Google Business Profile setup and optimization</li>
              <li>Local SEO services</li>
              <li>Website maintenance</li>
              <li>AI chatbot integration</li>
            </ul>
          </Section>

          <Section title="3. Project Agreements">
            <p>
              Each project will be governed by a separate agreement or proposal that outlines the specific scope,
              deliverables, timeline, and pricing. These Terms of Service supplement any project-specific agreements.
            </p>
          </Section>

          <Section title="4. Payment Terms">
            <p>
              Our standard payment structure is 50% deposit upon project commencement and 50% upon completion.
              Specific payment terms may vary and will be outlined in your project agreement.
            </p>
            <ul>
              <li>All prices are in Saudi Riyals (SAR) unless otherwise specified</li>
              <li>Deposit payments are non-refundable once work has commenced</li>
              <li>Final payment is due upon project completion and before website launch</li>
            </ul>
          </Section>

          <Section title="5. Client Responsibilities">
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate information and materials needed for the project</li>
              <li>Review and provide feedback on deliverables in a timely manner</li>
              <li>Ensure you have the rights to any content, images, or materials you provide</li>
              <li>Make payments according to the agreed schedule</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              Upon full payment, you own the website and its design. GulfMarks retains the right to showcase
              completed projects in our portfolio unless otherwise agreed in writing.
            </p>
            <p>
              Any third-party assets (stock photos, fonts, plugins) used in your project remain subject to
              their respective licenses.
            </p>
          </Section>

          <Section title="7. Revisions and Changes">
            <p>
              Each project includes a reasonable number of revisions as specified in your project agreement.
              Additional revisions beyond the agreed scope may incur extra charges.
            </p>
          </Section>

          <Section title="8. Project Timeline">
            <p>
              We will provide estimated timelines for each project. While we strive to meet all deadlines,
              delays may occur due to factors outside our control, including client response times.
              We will communicate any changes to the timeline promptly.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              GulfMarks shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of our services. Our total liability shall not exceed the amount
              paid for the specific service giving rise to the claim.
            </p>
          </Section>

          <Section title="10. Confidentiality">
            <p>
              Both parties agree to keep confidential any sensitive business information shared during the
              course of the project. This obligation continues after the project is completed.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              Either party may terminate a project with written notice. If terminated by the client, any work
              completed up to that point will be invoiced at the agreed rates. The deposit is non-refundable.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the
              Kingdom of Saudi Arabia. Any disputes shall be resolved in the courts of Saudi Arabia.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              GulfMarks reserves the right to modify these Terms of Service at any time. Changes will be posted
              on this page with an updated revision date. Continued use of our services after changes constitutes
              acceptance of the modified terms.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              For questions about these Terms of Service, please contact us:
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
