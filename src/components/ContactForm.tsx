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
    setTimeout(onClose, 200);
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
    'w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-accent/20 rounded-xl text-sm text-text-primary placeholder:text-text-muted/40 focus:outline-none focus:ring-2 focus:ring-accent-warm/30 focus:border-accent-warm/40 bg-surface shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200';

  return (
    <div
      className={`fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div
        className={`bg-surface max-w-md w-full rounded-2xl sm:rounded-3xl shadow-2xl border border-accent/15 max-h-[90dvh] overflow-y-auto transition-all duration-200 ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 pt-5 sm:pt-7 pb-4 sm:pb-5 border-b border-accent/10">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-accent-warm/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent-warm" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary tracking-tight">Get in touch</h3>
              <p className="text-xs text-text-muted/50 tracking-wide">koud.studio</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted/40 hover:text-text-primary hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent-warm/30 transition-all duration-150 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Success */}
        {status === 'sent' && (
          <div className="mx-5 sm:mx-7 mt-5 sm:mt-6 bg-green-500/8 border border-green-500/15 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-green-700 text-sm font-medium">Message sent!</p>
              <p className="text-green-600/70 text-xs mt-0.5">We&apos;ll get back to you shortly.</p>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mx-5 sm:mx-7 mt-5 sm:mt-6 bg-red-500/8 border border-red-500/15 rounded-xl p-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {status !== 'sent' && (
          <div className="px-5 sm:px-7 pt-5 sm:pt-6 pb-5 sm:pb-7 space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs font-medium text-text-muted/70 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted/70 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-muted/70 uppercase tracking-wider mb-2">Message</label>
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
                className="px-5 py-2.5 border border-accent/20 text-text-muted rounded-xl hover:bg-accent/8 hover:text-text-secondary transition-all duration-150 text-sm cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 px-5 py-2.5 bg-accent-warm text-surface rounded-xl hover:bg-accent-warm/90 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending\u2026'
                ) : (
                  <>
                    Send message
                    <Send className="w-3.5 h-3.5" />
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
