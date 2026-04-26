import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Voice Agent | Never Miss a Call Again | wirig.ai',
  description:
    'AI answers every call within 2 rings, qualifies leads, and books appointments on your calendar 24/7. Built for home services, contractors, and local businesses.',
};

export default function VoicePage() {
  return (
    <div className="bg-navy text-white min-h-screen">
      {/* HERO */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 text-sm text-teal mb-8 font-sans">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            AI Voice Agents for Local Businesses
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Never Miss a Call.{' '}
            <span className="text-teal">Never Lose a Lead.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Your AI receptionist answers every call within 2 rings, qualifies the customer, and books appointments on your calendar. 24/7. Even at 2 AM on a Sunday.
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            See Pricing &rarr;
          </a>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              How many jobs did you lose <span className="text-teal">last week</span> because nobody picked up?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-navy border border-white/10 p-8 text-center">
              <div className="font-heading text-5xl font-bold text-red-400 mb-3">73%</div>
              <p className="text-gray-400 font-sans">of small businesses miss critical customer calls</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-8 text-center">
              <div className="font-heading text-5xl font-bold text-red-400 mb-3">85%</div>
              <p className="text-gray-400 font-sans">of callers who reach voicemail will NOT call back</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-8 text-center">
              <div className="font-heading text-5xl font-bold text-red-400 mb-3">$500+</div>
              <p className="text-gray-400 font-sans">average revenue lost per missed call in home services</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-teal/20 bg-teal/5 p-6 text-center">
            <p className="text-lg font-sans text-gray-300">
              Your team is out on jobs. The phone rings. Nobody answers. That customer calls your competitor instead. <strong className="text-white">Your AI employee fixes this permanently.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">How it works</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              From missed call to booked job in <span className="text-teal">60 seconds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal text-2xl font-bold">1</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Call Comes In</h3>
              <p className="text-gray-400 font-sans text-sm">Customer calls your business number. AI picks up within 2 rings.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal text-2xl font-bold">2</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">AI Qualifies</h3>
              <p className="text-gray-400 font-sans text-sm">Asks what they need, their address, urgency level, and budget range.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal text-2xl font-bold">3</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">Books the Job</h3>
              <p className="text-gray-400 font-sans text-sm">Schedules an appointment directly on your calendar. Sends confirmation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-teal text-2xl font-bold">4</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">You Get Notified</h3>
              <p className="text-gray-400 font-sans text-sm">Instant text summary with customer details, service needed, and appointment time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Built for</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Local businesses that <span className="text-teal">can&apos;t afford to miss calls</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🔧', name: 'HVAC' },
              { icon: '🔌', name: 'Electricians' },
              { icon: '🚿', name: 'Plumbers' },
              { icon: '🏠', name: 'Roofing' },
              { icon: '🌿', name: 'Landscaping' },
              { icon: '🐛', name: 'Pest Control' },
              { icon: '🚗', name: 'Auto Repair' },
              { icon: '🦷', name: 'Dental Offices' },
              { icon: '💆', name: 'Med Spas' },
              { icon: '⚖️', name: 'Law Firms' },
              { icon: '🏗️', name: 'Contractors' },
              { icon: '🏢', name: 'Property Mgmt' },
            ].map((item) => (
              <div key={item.name} className="rounded-xl bg-navy border border-white/10 p-5 text-center">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm font-sans mt-2 text-gray-300">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Everything included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <span className="text-teal text-xl mt-1">&#10003;</span>
              <div>
                <h3 className="font-heading text-lg font-semibold">24/7 Call Answering</h3>
                <p className="text-gray-400 font-sans text-sm">Nights, weekends, holidays. Your AI never calls in sick.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-xl mt-1">&#10003;</span>
              <div>
                <h3 className="font-heading text-lg font-semibold">Lead Qualification</h3>
                <p className="text-gray-400 font-sans text-sm">Asks the right questions so you know exactly what the customer needs before you call back.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-xl mt-1">&#10003;</span>
              <div>
                <h3 className="font-heading text-lg font-semibold">Appointment Booking</h3>
                <p className="text-gray-400 font-sans text-sm">Books directly on your calendar. Sends confirmation to the customer.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-xl mt-1">&#10003;</span>
              <div>
                <h3 className="font-heading text-lg font-semibold">Instant Text Summaries</h3>
                <p className="text-gray-400 font-sans text-sm">Get a text after every call with customer name, service needed, and appointment details.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-xl mt-1">&#10003;</span>
              <div>
                <h3 className="font-heading text-lg font-semibold">Custom Voice & Script</h3>
                <p className="text-gray-400 font-sans text-sm">Trained on your business, your services, your pricing. Sounds like your best receptionist.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-xl mt-1">&#10003;</span>
              <div>
                <h3 className="font-heading text-lg font-semibold">CRM Integration</h3>
                <p className="text-gray-400 font-sans text-sm">Every call logged, every lead tracked, every follow-up automated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-10">
            The math is simple
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl bg-navy border border-white/10 p-6">
              <div className="font-heading text-3xl font-bold text-teal mb-2">5</div>
              <p className="text-gray-400 font-sans text-sm">missed calls per week (conservative)</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-6">
              <div className="font-heading text-3xl font-bold text-teal mb-2">$500</div>
              <p className="text-gray-400 font-sans text-sm">average job value</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-6">
              <div className="font-heading text-3xl font-bold text-teal mb-2">$10K+</div>
              <p className="text-gray-400 font-sans text-sm">revenue recovered per month</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 font-sans">
            Your AI voice agent costs less than <strong className="text-white">one missed job per month.</strong>
          </p>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Pricing</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Simple pricing. No surprises.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-deep-blue p-8">
              <h3 className="font-heading text-xl font-semibold mb-2">Starter</h3>
              <div className="font-heading text-4xl font-bold text-teal mb-1">$997<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-500 font-sans text-sm mb-6">+ $1,500 one-time setup</p>
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">1 phone line</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Up to 500 minutes/mo</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Call qualification + booking</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Text summaries after every call</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Custom voice and script</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Calendar integration</span></li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-teal/40 bg-deep-blue p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
              <h3 className="font-heading text-xl font-semibold mb-2">Growth</h3>
              <div className="font-heading text-4xl font-bold text-teal mb-1">$1,497<span className="text-lg text-gray-400">/mo</span></div>
              <p className="text-gray-500 font-sans text-sm mb-6">+ $2,500 one-time setup</p>
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">2 phone lines</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-white font-semibold">Unlimited minutes</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Call qualification + booking</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Text summaries after every call</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-gray-300">Custom voice and script</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-white font-semibold">Full CRM integration</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-white font-semibold">Weekly performance reports</span></li>
                <li className="flex items-start gap-2"><span className="text-teal">&#10003;</span><span className="text-white font-semibold">Text + web chat included</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 bg-deep-blue overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to stop losing jobs to voicemail?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Book a free demo. I&apos;ll give you a phone number to call. Watch the AI answer, qualify you, and book an appointment in real time.
          </p>
          <a
            href="mailto:carter@wirig.ai?subject=Voice%20Agent%20Demo"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Book a Free Demo &rarr;
          </a>
          <p className="text-gray-500 text-sm mt-6 font-sans">carter@wirig.ai &middot; (702) 596-9460</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-sans">Wirig AI &middot; carter@wirig.ai &middot; wirig.ai</p>
          <p className="text-gray-600 text-xs font-sans mt-2">&copy; 2026 Wirig LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
