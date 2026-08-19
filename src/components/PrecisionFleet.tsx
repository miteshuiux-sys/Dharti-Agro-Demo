import React, { useRef } from 'react';
import { Product } from '../types';

interface PrecisionFleetProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onViewProductDetails: (product: Product) => void;
  onGetQuote: (product: Product) => void;
}

export const PrecisionFleet: React.FC<PrecisionFleetProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onViewProductDetails,
  onGetQuote
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'cultivators', label: 'Cultivators' },
    { id: 'tillers', label: 'Rotary Tillers' },
    { id: 'ploughs', label: 'Reversible Ploughs' },
    { id: 'hydraulics', label: 'Hydraulic Systems' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="precision-fleet" className="py-20 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#20077f] mb-3">
            Precision Fleet
          </h2>
          <p className="text-base text-[#414753] max-w-3xl leading-relaxed">
            Explore our range of heavy-duty agricultural equipment engineered for maximum yield and reliability in the field.
          </p>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => handleScroll('left')}
            className="w-11 h-11 rounded-[4px] border border-slate-400 flex items-center justify-center text-slate-800 hover:border-[#20077f] hover:text-[#20077f] hover:bg-[#ecedf7] transition-all active:scale-95 shadow-xs"
            aria-label="Previous Slide"
          >
            <span className="material-symbols-outlined text-xl">arrow_back</span>
          </button>
          <button 
            onClick={() => handleScroll('right')}
            className="w-11 h-11 rounded-[4px] bg-[#20077f] text-white flex items-center justify-center hover:bg-[#180566] transition-all shadow-md active:scale-95"
            aria-label="Next Slide"
          >
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-[4px] text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#20077f] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300/70'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Carousel Slider */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 no-scrollbar -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="snap-start shrink-0 w-[88vw] sm:w-[380px] md:w-[400px] bg-white border border-[#c1c6d5]/60 rounded-2xl group overflow-hidden flex flex-col hover:shadow-xl hover:border-[#20077f]/40 transition-all duration-300"
          >
            {/* Card Image */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={product.image} 
              />
              {product.badge && (
                <div className={`absolute top-4 left-4 ${product.badgeColor || 'bg-[#0f8723]'} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md`}>
                  {product.badge}
                </div>
              )}
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                {product.hpRequired}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-[#20077f] mb-2 leading-snug group-hover:text-[#7066d0] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-[#414753] mb-6 flex-grow leading-relaxed line-clamp-3">
                {product.shortDescription}
              </p>

              {/* Card Action Buttons */}
              <div className="flex gap-3 mt-auto pt-2 border-t border-slate-100">
                <button 
                  onClick={() => onViewProductDetails(product)}
                  className="flex-1 border border-[#0f8723] text-[#0f8723] font-bold text-xs sm:text-sm py-2.5 px-4 rounded-[4px] hover:bg-[#0f8723] hover:text-white transition-colors"
                >
                  View Details
                </button>
                <button 
                  onClick={() => onGetQuote(product)}
                  className="bg-[#20077f] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-[4px] hover:bg-[#180566] transition-all shadow-md active:scale-95 flex items-center justify-center"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
