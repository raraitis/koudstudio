'use client';

import { useState } from 'react';
import SandBackground from '@/components/SandBackground';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SandBackground />

      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-0">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-text-primary mb-4 sm:mb-6">
            koud
            <span className="text-accent-warm">.</span>
            studio
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-12 sm:mb-20">
            we build custom web applications and mobile apps
            <br className="hidden sm:block" />
            {' '}with modern technology stacks.
          </p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14 text-left mb-12 sm:mb-20">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm mb-3">
                Web Applications
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                full-stack web platforms — from interactive maps and
                dashboards to management systems and marketplaces.
              </p>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm mb-3">
                Mobile Apps
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                cross-platform iOS and Android applications. native
                performance with a shared codebase, from concept to
                app store.
              </p>
            </div>
          </div>

          <button
            onClick={() => setContactOpen(true)}
            className="text-text-secondary text-sm tracking-widest hover:text-text-primary transition-colors duration-300 cursor-pointer"
          >
            get in touch
          </button>
        </div>

        {/* Footer */}
        <footer className="w-full mt-auto pt-8 px-4 sm:px-6 pb-6">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-xs text-text-muted/40 tracking-widest">
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
