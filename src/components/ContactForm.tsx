'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  if (!open) return null;

  const loading = status === 'sending';

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
      setStatus('idle');
      setName('');
      setEmail('');
      setMessage('');
      setError('');
    }, 200);
  };

  const handleSubmit = async () => {
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again or email info@koudstudio.com');
    }
  };

  const fieldClass =
    'w-full px-4 py-3 border border-border bg-cream/50 text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:border-accent transition-colors duration-200 tracking-wide';

  return (
    <div
      className={`fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`bg-surface max-w-md w-full border-2 border-border shadow-lg transition-all duration-200 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-border flex items-center justify-center">
              <Mail className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-text-primary uppercase tracking-[0.2em]">Get in touch</h3>
              <p className="text-[10px] text-text-muted/60 uppercase tracking-[0.3em] mt-0.5">koud.studio</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 border border-border/50 flex items-center justify-center text-text-muted/40 hover:text-text-primary hover:border-border focus:outline-none transition-all duration-150 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Success */}
        {status === 'sent' && (
          <div className="px-6 sm:px-8 py-10 sm:py-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="block w-8 h-px bg-accent/40" />
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="block w-8 h-px bg-accent/40" />
            </div>
            <p className="text-sm font-medium text-text-primary uppercase tracking-[0.2em] mb-2">Message sent</p>
            <p className="text-xs text-text-muted/70 tracking-wide">We&apos;ll get back to you shortly.</p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs tracking-[0.25em] uppercase text-text-muted/70 border border-border hover:border-accent hover:text-accent px-6 py-2.5 transition-all duration-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error */}
        {error && status !== 'sent' && (
          <div className="mx-6 sm:mx-8 mt-5 border border-accent/30 p-4">
            <p className="text-accent text-xs tracking-wide">{error}</p>
          </div>
        )}

        {status !== 'sent' && (
          <div className="px-6 sm:px-8 pt-6 pb-6 sm:pb-8 space-y-5">
            <div>
              <label className="block text-[10px] font-medium text-text-muted/70 uppercase tracking-[0.3em] mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className="block text-[10px] font-medium text-text-muted/70 uppercase tracking-[0.3em] mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className="block text-[10px] font-medium text-text-muted/70 uppercase tracking-[0.3em] mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                className={`${fieldClass} resize-none`}
              />
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 border border-border text-text-muted text-xs uppercase tracking-[0.2em] hover:border-text-muted hover:text-text-primary transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 px-5 py-2.5 bg-accent-warm text-surface text-xs uppercase tracking-[0.2em] hover:bg-accent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending\u2026'
                ) : (
                  <>
                    Send message
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
