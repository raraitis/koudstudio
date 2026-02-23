'use client';

import { useState, useCallback, useEffect } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus('sending');

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });

        if (!res.ok) throw new Error();
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } catch {
        setStatus('error');
      }
    },
    [name, email, message],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-[#2A2520] border border-accent/20 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-surface/40 hover:text-surface transition-colors text-lg"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
          Get in touch
        </h2>

        {status === 'sent' ? (
          <div className="py-8 text-center">
            <p className="text-surface/80 text-sm mb-2">Message sent.</p>
            <p className="text-surface/40 text-xs">We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-surface/40 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border border-accent/20 px-3 py-2 text-sm text-surface/80 placeholder-surface/20 focus:border-accent/50 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-surface/40 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-accent/20 px-3 py-2 text-sm text-surface/80 placeholder-surface/20 focus:border-accent/50 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-surface/40 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border border-accent/20 px-3 py-2 text-sm text-surface/80 placeholder-surface/20 focus:border-accent/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400/80 text-xs">
                Something went wrong. Please try again or email us directly at info@koudstudio.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 border border-accent/30 text-surface/80 text-sm tracking-widest uppercase hover:border-accent hover:text-surface transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
