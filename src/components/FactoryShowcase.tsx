import React from 'react';
import { BENTO_MAIN_IMAGE, BENTO_WELDING_IMAGE } from '../data';

interface FactoryShowcaseProps {
  onLearnMore?: () => void;
}

export const FactoryShowcase: React.FC<FactoryShowcaseProps> = () => {
  return (
    <section id="factory-showcase" className="py-20 sm:py-24 bg-white border-y border-[#717785]/20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#20077f] mb-3">
            State-of-the-Art Manufacturing
          </h2>
          <p className="text-sm sm:text-base text-[#414753]">
            Take a look inside our 4-acre heavy engineering works in Himatnagar, Gujarat.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] lg:auto-rows-[320px]">
          {/* Main Feature: Himatnagar Facility (8 cols, 2 rows) */}
          <div className="md:col-span-8 md:row-span-2 relative bg-slate-900 border border-[#717785]/20 rounded-2xl group overflow-hidden shadow-md">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Wide shot of the exterior and main yard of the Himatnagar facility. Massive steel structures and finished agricultural machinery are lined up symmetrically." 
              src={BENTO_MAIN_IMAGE} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white z-10">
              <span className="inline-block bg-[#20077f] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 mb-3 rounded-full border border-white/20">
                Himatnagar Facility
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                The Engine of Production
              </h3>
              <p className="text-sm sm:text-base max-w-xl opacity-90 leading-relaxed">
                Our state-of-the-art facility in Gujarat spans acres of dedicated manufacturing space. Here, raw steel is transformed into the heavy-duty machinery that powers modern agriculture. The layout is optimized for linear flow, minimizing handling and maximizing precision.
              </p>
            </div>
          </div>

          {/* Secondary Feature 1: Advanced Fabrication (4 cols, 1 row) */}
          <div className="md:col-span-4 relative bg-slate-900 border border-[#717785]/20 rounded-2xl group overflow-hidden shadow-md">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Close-up of a skilled welder joining heavy steel plates. Bright sparks illuminate the frame against a dark background." 
              src={BENTO_WELDING_IMAGE} 
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white z-10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8efb87]"></span>
                <span className="text-xs uppercase font-bold tracking-wider text-[#8efb87]">MIG & TIG Robotics</span>
              </div>
              <h4 className="text-xl font-bold mb-1">
                Advanced Fabrication
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                MIG and TIG welding processes executed by certified professionals ensuring unyielding structural joints.
              </p>
            </div>
          </div>

          {/* Secondary Feature 2: Uncompromising Standards (4 cols, 1 row) */}
          <div className="md:col-span-4 relative bg-[#ecedf7] border border-[#c1c6d5]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-center shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#20077f]/10 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[#20077f] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
            </div>
            <h4 className="text-xl font-bold text-[#20077f] mb-2">
              Uncompromising Standards
            </h4>
            <p className="text-sm text-[#414753] leading-relaxed">
              Every component undergoes stringent quality checks. We utilize advanced metrology equipment to verify tolerances down to the micrometer, ensuring that "Precision Strength" isn't just a motto, but a measurable fact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
