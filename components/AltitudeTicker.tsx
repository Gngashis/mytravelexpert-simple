'use client';

import React from 'react';
import { Mountain, Compass } from 'lucide-react';

const HIGHLIGHTS = [
  { name: 'Mount Kanchenjunga', alt: '8,586 M', tag: 'World 3rd Highest' },
  { name: 'Gurudongmar Lake', alt: '5,425 M (17,800 FT)', tag: 'Sacred Glacial Water' },
  { name: 'Nathula Silk Route Pass', alt: '4,310 M (14,140 FT)', tag: 'Indo-China Frontier' },
  { name: 'Tiger Hill Sunrise', alt: '2,590 M (8,500 FT)', tag: 'Golden Hour Vista' },
  { name: 'Paro Taktsang (Tiger\'s Nest)', alt: '3,120 M (10,240 FT)', tag: 'Bhutan Cliff Sanctuary' },
  { name: 'Yumthang Valley of Flowers', alt: '3,564 M (11,693 FT)', tag: 'Alpine Rhododendrons' },
  { name: 'Punakha Valley & Dzong', alt: '1,200 M', tag: 'Royal Winter Capital' },
  { name: 'Jaldapara Rhino Wilderness', alt: 'Foothill Canopy', tag: 'Eastern Himalayan Wildlife' },
];

export default function AltitudeTicker() {
  return (
    <div className="relative overflow-hidden py-4 bg-himalaya-900 border-y border-gold-500/20 text-snow-100 select-none">
      <div className="flex w-max animate-marquee">
        {/* Render twice for seamless continuous loop */}
        {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 mx-6 text-xs sm:text-sm tracking-wider uppercase font-medium"
          >
            <Mountain className="w-4 h-4 text-gold-400 shrink-0" />
            <span className="text-snow-100 font-semibold">{item.name}</span>
            <span className="text-gold-300 font-mono bg-himalaya-950 px-2 py-0.5 rounded border border-gold-500/20">
              {item.alt}
            </span>
            <span className="text-slate-400 text-xs lowercase italic">({item.tag})</span>
            <span className="text-gold-500/40 ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
