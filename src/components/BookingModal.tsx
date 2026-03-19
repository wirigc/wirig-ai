'use client';

import { useState, useEffect } from 'react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create/update contact in GHL
    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Still show calendar even if contact creation fails
    }

    setIsSubmitting(false);
    setShowCalendar(true);
  };

  const calendarUrl = `https://api.leadconnectorhq.com/widget/booking/R1YmLPNZVww1gjpgtITD?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`;

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => { setIsOpen(true); setShowCalendar(false); setFormData({ name: '', email: '', phone: '', company: '' }); }}
        className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans cursor-pointer"
      >
        Book a 15-Minute Call &rarr;
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-navy font-heading text-xl font-bold">
                  {showCalendar ? 'Pick a Time' : 'Book a Discovery Call'}
                </h3>
                <p className="text-gray-500 text-sm font-sans mt-0.5">
                  {showCalendar ? 'Choose a time that works for you.' : '15 minutes. No pitch. We\'ll show you what your AI employee would look like.'}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto flex-1">
              {!showCalendar ? (
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-sans mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all font-sans text-gray-900"
                      placeholder="Carter Wirig"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-sans mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all font-sans text-gray-900"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-sans mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all font-sans text-gray-900"
                      placeholder="(801) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-sans mb-1.5">Company / Brokerage</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal focus:ring-2 focus:ring-teal/20 outline-none transition-all font-sans text-gray-900"
                      placeholder="Keller Williams, RE/MAX, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl bg-teal text-white font-semibold text-lg hover:bg-teal-light transition-all hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] font-sans disabled:opacity-50 cursor-pointer mt-2"
                  >
                    {isSubmitting ? 'Loading...' : 'Next: Pick a Time →'}
                  </button>
                </form>
              ) : (
                <div className="w-full" style={{ height: '600px' }}>
                  <iframe
                    src={calendarUrl}
                    className="w-full h-full border-0"
                    title="Book a call"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
