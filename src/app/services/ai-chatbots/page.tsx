import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'AI Chatbots & Sales Agents | wirig.ai',
  description:
    'Lead capture chatbots that engage visitors, qualify buyers, sellers, and borrowers, and turn website traffic into booked conversations. Built for real estate and mortgage teams.',
};

export default function AIChatbots() {
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
            AI Chatbots &amp; Sales Agents
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            Someone lands on your site at 10:47pm after seeing a listing, a mortgage ad, or a referral link. They have a question, they&apos;re interested, and they&apos;re ready now. They leave before anybody responds.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
              <p>
                This is the problem with most real estate and mortgage websites. Traffic comes in, curiosity is high, but there is no system to answer questions, qualify intent, and move the lead toward a real conversation.
              </p>
              <p>
                Most sites leak attention fast. A strong chatbot can capture buyer, seller, and borrower intent immediately, answer the first questions, and push serious people toward the next step instead of letting them vanish.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Not Your Grandma&apos;s Chatbot
              </h2>
              <p>
                Let&apos;s be clear about what we&apos;re not talking about. We&apos;re not talking about
                those annoying chat widgets that pop up with &quot;Hi! How can I help you?&quot; and then
                give you a menu of FAQs. Those are glorified search bars and everyone hates them.
              </p>
              <p>
                The AI chatbots we build are actual conversational agents. They understand context. They
                remember what the visitor said three messages ago. They can answer specific questions
                about your services, pricing, availability, and process. And most importantly, they
                know when to push for a booking and when to just be helpful.
              </p>
              <p>
                Think of it as having your best salesperson available on your website 24/7, except this
                one never has an off day, never forgets to follow up, and can handle 50 conversations
                simultaneously.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What the AI Chatbot Handles
              </h2>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Visitor engagement</strong>.proactively starts conversations based on what page someone is viewing and how long they&apos;ve been there.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Question answering</strong>.trained on your entire business to give accurate, specific answers about services, pricing, process, and policies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Lead qualification</strong>.asks the right questions to determine if someone is a good fit and how ready they are to buy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Appointment booking</strong>.checks your calendar and books meetings directly in the chat. No &quot;someone will call you back.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">CRM updates</strong>.every conversation gets logged, leads get tagged and scored, and your team gets notified when a hot lead comes through.</span>
                </li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Real Examples from Real Businesses
              </h2>
              <p>
                <strong className="text-navy">Med spa in Salt Lake City.</strong> Their website gets
                about 2,000 visits per month, mostly from Google Ads. Before the chatbot, they were
                getting around 40 consultation bookings per month from the website. After deploying
                the AI chatbot, that number jumped to 95. Same traffic, same ad spend.just a
                smarter website.
              </p>
              <p>
                The chatbot handles the most common questions: &quot;How much is Botox?&quot;
                &quot;Do you do lip filler?&quot; &quot;What&apos;s the downtime for a facial?&quot;
                It gives specific answers (not generic fluff), mentions current promotions, and nudges
                toward booking. Most visitors who engage with the chatbot book within the same session.
              </p>
              <p>
                <strong className="text-navy">Real estate team in Provo.</strong> They have a lot of
                listing pages but were losing visitors who had questions about specific properties. The
                AI chatbot knows every listing in their portfolio.price, square footage, HOA fees,
                school district, everything. When someone asks about a property, the bot answers
                immediately and offers to schedule a showing with the right agent.
              </p>
              <p>
                <strong className="text-navy">Mortgage broker.</strong> Pre-qualification is the biggest
                bottleneck. The chatbot walks potential borrowers through basic qualification questions
                (income, credit score range, property type, down payment) and routes qualified leads
                directly to a loan officer. Unqualified leads get helpful information about what they&apos;d
                need to do to qualify. Nobody&apos;s time gets wasted.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                How We Build Your Chatbot
              </h2>
              <p>
                Every chatbot we deploy is custom. We don&apos;t use off-the-shelf solutions or
                drag-and-drop builders. Here&apos;s how the process works:
              </p>
              <p>
                <strong className="text-navy">We learn your business.</strong> We go deep on your
                services, pricing, process, target customer, common objections, and competitive
                advantages. The AI needs to know your business as well as your best team member does.
              </p>
              <p>
                <strong className="text-navy">We design the conversation flows.</strong> Not rigid
                scripts.actual conversation patterns. We map out the most common scenarios: someone
                asking about pricing, someone comparing options, someone ready to book, someone just
                browsing. The AI handles all of these differently.
              </p>
              <p>
                <strong className="text-navy">We train and test.</strong> We feed the AI your content,
                FAQs, and business knowledge. Then we run hundreds of test conversations to make sure
                it responds accurately and naturally across every scenario.
              </p>
              <p>
                <strong className="text-navy">We integrate.</strong> The chatbot connects to your
                calendar, CRM, and notification system. When a lead comes through, your team knows
                about it immediately. When a meeting gets booked, it shows up on the right person&apos;s
                calendar.
              </p>
              <p>
                <strong className="text-navy">We optimize continuously.</strong> We review conversation
                logs regularly, identify where the AI could do better, and make improvements. The
                chatbot gets smarter over time.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                Beyond the Website
              </h2>
              <p>
                The same AI agent that runs on your website can also work on other channels. We deploy
                chatbots on:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">SMS/text</strong>.respond to text inquiries automatically with the same intelligence as the web chatbot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Instagram and Facebook DMs</strong>.capture leads from social media without your team manually monitoring messages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span><strong className="text-navy">Google Business Messages</strong>.engage people who find you on Google Maps or Search before they even visit your site.</span>
                </li>
              </ul>
              <p>
                Same AI brain, multiple channels. One conversation can start on your website and continue
                over text. The AI remembers everything.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">
                What You Can Expect
              </h2>
              <p>
                Based on the chatbots we&apos;ve deployed for Utah businesses, here are the typical
                results:
              </p>
              <ul className="space-y-3 ml-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Website conversion rates increase 3-5x</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>50-70% of chatbot conversations happen outside business hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Lead response time drops from hours to seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0" />
                  <span>Your team only talks to qualified, interested leads</span>
                </li>
              </ul>
              <p>
                Most chatbots are live within 10-14 days. ROI typically shows up in the first month.
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
            Turn Your Website Into a Sales Machine
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Take the free AI audit and we&apos;ll show you exactly how many leads your website is
            losing.and how a chatbot would capture them.
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
