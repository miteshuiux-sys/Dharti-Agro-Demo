import React from 'react';
import { ABOUT_IMAGE } from '../data';

interface AboutSectionProps {
  onExploreStory: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreStory }) => {
  return (
    <section id="about-section" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#c1c6d5]/50 group">
              <img 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Our dedicated team working on the factory floor, committed to building the future of farming." 
                src={ABOUT_IMAGE} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#20077f] mb-6 leading-tight">
              Engineering the Future of Farming since 1995
            </h2>

            <p className="text-base sm:text-lg text-[#414753] mb-8 leading-relaxed">
              For decades, Dharti Agro has been at the forefront of agricultural innovation. Our heritage is built on a foundation of uncompromising quality and a deep understanding of the challenges farmers face every day. We are more than just manufacturers; we are partners in your success, dedicated to empowering communities with reliable, high-performance machinery.
            </p>

            <div>
              <button 
                onClick={onExploreStory}
                className="self-start bg-[#20077f] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-[4px] hover:bg-[#180566] transition-colors shadow-sm flex items-center gap-2 active:scale-95"
              >
                <span>Explore Our Story</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
