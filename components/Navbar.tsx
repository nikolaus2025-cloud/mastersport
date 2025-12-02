import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 px-6 md:px-12 flex justify-between items-center animate-fade-in border-b border-white/5 bg-black/20 backdrop-blur-sm z-50">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 z-50">
        <div className="text-2xl font-display font-bold tracking-tight text-white select-none">
          <span className="text-brand-blue">Master</span> <span className="font-normal text-white">sport</span>
        </div>
      </div>
      
      {/* Desktop Links */}
      <nav className="hidden lg:flex gap-8 text-sm font-normal text-gray-300">
        <a href="#" className="hover:text-white transition-colors">For your facility</a>
        <a href="#" className="hover:text-white transition-colors">For your home</a>
        <a href="#" className="hover:text-white transition-colors">Clothing and accessories</a>
        <a href="#" className="hover:text-white transition-colors">About us</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </nav>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-5">
        <button className="text-white hover:text-brand-blue transition-colors">
          <Search size={20} />
        </button>
        
        <div className="flex items-center gap-3">
            <button className="px-5 py-2 border border-white/30 rounded text-sm font-medium hover:border-white transition-colors">
            Log in
            </button>
            <button className="px-5 py-2 bg-white text-black rounded text-sm font-bold hover:bg-gray-200 transition-colors">
            Sign up
            </button>
        </div>

        <button className="text-white hover:text-brand-blue transition-colors relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
        </button>
        
        <div className="flex items-center gap-1 cursor-pointer">
            {/* Simple UK Flag Placeholder */}
            <div className="w-5 h-3 bg-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-white rotate-12"></div>
                    <div className="w-full h-[2px] bg-white -rotate-12"></div>
                    <div className="w-full h-[4px] bg-white"></div>
                    <div className="h-full w-[4px] bg-white"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-full h-[2px] bg-red-600"></div>
                         <div className="h-full w-[2px] bg-red-600"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            <a href="#" className="text-xl hover:text-brand-blue">For your facility</a>
            <a href="#" className="text-xl hover:text-brand-blue">For your home</a>
            <a href="#" className="text-xl hover:text-brand-blue">Clothing and accessories</a>
            <div className="flex gap-4 mt-4">
                <button className="px-6 py-2 border border-white rounded">Log in</button>
                <button className="px-6 py-2 bg-white text-black rounded font-bold">Sign up</button>
            </div>
        </div>
      )}
    </header>
  );
};