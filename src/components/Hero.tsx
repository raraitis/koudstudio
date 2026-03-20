interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="text-center px-6">
      {/* Decorative top rule */}
      <div className="flex items-center justify-center gap-4 mb-10 sm:mb-14">
        <span className="block w-12 sm:w-20 h-px bg-border" />
        <span className="text-[10px] tracking-[0.35em] uppercase text-text-muted font-medium">Est. 2024</span>
        <span className="block w-12 sm:w-20 h-px bg-border" />
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium uppercase tracking-[0.08em] text-text-primary leading-[0.95] mb-3 sm:mb-4">
        koud<span className="text-accent">.</span>studio
      </h1>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
        <span className="block w-8 h-px bg-accent/40" />
        <span className="block w-1.5 h-1.5 rounded-full bg-accent/60" />
        <span className="block w-8 h-px bg-accent/40" />
      </div>

      <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-text-secondary/70 font-light leading-relaxed max-w-sm mx-auto mb-12 sm:mb-14">
        Web &amp; Mobile Development
      </p>

      <button
        onClick={onContactClick}
        className="cursor-pointer text-xs tracking-[0.3em] uppercase text-text-primary/70 border border-border hover:border-accent hover:text-accent px-8 py-3 transition-all duration-300"
      >
        Get in touch
      </button>

      {/* Decorative bottom rule */}
      <div className="flex items-center justify-center gap-4 mt-10 sm:mt-14">
        <span className="block w-12 sm:w-20 h-px bg-border" />
        <span className="block w-1.5 h-1.5 border border-border rotate-45" />
        <span className="block w-12 sm:w-20 h-px bg-border" />
      </div>
    </section>
  );
}
