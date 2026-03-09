import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CRM Integration (GoHighLevel, HubSpot) | wirig.ai',
  description:
    'CRM setup and integration that actually works. GoHighLevel, HubSpot, and custom systems built for med spas, real estate, and professional services in Utah.',
};

export default function CRMIntegration() {
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
            CRM Integration
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            You bought a CRM. Maybe it was GoHighLevel, maybe HubSpot, maybe something else. The
            sales rep made it look incredible. Three months later, your team barely uses it, your
            data is a mess, and you&apos;re wondering if you should just go back to spreadsheets.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
              <p>
                This is the most common story we hear from business owners. The CRM itself isn&apos;t
                the problem. The problem is that nobody set it up correctly, nobody trained the team on
                how to actually use it, and nobody connected it to the rest of the tools the business
                runs on.
              </p>
              <p>
                A CRM should be the central nervous system of your business. Every lead, every customer
                interaction, every follow-up, every sale&mdash;it should all live in one place where
                anyone on your team can see exactly where things stand. When it works, it&apos;s
                incredibly powerful. When it doesn&apos;t, it&apos;s just another tab you forget to check.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What CRM Integration Actually Means
              </h2>
              <p>
                Setting up a CRM isn&apos;t just creating an account and importing your contacts. That&apos;s
                the easy part. Real CRM integration means:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Pipeline design</strong>&mdash;building deal stages that match how your business actually sells. Not generic templates, but stages that reflect your real sales process.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Automation rules</strong>&mdash;when a lead enters a specific stage, certain things should happen automatically. Follow-up emails, task assignments, notifications, status updates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Tool connections</strong>&mdash;your CRM needs to talk to everything else. Your website forms, your phone system, your email, your calendar, your invoicing tool.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Reporting</strong>&mdash;dashboards that show you what actually matters. Pipeline value, conversion rates by source, team performance, revenue forecasts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Team adoption</strong>&mdash;making the CRM so easy and useful that your team actually wants to use it, because it saves them time instead of creating extra work.</span>
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                GoHighLevel: Our Go-To for Most Businesses
              </h2>
              <p>
                We recommend GoHighLevel (GHL) for most of the businesses we work with, and here&apos;s
                why: it combines your CRM, marketing automation, SMS/email communication, appointment
                booking, reputation management, and funnel building into one platform. That means fewer
                tools, fewer integrations, and fewer things that can break.
              </p>
              <p>
                For a med spa, GHL handles the entire patient journey. A lead fills out a quiz on your
                website, their info goes into the CRM automatically, they get a text and email sequence,
                they book through the built-in calendar, they get appointment reminders, and after their
                visit they get a review request. All from one platform.
              </p>
              <p>
                For a real estate team, GHL manages leads from every source (Zillow, Realtor.com, your
                website, social media) in one pipeline. Each lead gets automatic follow-up based on where
                they came from and what they&apos;re looking for. Agents get assigned leads based on
                availability or territory. Nothing gets lost.
              </p>
              <p>
                We build GHL systems that run themselves. Your team logs in and sees exactly what needs
                their attention that day. Everything else is handled by automations.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                HubSpot: For Larger Teams and Complex Sales
              </h2>
              <p>
                HubSpot is the better choice when you have a bigger team, a longer sales cycle, or need
                more sophisticated reporting. It&apos;s more powerful than GHL in some areas (especially
                reporting and multi-team workflows) but also more complex to set up and maintain.
              </p>
              <p>
                We typically set up HubSpot for professional services firms, B2B companies, and businesses
                with sales cycles longer than 30 days. If you need to track deals across multiple stages,
                assign different team members at different points, and generate detailed pipeline reports,
                HubSpot is usually the right call.
              </p>
              <p>
                Our HubSpot work includes custom properties, deal pipelines, workflow automation,
                email sequences, landing pages, and integration with your existing tools. We also do
                migrations&mdash;if you&apos;re moving from another CRM, we handle the data transfer
                and make sure nothing gets lost.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Common CRM Problems We Fix
              </h2>
              <p>
                <strong className="text-navy">&quot;Our data is a disaster.&quot;</strong> Duplicate
                contacts, missing information, leads in the wrong pipeline stages, old data mixed with
                new. We clean it up, deduplicate, standardize fields, and set up rules to keep it clean
                going forward.
              </p>
              <p>
                <strong className="text-navy">&quot;Leads fall through the cracks.&quot;</strong> This
                usually means your follow-up isn&apos;t automated. We set up rules so that every lead
                gets contacted within minutes, follows a nurture sequence, and gets flagged if they
                go too long without activity.
              </p>
              <p>
                <strong className="text-navy">&quot;My team won&apos;t use it.&quot;</strong> Usually
                because the CRM creates extra work instead of saving time. We simplify the interface,
                automate the tedious parts, and set up the CRM so it actively helps your team sell
                instead of just being a data entry chore.
              </p>
              <p>
                <strong className="text-navy">&quot;I can&apos;t tell what&apos;s working.&quot;</strong> If
                you can&apos;t see which lead sources produce the most revenue, which team members
                close the most deals, or where leads drop out of your pipeline, your CRM
                isn&apos;t configured correctly. We build dashboards that answer these questions at
                a glance.
              </p>
              <p>
                <strong className="text-navy">&quot;Nothing is connected.&quot;</strong> Your website
                forms go to one place, phone leads go to another, referrals go to a spreadsheet. We
                connect every lead source to one CRM so you have a single source of truth.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                How the Process Works
              </h2>
              <p>
                <strong className="text-navy">1. Audit your current setup.</strong> We look at what
                you&apos;re using today, what&apos;s working, what&apos;s not, and where the gaps are.
                If you don&apos;t have a CRM yet, we assess your business needs and recommend the right
                platform.
              </p>
              <p>
                <strong className="text-navy">2. Design the system.</strong> We map your sales process,
                define pipeline stages, plan automations, and design the reporting dashboards. You see
                a blueprint before we build anything.
              </p>
              <p>
                <strong className="text-navy">3. Build and integrate.</strong> We set up the CRM,
                configure all automations, connect your tools, import and clean your data, and build
                your dashboards.
              </p>
              <p>
                <strong className="text-navy">4. Train your team.</strong> We do hands-on training with
                your team, showing them exactly how to use the system in their daily workflow. We also
                create simple reference guides so they don&apos;t have to remember everything.
              </p>
              <p>
                <strong className="text-navy">5. Support and optimize.</strong> After launch, we monitor
                the system, fix any issues, and make improvements based on how your team is actually
                using it. CRM setup isn&apos;t a one-time project&mdash;it evolves with your business.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Why This Matters
              </h2>
              <p>
                A properly set up CRM is the foundation that every other AI system builds on. Your
                AI voice receptionist needs somewhere to log calls. Your chatbot needs a pipeline to
                push leads into. Your automated follow-ups need contact data that&apos;s accurate and
                organized.
              </p>
              <p>
                Without a solid CRM, every other automation you build is working with bad data and
                broken processes. With one, everything clicks together. Leads flow in, get qualified,
                get followed up with, and close&mdash;and you can see exactly how it&apos;s all
                performing in real time.
              </p>
              <p>
                Most businesses we work with in Utah see their lead follow-up time drop from days to
                minutes, their pipeline visibility go from guesswork to dashboard, and their close rates
                improve 15-25% just from having a CRM that&apos;s set up and maintained correctly.
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
            Get a CRM That Actually Works for You
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Take the free AI audit and we&apos;ll assess your current CRM setup&mdash;or help you
            choose the right one&mdash;and show you what a properly integrated system looks like.
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
