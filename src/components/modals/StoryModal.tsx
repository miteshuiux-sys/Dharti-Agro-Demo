import React from 'react';
import { ABOUT_IMAGE, BENTO_MAIN_IMAGE } from '../../data';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 sm:h-64 bg-slate-950 overflow-hidden">
          <img 
            src={ABOUT_IMAGE} 
            alt="Dharti Agro Factory Floor"
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20077f] via-black/40 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-[4px] bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#8efb87] bg-white/10 px-2.5 py-0.5 rounded-[4px] mb-1">
              Established 1995 • Himatnagar, Gujarat
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">The Heritage of Dharti Agro</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-slate-700 text-sm leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-[#20077f] mb-2">30 Years of Uncompromising Engineering</h3>
            <p>
              Founded in 1995 in the heart of Gujarat’s agricultural heartland, Dharti Agro Industries began with a single mission: to design and build farm implements so resilient that Indian farmers would never have to worry about mid-season breakdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#f2f3fd] p-4 rounded-xl border border-[#c1c6d5]/40">
            <div>
              <div className="text-xl font-bold text-[#20077f]">ISO 9001:2015</div>
              <div className="text-xs text-slate-600 mt-0.5">Certified precision quality management systems.</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#0f8723]">10,000+</div>
              <div className="text-xs text-slate-600 mt-0.5">Heavy-duty agricultural machines deployed across India.</div>
            </div>
            <div>
              <div className="text-xl font-bold text-[#964400]">4-Acre Plant</div>
              <div className="text-xs text-slate-600 mt-0.5">Automated robotic welding & metrology testing facility.</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#20077f]">Our Manufacturing Philosophy: "Precision Strength"</h3>
            <p>
              Unlike standard fabricated implements made from generic soft mild steel, Dharti Agro utilizes micro-alloyed boron steel, robotic TIG/MIG seam welding, and high-frequency induction hardening. Every gear, shaft, tine, and hydraulic cylinder undergoes exhaustive stress analysis and rigorous dynamometer testing before leaving the factory.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-slate-200">
            <img src={BENTO_MAIN_IMAGE} alt="Himatnagar Facility" className="w-full h-44 object-cover" />
            <div className="p-3 bg-slate-900 text-white text-xs flex justify-between items-center">
              <span className="font-semibold">Himatnagar Main Manufacturing Works, Gujarat</span>
              <span className="text-[#8efb87]">Open for Farmer Factory Visits</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#20077f] text-white px-6 py-2.5 rounded-[4px] font-bold text-xs hover:bg-[#180566] transition-colors"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
