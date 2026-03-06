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

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/w6e74SwVPkueZ7bbLXKs';

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

  const totalSteps = 5;
  const progress = submitted ? 100 : ((step + 1) / totalSteps) * 100;

  const getResultText = () => {
    if (answers.bottleneck === 'Missing phone calls & leads') {
      return 'Based on your answers, an AI Voice Receptionist could save you an estimated $2,000 to $5,000/month in missed opportunities.';
    }
    return "We've got your info! Let's set up a quick 15-minute call to walk through your custom AI audit.";
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="text-6xl mb-6">&#127881;</div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-navy">
            Your AI audit request is in!
          </h3>
          <p className="text-gray-700 text-lg mb-8 font-sans leading-relaxed">
            {getResultText()}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] font-sans"
          >
            Book Your Free AI Audit Call
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-4 font-sans">
            Pick a time that works for you. We&apos;ll walk through your personalized AI plan on the call.
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
            Almost done! Where should we send your AI audit?
          </h3>
          <p className="text-gray-700 text-center mb-8 font-sans">
            We&apos;ll review your answers and send a personalized automation plan within 24 hours.
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
              {submitting ? 'Submitting...' : 'Get My Free AI Audit Call \u2192'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
