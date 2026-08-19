import React from 'react';
import { DhartiLogo } from './DhartiLogo';
import { Product } from '../types';

interface FooterProps {
  onOpenModal: (type: 'support' | 'iso' | 'privacy' | 'terms') => void;
  onSelectCategory: (category: Product['category']) => void;
  onOpenStory: () => void;
  onOpenDealerLocator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenModal,
  onSelectCategory,
  onOpenStory,
  onOpenDealerLocator
}) => {
  return (
    <footer className="bg-[#0e0730] text-white pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-[#20077f]/40 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Quick Support & Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-[#0f8723]/50 transition-colors">
            <div className="w-12 h-12 rounded-[4px] bg-[#0f8723]/20 flex items-center justify-center text-[#8efb87]">
              <span className="material-symbols-outlined text-2xl">call</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Farmer Helpline & Sales</p>
              <a href="tel:+919825014890" className="text-base font-bold text-white hover:text-[#8efb87] transition-colors">
                +91 98250 14890
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-[#20077f]/80 transition-colors">
            <div className="w-12 h-12 rounded-[4px] bg-[#20077f] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Direct Inquiries</p>
              <a href="mailto:info@dhartiagro.com" className="text-base font-bold text-white hover:text-[#8efb87] transition-colors">
                info@dhartiagro.com
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-[#0f8723]/50 transition-colors">
            <div className="w-12 h-12 rounded-[4px] bg-[#0f8723]/20 flex items-center justify-center text-[#8efb87]">
              <span className="material-symbols-outlined text-2xl">location_city</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Manufacturing Works</p>
              <p className="text-sm font-bold text-white">
                Himatnagar GIDC, Gujarat
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-[4px] w-max inline-block shadow-sm">
              <DhartiLogo className="h-10 w-auto" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Dharti Agro Industries is Gujarat’s leading agricultural engineering enterprise, specializing in heavy-duty tractor implements, rotary tillers, and precision hydraulic mechanisms built for Indian soil challenges.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-[4px]">
                <span className="material-symbols-outlined text-[#8efb87] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                ISO 9001:2015 Certified
              </span>
              <span className="bg-[#0f8723]/20 text-[#8efb87] border border-[#0f8723]/30 px-2.5 py-1 rounded-[4px] font-semibold">
                Made with Pride in Gujarat
              </span>
            </div>
          </div>

          {/* Column 2: Equipment */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8efb87]">
              Machinery & Fleet
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => onSelectCategory('cultivators')} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Heavy Duty Cultivators</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('tillers')} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Pro Series Rotary Tillers</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('ploughs')} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Hydraulic Reversible Ploughs</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('hydraulics')} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Custom Hydraulic Cylinders</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8efb87]">
              Company & Network
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <button 
                  onClick={onOpenStory} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Our Heritage Since 1995</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDealerLocator} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Authorised Dealerships</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('iso')} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>Quality Certifications</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenModal('support')} 
                  className="hover:text-white hover:translate-x-1 transition-transform flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#8efb87]">chevron_right</span>
                  <span>24/7 Field Service Support</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8efb87]">
              Headquarters
            </h4>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-[#8efb87] mt-0.5 shrink-0">pin_drop</span>
                <span>Plot 42-45, GIDC Industrial Estate, Motipura, Himatnagar, Gujarat 383001, India</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#8efb87] shrink-0">schedule</span>
                <span>Mon - Sat: 8:00 AM - 7:30 PM IST</span>
              </p>
              <button
                onClick={onOpenDealerLocator}
                className="mt-2 w-full bg-[#20077f] text-white border border-white/20 hover:bg-[#180566] py-2 px-3 rounded-[4px] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">map</span>
                <span>Locate Nearest Dealer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Dharti Agro Industries. All rights reserved. Precision Strength™
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onOpenModal('privacy')} 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenModal('terms')} 
              className="hover:text-white transition-colors"
            >
              Terms of Service & Warranty
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

