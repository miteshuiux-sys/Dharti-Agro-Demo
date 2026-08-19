import React from 'react';
import { STORY_IMAGE } from '../data';

export const StorySection: React.FC = () => {
  return (
    <section id="story-section" className="py-20 sm:py-24 max-w-[1280px] mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Left Column: Story Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#20077f] mb-6 leading-tight">
            Engineering equipment that works where it matters most.
          </h2>

          <div className="space-y-4 text-[#414753] text-base leading-relaxed">
            <p>
              Agriculture is not a controlled environment. It is unpredictable, abrasive, and demanding. We don't build machines for the showroom floor; we engineer them for the field.
            </p>
            <p>
              At Dharti Agro, our design philosophy is rooted in utilitarian efficiency. We strip away the unnecessary and reinforce the critical. By combining robust material science with practical engineering insights, we deliver equipment that farmers can trust to start every morning and endure every season.
            </p>
            <p>
              Our focus is on creating unbreakable solutions that drive agricultural productivity forward, ensuring that our machinery is an unshakeable foundation for your operations.
            </p>
          </div>
        </div>

        {/* Right Column: Field Machine Image */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl overflow-hidden border border-[#717785]/20 shadow-md group">
            <img 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="A rugged piece of agricultural machinery operating in a dusty, sunlit field." 
              src={STORY_IMAGE} 
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#8efb87]">eco</span>
              <span>100% Soil Aeration & Moisture Retention Efficiency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
