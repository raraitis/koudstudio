'use client';

import { useState } from 'react';
import SandBackground from '@/components/SandBackground';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SandBackground />

      <div className="relative z-10 min-h-dvh flex flex-col">
        {/* Nav */}
        <nav className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 flex items-center justify-between">
          <span className="text-sm tracking-[0.2em] text-text-muted/60 uppercase">
            koud.studio
          </span>
          <button
            onClick={() => setContactOpen(true)}
            className="text-xs tracking-[0.15em] uppercase text-text-muted/70 hover:text-text-primary transition-colors duration-200 cursor-pointer px-5 py-2.5 rounded-full border border-text-muted/20 hover:border-text-muted/40"
          >
            Contact
          </button>
        </nav>

        {/* Hero */}
        <section className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
          <div className="mb-20 sm:mb-28 lg:mb-32">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-text-primary leading-[0.95] mb-6 sm:mb-8">
              koud
              <span className="text-accent-warm">.</span>
              <br />
              studio
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary/70 font-light leading-relaxed max-w-lg">
              We craft custom web applications and mobile apps with modern technology stacks.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 mb-20 sm:mb-28 lg:mb-32">
            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-accent-warm mb-4">
                Web Applications
              </h2>
              <p className="text-text-muted/80 text-sm leading-relaxed">
                Full-stack web platforms — from interactive maps and
                dashboards to management systems and marketplaces.
              </p>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-accent-warm mb-4">
                Mobile Apps
              </h2>
              <p className="text-text-muted/80 text-sm leading-relaxed">
                Cross-platform iOS and Android applications. Native
                performance with a shared codebase, from concept to
                app store.
              </p>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.2em] uppercase text-accent-warm mb-4">
                Consulting
              </h2>
              <p className="text-text-muted/80 text-sm leading-relaxed">
                Technical architecture, code reviews, and strategic guidance
                to elevate your existing products and team capabilities.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={() => setContactOpen(true)}
              className="cursor-pointer text-sm tracking-[0.15em] uppercase text-text-secondary/80 hover:text-text-primary transition-colors duration-200"
            >
              Start a project &rarr;
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-text-muted/40 tracking-widest">
              &copy; {new Date().getFullYear()} koud.studio
            </span>
            <span className="text-xs text-text-muted/30">
              Latvia &middot; Worldwide
            </span>
          </div>
        </footer>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
