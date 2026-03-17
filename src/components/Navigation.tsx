'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#results', label: 'Results' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 relative z-50" aria-label="wirig.ai home">
          <svg width="180" height="40" viewBox="0 0 300 64" fill="none" aria-hidden="true">
            <g>
              <path d="M4 16L16 48L28 24L40 48L52 16" stroke="#0A1628" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4" cy="16" r="3.5" fill="#00B4D8"/>
              <circle cx="28" cy="24" r="3.5" fill="#00B4D8"/>
              <circle cx="52" cy="16" r="3.5" fill="#00B4D8"/>
              <line x1="4" y1="16" x2="52" y2="16" stroke="#00B4D8" strokeWidth="1" opacity="0.3"/>
              <line x1="28" y1="24" x2="4" y2="16" stroke="#00B4D8" strokeWidth="1" opacity="0.2"/>
              <line x1="28" y1="24" x2="52" y2="16" stroke="#00B4D8" strokeWidth="1" opacity="0.2"/>
            </g>
            <text x="72" y="44" fontFamily="Sora, sans-serif" fontSize="36" letterSpacing="-0.5">
              <tspan fontWeight="700" fill="#0A1628">wirig</tspan>
              <tspan fontWeight="700" fill="#00B4D8">.</tspan>
              <tspan fontWeight="300" fill="#00B4D8">ai</tspan>
            </text>
          </svg>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-navy transition-colors font-sans"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#demo"
            className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-teal text-white text-sm font-semibold hover:bg-teal-light transition-colors"
          >
            See a Live Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          type="button"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-navy'
              }`}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? 'opacity-0 bg-white' : 'bg-navy'
              }`}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-navy'
              }`}
            />
          </div>
        </button>

        {/* Mobile slide-out */}
        <div
          className={`fixed inset-0 bg-navy/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-heading font-semibold text-white hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#demo"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-teal text-white text-lg font-semibold hover:bg-teal-light transition-colors mt-4"
          >
            See a Live Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
