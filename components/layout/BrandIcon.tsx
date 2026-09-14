import React from 'react';

interface BrandIconProps {
  className?: string;
  size?: number;
}

export function BrandIcon({ className = 'h-8 w-8', size = 32 }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={`${className} transition-transform duration-200 group-hover:scale-105 shrink-0`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brandStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        <linearGradient id="brandTopFacet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>

        <linearGradient id="brandBotFacet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="60%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        <linearGradient id="brandAccentOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        <linearGradient id="brandInnerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <filter id="brandSoftShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#0284c7" floodOpacity="0.3" />
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Base Squircle Tile */}
      <rect width="512" height="512" rx="112" fill="#090d16" />
      <rect x="3" y="3" width="506" height="506" rx="110" fill="none" stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="6" />

      {/* Central "Buildora B" Monogram */}
      <g filter="url(#brandSoftShadow)">
        {/* Backbone Column */}
        <rect x="116" y="108" width="68" height="296" rx="18" fill="url(#brandStemGrad)" />
        <rect x="124" y="116" width="10" height="280" rx="5" fill="#ffffff" opacity="0.35" />

        {/* Precision Drafting Ticks */}
        <g fill="#ffffff" opacity="0.45">
          <rect x="168" y="148" width="12" height="4" rx="2" />
          <rect x="164" y="180" width="16" height="4" rx="2" />
          <rect x="168" y="212" width="12" height="4" rx="2" />
          <rect x="164" y="244" width="16" height="4" rx="2" />
          <rect x="168" y="276" width="12" height="4" rx="2" />
          <rect x="164" y="308" width="16" height="4" rx="2" />
          <rect x="168" y="340" width="12" height="4" rx="2" />
        </g>

        {/* Top Loop */}
        <path
          d="M 184 108 H 292 C 352 108, 394 142, 394 196 C 394 246, 354 274, 298 276 H 184 Z"
          fill="url(#brandTopFacet)"
        />
        <path
          d="M 228 160 H 284 C 316 160, 336 174, 336 198 C 336 222, 316 234, 284 234 H 228 Z"
          fill="#090d16"
        />

        {/* Bottom Loop */}
        <path
          d="M 184 252 H 308 C 374 252, 420 290, 420 350 C 420 404, 368 404, 308 404 H 184 Z"
          fill="url(#brandBotFacet)"
        />
        <path
          d="M 232 298 H 298 C 334 298, 358 314, 358 348 C 358 372, 334 378, 298 378 H 232 Z"
          fill="#090d16"
        />

        {/* Specular Highlights */}
        <path
          d="M 184 108 H 292 C 348 108 386 138 392 188 C 378 148 338 126 280 126 H 184 Z"
          fill="url(#brandInnerGlow)"
        />
        <path
          d="M 184 252 H 308 C 364 252 406 278 416 332 C 404 290 358 268 296 268 H 184 Z"
          fill="url(#brandInnerGlow)"
          opacity="0.6"
        />
      </g>

      {/* Drafting Angle Square Accent */}
      <polygon points="340,78 404,142 376,170 340,134 304,170 276,142" fill="url(#brandAccentOrange)" />
      <polygon points="340,102 380,142 366,156 340,130 314,156 300,142" fill="#fed7aa" />
    </svg>
  );
}
