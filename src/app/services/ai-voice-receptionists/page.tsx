import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Voice Receptionists | wirig.ai',
  description:
    'AI voice receptionists that answer your phones 24/7, qualify callers, book appointments, and route urgent calls. Built for med spas, real estate, and professional services in Utah.',
};

export default function AIVoiceReceptionists() {
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
            AI Voice Receptionists
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            Your phone rings at 9pm on a Tuesday. It&apos;s a new patient wanting to book a Botox
            consultation. Nobody&apos;s at the front desk. That call goes to voicemail&mdash;and that
            patient books with someone else.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
              <p>
                This happens dozens of times a week at businesses across Utah. Med spas, dental offices,
                real estate teams, law firms&mdash;any business that depends on inbound calls is bleeding
                revenue every time a call goes unanswered.
              </p>
              <p>
                The math is simple. If your average client is worth $500 and you miss 10 calls a week,
                that&apos;s $5,000 in potential revenue walking out the door every single week. Even if
                only half of those callers would have converted, you&apos;re still looking at $2,500 per
                week. $10,000 per month. Gone.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What an AI Voice Receptionist Actually Does
              </h2>
              <p>
                An AI voice receptionist is exactly what it sounds like: a phone system that answers your
                calls, has a natural conversation with the caller, and takes action based on what they
                need. It&apos;s not an IVR menu. It&apos;s not &quot;press 1 for appointments.&quot;
                It&apos;s a conversational AI that sounds like a real person on your team.
              </p>
              <p>
                Here&apos;s what it handles:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Answers every call</strong>&mdash;24 hours a day, 7 days a week. No hold music, no voicemail, no &quot;call back during business hours.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Qualifies callers</strong>&mdash;asks the right questions to understand what they need, whether they&apos;re a good fit, and how urgent their request is.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Books appointments</strong>&mdash;checks your real calendar availability and schedules the caller directly. No back-and-forth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Routes urgent calls</strong>&mdash;if someone needs to talk to a human right now, the AI transfers the call to the right person on your team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Logs everything</strong>&mdash;every call gets summarized and pushed into your CRM. You see who called, what they wanted, and what action was taken.</span>
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Who This Is For
              </h2>
              <p>
                We build these systems primarily for three types of businesses:
              </p>
              <p>
                <strong className="text-navy">Med spas and healthcare practices.</strong> Patients call
                to book treatments, ask about pricing, or reschedule appointments. Most of these calls
                happen outside business hours. A med spa in Draper we work with was missing 35% of their
                inbound calls. After deploying their AI receptionist, they captured every single one.
                Their booking rate went up 28% in the first month.
              </p>
              <p>
                <strong className="text-navy">Real estate teams.</strong> When a buyer calls about a
                listing, they want answers now. Not tomorrow. The AI can answer property questions, qualify
                the lead based on budget and timeline, and book a showing&mdash;all while your agents are
                at dinner or showing another property.
              </p>
              <p>
                <strong className="text-navy">Professional services.</strong> Law firms, accounting firms,
                mortgage brokers&mdash;any business where a missed call means a missed client. The AI
                handles intake questions, determines urgency, and either books a consultation or routes
                the call to the right team member.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                How We Build It
              </h2>
              <p>
                Every AI receptionist we deploy is custom-built for your specific business. We don&apos;t
                use templates or generic scripts. Here&apos;s the process:
              </p>
              <p>
                <strong className="text-navy">1. We map your call flows.</strong> We spend time
                understanding how your phone system works today. What questions do callers ask? What are
                the most common requests? When do calls need to go to a human? We document all of this.
              </p>
              <p>
                <strong className="text-navy">2. We train the AI on your business.</strong> The AI learns
                your services, pricing, availability, policies, and tone of voice. If you&apos;re a luxury
                med spa, it sounds like a luxury med spa. If you&apos;re a fast-paced real estate team,
                it matches that energy.
              </p>
              <p>
                <strong className="text-navy">3. We integrate with your tools.</strong> The AI connects
                directly to your calendar (Google Calendar, Calendly, GoHighLevel, whatever you use), your
                CRM, and your phone system. When it books an appointment, it&apos;s real. When it logs a
                lead, it shows up in your pipeline.
              </p>
              <p>
                <strong className="text-navy">4. We test extensively.</strong> Before going live, we run
                dozens of test calls covering every scenario we&apos;ve mapped. Edge cases, weird
                questions, angry callers&mdash;we make sure the AI handles all of it gracefully.
              </p>
              <p>
                <strong className="text-navy">5. We deploy and monitor.</strong> Once live, we watch the
                system for the first few weeks, reviewing call transcripts and fine-tuning responses.
                Most systems are fully dialed in within 14 days.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What It Sounds Like
              </h2>
              <p>
                People are usually surprised by how natural the conversations sound. The AI doesn&apos;t
                have that robotic, stilted cadence you might expect. It handles interruptions, asks
                clarifying questions, and adapts its responses based on the conversation.
              </p>
              <p>
                A typical call might go like this: caller asks about Botox pricing, the AI gives the
                range, asks if they&apos;ve had the treatment before, mentions the current new-patient
                special, and offers to book a consultation. The whole thing takes about 90 seconds. The
                caller hangs up with an appointment on the books.
              </p>
              <p>
                Compare that to what happens without the AI: the phone rings, goes to voicemail, the
                caller doesn&apos;t leave a message (70% of callers don&apos;t), and they Google the next
                med spa on the list.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                The Numbers
              </h2>
              <p>
                For most businesses we work with, an AI voice receptionist pays for itself within the
                first two weeks. Here&apos;s why:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Zero missed calls. Every call gets answered, every time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Booking rates increase 20-40% because callers get instant help instead of voicemail.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Your team stops getting interrupted by routine calls, freeing them for higher-value work.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>After-hours coverage without paying for after-hours staff.</span>
                </li>
              </ul>
              <p>
                One real estate team in Utah County went from capturing about 60% of their inbound leads
                to over 95%. That translated to roughly $15,000 in additional closed deals in the first
                quarter.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Common Questions
              </h2>
              <p>
                <strong className="text-navy">&quot;Will callers know it&apos;s AI?&quot;</strong> Some
                will, some won&apos;t. The voice quality is very natural, and most callers don&apos;t
                care as long as they get what they need. We&apos;ve found that people prefer talking to
                a helpful AI over leaving a voicemail.
              </p>
              <p>
                <strong className="text-navy">&quot;What if the AI can&apos;t handle a question?&quot;</strong> It
                gracefully transfers the call to a human on your team. It never makes things up or gives
                wrong information. If it doesn&apos;t know, it says so and connects the caller with someone
                who does.
              </p>
              <p>
                <strong className="text-navy">&quot;How long does setup take?&quot;</strong> Most AI
                receptionists are live within 10-14 days from kickoff. The timeline depends on how complex
                your call flows are and how many integrations you need.
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
            Stop Missing Calls. Start Booking More Clients.
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Take the free AI audit and we&apos;ll show you exactly how many calls you&apos;re
            missing&mdash;and how much revenue an AI receptionist would recover.
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
