import React from 'react';

export const MetricsBanner: React.FC = () => {
  const metrics = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '23.8K+', label: 'Followers' },
    { value: '4.7/5', label: 'Google Rating' },
    { value: '10,000+', label: 'Machines Delivered' },
  ];

  return (
    <section className="py-12 sm:py-14 bg-[#20077f] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10">
          {metrics.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="text-4xl md:text-5xl font-bold text-[#8efb87] mb-2 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white/80">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
