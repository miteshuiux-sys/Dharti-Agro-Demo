import React from 'react';
import { GalleryItem } from '../../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[95vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          title="Close Lightbox"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-95"
          title="Previous Image"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-transform active:scale-95"
          title="Next Image"
        >
          <span className="material-symbols-outlined text-2xl">arrow_forward</span>
        </button>

        {/* Image Container */}
        <div className="w-full rounded-xl overflow-hidden bg-black flex items-center justify-center max-h-[70vh] border border-white/10 shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        {/* Caption & Metadata */}
        <div className="w-full mt-4 bg-slate-900/90 text-white p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#0f8723] text-white px-2 py-0.5 rounded">
                {currentItem.category}
              </span>
              <span className="text-xs text-white/50">
                {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{currentItem.title}</h3>
            <p className="text-xs text-white/80 max-w-2xl mt-0.5">{currentItem.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
