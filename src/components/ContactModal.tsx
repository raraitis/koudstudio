'use client';

import { useState, useCallback, useEffect, type FormEvent } from 'react';

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
    async (e: FormEvent) => {
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

      <div
        className="relative w-full max-w-lg max-h-[90dvh] overflow-y-auto bg-[#1E1B18] rounded-t-3xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header accent line */}
        <div className="h-px w-full bg-linear-to-r from-transparent via-accent/40 to-transparent" />

        <div className="p-8 sm:p-10 md:p-12">
          <div className="flex items-start justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-light text-surface tracking-tight mb-2">
                Get in touch
              </h2>
              <p className="text-xs text-surface/30 tracking-wide">
                Tell us about your project and we&apos;ll get back to you shortly.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-surface/30 hover:text-surface/70 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface/5 -mt-1 -mr-1"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {status === 'sent' ? (
            <div className="py-12 text-center">
              <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center mx-auto mb-5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10L8 14L16 6" stroke="#B8A68A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-surface/80 text-base mb-2">Message sent successfully.</p>
              <p className="text-surface/30 text-sm">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[11px] tracking-[0.15em] uppercase text-surface/40 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface/4 border-0 border-b border-surface/10 px-4 py-3 text-sm text-surface/90 placeholder-surface/15 focus:border-accent/50 focus:bg-surface/6 focus:outline-none transition-all duration-200 rounded-t-lg"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] tracking-[0.15em] uppercase text-surface/40 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface/4 border-0 border-b border-surface/10 px-4 py-3 text-sm text-surface/90 placeholder-surface/15 focus:border-accent/50 focus:bg-surface/6 focus:outline-none transition-all duration-200 rounded-t-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] tracking-[0.15em] uppercase text-surface/40 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-surface/4 border-0 border-b border-surface/10 px-4 py-3 text-sm text-surface/90 placeholder-surface/15 focus:border-accent/50 focus:bg-surface/6 focus:outline-none transition-all duration-200 resize-none rounded-t-lg"
                  placeholder="Tell us about your project — goals, timeline, budget..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#F87171" strokeWidth="1" />
                    <path d="M8 4.5V9" stroke="#F87171" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="8" cy="11.5" r="0.75" fill="#F87171" />
                  </svg>
                  <p className="text-red-300/80 text-xs">
                    Something went wrong. Try again or email us at{' '}
                    <a href="mailto:info@koudstudio.com" className="underline hover:text-red-200">info@koudstudio.com</a>
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 bg-accent/15 text-surface/80 text-xs tracking-[0.2em] uppercase hover:bg-accent/25 hover:text-surface transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg border border-accent/10 hover:border-accent/30"
              >
                {status === 'sending' ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="60" strokeDashoffset="15" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
