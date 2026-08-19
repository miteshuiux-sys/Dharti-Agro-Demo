import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface IndustrialGalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const IndustrialGallery: React.FC<IndustrialGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Machining', 'Assembly', 'Quality Control', 'Industrial', 'Hydraulics', 'Field Test'];

  const filteredItems = selectedFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item: GalleryItem) => item.category === selectedFilter);

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#717785]/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#20077f] mb-3">
            Industrial Excellence in View
          </h2>
          <p className="text-sm sm:text-base text-[#414753]">
            A visual documentation of precision manufacturing, laser tolerances, and demanding field trials.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === cat
                  ? 'bg-[#20077f] text-white shadow-xs'
                  : 'bg-[#f2f3fd] text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => {
                const originalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
                onOpenLightbox(originalIndex >= 0 ? originalIndex : idx);
              }}
              className="break-inside-avoid relative group overflow-hidden border border-[#717785]/20 rounded-2xl bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={item.alt} 
                src={item.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8efb87] bg-black/40 px-2 py-0.5 rounded w-max mb-1.5">
                  {item.category}
                </span>
                <h4 className="text-base font-bold leading-snug">{item.title}</h4>
                <p className="text-xs text-white/80 line-clamp-2 mt-1">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs text-[#8efb87] font-semibold">
                  <span className="material-symbols-outlined text-sm">zoom_in</span>
                  <span>Click to expand high-res</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
