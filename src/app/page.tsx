'use client';

import { useState } from 'react';
import SandBackground from '@/components/SandBackground';
import ContactModal from '@/components/ContactModal';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SandBackground />

      <div className="relative z-10 min-h-dvh flex flex-col px-6 sm:px-10 lg:px-16">
        {/* Nav */}
        <nav className="w-full max-w-6xl mx-auto pt-8 sm:pt-12 flex items-center justify-between">
          <span className="text-sm tracking-[0.2em] text-text-muted/60 uppercase">
            koud.studio
          </span>
          <button
            onClick={() => setContactOpen(true)}
            className="text-xs tracking-[0.2em] uppercase text-text-muted/60 hover:text-text-primary transition-colors duration-300 cursor-pointer border border-accent-warm/20 px-4 py-2 rounded-full hover:border-accent-warm/50"
          >
            Contact
          </button>
        </nav>

        {/* Hero */}
        <section className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight text-text-primary leading-[0.95] mb-8 sm:mb-12">
              koud
              <span className="text-accent-warm">.</span>
              <br />
              studio
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary/80 font-light leading-relaxed max-w-xl mb-6">
              We craft custom web applications and mobile apps with modern technology stacks.
            </p>

            <div className="h-px w-16 bg-accent-warm/40 mb-16 sm:mb-24" />
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-16 sm:mb-24">
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-warm/50 group-hover:w-12 transition-all duration-300" />
                <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm">
                  Web Applications
                </h2>
              </div>
              <p className="text-text-muted text-sm leading-relaxed pl-11">
                Full-stack web platforms — from interactive maps and
                dashboards to management systems and marketplaces.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-warm/50 group-hover:w-12 transition-all duration-300" />
                <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm">
                  Mobile Apps
                </h2>
              </div>
              <p className="text-text-muted text-sm leading-relaxed pl-11">
                Cross-platform iOS and Android applications. Native
                performance with a shared codebase, from concept to
                app store.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent-warm/50 group-hover:w-12 transition-all duration-300" />
                <h2 className="text-xs tracking-[0.3em] uppercase text-accent-warm">
                  Consulting
                </h2>
              </div>
              <p className="text-text-muted text-sm leading-relaxed pl-11">
                Technical architecture, code reviews, and strategic guidance
                to elevate your existing products and team capabilities.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={() => setContactOpen(true)}
              className="group inline-flex items-center gap-4 text-text-secondary text-sm tracking-[0.2em] uppercase hover:text-text-primary transition-colors duration-300 cursor-pointer"
            >
              <span>Start a project</span>
              <span className="inline-block w-8 h-px bg-text-secondary/40 group-hover:w-12 group-hover:bg-text-primary transition-all duration-300" />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full max-w-6xl mx-auto pb-8 sm:pb-12 pt-8">
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
