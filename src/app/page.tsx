'use client';

import { useState } from 'react';
import SandBackground from '@/components/SandBackground';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <SandBackground />
      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center">
        <Hero onContactClick={() => setContactOpen(true)} />
      </div>
      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
