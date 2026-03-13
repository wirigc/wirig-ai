import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Install Guide | wirig.ai',
  description: 'Download the OpenClaw installation guide.',
};

export default function InstallPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-wide text-teal uppercase mb-4">Install Guide</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
            OpenClaw Installation Guide
          </h1>
          <p className="text-lg text-gray-700 font-sans leading-relaxed mb-8">
            Download the latest installation guide for OpenClaw setup, including steps for adding a second profile on the same Mac.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/install-guide.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-teal text-white text-base font-semibold hover:bg-teal-light transition-colors"
            >
              Open PDF
            </a>
            <a
              href="/install-guide.pdf"
              download
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-gray-300 text-navy text-base font-semibold hover:bg-gray-50 transition-colors"
            >
              Download PDF
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="/install-guide.pdf"
              className="w-full h-[900px]"
              title="OpenClaw Install Guide PDF"
            />
          </div>
        </div>
      </main>
    </>
  );
}
