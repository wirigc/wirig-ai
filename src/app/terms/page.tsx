import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Terms of Service | wirig.ai',
  description: 'Terms of Service for wirig.ai - the rules that govern your use of our website and services.',
};

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-4">Terms of Service</h1>
          <p className="text-gray-500 font-sans mb-12">Last updated: March 9, 2026</p>

          <div className="prose prose-gray max-w-none font-sans text-gray-700 leading-relaxed space-y-8">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy mt-0">Agreement</h2>
              <p>
                By using wirig.ai (the &quot;Site&quot;), you agree to these Terms of Service. If you don&apos;t
                agree, don&apos;t use the site. Simple as that.
              </p>
              <p>
                wirig.ai is operated by Wirig LLC (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;), a Utah limited liability
                company based in Provo, Utah.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Our Services</h2>
              <p>
                We build and deploy custom AI automation systems for businesses. This includes AI voice
                receptionists, chatbots, workflow automation, lead generation funnels, and CRM integrations.
              </p>
              <p>
                The specific scope, deliverables, timeline, and pricing for any paid engagement will be
                outlined in a separate service agreement or proposal between you and Wirig LLC. These
                Terms govern your use of the website itself.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Free AI Audit</h2>
              <p>
                Our AI Audit quiz and consultation call are provided free of charge with no obligation.
                The audit provides our assessment of potential automation opportunities for your business.
                Results are estimates based on the information you provide and are not guarantees of
                specific outcomes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Your Responsibilities</h2>
              <p>When using our Site, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information when completing forms or quizzes.</li>
                <li>Not use the site for any unlawful purpose.</li>
                <li>Not attempt to interfere with the site&apos;s operation or security.</li>
                <li>Not scrape, crawl, or harvest data from the site without permission.</li>
                <li>Not misrepresent your identity or affiliation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Intellectual Property</h2>
              <p>
                All content on this site - text, design, graphics, logos, and code - is owned by
                Wirig LLC or used with permission. You may not copy, reproduce, or distribute our
                content without written permission.
              </p>
              <p>
                For client engagements: ownership of custom-built systems and deliverables will be
                defined in your service agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">No Guarantees</h2>
              <p>
                While we stand behind the quality of our work, we cannot guarantee specific revenue
                increases, cost savings, or business outcomes. The statistics and estimates on our
                website (such as &quot;$3,200 average monthly savings&quot;) are based on our experience and
                client results but may vary based on your specific business, industry, and implementation.
              </p>
              <p>
                Our site and services are provided &quot;as is&quot; without warranties of any kind, either
                express or implied.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Wirig LLC shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of the
                site or our services. Our total liability for any claim related to the site shall not
                exceed the amount you paid us in the 12 months preceding the claim, or $100, whichever
                is greater.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Third-Party Links</h2>
              <p>
                Our site may contain links to third-party websites or services (such as our scheduling
                tool). We are not responsible for the content, privacy practices, or availability of
                these external sites.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Service Agreements</h2>
              <p>
                If you engage us for paid services, the terms of that engagement (scope, pricing,
                timeline, deliverables, cancellation) will be governed by a separate service agreement.
                In the event of a conflict between these Terms and a service agreement, the service
                agreement controls.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Termination</h2>
              <p>
                We reserve the right to restrict or terminate access to our site at any time, for any
                reason, without notice. You can stop using the site at any time.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Utah. Any disputes will be
                resolved in the courts of Utah County, Utah.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Changes</h2>
              <p>
                We may update these Terms at any time. We&apos;ll update the date at the top when we do.
                Continued use of the site after changes means you accept the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Contact</h2>
              <p>
                Questions about these terms? Reach out at{' '}
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
