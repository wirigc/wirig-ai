'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ============================================================
// TYPES
// ============================================================

type ServiceType = 'employee' | 'receptionist' | 'audit'

interface QuizQuestion {
  id: string
  label: string
  type: 'text' | 'email' | 'tel' | 'select' | 'multiselect' | 'open'
  options?: string[]
  placeholder?: string
}

interface QuizData {
  service: ServiceType
  questions: QuizQuestion[]
  getResult: (answers: Record<string, string | string[]>) => string
}

// ============================================================
// QUIZ CONFIGURATIONS
// ============================================================

const quizConfigs: Record<ServiceType, QuizData> = {
  employee: {
    service: 'employee',
    questions: [
      { id: 'name', label: "What's your name?", type: 'text', placeholder: 'John Smith' },
      { id: 'email', label: "What's your email?", type: 'email', placeholder: 'john@company.com' },
      { id: 'phone', label: "What's your phone number?", type: 'tel', placeholder: '(555) 123-4567' },
      {
        id: 'industry',
        label: 'What industry are you in?',
        type: 'select',
        options: ['Real Estate', 'Home Services', 'Healthcare', 'Professional Services', 'E-commerce', 'Other'],
      },
      {
        id: 'tasks',
        label: 'What tasks eat up most of your time?',
        type: 'multiselect',
        options: ['Lead generation', 'Outreach/follow-up', 'Data entry', 'Research', 'CRM management', 'Content creation'],
      },
      {
        id: 'hours',
        label: 'How many hours per week do you spend on those tasks?',
        type: 'select',
        options: ['1-5', '5-10', '10-20', '20+'],
      },
    ],
    getResult: (answers) => {
      const hoursMap: Record<string, number> = { '1-5': 3, '5-10': 8, '10-20': 15, '20+': 25 }
      const hours = hoursMap[answers.hours as string] || 10
      const cost = hours * 50 * 4
      return `Based on your answers, you're spending approximately ${hours} hours per week on tasks AI can handle. That's $${cost.toLocaleString()} in time cost every month. Your AI employee would pay for itself in week one.`
    },
  },
  receptionist: {
    service: 'receptionist',
    questions: [
      { id: 'name', label: "What's your name?", type: 'text', placeholder: 'John Smith' },
      { id: 'email', label: "What's your email?", type: 'email', placeholder: 'john@company.com' },
      { id: 'phone', label: "What's your phone number?", type: 'tel', placeholder: '(555) 123-4567' },
      {
        id: 'business_type',
        label: 'What type of business?',
        type: 'select',
        options: ['HVAC', 'Plumbing', 'Electrical', 'Dental/Medical', 'Law Firm', 'Auto Repair', 'Landscaping', 'Property Management', 'Other'],
      },
      {
        id: 'missed_calls',
        label: 'How many calls does your team miss per week?',
        type: 'select',
        options: ['1-5', '5-10', '10-20', '20+'],
      },
      {
        id: 'current_solution',
        label: 'Do you currently have a receptionist or answering service?',
        type: 'select',
        options: ['Yes full-time', 'Yes part-time', 'No', 'Using voicemail'],
      },
    ],
    getResult: (answers) => {
      const callsMap: Record<string, number> = { '1-5': 3, '5-10': 8, '10-20': 15, '20+': 25 }
      const calls = callsMap[answers.missed_calls as string] || 8
      const revenue = calls * 500 * 4
      return `You're missing approximately ${calls} calls per week. At an average of $500 per job, that's $${revenue.toLocaleString()} in lost revenue every month. Your AI receptionist fixes this permanently.`
    },
  },
  audit: {
    service: 'audit',
    questions: [
      { id: 'name', label: "What's your name?", type: 'text', placeholder: 'John Smith' },
      { id: 'email', label: "What's your email?", type: 'email', placeholder: 'john@company.com' },
      { id: 'phone', label: "What's your phone number?", type: 'tel', placeholder: '(555) 123-4567' },
      { id: 'business_description', label: 'What does your business do?', type: 'open', placeholder: 'We provide...' },
      {
        id: 'employees',
        label: 'How many employees?',
        type: 'select',
        options: ['1-5', '5-20', '20-50', '50+'],
      },
      {
        id: 'ai_experience',
        label: 'Have you used any AI tools?',
        type: 'select',
        options: ['Yes actively', "Tried but didn't stick", 'No but interested', "What's AI?"],
      },
    ],
    getResult: () => {
      return `Businesses your size typically reclaim 10-15 hours per week with the right AI tools. Your custom audit will show you exactly where those hours are hiding.`
    },
  },
}

// ============================================================
// ICONS (inline SVG components)
// ============================================================

function BrainIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M9 22h6" />
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M9 9h2" />
      <path d="M13 9h2" />
      <path d="M9 13h6" />
    </svg>
  )
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ClipboardIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  )
}

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  )
}

// ============================================================
// QUIZ FUNNEL COMPONENT
// ============================================================

const SERVICE_LABELS: Record<ServiceType, string> = {
  employee: 'AI Employee',
  receptionist: 'AI Receptionist',
  audit: 'AI Audit',
}

function QuizFunnel({
  service,
  onClose,
}: {
  service: ServiceType
  onClose: () => void
}) {
  const config = quizConfigs[service]
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [showResult, setShowResult] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const totalSteps = config.questions.length
  const currentQuestion = config.questions[step]

  useEffect(() => {
    if (inputRef.current && !showResult && !showCalendar) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [step, showResult, showCalendar])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const serviceLabel = SERVICE_LABELS[service]

  const handleAnswer = useCallback((value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
  }, [currentQuestion])

  const handleNext = useCallback(async () => {
    if (step < totalSteps - 1) {
      setStep((s) => s + 1)
    } else {
      // Submit data
      setSubmitting(true)
      try {
        await fetch('/api/book', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service,
            serviceLabel,
            ...answers,
          }),
        })
      } catch (e) {
        // Non-blocking — still show result
        console.error('Failed to submit quiz data:', e)
      }
      setSubmitting(false)
      setShowResult(true)
    }
  }, [step, totalSteps, answers, service])

  const handleBack = useCallback(() => {
    if (showCalendar) {
      setShowCalendar(false)
      return
    }
    if (showResult) {
      setShowResult(false)
      return
    }
    if (step > 0) {
      setStep((s) => s - 1)
    }
  }, [step, showResult, showCalendar])

  const currentAnswer = answers[currentQuestion?.id]
  const canProceed = currentQuestion?.type === 'multiselect'
    ? (currentAnswer as string[] | undefined)?.length
    : !!currentAnswer

  const toggleMultiSelect = (option: string) => {
    const current = (answers[currentQuestion.id] as string[]) || []
    if (current.includes(option)) {
      handleAnswer(current.filter((o) => o !== option))
    } else {
      handleAnswer([...current, option])
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-lg md:rounded-2xl bg-[#0A1628] text-white animate-slide-up flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            {(step > 0 || showResult || showCalendar) && (
              <button
                onClick={handleBack}
                className="p-2 -ml-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Go back"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <span className="text-sm font-medium text-[#00B4D8]">
              {serviceLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!showResult && !showCalendar && (
          <div className="h-1 bg-white/10">
            <div
              className="h-full bg-[#00B4D8] transition-all duration-300 ease-out"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-8 overflow-y-auto">
          {showCalendar ? (
            <div className="animate-fade-in-up space-y-4">
              <h3 className="font-heading text-xl font-bold">Book Your Call</h3>
              <p className="text-white/60 text-sm">Pick a time that works for you. We&apos;ll walk through everything live.</p>
              <div className="w-full rounded-xl overflow-hidden bg-white" style={{ minHeight: '500px' }}>
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/booking/R1YmLPNZVww1gjpgtITD`}
                  className="w-full border-0"
                  style={{ height: '600px' }}
                  title="Book a call"
                />
              </div>
            </div>
          ) : showResult ? (
            <div className="animate-fade-in-up space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#00B4D8]/20 flex items-center justify-center">
                <CheckIcon className="w-8 h-8 text-[#00B4D8]" />
              </div>
              <h3 className="font-heading text-2xl font-bold leading-tight">
                Here&apos;s what we found
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {config.getResult(answers)}
              </p>
              <button
                onClick={() => setShowCalendar(true)}
                className="w-full py-4 px-6 bg-[#00B4D8] text-white font-semibold rounded-xl hover:bg-[#00B4D8]/90 transition-colors text-lg"
              >
                Book a Free Strategy Call
              </button>
            </div>
          ) : (
            <div
              key={step}
              className={`animate-fade-in-up space-y-6`}
            >
              <div>
                <p className="text-white/40 text-sm mb-2">
                  Question {step + 1} of {totalSteps}
                </p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                  {currentQuestion.label}
                </h3>
              </div>

              {/* Input based on type */}
              {(currentQuestion.type === 'text' || currentQuestion.type === 'email' || currentQuestion.type === 'tel') && (
                <input
                  ref={inputRef}
                  type={currentQuestion.type}
                  value={(answers[currentQuestion.id] as string) || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#00B4D8] text-xl py-3 outline-none placeholder:text-white/30 transition-colors"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && canProceed) handleNext()
                  }}
                />
              )}

              {currentQuestion.type === 'open' && (
                <textarea
                  value={(answers[currentQuestion.id] as string) || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#00B4D8] text-lg py-3 outline-none placeholder:text-white/30 transition-colors resize-none"
                />
              )}

              {currentQuestion.type === 'select' && (
                <div className="grid gap-3">
                  {currentQuestion.options!.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }))
                        // Auto-advance after select
                        setTimeout(() => {
                          if (step < totalSteps - 1) {
                            setStep((s) => s + 1)
                          } else {
                            // Last question — trigger submission
                            setSubmitting(true)
                            const updatedAnswers = { ...answers, [currentQuestion.id]: option }
                            fetch('/api/book', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                service,
                                serviceLabel,
                                ...updatedAnswers,
                              }),
                            })
                              .catch((e) => console.error('Failed to submit:', e))
                              .finally(() => {
                                setSubmitting(false)
                                setShowResult(true)
                              })
                          }
                        }, 200)
                      }}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all text-base ${
                        answers[currentQuestion.id] === option
                          ? 'border-[#00B4D8] bg-[#00B4D8]/10 text-white'
                          : 'border-white/15 hover:border-white/30 text-white/80'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiselect' && (
                <div className="grid gap-3">
                  {currentQuestion.options!.map((option) => {
                    const selected = ((answers[currentQuestion.id] as string[]) || []).includes(option)
                    return (
                      <button
                        key={option}
                        onClick={() => toggleMultiSelect(option)}
                        className={`w-full text-left px-5 py-4 rounded-xl border transition-all text-base flex items-center gap-3 ${
                          selected
                            ? 'border-[#00B4D8] bg-[#00B4D8]/10 text-white'
                            : 'border-white/15 hover:border-white/30 text-white/80'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center ${
                          selected ? 'bg-[#00B4D8] border-[#00B4D8]' : 'border-white/30'
                        }`}>
                          {selected && <CheckIcon className="w-3 h-3 text-white" />}
                        </div>
                        {option}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer with Next button (hidden for select since it auto-advances) */}
        {!showResult && !showCalendar && currentQuestion.type !== 'select' && (
          <div className="p-4 md:p-6 border-t border-white/10">
            <button
              onClick={handleNext}
              disabled={!canProceed || submitting}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all ${
                canProceed
                  ? 'bg-[#00B4D8] text-white hover:bg-[#00B4D8]/90'
                  : 'bg-white/10 text-white/30 cursor-not-allowed'
              }`}
            >
              {submitting ? 'Submitting...' : step === totalSteps - 1 ? 'See Results' : 'Continue'}
              {!submitting && <ArrowIcon className="w-5 h-5" />}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================================
// INTERSECTION OBSERVER HOOK
// ============================================================

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

// ============================================================
// SERVICE CARDS DATA
// ============================================================

const services: {
  type: ServiceType
  title: string
  description: string
  icon: typeof BrainIcon
}[] = [
  {
    type: 'employee',
    title: 'AI Employee',
    description: 'An AI that finds leads, sends outreach, manages your CRM, and books meetings. Like hiring a full-time assistant that works 24/7.',
    icon: BrainIcon,
  },
  {
    type: 'receptionist',
    title: 'AI Receptionist',
    description: 'Never miss a call again. AI answers every call, qualifies leads, and books appointments on your calendar. 24/7.',
    icon: PhoneIcon,
  },
  {
    type: 'audit',
    title: 'AI Audit',
    description: 'Find exactly where AI can save your business 10+ hours per week. Custom report with actionable recommendations.',
    icon: ClipboardIcon,
  },
]

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function HomePage() {
  const [activeQuiz, setActiveQuiz] = useState<ServiceType | null>(null)
  const heroRef = useInView(0.1)
  const cardsRef = useInView(0.1)
  const trustRef = useInView(0.1)
  const openclawRef = useInView(0.1)
  const footerRef = useInView(0.1)

  return (
    <main className="bg-grid min-h-screen">
      {/* ========== HERO ========== */}
      <section
        ref={heroRef.ref}
        className="px-5 pt-20 pb-12 md:pt-32 md:pb-20 max-w-4xl mx-auto text-center"
      >
        <div className={heroRef.inView ? 'animate-fade-in-up' : 'opacity-0'}>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#0A1628] leading-tight tracking-tight">
            AI That Works For
            <br />
            <span className="text-[#00B4D8]">Your Business</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#0A1628]/60 max-w-2xl mx-auto leading-relaxed">
            Custom AI employees, voice agents, and automation for businesses that want to grow faster.
          </p>
        </div>
      </section>

      {/* ========== SERVICE CARDS ========== */}
      <section
        ref={cardsRef.ref}
        className="px-5 pb-16 md:pb-24 max-w-4xl mx-auto"
      >
        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <button
                key={service.type}
                onClick={() => setActiveQuiz(service.type)}
                className={`group text-left w-full p-6 md:p-8 bg-white border border-[#0A1628]/8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#00B4D8]/5 hover:border-[#00B4D8]/30 hover:-translate-y-1 active:scale-[0.98] ${
                  cardsRef.inView ? `animate-fade-in-up delay-${(i + 1) * 200}` : 'opacity-0'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center mb-4 group-hover:bg-[#00B4D8]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0A1628] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#0A1628]/60 text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#00B4D8] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Get started <ArrowIcon className="w-4 h-4" />
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* ========== SOCIAL PROOF ========== */}
      <section
        ref={trustRef.ref}
        className="px-5 py-16 md:py-24 bg-[#0A1628]/[0.02]"
      >
        <div className={`max-w-4xl mx-auto text-center ${trustRef.inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-[#00B4D8] uppercase tracking-wider mb-3">
            Trusted Partners
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0A1628] mb-8">
            Trusted by 8+ businesses across Utah and growing nationally
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-[#0A1628]/40 font-medium text-lg">
            <span>Real Estate Essentials</span>
            <span className="hidden md:inline text-[#0A1628]/20">•</span>
            <span>CBRE</span>
            <span className="hidden md:inline text-[#0A1628]/20">•</span>
            <span>Windermere</span>
          </div>
        </div>
      </section>

      {/* ========== WHAT IS OPENCLAW ========== */}
      <section
        ref={openclawRef.ref}
        className="px-5 py-16 md:py-24 max-w-4xl mx-auto"
      >
        <div className={openclawRef.inView ? 'animate-fade-in-up' : 'opacity-0'}>
          <p className="text-sm font-medium text-[#00B4D8] uppercase tracking-wider mb-3">
            Powered by OpenClaw
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0A1628] mb-6">
            Your AI runs locally. Your data stays yours.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Runs on your hardware', desc: 'AI lives on a dedicated machine — no third-party cloud dependency.' },
              { title: 'Data never leaves', desc: 'All conversations, contacts, and workflows stay on your device.' },
              { title: 'Always on, always working', desc: '24/7 operation without per-query API costs eating into margins.' },
              { title: 'Fully customizable', desc: 'Trained on your voice, your processes, your business rules.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-[#0A1628]/[0.02]">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mt-0.5">
                  <CheckIcon className="w-3.5 h-3.5 text-[#00B4D8]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A1628] mb-0.5">{item.title}</p>
                  <p className="text-[#0A1628]/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        ref={footerRef.ref}
        className="px-5 py-12 md:py-16 border-t border-[#0A1628]/8"
      >
        <div className={`max-w-4xl mx-auto text-center ${footerRef.inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="font-heading text-xl font-bold text-[#0A1628] mb-4">wirig.ai</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-[#0A1628]/60 text-sm">
            <a href="mailto:carter@wirig.ai" className="hover:text-[#00B4D8] transition-colors">
              carter@wirig.ai
            </a>
            <a href="tel:+17025969460" className="hover:text-[#00B4D8] transition-colors">
              (702) 596-9460
            </a>
          </div>
          <p className="mt-6 text-xs text-[#0A1628]/30">
            © 2026 Wirig LLC. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ========== QUIZ MODAL ========== */}
      {activeQuiz && (
        <QuizFunnel
          service={activeQuiz}
          onClose={() => setActiveQuiz(null)}
        />
      )}
    </main>
  )
}
