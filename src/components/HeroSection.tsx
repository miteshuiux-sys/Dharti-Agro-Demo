import React from 'react';
import { HERO_IMAGE } from '../data';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onRequestQuote
}) => {
  return (
    <section id="hero-section" className="relative pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32 overflow-hidden bg-[#f2f3fd]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#181c22] leading-[1.12] tracking-tight mb-6">
            Engineering better tools for modern farming.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#414753] leading-relaxed mb-10 max-w-xl">
            Reliable agricultural machinery designed to improve farming efficiency, productivity, and everyday field performance.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button 
              onClick={onRequestQuote}
              className="bg-[#20077f] text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] hover:bg-[#180566] transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>

            <button 
              onClick={onExploreProducts}
              className="border-2 border-[#0f8723] text-[#0f8723] text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-[4px] hover:bg-[#0f8723] hover:text-white transition-all flex items-center gap-2 active:scale-95"
            >
              <span>Explore Products</span>
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-[#717785]/20">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex text-[#0f8723]">
                <span className="material-symbols-outlined text-xl material-symbols-fill">star</span>
                <span className="material-symbols-outlined text-xl material-symbols-fill">star</span>
                <span className="material-symbols-outlined text-xl material-symbols-fill">star</span>
                <span className="material-symbols-outlined text-xl material-symbols-fill">star</span>
                <span className="material-symbols-outlined text-xl material-symbols-fill">star_half</span>
              </div>
              <span className="text-sm sm:text-base font-bold text-[#181c22]">4.7/5 Rating</span>
            </div>

            <div className="h-6 w-px bg-[#717785]/30 hidden sm:block"></div>

            {/* Followers */}
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#20077f] text-2xl">groups</span>
              <span className="text-sm sm:text-base font-bold text-[#181c22]">23.8K+ Followers</span>
            </div>
          </div>
        </div>

        {/* Right Hero Image Column */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden border border-[#717785]/20 shadow-xl group">
          <img 
            alt="Modern Agricultural Machinery" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src={HERO_IMAGE} 
          />
          {/* Subtle bottom gradient and floating badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/40 flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0f8723] animate-pulse"></span>
              <span className="font-bold text-[#20077f]">Heavy-Duty Tested in Black Cotton Soils</span>
            </div>
            <span className="font-semibold text-slate-600 hidden sm:inline">Himatnagar Works</span>
          </div>
        </div>
      </div>
    </section>
  );
};
