import React from 'react';

interface DhartiLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const DhartiLogo: React.FC<DhartiLogoProps> = ({ className = 'h-12 w-auto', variant = 'light' }) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? '#ffffff' : '#180a80';
  const subTextColor = isDark ? '#94a3b8' : '#6b7280';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 480 120" 
        className="h-full w-auto overflow-visible"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dharti Agro Industries Logo"
      >
        {/* Leaf sprout in D */}
        <g id="sprout-icon">
          {/* Outer leaf */}
          <path
            d="M 52,72 C 40,55 35,32 50,15 C 56,35 48,58 56,68 Z"
            fill="#1ba836"
          />
          {/* Inner / front leaf */}
          <path
            d="M 58,74 C 54,60 52,42 62,28 C 66,45 62,60 62,72 Z"
            fill="#108827"
          />
        </g>

        {/* DHARTI Serif Text */}
        {/* D */}
        <path
          d="M 44,22 L 68,22 C 92,22 108,34 108,54 C 108,74 92,86 68,86 L 44,86 Z M 58,34 L 58,74 L 68,74 C 82,74 93,66 93,54 C 93,42 82,34 68,34 Z"
          fill={textColor}
        />

        {/* H */}
        <path
          d="M 120,22 L 134,22 L 134,48 L 164,48 L 164,22 L 178,22 L 178,86 L 164,86 L 164,60 L 134,60 L 134,86 L 120,86 Z"
          fill={textColor}
        />

        {/* A */}
        <path
          d="M 204,22 L 222,22 L 244,86 L 229,86 L 223,69 L 202,69 L 197,86 L 183,86 Z M 206,57 L 220,57 L 213,37 Z"
          fill={textColor}
        />

        {/* R */}
        <path
          d="M 256,22 L 282,22 C 298,22 309,30 309,43 C 309,54 301,61 290,63 L 310,86 L 294,86 L 276,64 L 270,64 L 270,86 L 256,86 Z M 270,34 L 270,52 L 281,52 C 290,52 295,47 295,43 C 295,38 290,34 281,34 Z"
          fill={textColor}
        />

        {/* T */}
        <path
          d="M 318,22 L 362,22 L 362,34 L 347,34 L 347,86 L 333,86 L 333,34 L 318,34 Z"
          fill={textColor}
        />

        {/* I */}
        <path
          d="M 374,22 L 388,22 L 388,86 L 374,86 Z"
          fill={textColor}
        />

        {/* Subtitle: AGRO INDUSTRIES */}
        <text
          x="240"
          y="108"
          textAnchor="middle"
          fill={subTextColor}
          fontSize="17"
          fontWeight="800"
          letterSpacing="8.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          AGRO INDUSTRIES
        </text>
      </svg>
    </div>
  );
};
