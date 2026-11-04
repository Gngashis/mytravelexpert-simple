'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DESTINATIONS, PACKAGES } from '@/lib/data';
import { MapPin, Compass, ArrowUpRight, Mountain, CheckCircle2, Calendar } from 'lucide-react';

export default function DestinationsPage() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Darjeeling' | 'Sikkim' | 'Bhutan' | 'Dooars'>('All');

  const filteredDestinations = selectedFilter === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.region === selectedFilter);

  return (
    <div className="bg-himalaya-950 text-snow-100 min-h-screen pt-28 pb-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Sacred Geography & Alpine Elevations
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold font-serif text-snow-50">
            Himalayan Destinations
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            From the colonial misty ridges of Darjeeling to the pristine glacial lakes of North Sikkim and the mythical dzongs of Bhutan.
          </p>

          {/* Region Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-himalaya-900/60 border border-slate-800 max-w-md mx-auto">
            {['All', 'Darjeeling', 'Sikkim', 'Bhutan', 'Dooars'].map((region) => (
              <button
                key={region}
                onClick={() => setSelectedFilter(region as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                  selectedFilter === region
                    ? 'bg-gold-500 text-himalaya-950 shadow-md shadow-gold-500/20'
                    : 'text-slate-400 hover:text-snow-100'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Showcase List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredDestinations.map((dest, idx) => {
          const matchingPackages = PACKAGES.filter(p => p.region.toLowerCase() === dest.region.toLowerCase());
          const isEven = idx % 2 === 0;

          return (
            <div
              key={dest.id}
              id={dest.slug}
              className={`rounded-3xl bg-himalaya-900/50 border border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                isEven ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Image Side */}
              <div className={`relative h-80 sm:h-96 rounded-2xl overflow-hidden lg:col-span-6 ${
                isEven ? '' : 'lg:col-start-7'
              }`}>
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950/80 via-transparent to-transparent" />

                {/* Altitude Pill */}
                <div className="absolute top-4 left-4 bg-himalaya-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-gold-500/30 text-gold-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <Mountain className="w-3.5 h-3.5 text-gold-400" />
                  <span>{dest.altitude}</span>
                </div>
              </div>

              {/* Text Side */}
              <div className={`lg:col-span-6 space-y-5 ${
                isEven ? '' : 'lg:col-start-1'
              }`}>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{dest.region} Province</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-snow-50 mt-1">
                    {dest.name}
                  </h2>
                  <p className="text-sm font-medium text-gold-300/90 italic mt-0.5">
                    "{dest.tagline}"
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {dest.description}
                </p>

                {/* Best Season */}
                <div className="flex items-center gap-2 text-xs text-slate-300 bg-himalaya-950/60 p-3 rounded-xl border border-slate-800">
                  <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
                  <span><strong>Optimal Season:</strong> {dest.bestTime}</span>
                </div>

                {/* Key Attractions */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Sacred Landmarks & Experiences
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dest.keyAttractions.map((attr, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1 rounded-lg bg-himalaya-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-gold-400" />
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link to Related Tour Packages */}
                <div className="pt-2">
                  <Link
                    href={`/packages?region=${dest.region.toLowerCase()}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-gold-500/20"
                  >
                    <span>View {dest.name} Tour Packages</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
