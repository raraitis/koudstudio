'use client';

import { useState } from 'react';
import SandBackground from '@/components/SandBackground';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SandBackground />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight text-text-primary mb-6">
            koud
            <span className="text-accent-warm">.</span>
            studio
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed mb-16">
            We build custom web applications and mobile apps
            <br className="hidden sm:block" />
            {' '}with modern technology stacks.
          </p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14 text-left mb-16">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm mb-3">
                Web Applications
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Full-stack web platforms — from interactive maps and
                dashboards to management systems and marketplaces.
              </p>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm mb-3">
                Mobile Apps
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                Cross-platform iOS and Android applications. Native
                performance with a shared codebase, from concept to
                App Store.
              </p>
            </div>
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="px-8 py-3 border border-text-muted/30 text-text-secondary text-sm tracking-widest uppercase hover:border-accent-warm hover:text-text-primary transition-all duration-300 cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 right-0 px-6 py-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-xs text-text-muted/40 tracking-widest uppercase">
              koud.studio
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
