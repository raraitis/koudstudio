'use client';

import SandBackground from '@/components/SandBackground';

export default function Home() {
  return (
    <>
      <SandBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-surface mb-6">
              koud
              <span className="text-accent">.</span>
              studio
            </h1>

            <p className="text-lg sm:text-xl text-surface/60 font-light leading-relaxed mb-12">
              We build custom web applications and mobile apps
              <br className="hidden sm:block" />
              {' '}with modern technology stacks.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@koud.studio"
                className="px-8 py-3 border border-accent/30 text-surface/80 text-sm tracking-widest uppercase hover:border-accent hover:text-surface transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>
        </main>

        {/* Services */}
        <section className="px-6 pb-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                  Web Applications
                </h2>
                <p className="text-surface/50 text-sm leading-relaxed">
                  Full-stack web platforms built with Next.js, React, and
                  Node.js. From interactive maps and dashboards to management
                  systems and marketplaces.
                </p>
              </div>
              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                  Mobile Apps
                </h2>
                <p className="text-surface/50 text-sm leading-relaxed">
                  Cross-platform iOS and Android applications using React
                  Native. Native performance with a shared codebase, from
                  concept to App Store.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-surface/5">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-surface/30 tracking-widest uppercase">
              koud.studio
            </span>
            <span className="text-xs text-surface/20">
              Latvia &middot; Worldwide
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
