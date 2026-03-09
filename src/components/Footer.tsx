export default function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="/" aria-label="wirig.ai home">
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
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-6">
              <a href="/#services" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Services</a>
              <a href="/#how-it-works" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">How It Works</a>
              <a href="/#results" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">Results</a>
              <a href="/#audit" className="text-sm text-gray-500 hover:text-white transition-colors font-sans">AI Audit</a>
            </div>
            <a href="mailto:carter@wirig.ai" className="text-sm text-teal hover:text-teal-light transition-colors font-sans">
              carter@wirig.ai
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-gray-500 text-xs hover:text-gray-300 transition-colors font-sans">Privacy Policy</a>
            <span className="text-gray-600 text-xs">·</span>
            <a href="/terms" className="text-gray-500 text-xs hover:text-gray-300 transition-colors font-sans">Terms of Service</a>
          </div>
          <p className="text-gray-500 text-sm font-sans">
            &copy; 2026 wirig.ai. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-sans">Provo, Utah</p>
        </div>
      </div>
    </footer>
  );
}
