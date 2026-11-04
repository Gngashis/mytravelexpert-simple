'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Calendar, Mountain, Users, ArrowUpRight, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { BUSINESS_INFO } from '@/lib/data';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('4-6');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized [-0.5, 0.5]
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Handcrafted 3D dual-axis angular perspective matrix with spring dampening
    setTilt({
      rx: -(normY * 12),
      ry: normX * 14,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-himalaya-950 text-snow-100 pt-24 pb-16"
    >
      {/* Background Image: Moody & Golden-Hour Himalayas Mount Kanchenjunga */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=85"
          alt="Mount Kanchenjunga Himalayas at sunrise"
          fill
          priority
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Multi-layered cinematic gradient overlays (Himalayan Forest Green & Obsidian) */}
        <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950 via-himalaya-950/75 to-himalaya-900/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-himalaya-950/50 to-himalaya-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Physics Particle Layer */}
      <HeroCanvas />

      {/* Hero Content Container with 3D Perspective Tilt */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className="transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Top Pill / Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-himalaya-900/80 border border-gold-500/30 backdrop-blur-md shadow-lg shadow-gold-500/5">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-300">
                Bespoke Himalayan Expeditions • Kanchenjunga 8,586M
              </span>
            </div>
          </div>

          {/* Majestic Hero Headline */}
          <div className="text-center max-w-4xl mx-auto mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif tracking-tight text-snow-50 leading-[1.1] drop-shadow-xl">
              Where Silence Meets{' '}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent">
                The Sacred Sky
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
              Curated luxury journeys across the rolling tea ridges of Darjeeling, high-altitude alpine lakes of Sikkim, and untouched Buddhist kingdoms of Bhutan.
            </p>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-himalaya-950 font-semibold text-sm tracking-wide shadow-xl shadow-gold-500/20 hover:from-gold-400 hover:to-amber-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Explore Curated Journeys</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-himalaya-900/80 hover:bg-himalaya-800 border border-gold-500/30 text-snow-100 font-medium text-sm tracking-wide backdrop-blur-md hover:border-gold-400/60 transition-all shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>WhatsApp Concierge: +91 80012 47778</span>
            </a>
          </div>

          {/* Interactive 3D Frosted Glass Expedition Finder */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-himalaya-900/70 border border-gold-500/20 p-4 sm:p-6 backdrop-blur-xl shadow-2xl shadow-black/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Destination Select */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-himalaya-950/60 border border-slate-800/80 hover:border-gold-500/40 transition-colors">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Destination</span>
                </div>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="bg-transparent text-sm text-snow-100 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-himalaya-950 text-snow-100">All Himalayan Regions</option>
                  <option value="darjeeling" className="bg-himalaya-950 text-snow-100">Darjeeling Tea Estates</option>
                  <option value="sikkim" className="bg-himalaya-950 text-snow-100">Sikkim Alpine Lake & Pass</option>
                  <option value="bhutan" className="bg-himalaya-950 text-snow-100">Kingdom of Bhutan</option>
                  <option value="dooars" className="bg-himalaya-950 text-snow-100">Dooars Rhino Wildlife</option>
                </select>
              </div>

              {/* Duration Select */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-himalaya-950/60 border border-slate-800/80 hover:border-gold-500/40 transition-colors">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Duration</span>
                </div>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="bg-transparent text-sm text-snow-100 font-medium focus:outline-none cursor-pointer"
                >
                  <option value="1-3" className="bg-himalaya-950 text-snow-100">1 to 3 Days (Weekend Escape)</option>
                  <option value="4-6" className="bg-himalaya-950 text-snow-100">4 to 6 Days (Signature Itinerary)</option>
                  <option value="7-9" className="bg-himalaya-950 text-snow-100">7 to 9 Days (Grand Circuit)</option>
                  <option value="10+" className="bg-himalaya-950 text-snow-100">10+ Days (Custom Expedition)</option>
                </select>
              </div>

              {/* Travel Style */}
              <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-himalaya-950/60 border border-slate-800/80 hover:border-gold-500/40 transition-colors">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>Expedition Style</span>
                </div>
                <div className="text-sm text-snow-100 font-medium truncate">
                  5-Star Stays & Private 4WD
                </div>
              </div>

              {/* Search Trigger */}
              <Link
                href={`/packages?region=${selectedDestination}`}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-semibold text-sm transition-all shadow-md shadow-gold-500/20 active:scale-95"
              >
                <span>Find Journeys</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Live Trust Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/60">
            <div className="text-center">
              <div className="text-2xl font-bold font-serif text-gold-300">8,586 M</div>
              <div className="text-xs text-slate-400 mt-0.5">Kanchenjunga Vista Access</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-serif text-gold-300">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">Custom Tailored Itineraries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-serif text-gold-300">24 / 7</div>
              <div className="text-xs text-slate-400 mt-0.5">Dedicated Mountain Concierge</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-serif text-gold-300">4.9 / 5.0</div>
              <div className="text-xs text-slate-400 mt-0.5">Verified Traveler Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
