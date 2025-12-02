import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-3 w-full items-start">
      <p className="text-gray-400 text-sm mb-2">
         Join the waitlist for early access
      </p>

      <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
        <div className="relative group">
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'success' || status === 'loading'}
            placeholder="Enter your email address"
            className="w-full h-12 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue transition-colors disabled:opacity-50"
            required
            />
            <button
            type="submit"
            disabled={status === 'success' || status === 'loading'}
            className="absolute right-0 top-1 h-10 w-10 flex items-center justify-center text-brand-blue hover:text-white transition-colors disabled:text-gray-600"
            >
            {status === 'loading' ? (
                <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
                <ArrowRight className="w-5 h-5" />
            )}
            </button>
        </div>
      </form>
      
      {status === 'success' && (
        <p className="text-green-400 text-xs font-semibold mt-1 animate-fade-in">
          You're on the list!
        </p>
      )}
    </div>
  );
};