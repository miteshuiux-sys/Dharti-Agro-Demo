import React, { useState } from 'react';

export const FloatingActions: React.FC = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Phone Hotline Bubble */}
      {showPhonePopup && (
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 text-slate-800 text-sm max-w-xs mb-1 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-[#20077f]">Emergency Factory Line</span>
            <button 
              onClick={() => setShowPhonePopup(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <p className="text-xs text-slate-500 mb-2">Speak directly with an agronomist engineer in Himatnagar:</p>
          <a 
            href="tel:+919825014890" 
            className="flex items-center gap-2 font-bold text-sm text-[#0f8723] hover:underline"
          >
            <span className="material-symbols-outlined text-base">call</span>
            <span>+91 98250 14890</span>
          </a>
        </div>
      )}

      {/* Call Button */}
      <button
        onClick={() => setShowPhonePopup(!showPhonePopup)}
        className="w-12 h-12 rounded-full bg-[#20077f] text-white shadow-xl hover:bg-[#180566] transition-all flex items-center justify-center border border-white/20 active:scale-95"
        title="Call Factory Helpline"
        aria-label="Call Factory Helpline"
      >
        <span className="material-symbols-outlined text-2xl">call</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919825014890?text=Hello%20Dharti%20Agro%2C%20I%20would%20like%20more%20information%20about%20your%20farming%20machinery."
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1ebd59] transition-all flex items-center justify-center border-2 border-white active:scale-95 group"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          chat
        </span>
      </a>
    </div>
  );
};
