import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onAddReview?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <section className="py-20 sm:py-24 bg-[#ecedf7] border-y border-[#717785]/20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#20077f]">
            Trusted by Farmers Across India
          </h2>
          <p className="text-sm sm:text-base text-[#414753] mt-2">
            Real feedback from progressive farmers operating Dharti Agro machinery across diverse soil terrains.
          </p>
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 sm:p-8 border border-[#717785]/20 rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Header Rating & Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#0f8723]">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const fill = i + 1 <= testimonial.rating;
                      const half = i < testimonial.rating && i + 1 > testimonial.rating;
                      return (
                        <span 
                          key={i} 
                          className="material-symbols-outlined text-lg"
                          style={{ fontVariationSettings: `'FILL' ${fill || half ? 1 : 0}` }}
                        >
                          {half ? 'star_half' : 'star'}
                        </span>
                      );
                    })}
                  </div>

                  {testimonial.isVerified && (
                    <span className="flex items-center text-[#20077f] text-xs font-bold bg-[#20077f]/10 px-2.5 py-0.5 rounded-[4px]">
                      <span className="material-symbols-outlined text-sm mr-1 material-symbols-fill">
                        verified
                      </span>
                      Verified Farmer
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#414753] italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Farmer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-[#e6e8f1] flex items-center justify-center font-bold text-[#20077f] text-base border border-[#c1c6d5]">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#181c22]">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-[#414753]">
                    {testimonial.location}
                  </p>
                  <p className="text-[11px] text-[#0f8723] font-semibold mt-0.5">
                    {testimonial.implementUsed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

