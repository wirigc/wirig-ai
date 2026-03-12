'use client';

import { useState, useCallback } from 'react';

const STEPS = [
  {
    question: 'What best describes your business?',
    options: [
      'Real Estate Agent',
      'Real Estate Team',
      'Mortgage Broker',
      'Loan Officer',
      'Real Estate Brokerage',
      'Other',
    ],
  },
  {
    question: "Where are the most leads slipping through right now?",
    options: [
      'Missed calls and inbound inquiries',
      'Slow follow-up on new leads',
      'No system for nurturing old leads',
      'Too much manual back-and-forth',
      'All of the above',
    ],
  },
  {
    question: 'How many new leads or inquiries do you get per month?',
    options: ['Less than 25', '25 to 100', '100 to 300', '300+'],
  },
  {
    question: "What's your approximate monthly closed revenue?",
    options: ['Under $25K', '$25K to $100K', '$100K to $300K', '$300K+'],
  },
];

const CALENDAR_ID = 'R1YmLPNZVww1gjpgtITD';

type Answers = {
  businessType: string;
  bottleneck: string;
  leadVolume: string;
  revenue: string;
  name: string;
  email: string;
  phone: string;
};

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    businessType: '',
    bottleneck: '',
    leadVolume: '',
    revenue: '',
    name: '',
    email: '',
    phone: '',
  });
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const answerKeys: (keyof Answers)[] = ['businessType', 'bottleneck', 'leadVolume', 'revenue'];

  const selectOption = useCallback(
    (option: string) => {
      const key = answerKeys[step];
      setAnswers((prev) => ({ ...prev, [key]: option }));
      setDirection('forward');
      setTimeout(() => setStep((s) => s + 1), 150);
    },
    [step]
  );

  const goBack = useCallback(() => {
    if (step > 0) {
      setDirection('back');
      setTimeout(() => setStep((s) => s - 1), 50);
    }
  }, [step]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      });
      if (typeof window !== 'undefined' && (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq) {
        (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'Lead');
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const getResultData = () => {
    if (answers.bottleneck === 'Missed calls and inbound inquiries') {
      return {
        badge: 'Lead Leak Detected',
        headline: '$3,200/month',
        subheadline: 'in missed commission opportunity',
        body: 'Based on your answers, missed calls and unworked inbound inquiries may be costing you qualified buyers, sellers, or borrowers every single month.',
      };
    }
    if (answers.bottleneck === 'Slow follow-up on new leads') {
      return {
        badge: 'Speed-to-Lead Leak',
        headline: '5–10 hot leads',
        subheadline: 'cooling off every month',
        body: 'Based on your answers, slow response time may be causing serious prospects to lose interest before your team ever gets them on the phone.',
      };
    }
    if (answers.bottleneck === 'No system for nurturing old leads') {
      return {
        badge: 'Database Leak Detected',
        headline: '2–3 deals/month',
        subheadline: 'sitting in your old pipeline',
        body: 'Based on your answers, dead leads in your database may still represent real closings if they were followed up with consistently and correctly.',
      };
    }
    if (answers.bottleneck === 'Too much manual back-and-forth') {
      return {
        badge: 'Time Leak Detected',
        headline: '15+ hours/week',
        subheadline: 'lost to manual lead handling',
        body: 'Based on your answers, too much texting, chasing, and back-and-forth may be pulling you away from the conversations and closings that actually matter.',
      };
    }
    return {
      badge: 'Revenue Leak Detected',
      headline: '$4,500+/month',
      subheadline: 'in missed opportunity',
      body: 'Based on your answers, missed calls, slow follow-up, and inconsistent lead handling may be costing your business real revenue every month.',
    };
  };

  // Build the GHL calendar embed URL with pre-filled contact info
  const getCalendarUrl = () => {
    const params = new URLSearchParams();
    if (answers.name) {
      const parts = answers.name.trim().split(' ');
      params.set('first_name', parts[0] || '');
      if (parts.length > 1) params.set('last_name', parts.slice(1).join(' '));
    }
    if (answers.email) params.set('email', answers.email);
    if (answers.phone) params.set('phone', answers.phone);
    return `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}?${params.toString()}`;
  };

  const totalSteps = 5;
  const progress = submitted ? 100 : ((step + 1) / totalSteps) * 100;
  const resultData = getResultData();

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Results header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-2 text-sm font-sans font-medium mb-4">
              <span>⚠️</span>
              <span>{resultData.badge}</span>
            </div>
            <div className="mb-4">
              <div className="font-heading text-5xl md:text-7xl font-bold text-navy leading-none">{resultData.headline}</div>
              <div className="font-heading text-xl md:text-3xl font-semibold text-red-700 mt-2">{resultData.subheadline}</div>
            </div>
            <p className="text-gray-700 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto mb-4">
              {resultData.body}
            </p>
          </div>

          {/* Embedded calendar */}
          <div className="bg-white rounded-2xl border-2 border-red-200 overflow-hidden shadow-lg shadow-red-100/50">
            <div className="bg-navy text-white px-6 py-6 text-center">
              <p className="text-white text-base md:text-lg font-sans font-semibold max-w-2xl mx-auto">
                Book your free audit below and I&apos;ll show you exactly where the leak is coming from.
              </p>
            </div>
            <iframe
              src={getCalendarUrl()}
              className="w-full border-0"
              style={{ height: '700px', minHeight: '600px' }}
              title="Book your AI Audit Call"
              loading="eager"
            />
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center font-sans">
            No pressure. No fluff. Just a clear breakdown of what&apos;s leaking and how to fix it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-sans">
            Step {step + 1} of {totalSteps}
          </span>
          {step > 0 && (
            <button
              onClick={goBack}
              className="text-sm text-teal hover:text-teal-light transition-colors font-sans flex items-center gap-1"
              type="button"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
        </div>
        <div className="h-1.5 bg-gray-300/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-teal to-teal-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Quiz steps 1-4 */}
      {step < 4 && (
        <div
          key={step}
          className={`quiz-step ${direction === 'forward' ? 'quiz-enter-forward' : 'quiz-enter-back'}`}
        >
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-8 text-center text-navy">
            {STEPS[step].question}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label={STEPS[step].question}>
            {STEPS[step].options.map((option) => (
              <button
                key={option}
                onClick={() => selectOption(option)}
                className={`group relative p-5 rounded-xl border-2 text-left font-sans transition-all duration-200
                  ${
                    answers[answerKeys[step]] === option
                      ? 'border-teal bg-teal/5 text-navy'
                      : 'border-gray-300/40 hover:border-teal/60 hover:bg-teal/[0.02] text-gray-700'
                  }`}
                role="radio"
                aria-checked={answers[answerKeys[step]] === option}
                type="button"
              >
                <span className="font-medium">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Contact form */}
      {step === 4 && (
        <div
          key="contact"
          className="quiz-step quiz-enter-forward"
        >
          <h3 className="font-heading text-xl md:text-2xl font-semibold mb-2 text-center text-navy">
            Almost done! Where should we send your results?
          </h3>
          <p className="text-gray-700 text-center mb-8 font-sans">
            Enter your info below to see how much revenue your business could be losing without AI.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="audit-name" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
                Name
              </label>
              <input
                id="audit-name"
                type="text"
                required
                value={answers.name}
                onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-300/40 bg-white text-gray-700 font-sans focus:border-teal focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="audit-email" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
                Email
              </label>
              <input
                id="audit-email"
                type="email"
                required
                value={answers.email}
                onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-300/40 bg-white text-gray-700 font-sans focus:border-teal focus:outline-none transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="audit-phone" className="block text-sm font-medium text-gray-700 mb-1.5 font-sans">
                Phone
              </label>
              <input
                id="audit-phone"
                type="tel"
                required
                value={answers.phone}
                onChange={(e) => setAnswers((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full h-12 px-4 rounded-xl border-2 border-gray-300/40 bg-white text-gray-700 font-sans focus:border-teal focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full h-13 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] font-sans disabled:opacity-60 disabled:cursor-not-allowed mt-4"
            >
              {submitting ? 'Submitting...' : 'See How Much Revenue I\u2019m Losing \u2192'}
            </button>
            <p className="text-gray-400 text-xs text-center mt-3 font-sans">
              We respect your privacy. No spam, ever.{' '}
              <a href="/privacy" className="text-teal/70 hover:text-teal transition-colors underline">Privacy Policy</a>
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
