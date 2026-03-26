import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgencyClaw | Launch Your AI Lead Gen Agency',
  description:
    'Stop selling AI chatbots nobody asked for. Learn how to sell the one thing every business owner actually wants: more leads and more deals. Close your first $3K+ client.',
};

export default function AgencyPage() {
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
            Limited spots available
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Stop Selling AI Chatbots Nobody Asked For.{' '}
            <span className="text-teal">Sell Leads.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Launch your AI lead generation agency and close your first $3K+ client. A proven system from someone who actually did it at 20 years old.
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Join AgencyClaw &rarr;
          </a>
        </div>
      </section>

      {/* VSL PLACEHOLDER */}
      <section className="relative py-16 bg-deep-blue">
        <div className="max-w-3xl mx-auto px-6">
          <div className="aspect-video rounded-2xl bg-navy border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-500 font-sans text-sm">Video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
            The problem
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Instagram is lying to you about AI agencies.
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
            <p>
              Every guru is telling young entrepreneurs to sell AI receptionists, chatbots, and n8n automations. But business owners don&apos;t care about AI. They care about getting more customers.
            </p>
            <p>
              The result? Thousands of motivated entrepreneurs stuck watching tutorials, buying $47 ebooks, bouncing between ideas, and never closing a single deal. They waste months, not just money.
            </p>
            <p className="text-white font-semibold">
              You don&apos;t need another course on &ldquo;how AI works.&rdquo; You need a system that gets you paid.
            </p>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
            My story
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8">
            I failed at 6 businesses before this one worked.
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
            <p>
              Dropshipping. Clothing brand. eBay arbitrage. Affiliate marketing. A supplement brand. All failed.
            </p>
            <p>
              Then I discovered AI-powered lead generation with OpenClaw. I built a system that scrapes databases, ranks leads, loads them into a CRM, and sends automated outreach. I started selling it to real estate professionals and business brokers.
            </p>
            <p>
              I closed my first clients, started collecting setup fees and monthly retainers, and made more from one deal than months of trying everything else.
            </p>
            <p className="text-white font-semibold text-xl">
              This is the first thing that actually worked. Now I&apos;m teaching other young entrepreneurs how to do the exact same thing.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
              What&apos;s inside
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need to close your first $3K+ client.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-deep-blue border border-white/10 p-8">
              <div className="text-teal font-heading font-bold text-sm mb-3">MODULE 1</div>
              <h3 className="font-heading text-xl font-semibold mb-3">System Setup</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                Set up your personal OpenClaw instance and GoHighLevel CRM from scratch. Hardware selection, software installation, and full configuration so your lead gen machine is ready to go.
              </p>
            </div>

            <div className="rounded-2xl bg-deep-blue border border-white/10 p-8">
              <div className="text-teal font-heading font-bold text-sm mb-3">MODULE 2</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Connect &amp; Configure</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                Connect OpenClaw to your iMessage and Gmail. Choose the right APIs and databases for your target market. Configure lead scraping, ranking, and automated outreach sequences.
              </p>
            </div>

            <div className="rounded-2xl bg-deep-blue border border-white/10 p-8">
              <div className="text-teal font-heading font-bold text-sm mb-3">MODULE 3</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Outreach &amp; Lead Gen</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                Start scraping leads and sending outreach to 100-1,000 local business owners. Learn how to write messages that get responses and build a pipeline of interested prospects.
              </p>
            </div>

            <div className="rounded-2xl bg-deep-blue border border-white/10 p-8">
              <div className="text-teal font-heading font-bold text-sm mb-3">MODULE 4</div>
              <h3 className="font-heading text-xl font-semibold mb-3">The Discovery Call &amp; Demo</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                How to run a discovery call that builds trust and urgency. How to demo your OpenClaw system live so the prospect sees the value immediately. The exact framework for closing.
              </p>
            </div>

            <div className="rounded-2xl bg-deep-blue border border-white/10 p-8 md:col-span-2">
              <div className="text-teal font-heading font-bold text-sm mb-3">MODULE 5</div>
              <h3 className="font-heading text-xl font-semibold mb-3">Close, Price &amp; Deliver</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                How to price your AI lead gen service ($2-3K setup + $500-1K/month retainer). How to close the deal confidently. How to deliver the setup and train your client on the system.
              </p>
            </div>
          </div>

          {/* ALSO INCLUDED */}
          <div className="mt-12 rounded-2xl border border-teal/20 bg-teal/5 p-8">
            <h3 className="font-heading text-xl font-semibold mb-6">Also included:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">&#10003;</span>
                <span className="text-gray-300">Full course library with step-by-step video modules</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">&#10003;</span>
                <span className="text-gray-300">Weekly live group coaching call with Carter</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">&#10003;</span>
                <span className="text-gray-300">Private community of driven AI entrepreneurs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal mt-1">&#10003;</span>
                <span className="text-gray-300">Outreach templates, scripts, and demo frameworks</span>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <span className="text-teal mt-1">&#10003;</span>
                <span className="text-white font-semibold">&ldquo;Stay Until You Close&rdquo; guarantee: unlimited access until you land your first client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
            Is this for you?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-10">
            AgencyClaw is for you if...
          </h2>

          <div className="space-y-5 font-sans text-lg">
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You&apos;re 16-28 and want to build a real business, not just watch videos about it</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You know AI is the opportunity but don&apos;t know what to sell or how to get clients</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You have some savings and are ready to invest in yourself</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You&apos;re tired of courses that teach theory from people who&apos;ve never closed a deal</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You&apos;re willing to put in the work: follow the modules, attend weekly calls, send outreach</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
              The ROI
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Your first client pays for the entire program.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-2xl bg-deep-blue border border-white/10 p-6 text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-teal mb-2">$3.5K</div>
              <p className="text-gray-400 font-sans text-sm">Your investment</p>
            </div>
            <div className="rounded-2xl bg-deep-blue border border-white/10 p-6 text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-teal mb-2">$2-3K</div>
              <p className="text-gray-400 font-sans text-sm">First client setup fee</p>
            </div>
            <div className="rounded-2xl bg-deep-blue border border-white/10 p-6 text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-teal mb-2">$1K/mo</div>
              <p className="text-gray-400 font-sans text-sm">Monthly retainer</p>
            </div>
            <div className="rounded-2xl bg-deep-blue border border-white/10 p-6 text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-teal mb-2">$10K+</div>
              <p className="text-gray-400 font-sans text-sm">First 3-6 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* COST OF INACTION */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8">
            The cost of doing nothing.
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
            <p>
              Without a proven system, here&apos;s what the next 6-12 months look like: watching YouTube videos, buying $47 ebooks, bouncing between business models, and never closing a single deal.
            </p>
            <p>
              You&apos;re not just wasting money. You&apos;re wasting the most valuable asset you have at this age: <span className="text-white font-semibold">time.</span>
            </p>
            <p>
              Every month you delay is a month of client revenue you&apos;re leaving on the table. At even one client per month, that&apos;s $2-3K in missed setup fees and $500-1K in recurring revenue. Compounding.
            </p>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
            Why AgencyClaw
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-10">
            This is not another AI course.
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal text-xl">&#9881;</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">Built by someone who&apos;s actually doing it.</h3>
                <p className="text-gray-400 font-sans leading-relaxed">Not theory from a guru. A real system with real paying clients. I closed deals, collected retainers, and built this at 20 years old.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal text-xl">&#128200;</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">Lead gen, not chatbots.</h3>
                <p className="text-gray-400 font-sans leading-relaxed">We teach the one AI service where the ROI is obvious on day one. You bring leads, they close deals, they pay you. No convincing needed.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal text-xl">&#128736;</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">End-to-end system.</h3>
                <p className="text-gray-400 font-sans leading-relaxed">From setting up OpenClaw to closing your first deal. What to sell, how to build it, how to find clients, how to close them. Nothing is left out.</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal text-xl">&#128170;</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold mb-2">&ldquo;Stay Until You Close&rdquo; guarantee.</h3>
                <p className="text-gray-400 font-sans leading-relaxed">We don&apos;t take your money and disappear. You get coaching until you land your first client. No time limit. Period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12">
            One price. Everything included.
          </h2>

          <div className="rounded-2xl border-2 border-teal/40 bg-navy p-10 md:p-12">
            <div className="font-heading text-6xl md:text-7xl font-bold text-white mb-2">
              $3,500
            </div>
            <p className="text-gray-400 font-sans text-lg mb-2">One-time investment</p>
            <p className="text-teal font-sans text-sm mb-8">Klarna payment plans available</p>

            <div className="space-y-3 text-left max-w-md mx-auto mb-10 font-sans">
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Full course library with video modules</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Weekly live coaching calls with Carter</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Private community access</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Outreach templates, scripts, and frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-white font-semibold">&ldquo;Stay Until You Close&rdquo; guarantee</span>
              </div>
            </div>

            <a
              href="https://whop.com/agencyclaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-12 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans w-full sm:w-auto"
            >
              Join AgencyClaw &rarr;
            </a>

            <p className="text-gray-500 text-sm mt-6 font-sans">
              Your first client pays for the entire program. Everything after that is profit.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Every month you wait is a month of revenue you&apos;re leaving on the table.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Stop watching tutorials. Stop buying ebooks. Start closing deals.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Join AgencyClaw &rarr;
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm font-sans">
            AgencyClaw by Wirig AI &middot; carter@wirig.ai &middot; wirig.ai
          </p>
          <p className="text-gray-600 text-xs font-sans mt-2">
            &copy; 2026 Wirig LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
