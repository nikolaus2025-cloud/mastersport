import React, { useState } from 'react';
import { Loader2, ArrowRight, Check, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Mailchimp Configuration
  const API_KEY = '2bc0ea97e8b48df3bd1498d052086491-us18';
  const AUDIENCE_ID = '0471c08640'; // MasterSport Audience ID
  const DATACENTER = API_KEY.split('-')[1]; // 'us18'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const targetUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
      
      // We use a CORS proxy to bypass browser security restrictions for this demo.
      // In a production environment, this request should go to your own backend server.
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;

      const response = await fetch(proxyUrl, {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed'
        })
      });

      const data = await response.json();

      // Handle specific Mailchimp error responses
      if (!response.ok) {
         // Check if member already exists (Mailchimp returns 400 with title "Member Exists")
         if (data.title === 'Member Exists') {
             // Treat existing members as a success to the user, but maybe log it or show a specific message
             setStatus('success');
             setEmail('');
             return;
         }
         throw new Error(data.detail || data.title || 'Failed to subscribe.');
      }

      // Success
      setStatus('success');
      setEmail('');

    } catch (error: any) {
      console.error('Subscription Error:', error);
      setStatus('error');
      // Show a friendly error message
      setErrorMessage(error.message || 'Could not connect. Please try again.');
    }
  };

  return (
    <footer className="w-full py-12 px-6 flex flex-col items-center justify-center z-10 animate-fade-in bg-gradient-to-t from-black via-black/80 to-transparent">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        
        <p className="text-xs md:text-sm font-display tracking-[0.2em] uppercase text-gray-400">
          Get notified when we launch
        </p>

        <form onSubmit={handleSubmit} className="w-full relative flex items-center group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full bg-black/40 border-b border-white/20 py-3 pr-12 pl-4 text-left text-white placeholder-white/30 focus:outline-none focus:border-brand-blue focus:bg-black/60 transition-all duration-300 font-light rounded-t-sm"
              disabled={status === 'loading' || status === 'success'}
              required
            />
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-brand-blue hover:text-white hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
            >
              {status === 'loading' ? (
                <Loader2 size={20} className="animate-spin" />
              ) : status === 'success' ? (
                <Check size={20} className="text-green-500" />
              ) : status === 'error' ? (
                <AlertCircle size={20} className="text-red-500" />
              ) : (
                <ArrowRight size={20} />
              )}
            </button>
        </form>
        
        <div className="h-6 text-center">
            {status === 'success' && (
            <p className="text-xs text-green-500 font-light tracking-wide animate-fade-in">
                Success! You've been added to our list.
            </p>
            )}
            {status === 'error' && (
             <p className="text-xs text-red-500 font-light tracking-wide animate-fade-in">
                {errorMessage}
             </p>
            )}
        </div>
      </div>
      
      <div className="mt-8 text-[10px] text-gray-600 font-sans tracking-wider uppercase">
        © {new Date().getFullYear()} MasterSport.ge
      </div>
    </footer>
  );
};
