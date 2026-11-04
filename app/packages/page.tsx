'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PACKAGES, TourPackage, BUSINESS_INFO } from '@/lib/data';
import { formatPriceINR } from '@/lib/utils';
import { Clock, MapPin, CheckCircle2, ChevronDown, ChevronUp, PhoneCall, Sparkles, Shield, ArrowUpRight } from 'lucide-react';
import InquiryModal from '@/components/InquiryModal';

export default function PackagesPage() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Darjeeling' | 'Sikkim' | 'Bhutan' | 'Dooars'>('All');
  const [expandedItineraries, setExpandedItineraries] = useState<Record<string, boolean>>({
    'pkg-darjeeling-4n-5d': true, // Expanded by default
  });
  const [activePackageForInquiry, setActivePackageForInquiry] = useState<TourPackage | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const toggleItinerary = (id: string) => {
    setExpandedItineraries(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredPackages = selectedFilter === 'All'
    ? PACKAGES
    : PACKAGES.filter(p => p.region.toLowerCase() === selectedFilter.toLowerCase());

  const handleInquire = (pkg: TourPackage) => {
    setActivePackageForInquiry(pkg);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="bg-himalaya-950 text-snow-100 min-h-screen pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Private Expeditions & Stays
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold font-serif text-snow-50">
            Tour Packages & Itineraries
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            All circuits are private, fully customizable, and include sanitized 4WD vehicles, seasoned local mountain drivers, and luxury accommodation.
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

      {/* Package Detail List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredPackages.map((pkg) => {
          const isExpanded = !!expandedItineraries[pkg.id];
          const whatsappUrl = `https://wa.me/918001247778?text=${encodeURIComponent(
            `Hello My Travel Expert Concierge! I want to book/customize the ${pkg.title} (${pkg.duration}) starting at ${formatPriceINR(pkg.priceStarting)}.`
          )}`;

          return (
            <div
              key={pkg.id}
              id={pkg.slug}
              className="rounded-3xl bg-himalaya-900/60 border border-slate-800/90 overflow-hidden shadow-2xl transition-all"
            >
              {/* Top Banner Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 border-b border-slate-800">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden lg:col-span-5">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-himalaya-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gold-300 border border-gold-500/30">
                    {pkg.badge || pkg.region}
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gold-400" />
                        {pkg.destination}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        {pkg.duration}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-snow-50">
                      {pkg.title}
                    </h2>

                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {pkg.overview}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pkg.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action Desk */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        Starting Tariff Per Guest
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold font-serif text-gold-300">
                          {formatPriceINR(pkg.priceStarting)}
                        </span>
                        <span className="text-xs text-slate-400 font-sans">
                          (Inclusive of 4WD & Luxury Stay)
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-himalaya-950 hover:bg-himalaya-800 border border-gold-500/40 text-gold-300 font-semibold text-xs tracking-wider uppercase transition-colors"
                      >
                        <PhoneCall className="w-4 h-4 text-gold-400" />
                        <span>WhatsApp Quick Book</span>
                      </a>

                      <button
                        onClick={() => handleInquire(pkg)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-gold-500/20 active:scale-95"
                      >
                        <span>Customize Dates</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day-by-Day Detailed Itinerary Toggle */}
              <div className="p-6 sm:p-8 bg-himalaya-950/60">
                <button
                  onClick={() => toggleItinerary(pkg.id)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Day-by-Day Comprehensive Itinerary ({pkg.days} Days / {pkg.nights} Nights)</span>
                  </span>
                  {isExpanded ? (
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <span>Collapse</span>
                      <ChevronUp className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <span>Expand Day-by-Day</span>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  )}
                </button>

                {isExpanded && (
                  <div className="mt-6 space-y-6 pt-4 border-t border-slate-800/80">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {pkg.itinerary.map((day) => (
                        <div
                          key={day.day}
                          className="p-4 rounded-2xl bg-himalaya-900/60 border border-slate-800/80 space-y-1.5"
                        >
                          <div className="flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-wider">
                            <span className="px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                              Day {day.day}
                            </span>
                            <span className="text-snow-100 font-serif">{day.title}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed pl-1">
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Inclusions Box */}
                    <div className="mt-6 p-4 rounded-2xl bg-himalaya-900/80 border border-gold-500/20">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300 mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gold-400" />
                        <span>Included Luxury Inclusions & Ground Logistics</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {pkg.included.map((inc, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-2">
                            <span className="text-gold-400">✓</span>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        pkg={activePackageForInquiry}
      />
    </div>
  );
}
