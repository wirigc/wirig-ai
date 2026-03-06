export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2" aria-label="wirig.ai home">
            <svg width="180" height="40" viewBox="0 0 300 64" fill="none" aria-hidden="true">
              <g>
                <path d="M4 16L16 48L28 24L40 48L52 16" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="16" r="3.5" fill="#00B4D8"/>
                <circle cx="28" cy="24" r="3.5" fill="#00B4D8"/>
                <circle cx="52" cy="16" r="3.5" fill="#00B4D8"/>
                <line x1="4" y1="16" x2="52" y2="16" stroke="#00B4D8" strokeWidth="1" opacity="0.3"/>
                <line x1="28" y1="24" x2="4" y2="16" stroke="#00B4D8" strokeWidth="1" opacity="0.2"/>
                <line x1="28" y1="24" x2="52" y2="16" stroke="#00B4D8" strokeWidth="1" opacity="0.2"/>
              </g>
              <text x="72" y="44" fontFamily="Sora, sans-serif" fontSize="36" letterSpacing="-0.5">
                <tspan fontWeight="700" fill="#FFFFFF">wirig</tspan>
                <tspan fontWeight="700" fill="#00B4D8">.</tspan>
                <tspan fontWeight="300" fill="#00B4D8">ai</tspan>
              </text>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors font-sans">Services</a>
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors font-sans">How It Works</a>
            <a href="#results" className="text-sm text-gray-300 hover:text-white transition-colors font-sans">Results</a>
            <a href="#book" className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-teal text-navy text-sm font-semibold hover:bg-teal-light transition-colors">
              Book a Call
            </a>
          </div>
          <a href="#book" className="md:hidden inline-flex items-center justify-center h-9 px-5 rounded-full bg-teal text-navy text-sm font-semibold hover:bg-teal-light transition-colors">
            Book a Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-deep-blue to-navy" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal/5 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-teal-accent mb-8 font-sans">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              AI-Powered Business Automation
            </div>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in-up-delay-1">
            AI Systems That Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-accent">
              While You Sleep
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up-delay-2 font-sans">
            We build intelligent automation that handles your leads, answers your calls,
            and runs your operations — so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-teal text-navy font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] font-sans"
            >
              Book a Free Consultation
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full border border-white/20 text-white font-medium text-lg hover:bg-white/5 transition-all font-sans"
            >
              See Our Services
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 md:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">What We Build</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Automation That Drives Revenue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - AI Chatbots */}
            <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-teal/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">AI Chatbots & Sales Agents</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                24/7 lead qualification and customer support. Your AI agent engages visitors, answers questions, and books meetings while you sleep.
              </p>
            </div>

            {/* Card 2 - Voice */}
            <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-teal/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">AI Voice Receptionists</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                Never miss a call. AI answers your phone, handles inquiries, and books appointments with natural-sounding conversation.
              </p>
            </div>

            {/* Card 3 - Workflow */}
            <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-teal/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Workflow Automation</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                n8n + custom integrations to eliminate manual tasks. Connect your tools, automate your processes, and reclaim your time.
              </p>
            </div>

            {/* Card 4 - Lead Gen */}
            <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-teal/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Lead Generation Funnels</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                Smart funnels that qualify and convert. Capture leads, score them automatically, and route hot prospects straight to your calendar.
              </p>
            </div>

            {/* Card 5 - CRM */}
            <div className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-teal/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">CRM Integration</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                GoHighLevel, HubSpot, and custom setups. We wire your AI systems directly into your CRM so nothing falls through the cracks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24 md:py-32 bg-gradient-to-b from-navy via-deep-blue to-navy">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Three Steps to Automation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Discovery Call</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                We learn your business, identify bottlenecks, and map out the highest-impact automations for your specific workflows.
              </p>
              {/* Connector line (hidden on mobile) */}
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Custom Build</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                We design and build your AI systems — chatbots, voice agents, workflows — tailored exactly to your business needs.
              </p>
              <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-teal/30 to-teal/10" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl font-bold text-teal">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">Launch & Scale</h3>
              <p className="text-gray-500 leading-relaxed font-sans">
                We deploy, monitor, and optimize. Your systems get smarter over time while we handle maintenance and improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Social Proof */}
      <section id="results" className="relative py-24 md:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Results</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for Impact
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-heading text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-accent mb-2">10x</div>
              <p className="text-gray-500 font-sans font-medium">Faster Response Times</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-heading text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-accent mb-2">80%</div>
              <p className="text-gray-500 font-sans font-medium">Cost Reduction</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="font-heading text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-accent mb-2">24/7</div>
              <p className="text-gray-500 font-sans font-medium">Always-On Uptime</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-sans text-lg">
                &ldquo;wirig.ai automated our entire lead follow-up process. We went from losing 40% of leads to responding in under 60 seconds — every single time.&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold">Sarah M.</p>
                <p className="text-gray-500 text-sm font-sans">Marketing Agency Owner</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 font-sans text-lg">
                &ldquo;The AI voice receptionist is a game-changer. Our clients think they&apos;re talking to a real person, and we never miss a call anymore.&rdquo;
              </p>
              <div>
                <p className="font-heading font-semibold">James R.</p>
                <p className="text-gray-500 text-sm font-sans">Home Services Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="relative py-24 md:py-32 bg-gradient-to-b from-navy to-deep-blue overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `linear-gradient(rgba(0,180,216,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Automate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-accent">
              Your Business?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Let&apos;s talk about what AI can do for your business. No pressure, no commitment — just a conversation about your goals.
          </p>
          <a
            href="#book"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-navy font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Book Your Free Consultation
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-4 font-sans">Free 30-minute strategy session. No strings attached.</p>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-gray-500 text-sm font-sans">AI-powered automation for modern businesses.</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex items-center gap-6">
                <a href="#services" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Services</a>
                <a href="#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Process</a>
                <a href="#results" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Results</a>
                <a href="#book" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Contact</a>
              </div>
              <a href="mailto:carter@wirig.ai" className="text-sm text-teal hover:text-teal-light transition-colors font-sans">
                carter@wirig.ai
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm font-sans">&copy; 2026 wirig.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
