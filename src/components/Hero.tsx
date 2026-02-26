interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="text-center">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-text-primary leading-[0.95] mb-6 sm:mb-8">
        koud<span className="text-accent-warm">.</span>studio
      </h1>
      <p className="text-base sm:text-lg text-text-secondary/70 font-light leading-relaxed max-w-md mx-auto mb-10">
        We craft custom web applications and mobile apps with modern technology stacks.
      </p>
      <button
        onClick={onContactClick}
        className="cursor-pointer text-xs tracking-[0.25em] uppercase text-text-primary/60 hover:text-text-primary transition-colors duration-200"
      >
        Get in touch
      </button>
    </section>
  );
}
