import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Workflow Automation | wirig.ai',
  description:
    'Workflow automation for real estate and mortgage teams. Faster response, cleaner follow-up, fewer manual steps, and tighter lead handling.',
};

export default function WorkflowAutomation() {
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
            Workflow Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            Your team is still copying leads into the CRM, manually texting new inquiries, updating stages by hand, and trying to remember who needs follow-up next. That adds up fast—and it slows everything down.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
              <p>
                Workflow automation is the part that actually makes the business feel tighter. It is what turns scattered lead handling into a real system that responds faster and drops fewer opportunities.
              </p>
              <p>
                Most real estate and mortgage teams are still using some ugly mix of CRM, forms, email, calendars, texting, spreadsheets, and memory. Every handoff between those tools is a place where leads get delayed, dropped, or forgotten.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What Workflow Automation Looks Like in Practice
              </h2>
              <p>
                Here are real automations we&apos;ve built for businesses in Utah:
              </p>
              <p>
                <strong className="text-navy">Med spa new patient onboarding.</strong> Before: patient
                fills out a form, front desk manually enters info into the EMR, sends a welcome email
                from a template, texts appointment reminders, and adds them to the marketing list.
                After: all of that happens automatically the moment the form is submitted. The front
                desk doesn&apos;t touch it.
              </p>
              <p>
                <strong className="text-navy">Real estate lead follow-up.</strong> Before: agent gets a
                Zillow lead, manually adds it to their CRM, sends a text, follows up with an email, and
                sets a reminder to call. After: the lead hits the CRM instantly, gets a personalized text
                within 60 seconds, receives a follow-up email sequence, and the agent gets a notification
                when the lead responds. Speed to lead goes from hours to under a minute.
              </p>
              <p>
                <strong className="text-navy">Service business invoicing.</strong> Before: job gets
                completed, someone manually creates an invoice in QuickBooks, emails it to the client,
                and follows up on unpaid invoices. After: job completion triggers automatic invoice
                generation, sends it to the client, and escalates reminders if it goes unpaid. The
                bookkeeper reviews instead of creates.
              </p>
              <p>
                <strong className="text-navy">Appointment reminders and no-show recovery.</strong> Before:
                staff manually texts or calls patients the day before their appointment. No-shows just
                become empty slots. After: automated reminders go out 48 hours, 24 hours, and 2 hours
                before. No-shows automatically get a rebook sequence. Cancellations trigger a waitlist
                notification to fill the slot.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                The Tools We Work With
              </h2>
              <p>
                We&apos;re tool-agnostic. Whatever your business runs on, we can automate it. That said,
                here are the platforms we work with most frequently:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">GoHighLevel</strong>&mdash;our go-to for businesses that need a CRM, marketing automation, and communication tools in one place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">n8n and Make</strong>&mdash;for building the automation workflows themselves. These connect your tools and handle the logic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Google Workspace</strong>&mdash;Calendar, Sheets, Gmail, Drive. Most businesses live in Google, and we make it all work together.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">QuickBooks / Stripe</strong>&mdash;for invoicing and payment automation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Slack / Teams</strong>&mdash;for internal notifications so your team stays in the loop without checking five different dashboards.</span>
                </li>
              </ul>
              <p>
                If you use a tool that&apos;s not on this list, we can almost certainly still work with
                it. If it has an API or a Zapier/Make integration, we can connect it.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                How We Approach Automation
              </h2>
              <p>
                We don&apos;t automate everything at once. That&apos;s how you end up with a fragile
                system that breaks when one thing changes. Instead, we follow a specific process:
              </p>
              <p>
                <strong className="text-navy">1. Audit your current workflows.</strong> We sit down with
                you and your team and map out every repetitive process. We identify what&apos;s eating
                the most time, what&apos;s most error-prone, and what has the highest impact if automated.
              </p>
              <p>
                <strong className="text-navy">2. Prioritize by ROI.</strong> Not everything should be
                automated. We focus on the workflows that will save the most time or generate the most
                revenue first. Usually, that means lead follow-up and client communication.
              </p>
              <p>
                <strong className="text-navy">3. Build incrementally.</strong> We automate the highest-impact
                workflow first, make sure it&apos;s rock solid, then move to the next one. Each automation
                is built to handle edge cases and failures gracefully.
              </p>
              <p>
                <strong className="text-navy">4. Test with real data.</strong> Before any automation goes
                live, we run it with actual data from your business to make sure it handles every scenario
                correctly.
              </p>
              <p>
                <strong className="text-navy">5. Monitor and maintain.</strong> Automations need
                occasional maintenance as your tools update and your processes evolve. We monitor
                everything and fix issues before they affect your business.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                The Difference Between Automation and AI
              </h2>
              <p>
                Worth clarifying: not all workflow automation involves AI. Some automations are simple
                if/then logic&mdash;when X happens, do Y. A new form submission triggers a welcome email.
                Simple, reliable, no AI needed.
              </p>
              <p>
                Where AI comes in is when the workflow requires judgment. Classifying leads as hot, warm,
                or cold based on their behavior. Writing personalized follow-up messages. Deciding which
                team member should handle a particular request. Summarizing a long email chain into action
                items.
              </p>
              <p>
                We use AI where it adds value and simple automation where it doesn&apos;t. The goal is
                always the same: remove manual work and make your business run faster.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What It Costs (and What It Saves)
              </h2>
              <p>
                Workflow automation projects vary in scope, but most of our clients save 15-30 hours per
                week in staff time. If you&apos;re paying someone $20/hour to do manual data entry and
                follow-ups, that&apos;s $1,200-$2,400 per month in recovered labor costs alone.
              </p>
              <p>
                But the bigger savings come from things that are harder to measure: leads that don&apos;t
                fall through the cracks, follow-ups that happen in minutes instead of days, invoices that
                get sent on time, appointments that don&apos;t get missed. Those improvements compound
                over time.
              </p>
              <p>
                Most automation projects pay for themselves within 60 days. The ones focused on lead
                follow-up often pay for themselves in the first week.
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
            Find Out How Many Hours You Can Get Back
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Take the free AI audit and we&apos;ll identify the workflows eating the most time in your
            business&mdash;and show you how to automate them.
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
