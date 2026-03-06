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
              Trusted by businesses across Utah
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up-delay-1 text-navy">
            Your Business Is Losing Money Every Hour It Runs{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-accent">
              Without AI
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2 font-sans">
            We build custom AI systems that answer your phones, qualify your leads, and automate
            your operations. Scale your business without hiring.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
            <a
              href="#audit"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] font-sans"
            >
              Get Your Free AI Audit &rarr;
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full border border-gray-300 text-navy font-medium text-lg hover:bg-gray-100 transition-all font-sans"
            >
              See How It Works
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-8 font-sans animate-fade-in-up-delay-3 flex items-center justify-center gap-2">
            <span className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-br from-teal to-teal-accent border-2 border-white inline-block"
                />
              ))}
            </span>
            Join 10+ businesses already automating with wirig.ai
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              The Problem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              You&apos;re working harder than you need to.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Missed Calls = Missed Revenue</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                Every unanswered call is a potential client going to your competitor. The average
                business misses 40% of inbound calls.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Manual Follow-ups Burn Hours</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                Your team spends hours on repetitive tasks that AI can handle in seconds. That&apos;s
                time you&apos;re paying for with zero ROI.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898M2.25 6l3 3m-3-3h3m13.5 0a9 9 0 11-18 0" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Leads Go Cold While You Sleep</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                Without 24/7 automated engagement, hot leads cool off overnight. By morning,
                they&apos;ve already moved on.
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
              What We Build
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-navy">
              AI Systems That Pay for Themselves
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
              Every solution we build is designed to generate more revenue than it costs.
              Most clients see returns within the first month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Voice Receptionists */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">AI Voice Receptionists</h3>
              <p className="text-gray-500 leading-relaxed font-sans mb-4">
                Never miss another call. Our AI answers your phone 24/7, qualifies callers, books
                appointments, and routes urgent calls to you. It sounds completely natural and human.
              </p>
              <span className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </span>
            </div>

            {/* AI Chatbots */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">AI Chatbots & Sales Agents</h3>
              <p className="text-gray-500 leading-relaxed font-sans mb-4">
                Turn your website into a 24/7 sales machine. Our chatbots engage visitors, answer
                questions, qualify leads, and book meetings while you sleep.
              </p>
              <span className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </span>
            </div>

            {/* Workflow Automation */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Workflow Automation</h3>
              <p className="text-gray-500 leading-relaxed font-sans mb-4">
                Eliminate the repetitive tasks draining your team. We connect your tools, automate
                your processes, and free up hours every week.
              </p>
              <span className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </span>
            </div>

            {/* Lead Generation Funnels */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Lead Generation Funnels</h3>
              <p className="text-gray-500 leading-relaxed font-sans mb-4">
                Smart funnels that don&apos;t just capture leads, they qualify them. Know
                exactly who&apos;s ready to buy before you ever pick up the phone.
              </p>
              <span className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </span>
            </div>

            {/* CRM Integration */}
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">CRM Integration</h3>
              <p className="text-gray-500 leading-relaxed font-sans mb-4">
                Your CRM should work for you, not the other way around. We set up and optimize
                GoHighLevel, HubSpot, or custom systems so nothing falls through the cracks.
              </p>
              <span className="text-teal text-sm font-sans font-medium group-hover:underline">
                Learn more &rarr;
              </span>
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
              From First Call to Fully Automated in 14 Days
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Free AI Audit</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                We analyze your business operations, identify automation opportunities, and show you
                exactly how much time and money you&apos;re leaving on the table.
              </p>
              <p className="text-teal text-sm font-sans font-medium mt-3">Takes 15 minutes</p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Custom Build</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                We design and build your AI systems from scratch, tailored to your business,
                your tools, and your workflow. No templates, no cookie-cutter solutions.
              </p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Launch & Scale</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                We deploy, test, and optimize everything. Then we stick around to make sure it keeps
                performing. Most clients see ROI within the first 30 days.
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
              The Numbers Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                40%
              </div>
              <p className="text-gray-500 font-sans text-sm md:text-base">
                of calls missed by the average business. Ours miss zero.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                14 days
              </div>
              <p className="text-gray-500 font-sans text-sm md:text-base">
                average time from kickoff to fully deployed AI system
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                $3,200
              </div>
              <p className="text-gray-500 font-sans text-sm md:text-base">
                average monthly savings per client from automation
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                24/7
              </div>
              <p className="text-gray-500 font-sans text-sm md:text-base">
                your AI works around the clock. No sick days, no breaks.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 font-sans text-lg">
                &ldquo;wirig.ai built us an AI receptionist that handles 80% of our inbound calls.
                We&apos;ve saved over 20 hours a week.&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold text-navy">Coming soon</p>
                <p className="text-gray-500 text-sm font-sans">Business Owner, Provo UT</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 font-sans text-lg">
                &ldquo;The automation workflows they built have completely transformed how we handle
                leads. Nothing falls through the cracks anymore.&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold text-navy">Coming soon</p>
                <p className="text-gray-500 text-sm font-sans">Clinic Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AI AUDIT QUIZ FUNNEL */}
      <section id="audit" className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              Free AI Audit
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-4">
              See How Much Your Business Could Save with AI
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
              Answer 4 quick questions and we&apos;ll show you exactly where AI can save you time
              and money.
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
            Stop Losing Money to Manual Work
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Every day without AI automation is another day of missed calls, cold leads, and wasted
            hours.
          </p>
          <a
            href="#audit"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Get Your Free AI Audit &rarr;
          </a>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-navy border-t border-white/5 py-12">
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
                <a href="#audit" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">AI Audit</a>
              </div>
              <a href="mailto:carter@wirig.ai" className="text-sm text-teal hover:text-teal-light transition-colors font-sans">
                carter@wirig.ai
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-1">
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
