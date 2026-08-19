import React from 'react';
import { Product } from '../../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-[4px] bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-md"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-2">
            <div>
              {product.badge && (
                <span className={`inline-block text-xs font-bold uppercase tracking-wider text-white px-2.5 py-0.5 rounded-[4px] mb-2 ${product.badgeColor || 'bg-[#0f8723]'}`}>
                  {product.badge}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {product.name}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-white/80 uppercase block">Estimated Price</span>
              <span className="text-xl sm:text-2xl font-bold text-[#8efb87]">{product.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#20077f] mb-2">Overview</h3>
            <p className="text-slate-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f2f3fd] p-4 rounded-xl border border-[#c1c6d5]/40">
            <div className="p-2">
              <span className="text-xs text-slate-500 block font-medium">Tractor Power</span>
              <span className="text-sm font-bold text-[#20077f]">{product.hpRequired}</span>
            </div>
            <div className="p-2">
              <span className="text-xs text-slate-500 block font-medium">Working Width</span>
              <span className="text-sm font-bold text-[#20077f]">{product.workingWidth}</span>
            </div>
            <div className="p-2">
              <span className="text-xs text-slate-500 block font-medium">Weight</span>
              <span className="text-sm font-bold text-[#20077f]">{product.weight}</span>
            </div>
            <div className="p-2">
              <span className="text-xs text-slate-500 block font-medium">Warranty</span>
              <span className="text-sm font-bold text-[#0f8723]">{product.warranty}</span>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#20077f] mb-3">Key Engineering Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="material-symbols-outlined text-[#0f8723] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#20077f] mb-3">Technical Specifications</h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden divide-y divide-slate-200 text-sm">
              {Object.entries(product.specifications).map(([key, val], idx) => (
                <div key={idx} className="grid grid-cols-2 p-3 bg-slate-50/50 hover:bg-white transition-colors">
                  <span className="font-medium text-slate-600">{key}</span>
                  <span className="text-slate-900 font-semibold">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="material-symbols-outlined text-sm text-[#0f8723]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span>100% Tested at Himatnagar Facility • GST Invoice & Subsidies Available</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 border border-[#0f8723] text-[#0f8723] rounded-[4px] font-bold text-sm hover:bg-[#0f8723] hover:text-white transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  onClose();
                  onOpenQuote(product);
                }}
                className="flex-1 sm:flex-none bg-[#20077f] text-white px-6 py-2.5 rounded-[4px] font-bold text-sm hover:bg-[#180566] shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request Quotation</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
