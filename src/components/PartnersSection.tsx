import React from 'react';

interface Partner {
  id: string;
  brand: string;
  subtitle: string;
  type: string;
  logo: React.ReactNode;
}

export const PartnersSection: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'mahindra',
      brand: 'MAHINDRA',
      subtitle: 'Tractor Attachments',
      type: 'OEM Approved',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#e11d48" fillOpacity="0.1" />
          <path d="M14 34L24 14L34 34L28 34L24 24L20 34H14Z" fill="#e11d48" />
          <path d="M22 28H26V34H22V28Z" fill="#be123c" />
        </svg>
      )
    },
    {
      id: 'johndeere',
      brand: 'JOHN DEERE',
      subtitle: 'Compatible Implements',
      type: 'Validated Fit',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#367c2b" fillOpacity="0.12" />
          <path d="M24 10C16.27 10 10 16.27 10 24C10 31.73 16.27 38 24 38C31.73 38 38 31.73 38 24C38 16.27 31.73 10 24 10ZM24 13C30.08 13 35 17.92 35 24C35 30.08 30.08 35 24 35C17.92 35 13 30.08 13 24C13 17.92 17.92 13 24 13Z" fill="#367c2b" />
          <path d="M20 20L28 24L20 28V20Z" fill="#ffde00" />
        </svg>
      )
    },
    {
      id: 'sonalika',
      brand: 'SONALIKA',
      subtitle: 'International Tractors',
      type: 'Certified Partner',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#20077f" fillOpacity="0.1" />
          <path d="M24 12L34 20V28L24 36L14 28V20L24 12Z" stroke="#20077f" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="4" fill="#0f8723" />
        </svg>
      )
    },
    {
      id: 'kubota',
      brand: 'KUBOTA',
      subtitle: 'Precision Farming',
      type: 'Technical Alliance',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#f97316" fillOpacity="0.12" />
          <text x="50%" y="58%" textAnchor="middle" fill="#ea580c" fontSize="16" fontWeight="900" fontFamily="sans-serif">K</text>
        </svg>
      )
    },
    {
      id: 'newholland',
      brand: 'NEW HOLLAND',
      subtitle: 'Agriculture Network',
      type: 'Field Validated',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#1d4ed8" fillOpacity="0.1" />
          <ellipse cx="24" cy="24" rx="12" ry="7" stroke="#1d4ed8" strokeWidth="2" />
          <path d="M16 24L24 16L32 24" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'tafe',
      brand: 'TAFE',
      subtitle: 'Massey Ferguson',
      type: 'Allied Implement',
      logo: (
        <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="8" fill="#0f8723" fillOpacity="0.1" />
          <path d="M15 17H33M24 17V33M18 33H30" stroke="#0f8723" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f9f9ff] border-y border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#20077f] mb-2">
            Trusted Partners & Dealerships
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Engineered to seamlessly integrate with India’s leading agricultural machinery and tractor networks.
          </p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {partners.map((p) => (
            <div 
              key={p.id}
              className="p-4 rounded-xl border border-slate-200 bg-white text-center flex flex-col items-center justify-between hover:border-[#20077f]/40 hover:shadow-md transition-all group min-h-[140px]"
            >
              <div className="mb-2">
                {p.logo}
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#181c22] tracking-wider uppercase group-hover:text-[#20077f] transition-colors">
                  {p.brand}
                </h4>
                <p className="text-[11px] text-[#717785] mt-0.5 font-medium">
                  {p.subtitle}
                </p>
              </div>
              <span className="mt-2 text-[10px] font-bold text-[#0f8723] bg-[#0f8723]/10 px-2 py-0.5 rounded-[4px] w-full truncate">
                {p.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

