import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center animate-slide-up">
      
      {/* Brand Logo - Centered and Large */}
      <div className="mb-12 md:mb-16 transform transition-transform hover:scale-105 duration-700">
        <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight select-none">
          <span className="text-brand-blue drop-shadow-[0_0_15px_rgba(48,105,254,0.5)]">Master</span>
          <span className="font-normal text-white ml-2">sport</span>
        </div>
      </div>

      <div className="space-y-8 flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-thin uppercase leading-none tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
          Under<br className="md:hidden" />
          <span className="font-normal block mt-2 md:mt-4 text-white">Construction</span>
        </h1>
        
        {/* Decorative Divider */}
        <div className="w-24 h-1.5 bg-brand-blue rounded-full my-8 shadow-[0_0_20px_rgba(48,105,254,0.8)]" />
        
        {/* Subtext */}
        <p className="text-gray-200 text-lg md:text-2xl lg:text-3xl font-light tracking-[0.2em] uppercase animate-pulse-slow">
          We will be back soon!
        </p>
      </div>

    </div>
  );
};