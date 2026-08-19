import React from 'react';

interface SupportModalProps {
  type: 'support' | 'iso' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#20077f] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-[4px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          
          <h2 className="text-xl font-bold">
            {type === 'support' && '24/7 Technical & Field Service Support'}
            {type === 'iso' && 'ISO 9001:2015 Quality Certification'}
            {type === 'privacy' && 'Privacy Policy'}
            {type === 'terms' && 'Terms of Service & Warranty Policy'}
          </h2>
        </div>

        <div className="p-6 overflow-y-auto flex-1 text-slate-700 text-sm leading-relaxed space-y-4">
          {type === 'support' && (
            <>
              <div className="bg-[#f2f3fd] p-4 rounded-xl border border-[#c1c6d5]/40 space-y-2">
                <div className="font-bold text-[#20077f] text-base">Emergency Factory Support Helpline</div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-lg">
                  <span className="material-symbols-outlined text-[#0f8723]">phone_in_talk</span>
                  <a href="tel:+919825014890" className="hover:underline">+91 98250 14890</a>
                </div>
                <p className="text-xs text-slate-500">Available Monday to Sunday 24 Hours for breakdown assistance.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900">Field Service Commitments:</h4>
                <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                  <li>On-site technician dispatch within 24-48 hours across major farming zones.</li>
                  <li>Genuine OEM spare parts (tines, gears, bearings, seals) dispatch within 24 hours.</li>
                  <li>Free seasonal maintenance checkups at registered dealerships.</li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919825014890?text=I%20need%20urgent%20technical%20support%20for%20my%20Dharti%20Agro%20machine."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] text-white py-2.5 px-4 rounded-[4px] font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  <span>Connect Directly with Master Engineer on WhatsApp</span>
                </a>
              </div>
            </>
          )}

          {type === 'iso' && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="material-symbols-outlined text-[#0f8723] text-3xl">verified</span>
                <div>
                  <div className="font-bold text-slate-900">Certificate No: ISO-9001-DA-2024</div>
                  <div className="text-xs text-slate-500">Design, Heavy Fabrication & Machining of Agricultural Equipment</div>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Dharti Agro Industries conforms strictly to the International Organization for Standardization (ISO 9001:2015) benchmarks for quality management systems, metallurgical strength verification, laser cutting tolerances, and pressure vessel testing.
              </p>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-2 text-xs text-slate-600">
              <p>Dharti Agro values the trust of Indian farmers and dealers. All phone numbers, tractor models, and farm location details submitted via our quotation forms are encrypted and used solely for dispatching accurate freight quotes, warranty registrations, and field service updates.</p>
              <p>We never sell or distribute farmer contact data to unauthorized third parties.</p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-2 text-xs text-slate-600">
              <p><strong>Warranty Scope:</strong> All Dharti Agro rotary tillers, cultivators, and hydraulic ploughs carry a comprehensive 24-month structural warranty covering main frames, gearbox housings, and hydraulic cylinder welds against manufacturing defects.</p>
              <p><strong>Wear & Tear:</strong> Consumables such as soil-engaging reversible shovels and rotary tiller blades are subject to wear based on soil abrasiveness and are backed by genuine spare pricing.</p>
            </div>
          )}

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 border border-[#0f8723] text-[#0f8723] font-bold rounded-[4px] text-xs hover:bg-[#0f8723] hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
