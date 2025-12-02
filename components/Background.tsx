import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 select-none bg-brand-dark">
      {/* Base Dark Layer */}
      <div className="absolute inset-0 bg-brand-dark" />
      
      {/* Background Image - Locker Room / Gym aesthetic */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          // Using a gym locker room placeholder that matches the vibe
          backgroundImage: `url('https://images.unsplash.com/photo-1552674605-46d531d04cc6?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(110%) brightness(0.6)'
        }}
      />

      {/* Gradient Overlay for Readability - Left to Right fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      
      {/* Subtle Blue Glow to match brand */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-blue opacity-[0.08] blur-[150px] rounded-full" />
    </div>
  );
};