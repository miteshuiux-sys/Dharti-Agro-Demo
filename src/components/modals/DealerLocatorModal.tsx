import React, { useState } from 'react';
import { DEALERS } from '../../data';
import { Dealer } from '../../types';

interface DealerLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DealerLocatorModal: React.FC<DealerLocatorModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('All');

  if (!isOpen) return null;

  const states = ['All', 'Gujarat', 'Punjab', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh'];

  const filteredDealers = DEALERS.filter((d: Dealer) => {
    const matchesState = selectedState === 'All' || d.state.toLowerCase() === selectedState.toLowerCase();
    const matchesSearch = 
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.pincode.includes(searchTerm);
    return matchesState && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#20077f] text-white p-6 sm:p-7 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-[4px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
          
          <h2 className="text-2xl font-bold">Find an Authorised Dharti Agro Dealer</h2>
          <p className="text-white/90 text-sm mt-1">
            Over 250+ certified dealerships and spare parts centers across 14 Indian states.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-6 bg-[#f2f3fd] border-b border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">
                search
              </span>
              <input
                type="text"
                placeholder="Search city, district, dealer name or pincode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white rounded-[4px] border border-slate-300 text-sm focus:ring-2 focus:ring-[#0f8723] focus:outline-hidden"
              />
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedState === st
                      ? 'bg-[#20077f] text-white shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300/60'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dealers List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filteredDealers.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">
                location_off
              </span>
              <p className="font-semibold text-slate-700">No dealers found matching your search.</p>
              <p className="text-xs text-slate-500 mt-1">Please call factory dispatch directly at +91 98250 14890 for direct shipping.</p>
            </div>
          ) : (
            filteredDealers.map((dealer) => (
              <div 
                key={dealer.id}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-[#0f8723] hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#20077f] text-base">{dealer.name}</span>
                    <span className="px-2 py-0.5 bg-[#8efb87]/30 text-[#00530f] rounded text-[11px] font-bold">
                      {dealer.state}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 flex items-start gap-1">
                    <span className="material-symbols-outlined text-sm text-slate-400 mt-0.5">location_on</span>
                    <span>{dealer.address}</span>
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-slate-800">
                      <span className="material-symbols-outlined text-sm text-[#0f8723]">call</span>
                      {dealer.phone}
                    </span>
                    <span>•</span>
                    <span>Rating: ⭐ {dealer.rating}/5.0</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${dealer.phone.replace(/\s+/g, '')}`}
                    className="flex-1 sm:flex-none px-4 py-2 bg-[#0f8723] text-white rounded-[4px] font-bold text-xs hover:bg-[#00751a] transition-colors flex items-center justify-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">call</span>
                    <span>Call Dealership</span>
                  </a>
                  <a
                    href={`https://wa.me/919825014890?text=I%20am%20looking%20for%20Dharti%20Agro%20dealer%20in%20${encodeURIComponent(dealer.city)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-slate-300 rounded-[4px] hover:bg-slate-100 text-slate-700 transition-colors flex items-center justify-center"
                    title="Message on WhatsApp"
                  >
                    <span className="material-symbols-outlined text-base text-[#25D366]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      chat
                    </span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>Are you an agri dealer looking to partner?</span>
          <a 
            href="mailto:dealers@dhartiagro.com"
            className="text-[#20077f] font-bold hover:underline"
          >
            Apply for Dealership franchise →
          </a>
        </div>
      </div>
    </div>
  );
};
