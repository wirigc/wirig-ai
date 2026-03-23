import Navigation from '@/components/Navigation';
import BookingModal from '@/components/BookingModal';

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
              Custom OpenClaw deployments
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up-delay-1 text-navy">
            Get a Personal AI Employee for Your Business
          </h1>

          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2 font-sans">
            We deploy and manage custom OpenClaw systems that work like a full-time employee. It finds leads, sends outreach, books meetings, and runs 24/7. You just tell it what to do.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
            <a
              href="/#demo"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] font-sans"
            >
              See a Live Demo &rarr;
            </a>
            <a
              href="/#how-it-works"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full border border-gray-300 text-navy font-medium text-lg hover:bg-gray-100 transition-all font-sans"
            >
              How It Works
            </a>
          </div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      </section>

      {/* 3. WHAT IS OPENCLAW */}
      <section className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              What is OpenClaw?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              The AI that actually does the work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Talk to It Like a Person</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                OpenClaw is an AI you chat with through Telegram, WhatsApp, or iMessage. Tell it what you need in plain English. It handles the rest.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">It Uses Your Computer</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                OpenClaw browses the web, scrapes data, sends emails, manages spreadsheets, and automates workflows. Like having a full-time assistant on your machine.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Setup Is the Hard Part</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                OpenClaw is powerful but complex to deploy. That is where we come in. We handle the full setup, configuration, integrations, and ongoing management so you do not have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section id="services" className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              What We Deploy
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-navy">
              Your AI employee can do all of this.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
              Every setup is custom. We configure OpenClaw for exactly what your business needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Lead Sourcing</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                Your AI scrapes the web, databases, and directories to find prospects that match your exact criteria. Ranked, scored, and exported.
              </p>
            </div>

            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Automated Outreach</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                Personalized emails, texts, and messages sent in your voice. Automatically. Every day. Your AI never forgets to follow up.
              </p>
            </div>

            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Meeting Booking</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                When a prospect is interested, your AI books the meeting on your calendar. You show up. It handles everything else.
              </p>
            </div>

            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Workflow Automation</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                CRM updates, data entry, report generation, file management. If it is repetitive, your AI can do it.
              </p>
            </div>

            <div className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-teal/20 hover:shadow-md transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Full Dashboard</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                Every lead, every message, every result tracked in a dashboard you can check anytime. Full visibility into what your AI is doing.
              </p>
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
              Three steps to your AI employee.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Discovery Call</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                15 minutes. We learn your business, your workflows, and what you need automated. No pitch, just figuring out if OpenClaw is the right fit.
              </p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Custom Build</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                We deploy OpenClaw, configure it for your specific use case, connect your tools, and train it on how you work. Done in days, not weeks.
              </p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-navy">Your AI Goes to Work</h3>
              <p className="text-gray-700 leading-relaxed font-sans">
                Start chatting with your AI employee on day one. We handle ongoing management, optimization, and support so it keeps getting better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY US */}
      <section id="results" className="relative py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              Why Wirig AI
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy">
              We are OpenClaw specialists.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                3+
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                businesses already running on OpenClaw systems we built.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                24/7
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                your AI works around the clock. No sick days. No downtime.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                Days
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                from discovery call to a working AI employee. Not weeks. Not months.
              </p>
            </div>
            <div className="text-center p-6 md:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="font-heading text-4xl md:text-5xl font-bold text-teal mb-2">
                $4K+
              </div>
              <p className="text-gray-700 font-sans text-sm md:text-base">
                cheaper per month than hiring someone to do the same work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEMO SECTION */}
      <section id="demo" className="relative py-24 md:py-32 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              See It In Action
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-4">
              Watch an OpenClaw system find leads and book a meeting.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
              Real demo. Real system. This is what your AI employee looks like in action.
            </p>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-navy flex items-center justify-center max-w-sm mx-auto">
            <video
              className="w-full h-auto"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-10 text-center">
            <BookingModal />
            <p className="text-gray-500 text-sm mt-3 font-sans">15 minutes. We will show you exactly what OpenClaw would look like for your business.</p>
          </div>
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
            Stop doing work your AI should be doing.
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Every hour you spend on repetitive tasks is an hour you could spend closing deals, building relationships, or going home early.
          </p>
          <a
            href="/#demo"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            See a Live Demo &rarr;
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
                <a href="/#services" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">What We Deploy</a>
                <a href="/#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">How It Works</a>
                <a href="/#results" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Why Us</a>
                <a href="/#demo" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Demo</a>
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
