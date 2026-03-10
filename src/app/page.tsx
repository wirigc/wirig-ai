import Navigation from '@/components/Navigation';
import QuizFunnel from '@/components/QuizFunnel';

export default function Home() {
  return (
    <>
      {/* 1. NAVIGATION */}
      <Navigation />

      {/* 2. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-ice" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal/5 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 text-sm text-teal mb-8 font-sans">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Built for real estate & mortgage professionals
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up-delay-1 text-navy">
            Stop Losing Leads to Missed Calls and Slow Follow-Up
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2 font-sans">
            We help real estate agents and mortgage professionals capture more inbound leads, respond faster, and book more appointments with AI-powered follow-up systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
            <a
              href="#audit"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] font-sans"
            >
              Book Your Free Lead Leak Audit &rarr;
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full border border-gray-300 text-navy font-medium text-lg hover:bg-gray-100 transition-all font-sans"
            >
              See How It Works
            </a>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              The Leak
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              Most leads don&apos;t die because they were bad. They die because nobody followed up fast enough.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Missed Calls Become Missed Closings</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                Every missed call is a potential buyer, seller, or borrower that ends up talking to somebody else instead of you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Manual Follow-Up Kills Speed-to-Lead</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                By the time you text back, call back, or remember to follow up, the lead has already cooled off or moved on.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898M2.25 6l3 3m-3-3h3m13.5 0a9 9 0 11-18 0" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Dead Database Leads Still Cost You Money</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                Old leads, missed inquiries, and inconsistent communication quietly drain revenue from the pipeline you already paid to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              What We Install
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-navy">
              Lead Recovery Systems for Real Estate & Mortgage
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
              We build systems that capture more value from the leads you&apos;re already getting instead of letting them die in silence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* AI Lead Response */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">AI Lead Response</h3>
              <p className="text-gray-700 leading-relaxed font-sans mb-4">
                AI handles inbound calls, responds instantly, qualifies prospects, and makes sure hot opportunities don&apos;t disappear while you&apos;re busy.
              </p>
              <a href="/services/ai-voice-receptionists" className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </a>
            </div>

            {/* AI Chatbots */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Follow-Up Automation</h3>
              <p className="text-gray-700 leading-relaxed font-sans mb-4">
                New leads get instant text, iMessage, or email follow-up so speed-to-lead improves and more conversations turn into booked appointments.
              </p>
              <a href="/services/ai-chatbots" className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </a>
            </div>

            {/* Pipeline Automation */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Pipeline Automation</h3>
              <p className="text-gray-700 leading-relaxed font-sans mb-4">
                From new inquiry to booked call, we automate the steps that usually depend on memory, sticky notes, and manual chasing.
              </p>
              <a href="/services/workflow-automation" className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </a>
            </div>

            {/* Lead Qualification Systems */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Lead Qualification Systems</h3>
              <p className="text-gray-700 leading-relaxed font-sans mb-4">
                Qualify buyers, sellers, and borrowers faster so you know who&apos;s serious, who needs nurture, and who should be booked now.
              </p>
              <a href="/services/lead-generation-funnels" className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </a>
            </div>

            {/* CRM & Booking Setup */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">CRM & Booking Setup</h3>
              <p className="text-gray-700 leading-relaxed font-sans mb-4">
                We wire up your CRM, pipeline, calendars, and automations so leads get routed correctly and appointments actually get booked.
              </p>
              <a href="/services/crm-integration" className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section id="how-it-works" className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              How It Works
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              From New Lead to Booked Conversation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Lead Leak Audit</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                We look at where leads are leaking, where response time is too slow, and what&apos;s costing you conversations and commissions.
              </p>
              <p className="text-teal text-sm font-sans font-medium mt-3">Takes 30 minutes</p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">System Setup</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                We install the lead response, follow-up, qualification, and booking systems that fit your business and how your team actually works.
              </p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Launch & Optimize</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                We launch, test, and tighten the system so more inbound leads turn into real conversations, appointments, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESULTS SECTION */}
      <section id="results" className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              Results
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              Why This Matters
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                40%
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                of inbound leads can go cold when follow-up is slow or inconsistent.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                14 days
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                from first inquiry to booked call should feel fast, not manual.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                $3,200
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                in potential monthly revenue can disappear when leads slip through.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                24/7
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                lead response helps you capture demand while competitors stay slow.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. AI AUDIT QUIZ FUNNEL */}
      <section id="audit" className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              Lead Leak Audit
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-4">
              See Where Your Leads Are Leaking
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
              Answer a few quick questions and we&apos;ll show you where missed calls, slow follow-up, and inconsistent communication may be costing you real business.
            </p>
          </div>

          <QuizFunnel />
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="relative py-24 md:py-32 bg-ice overflow-hidden">
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
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-navy">
            Stop Losing Leads You Already Paid For
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Every day without a proper lead recovery system is another day of missed conversations, dead follow-up, and lost deals.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Book Your Free Lead Leak Audit &rarr;
          </a>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <svg width="150" height="34" viewBox="0 0 300 64" fill="none" aria-label="wirig.ai">
                <g>
                  <path d="M4 16L16 48L28 24L40 48L52 16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="16" r="3.5" fill="#00B4D8"/>
                  <circle cx="28" cy="24" r="3.5" fill="#00B4D8"/>
                  <circle cx="52" cy="16" r="3.5" fill="#00B4D8"/>
                </g>
                <text x="72" y="44" fontFamily="Sora, sans-serif" fontSize="36" letterSpacing="-0.5">
                  <tspan fontWeight="700" fill="#FFFFFF">wirig</tspan>
                  <tspan fontWeight="700" fill="#00B4D8">.</tspan>
                  <tspan fontWeight="300" fill="#00B4D8">ai</tspan>
                </text>
              </svg>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-6">
                <a href="#services" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Services</a>
                <a href="#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">How It Works</a>
                <a href="#results" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Results</a>
                <a href="#audit" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Lead Leak Audit</a>
              </div>
              <a href="mailto:carter@wirig.ai" className="text-sm text-teal hover:text-teal-light transition-colors font-sans">
                carter@wirig.ai
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-gray-500 text-xs hover:text-gray-300 transition-colors font-sans">Privacy Policy</a>
              <span className="text-gray-600 text-xs">·</span>
              <a href="/terms" className="text-gray-500 text-xs hover:text-gray-300 transition-colors font-sans">Terms of Service</a>
            </div>
            <p className="text-gray-500 text-sm font-sans">
              &copy; 2026 wirig.ai. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs font-sans">Provo, Utah</p>
          </div>
        </div>
      </footer>
    </>
  );
}
