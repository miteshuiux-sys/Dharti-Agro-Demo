import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [farmAcreage, setFarmAcreage] = useState('10 - 25 Acres');
  const [cropType, setCropType] = useState('Cotton / Groundnut / Wheat');
  const [preferredDate, setPreferredDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#20077f] text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-[4px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          <h2 className="text-2xl font-bold">Request Technical Consultation</h2>
          <p className="text-white/80 text-xs mt-1">
            Connect directly with Dharti Agro field engineers to optimize machine sizing for your tractor and soil type.
          </p>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-green-100 text-[#0f8723] rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  task_alt
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Consultation Scheduled!</h3>
              <p className="text-sm text-slate-600">
                Our Senior Technical Specialist will call you at <strong>{phone}</strong> to review soil test compatibility and implement configuration.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 bg-[#20077f] text-white font-bold px-6 py-2.5 rounded-[4px] text-sm hover:bg-[#180566] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Farmer or Dealer Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-[4px] border border-slate-300 text-sm focus:ring-2 focus:ring-[#20077f] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXX XXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-[4px] border border-slate-300 text-sm focus:ring-2 focus:ring-[#20077f] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Farm Land Size</label>
                  <select
                    value={farmAcreage}
                    onChange={(e) => setFarmAcreage(e.target.value)}
                    className="w-full px-3 py-2 rounded-[4px] border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#20077f] focus:outline-hidden"
                  >
                    <option value="1 - 10 Acres">1 - 10 Acres</option>
                    <option value="10 - 25 Acres">10 - 25 Acres</option>
                    <option value="25 - 50 Acres">25 - 50 Acres</option>
                    <option value="50+ Acres (Commercial)">50+ Acres (Commercial)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Crops</label>
                  <input
                    type="text"
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    placeholder="Cotton, Wheat, Sugarcane"
                    className="w-full px-3 py-2 rounded-[4px] border border-slate-300 text-sm focus:ring-2 focus:ring-[#20077f] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Callback Date / Time</label>
                <input
                  type="datetime-local"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-[4px] border border-slate-300 text-sm focus:ring-2 focus:ring-[#20077f] focus:outline-hidden"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-[#0f8723] text-[#0f8723] rounded-[4px] text-xs font-bold hover:bg-[#0f8723] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#20077f] text-white font-bold px-6 py-2.5 rounded-[4px] text-xs hover:bg-[#180566] shadow-md transition-all"
                >
                  Confirm Callback Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
