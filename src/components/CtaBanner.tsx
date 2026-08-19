import React from 'react';

interface CtaBannerProps {
  onRequestConsultation: () => void;
  onFindDealer: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  onRequestConsultation,
  onFindDealer
}) => {
  // Rich agricultural landscape / farm background
  const FARM_BG = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80';

  return (
    <section id="cta-banner" className="relative py-24 sm:py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background Image: Lush Farm Land with Agro Field View */}
      <img 
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105" 
        alt="Lush agricultural farm field at golden sunrise" 
        src={FARM_BG} 
      />
      {/* High-contrast gradient overlay for absolute typography clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#110444]/95 via-[#20077f]/85 to-[#0b2413]/90 backdrop-brightness-75" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight max-w-3xl mx-auto leading-tight text-white drop-shadow-sm">
          Ready to Elevate Your Farm's Productivity?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Contact our engineering specialists today for custom equipment sizing, factory-direct quotes, or to connect with your nearest authorized dealership.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Primary Button */}
          <button 
            onClick={onRequestConsultation}
            className="bg-[#20077f] text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] hover:bg-[#180566] transition-all shadow-xl active:scale-95 flex items-center gap-2 border border-white/20"
          >
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            <span>Request a Technical Consultation</span>
          </button>

          {/* Secondary Button */}
          <button 
            onClick={onFindDealer}
            className="border-2 border-[#0f8723] bg-[#0f8723] text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] hover:bg-[#00751a] hover:border-[#00751a] transition-all shadow-xl active:scale-95 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">location_on</span>
            <span>Find a Dealer</span>
          </button>
        </div>
      </div>
    </section>
  );
};

