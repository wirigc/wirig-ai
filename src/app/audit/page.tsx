import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Audit | Find Where AI Saves You Time and Money | wirig.ai',
  description:
    'A 45-minute assessment that identifies exactly where AI can save your business time and money. Walk away with a custom report and actionable recommendations.',
};

export default function AuditPage() {
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
            AI Assessment for Your Business
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Find Out Exactly Where{' '}
            <span className="text-teal">AI Saves You 10+ Hours a Week</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            A 45-minute assessment with a custom report showing the specific AI tools and automations that will save your business time and money. No fluff. Just actionable recommendations.
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Book Your Assessment &rarr;
          </a>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-8">
            You know AI can help your business.{' '}
            <span className="text-teal">You just don&apos;t know where to start.</span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-sans">
            <p>
              You&apos;ve seen the headlines. You&apos;ve tried ChatGPT a few times. But you still don&apos;t know which AI tools actually matter for YOUR business, which processes to automate first, or how much time you could realistically save.
            </p>
            <p>
              That&apos;s exactly what this assessment answers. In 45 minutes, we identify your biggest time sinks, match them to specific AI solutions, and give you a step-by-step plan to implement them.
            </p>
            <p className="text-white font-semibold">
              99 out of 100 businesses we assess have at least 10 hours per week they could reclaim with AI.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">The Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Simple. Fast. Actionable.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-teal text-3xl font-bold">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">The Conversation</h3>
              <p className="text-gray-400 font-sans">
                45-minute call where we walk through your daily operations, tools, team structure, and biggest bottlenecks. You talk, we listen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-teal text-3xl font-bold">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">The Report</h3>
              <p className="text-gray-400 font-sans">
                Within 48 hours, you receive a custom report with specific AI tool recommendations, an effort-vs-impact matrix, and a 4-day quick-win implementation plan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-teal text-3xl font-bold">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">The Follow-Up</h3>
              <p className="text-gray-400 font-sans">
                30-minute follow-up call where we walk through every recommendation together and answer all your questions. You leave knowing exactly what to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S IN THE REPORT */}
      <section className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              What&apos;s in <span className="text-teal">your report</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-navy border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold mb-3 text-teal">Executive Summary</h3>
              <p className="text-gray-400 font-sans">Your key pain points summarized, total hours you can reclaim, and the top priority recommendations.</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold mb-3 text-teal">Effort vs. Impact Matrix</h3>
              <p className="text-gray-400 font-sans">Every bottleneck mapped by how easy it is to fix and how much time it saves. We focus on the quick wins first.</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold mb-3 text-teal">Tool Recommendations</h3>
              <p className="text-gray-400 font-sans">Specific AI tools matched to your exact pain points. Not generic advice. Real tools with pricing, setup instructions, and expected ROI.</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-8">
              <h3 className="font-heading text-lg font-semibold mb-3 text-teal">4-Day Quick Win Plan</h3>
              <p className="text-gray-400 font-sans">A step-by-step plan to implement the easiest, highest-impact changes in your first week. Day 1: do this. Day 2: do that. Simple.</p>
            </div>
            <div className="rounded-2xl bg-navy border border-white/10 p-8 md:col-span-2">
              <h3 className="font-heading text-lg font-semibold mb-3 text-teal">Financial Impact Analysis</h3>
              <p className="text-gray-400 font-sans">Hours saved per week, dollar value of that time, and total monthly cost of recommended tools. So you can see the ROI before you spend a dime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-10">
            This is for you if...
          </h2>
          <div className="space-y-5 font-sans text-lg">
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You have a team of 5-50 people and know there are inefficiencies you haven&apos;t fixed yet</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You&apos;re spending hours on manual processes that feel like they should be automated</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You know AI is the future but don&apos;t have time to figure out which tools to use</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You want advice from someone who has actually built and deployed AI systems, not just read about them</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-teal text-2xl leading-none mt-0.5">&#10003;</span>
              <span className="text-gray-300">You&apos;re tired of generic AI advice and want a plan built specifically for your business</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative py-20 md:py-28 bg-deep-blue">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Investment</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-12">
            One assessment. Total clarity.
          </h2>

          <div className="rounded-2xl border-2 border-teal/40 bg-navy p-10 md:p-12">
            <div className="font-heading text-6xl md:text-7xl font-bold text-white mb-2">
              $1,000
            </div>
            <p className="text-gray-400 font-sans text-lg mb-8">One-time investment</p>

            <div className="space-y-3 text-left max-w-md mx-auto mb-10 font-sans">
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">45-minute deep-dive assessment call</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Custom AI report delivered within 48 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Effort vs. impact matrix</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">Specific tool recommendations with pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">4-day quick-win implementation plan</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-gray-300">30-minute follow-up call to walk through everything</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal">&#10003;</span>
                <span className="text-white font-semibold">Financial impact analysis showing your exact ROI</span>
              </div>
            </div>

            <a
              href="mailto:carter@wirig.ai?subject=AI%20Assessment"
              className="inline-flex items-center justify-center h-14 px-12 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans w-full sm:w-auto"
            >
              Book Your Assessment &rarr;
            </a>

            <p className="text-gray-500 text-sm mt-6 font-sans">
              Most businesses reclaim 10+ hours per week. The assessment pays for itself in the first month.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Stop guessing where AI fits in your business.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Get a clear, actionable plan built specifically for you.
          </p>
          <a
            href="mailto:carter@wirig.ai?subject=AI%20Assessment"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans"
          >
            Book Your Assessment &rarr;
          </a>
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
