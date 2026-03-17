import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lead Generation Funnels | wirig.ai',
  description:
    'Lead qualification funnels for real estate and mortgage teams that capture intent, qualify inquiries, and push serious prospects into booked conversations.',
};

export default function LeadGenerationFunnels() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-ice" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
            Service Deep Dive
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-navy">
            Lead Generation Funnels
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            You&apos;re paying for leads, traffic, referrals, or listing inquiries.but by the time they hit your team, you still don&apos;t know who is serious, who needs nurture, and who should be booked right now.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
              <p>
                Most lead funnels are weak. A form gets filled out, a contact is created, and then everyone gets dumped into the same pipeline with no real qualification, no urgency scoring, and no smart follow-up.
              </p>
              <p>
                A good funnel tells you what kind of lead this is, how serious they are, what they want, and what should happen next before your team ever picks up the phone.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                How a Smart Funnel Works
              </h2>
              <p>
                The concept is straightforward: instead of a static form, you use an interactive quiz
                or multi-step flow that asks the right questions in the right order. Each answer tells
                you something about the lead and personalizes the rest of their experience.
              </p>
              <p>
                Here&apos;s what a typical funnel looks like for a med spa:
              </p>
              <p>
                <strong className="text-navy">Step 1: The hook.</strong> An ad or landing page that
                speaks to a specific problem. Not &quot;We offer med spa services,&quot; but &quot;Find
                out which treatment will give you the results you want in under 30 minutes.&quot; Specific,
                relevant, and worth clicking on.
              </p>
              <p>
                <strong className="text-navy">Step 2: The qualification quiz.</strong> A short interactive
                flow (4-6 questions) that asks about their goals, what they&apos;ve tried before, their
                timeline, and their budget range. Each question is phrased conversationally, not like a
                medical intake form. The quiz feels helpful, not interrogative.
              </p>
              <p>
                <strong className="text-navy">Step 3: Personalized results.</strong> Based on their
                answers, the lead sees a customized recommendation. Not a generic &quot;thanks for your
                interest&quot; page.an actual recommendation of which services would work best for
                their specific situation, with realistic expectations about results and timing.
              </p>
              <p>
                <strong className="text-navy">Step 4: The booking.</strong> Right there on the results
                page, they can book a consultation. The calendar shows real availability. The confirmation
                includes what to expect and any prep instructions. No friction, no &quot;someone will call
                you to schedule.&quot;
              </p>
              <p>
                <strong className="text-navy">Step 5: Automated follow-up.</strong> If they don&apos;t
                book immediately, they enter a follow-up sequence. Texts, emails, or both. Personalized
                based on their quiz answers. Not generic drip campaigns.messages that reference what
                they&apos;re actually interested in.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Why This Works Better Than a Contact Form
              </h2>
              <p>
                Three reasons:
              </p>
              <p>
                <strong className="text-navy">Higher conversion rates.</strong> Interactive quizzes
                convert 30-60% of visitors, compared to 3-5% for a standard contact form. People like
                answering questions about themselves. They don&apos;t like filling out forms.
              </p>
              <p>
                <strong className="text-navy">Better lead quality.</strong> By the time someone
                completes the quiz, you know their intent, budget, and timeline. Your team can
                prioritize the leads that are most likely to close and handle the rest with automated
                nurture sequences.
              </p>
              <p>
                <strong className="text-navy">Faster sales cycles.</strong> When your team calls a
                qualified lead, they&apos;re not starting from scratch. They already know what the
                person wants. The conversation starts at &quot;here&apos;s how we can help&quot;
                instead of &quot;so what are you looking for?&quot;
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Real Funnel Examples
              </h2>
              <p>
                <strong className="text-navy">Med spa treatment finder.</strong> A quiz funnel we built
                for a clinic along the Wasatch Front asks about skin concerns, treatment history, and
                goals. It recommends specific treatments and books consultations. Their cost per booked
                appointment dropped 40% compared to sending the same ad traffic to a standard landing
                page.
              </p>
              <p>
                <strong className="text-navy">Real estate home valuation.</strong> Instead of the
                generic &quot;What&apos;s my home worth?&quot; tool that every agent uses, we built a
                quiz that asks about the home&apos;s features, condition, recent improvements, and the
                owner&apos;s timeline for selling. The agent gets a detailed lead profile, not just an
                address. Leads who complete this funnel are 3x more likely to list within 90 days
                compared to standard home valuation leads.
              </p>
              <p>
                <strong className="text-navy">Mortgage pre-qualification.</strong> A funnel that walks
                potential borrowers through basic qualification questions in a friendly, non-intimidating
                way. Instead of &quot;What is your annual gross income?&quot; it asks &quot;What range
                best describes your household income?&quot; Qualified leads go straight to a loan
                officer. Everyone else gets educational content about improving their position.
              </p>
              <p>
                <strong className="text-navy">Professional services consultation.</strong> For law firms,
                accounting firms, and consultants who need to understand the prospect&apos;s situation
                before the first meeting. The funnel asks about their specific challenge, what they&apos;ve
                already tried, and what outcome they&apos;re looking for. The professional walks into the
                consultation already prepared.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What We Build Into Every Funnel
              </h2>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Lead scoring</strong>.every lead gets a score based on their answers. Your team knows instantly who to call first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">CRM integration</strong>.leads flow directly into GoHighLevel, HubSpot, or whatever you use. No manual data entry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Automated follow-up sequences</strong>.personalized text and email sequences that reference the lead&apos;s specific answers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Calendar booking</strong>.embedded scheduling that shows real availability and sends confirmations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Analytics and tracking</strong>.you see exactly where people drop off, which questions cause friction, and which lead sources produce the best results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">A/B testing</strong>.we test different questions, copy, and flows to continuously improve conversion rates.</span>
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                The Numbers
              </h2>
              <p>
                Across the funnels we&apos;ve built for Utah businesses:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Average quiz completion rate: 55-65%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Average cost per qualified lead: 40-60% lower than standard landing pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Average close rate on funnel leads: 2-3x higher than form leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Setup time: 7-14 days from kickoff to live</span>
                </li>
              </ul>
              <p>
                The ROI math is straightforward. If you&apos;re spending $3,000/month on ads and
                getting 30 leads at $100 each with a 10% close rate, you&apos;re closing 3 clients.
                A smart funnel getting the same traffic might produce 20 qualified leads at $150 each
                but with a 25% close rate.closing 5 clients. Same ad spend, more revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-ice overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,180,216,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-6 text-navy">
            Stop Paying for Unqualified Leads
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Take the free AI audit and we&apos;ll show you how a smart funnel would improve your
            lead quality and lower your cost per acquisition.
          </p>
          <a
            href="/#audit"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Get Your Free AI Audit &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
