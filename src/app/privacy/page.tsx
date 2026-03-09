import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Privacy Policy | wirig.ai',
  description: 'Privacy Policy for wirig.ai — how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">Privacy Policy</h1>
          <p className="text-gray-500 font-sans mb-12">Last updated: March 9, 2026</p>

          <div className="prose prose-gray max-w-none font-sans text-gray-700 leading-relaxed space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy mt-0">Who We Are</h2>
              <p>
                wirig.ai is operated by Wirig LLC, a Utah limited liability company based in Provo, Utah.
                When we say &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot; we mean Wirig LLC. When we say &quot;you,&quot; we mean anyone
                who visits our website or uses our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">What We Collect</h2>
              <p>We collect information you give us directly:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information:</strong> Name, email address, and phone number when you complete our AI Audit quiz or contact us.</li>
                <li><strong>Business information:</strong> Business type, revenue range, lead volume, and operational bottlenecks you share through our quiz.</li>
                <li><strong>Communications:</strong> Messages you send us via email, phone, or scheduling tools.</li>
              </ul>
              <p>We also collect some information automatically:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Usage data:</strong> Pages visited, time on site, referring URL, and browser/device type.</li>
                <li><strong>Cookies:</strong> We use essential cookies for site functionality. No third-party tracking cookies.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your AI Audit request and schedule your consultation.</li>
                <li>To deliver the services you hire us for.</li>
                <li>To send you relevant follow-up communications about your inquiry.</li>
                <li>To improve our website and services.</li>
                <li>To comply with legal obligations.</li>
              </ul>
              <p>
                We do <strong>not</strong> sell, rent, or trade your personal information to third parties. Period.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Third-Party Services</h2>
              <p>We use the following services to operate our business:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GoHighLevel:</strong> CRM and appointment scheduling. Your contact info is stored here when you book a call.</li>
                <li><strong>Resend:</strong> Email delivery for follow-up communications.</li>
                <li><strong>Vercel:</strong> Website hosting.</li>
              </ul>
              <p>
                Each of these services has their own privacy policy. We only share the minimum information
                needed for them to function.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">SMS &amp; Phone Communications</h2>
              <p>
                By providing your phone number through our quiz or contact forms, you consent to receive
                communications from us related to your inquiry. This may include appointment reminders,
                follow-up messages, and service-related updates.
              </p>
              <p>
                You can opt out of text messages at any time by replying STOP. Message and data rates may apply.
                We will never send you unsolicited marketing texts without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Data Retention</h2>
              <p>
                We keep your information for as long as we have an active business relationship with you,
                plus a reasonable period afterward for follow-up and legal compliance. If you want your
                data deleted, email us and we&apos;ll handle it within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Your Rights</h2>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request a copy of the personal data we have about you.</li>
                <li>Ask us to correct or update your information.</li>
                <li>Ask us to delete your data.</li>
                <li>Opt out of marketing communications at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a href="mailto:carter@wirig.ai" className="text-teal hover:text-teal-light transition-colors">
                  carter@wirig.ai
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Security</h2>
              <p>
                We use industry-standard security measures to protect your data, including encrypted
                connections (HTTPS), secure third-party services, and access controls. No system is
                100% secure, but we take reasonable steps to protect your information.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Children&apos;s Privacy</h2>
              <p>
                Our services are designed for businesses, not individuals under 18. We do not knowingly
                collect information from minors.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. If we make significant changes, we&apos;ll
                update the date at the top. Your continued use of our website after changes means you
                accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Contact</h2>
              <p>
                Questions about this policy? Email us at{' '}
                <a href="mailto:carter@wirig.ai" className="text-teal hover:text-teal-light transition-colors">
                  carter@wirig.ai
                </a>.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                Wirig LLC · Provo, Utah
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
