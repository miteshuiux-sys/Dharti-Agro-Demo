import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id || PRODUCTS[0].id
  );
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [stateName, setStateName] = useState('Gujarat');
  const [pincode, setPincode] = useState('');
  const [tractorHp, setTractorHp] = useState('45-55 HP');
  const [soilType, setSoilType] = useState('Black Cotton / Clay');
  const [includeSpareBlades, setIncludeSpareBlades] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `DA-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
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
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-3 text-xs font-semibold tracking-wider uppercase text-[#8efb87]">
            <span className="material-symbols-outlined text-sm">request_quote</span>
            <span>Direct Factory Pricing</span>
          </div>
          <h2 className="text-2xl font-bold">Request a Machine Quotation</h2>
          <p className="text-white/80 text-sm mt-1">
            Get instant customized factory pricing, state subsidy details, and dealer dispatch timeline.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-[#0f8723] rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Quotation Generated!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm">
                Thank you, <strong>{fullName}</strong>. Quotation reference <span className="font-mono font-bold text-[#20077f]">#{quoteReference}</span> has been dispatched to <strong className="text-slate-900">{phone}</strong> via SMS and WhatsApp.
              </p>

              <div className="bg-[#f2f3fd] p-5 rounded-xl border border-[#c1c6d5]/50 max-w-md mx-auto text-left space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Implement:</span>
                  <span className="font-bold text-[#20077f]">{currentProduct.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Tractor:</span>
                  <span className="font-semibold text-slate-800">{tractorHp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery State:</span>
                  <span className="font-semibold text-slate-800">{stateName} ({pincode || 'General'})</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2">
                  <span className="text-slate-700 font-bold">Est. Factory Price:</span>
                  <span className="font-bold text-[#0f8723] text-base">{currentProduct.priceRange}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <a 
                  href={`https://wa.me/919825014890?text=Hello%20Dharti%20Agro%2C%20I%20have%20requested%20quote%20%23${quoteReference}%20for%20${encodeURIComponent(currentProduct.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-[4px] font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                  <span>Connect with Sales on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-slate-300 rounded-[4px] font-semibold text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Select Implement / Machinery
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedProductId(prod.id)}
                      className={`p-3 rounded-[4px] border text-left flex items-center gap-3 transition-all ${
                        selectedProductId === prod.id
                          ? 'border-[#20077f] bg-[#f2f3fd] ring-2 ring-[#20077f]/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <img src={prod.image} alt={prod.name} className="w-12 h-12 object-cover rounded-[4px] shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-xs text-slate-900 truncate">{prod.name}</div>
                        <div className="text-[11px] text-slate-500">{prod.hpRequired}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#20077f] focus:border-[#20077f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#20077f] focus:border-[#20077f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    State / Region *
                  </label>
                  <select
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#20077f] focus:border-[#20077f]"
                  >
                    <option value="Gujarat">Gujarat</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pincode (For Freight Quote)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 383001"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#20077f] focus:border-[#20077f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Tractor Horsepower
                  </label>
                  <select
                    value={tractorHp}
                    onChange={(e) => setTractorHp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#20077f] focus:border-[#20077f]"
                  >
                    <option value="30-40 HP">30 - 40 HP</option>
                    <option value="40-55 HP">40 - 55 HP</option>
                    <option value="55-75 HP">55 - 75 HP</option>
                    <option value="75+ HP">75+ HP (Heavy 4WD)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Dominant Soil Type
                  </label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-[4px] border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-[#20077f] focus:border-[#20077f]"
                  >
                    <option value="Black Cotton / Clay">Black Cotton / Heavy Clay</option>
                    <option value="Sandy Loam">Sandy Loam</option>
                    <option value="Rocky / Gravel Hardpan">Rocky / Gravel Hardpan</option>
                    <option value="Alluvial / Wetland">Alluvial / Paddy Wetland</option>
                  </select>
                </div>
              </div>

              {/* Addon checkboxes */}
              <div className="pt-2 border-t border-slate-100">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 select-none">
                  <input
                    type="checkbox"
                    checked={includeSpareBlades}
                    onChange={(e) => setIncludeSpareBlades(e.target.checked)}
                    className="w-4 h-4 text-[#20077f] rounded border-slate-300 focus:ring-[#20077f]"
                  />
                  <span>Include genuine spare blade/tine bundle & PTO shaft safety guard</span>
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 border border-[#0f8723] text-[#0f8723] rounded-[4px] font-bold text-sm hover:bg-[#0f8723] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#20077f] text-white font-bold px-8 py-3 rounded-[4px] hover:bg-[#180566] shadow-md transition-all flex items-center gap-2 text-sm uppercase tracking-wider"
                >
                  <span>Generate Official Quote</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
