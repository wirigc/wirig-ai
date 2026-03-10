'use client';

import { useState, useCallback } from 'react';

const STEPS = [
  {
    question: 'What type of business do you run?',
    options: [
      'Medical/Dental Clinic',
      'Med Spa / Aesthetics',
      'Real Estate',
      'Professional Services',
      'Home Services',
      'Other',
    ],
  },
  {
    question: "What's your biggest bottleneck right now?",
    options: [
      'Missing phone calls & leads',
      'Manual follow-ups eating my time',
      'No system for qualifying leads',
      'Customer support is overwhelming',
      'I need help with all of the above',
    ],
  },
  {
    question: 'How many leads or calls does your business get per month?',
    options: ['Less than 50', '50 to 200', '200 to 500', '500+'],
  },
  {
    question: "What's your approximate monthly revenue?",
    options: ['Under $10K', '$10K to $50K', '$50K to $200K', '$200K+'],
  },
];

const CALENDAR_ID = 'w6e74SwVPkueZ7bbLXKs';

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
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const getResultData = () => {
    if (answers.bottleneck === 'Missing phone calls & leads') {
      return {
        badge: 'Revenue Leak Detected',
        headline: '$3,200/month',
        subheadline: 'in missed revenue',
        body: 'Based on your answers, missed calls and slow follow-up may be costing you 8–12 booked appointments every month.',
      };
    }
    if (answers.bottleneck === 'Manual follow-ups eating my time') {
      return {
        badge: 'Time Leak Detected',
        headline: '20 hours/week',
        subheadline: 'wasted on manual follow-up',
        body: 'Based on your answers, repetitive admin and slow lead handling may be eating up hours your team should be spending on booked appointments and revenue-generating work.',
      };
    }
    if (answers.bottleneck === 'No system for qualifying leads') {
      return {
        badge: 'Lead Leak Detected',
        headline: '2–3 deals/month',
        subheadline: 'slipping through the cracks',
        body: 'Based on your answers, weak qualification and inconsistent follow-up may be causing high-intent prospects to disappear before your team ever gets to them.',
      };
    }
    return {
      badge: 'Revenue Leak Detected',
      headline: '$2,500+/month',
      subheadline: 'in missed revenue',
      body: 'Based on your answers, missed follow-up, weak qualification, and manual processes may be costing your business real money every month.',
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
