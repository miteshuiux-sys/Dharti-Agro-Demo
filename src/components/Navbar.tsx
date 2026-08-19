import React, { useState } from 'react';
import { DhartiLogo } from './DhartiLogo';
import { Product } from '../types';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onRequestQuote: () => void;
  onSelectProductCategory: (category: Product['category']) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onRequestQuote,
  onSelectProductCategory
}) => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string, elementId?: string) => {
    onSelectTab(tab);
    setIsMobileMenuOpen(false);
    if (elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCategorySelect = (category: Product['category']) => {
    onSelectProductCategory(category);
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const el = document.getElementById('precision-fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#f9f9ff] border-b border-[#717785]/20 shadow-xs sticky top-0 z-40">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 max-w-[1280px] mx-auto h-20">
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('Manufacturing', 'hero-section');
          }}
          className="flex items-center"
        >
          <DhartiLogo className="h-10 sm:h-12 w-auto" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base">
          {/* Products Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button 
              onClick={() => handleNavClick('Products', 'precision-fleet')}
              className={`flex items-center transition-colors px-3 py-2 rounded-[4px] font-medium ${
                activeTab === 'Products' 
                  ? 'text-[#20077f] font-bold' 
                  : 'text-[#414753] hover:text-[#20077f] hover:bg-[#f2f3fd]'
              }`}
            >
              <span>Products</span>
              <span className="material-symbols-outlined ml-1 text-sm transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </button>

            {/* Dropdown Menu */}
            <div 
              className={`absolute left-0 mt-0 w-60 bg-white border border-[#c1c6d5]/50 rounded-[4px] shadow-xl transition-all duration-200 z-50 py-2 ${
                isProductsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <button 
                onClick={() => handleCategorySelect('cultivators')}
                className="w-full text-left px-4 py-2.5 text-sm text-[#414753] hover:bg-[#f2f3fd] hover:text-[#20077f] transition-colors flex items-center justify-between rounded-[4px]"
              >
                <span>Cultivators</span>
                <span className="text-[10px] font-bold text-[#0f8723] uppercase bg-[#8efb87]/20 px-1.5 py-0.5 rounded-[4px]">Top Seller</span>
              </button>
              <button 
                onClick={() => handleCategorySelect('tillers')}
                className="w-full text-left px-4 py-2.5 text-sm text-[#414753] hover:bg-[#f2f3fd] hover:text-[#20077f] transition-colors flex items-center justify-between rounded-[4px]"
              >
                <span>Rotary Tillers</span>
                <span className="text-[10px] text-slate-400">Pro Series</span>
              </button>
              <button 
                onClick={() => handleCategorySelect('ploughs')}
                className="w-full text-left px-4 py-2.5 text-sm text-[#414753] hover:bg-[#f2f3fd] hover:text-[#20077f] transition-colors flex items-center justify-between rounded-[4px]"
              >
                <span>Reversible Ploughs</span>
                <span className="text-[10px] font-bold text-[#964400] uppercase bg-[#ffdbc9]/40 px-1.5 py-0.5 rounded-[4px]">New</span>
              </button>
              <button 
                onClick={() => handleCategorySelect('hydraulics')}
                className="w-full text-left px-4 py-2.5 text-sm text-[#414753] hover:bg-[#f2f3fd] hover:text-[#20077f] transition-colors rounded-[4px]"
              >
                <span>Hydraulic Systems</span>
              </button>
            </div>
          </div>

          <button 
            onClick={() => handleNavClick('Application', 'story-section')}
            className={`transition-colors px-3 py-2 rounded-[4px] font-medium ${
              activeTab === 'Application' 
                ? 'text-[#20077f] font-bold' 
                : 'text-[#414753] hover:text-[#20077f] hover:bg-[#f2f3fd]'
            }`}
          >
            Application
          </button>

          <button 
            onClick={() => handleNavClick('Manufacturing', 'factory-showcase')}
            className="text-[#20077f] border-b-2 border-[#20077f] font-bold pb-1 px-3 py-2 rounded-[4px]"
          >
            Manufacturing
          </button>

          <button 
            onClick={() => handleNavClick('Service', 'cta-banner')}
            className={`transition-colors px-3 py-2 rounded-[4px] font-medium ${
              activeTab === 'Service' 
                ? 'text-[#20077f] font-bold' 
                : 'text-[#414753] hover:text-[#20077f] hover:bg-[#f2f3fd]'
            }`}
          >
            Service
          </button>

          <button 
            onClick={() => handleNavClick('About', 'about-section')}
            className={`transition-colors px-3 py-2 rounded-[4px] font-medium ${
              activeTab === 'About' 
                ? 'text-[#20077f] font-bold' 
                : 'text-[#414753] hover:text-[#20077f] hover:bg-[#f2f3fd]'
            }`}
          >
            About
          </button>

          <button 
            onClick={() => handleNavClick('Contact Us', 'cta-banner')}
            className={`transition-colors px-3 py-2 rounded-[4px] font-medium ${
              activeTab === 'Contact Us' 
                ? 'text-[#20077f] font-bold' 
                : 'text-[#414753] hover:text-[#20077f] hover:bg-[#f2f3fd]'
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={onRequestQuote}
            className="bg-[#20077f] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-[4px] hover:bg-[#180566] transition-all shadow-sm active:scale-95"
          >
            Request a Quote
          </button>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-[4px]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</div>
          <button 
            onClick={() => handleNavClick('Products', 'precision-fleet')}
            className="w-full text-left py-2 text-base font-semibold text-slate-800 flex justify-between items-center rounded-[4px]"
          >
            <span>Products & Fleet</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <div className="pl-4 space-y-1.5 border-l-2 border-[#20077f]/20">
            <button onClick={() => handleCategorySelect('cultivators')} className="block text-sm text-slate-600 py-1 rounded-[4px]">Cultivators</button>
            <button onClick={() => handleCategorySelect('tillers')} className="block text-sm text-slate-600 py-1 rounded-[4px]">Rotary Tillers</button>
            <button onClick={() => handleCategorySelect('ploughs')} className="block text-sm text-slate-600 py-1 rounded-[4px]">Reversible Ploughs</button>
            <button onClick={() => handleCategorySelect('hydraulics')} className="block text-sm text-slate-600 py-1 rounded-[4px]">Hydraulic Systems</button>
          </div>
          <button onClick={() => handleNavClick('Application', 'story-section')} className="w-full text-left py-2 text-base font-semibold text-slate-800 rounded-[4px]">
            Application
          </button>
          <button onClick={() => handleNavClick('Manufacturing', 'factory-showcase')} className="w-full text-left py-2 text-base font-bold text-[#20077f] rounded-[4px]">
            Manufacturing (Himatnagar Facility)
          </button>
          <button onClick={() => handleNavClick('Service', 'cta-banner')} className="w-full text-left py-2 text-base font-semibold text-slate-800 rounded-[4px]">
            Service & Support
          </button>
          <button onClick={() => handleNavClick('About', 'about-section')} className="w-full text-left py-2 text-base font-semibold text-slate-800 rounded-[4px]">
            About Our Story
          </button>
          <button onClick={() => handleNavClick('Contact Us', 'cta-banner')} className="w-full text-left py-2 text-base font-semibold text-slate-800 rounded-[4px]">
            Contact Factory
          </button>
        </div>
      )}
    </nav>
  );
};
