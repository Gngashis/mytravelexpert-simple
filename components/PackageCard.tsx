'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TourPackage } from '@/lib/data';
import { formatPriceINR } from '@/lib/utils';
import { Calendar, Clock, MapPin, CheckCircle2, ArrowUpRight, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface PackageCardProps {
  pkg: TourPackage;
  onInquire?: (pkg: TourPackage) => void;
}

export default function PackageCard({ pkg, onInquire }: PackageCardProps) {
  const whatsappUrl = `https://wa.me/918001247778?text=${encodeURIComponent(
    `Hello My Travel Expert, I would like to inquire about the ${pkg.title} (${pkg.duration}) starting at ${formatPriceINR(pkg.priceStarting)}.`
  )}`;

  return (
    <div className="group relative rounded-3xl bg-himalaya-900/70 border border-slate-800/80 hover:border-gold-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl shadow-black/40 hover:-translate-y-1">
      {/* Top Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950 via-himalaya-950/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-himalaya-950/80 border border-gold-500/40 text-gold-300 backdrop-blur-md">
            {pkg.badge || pkg.region}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-himalaya-900/90 text-snow-100 border border-slate-700 backdrop-blur-md flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            {pkg.duration}
          </span>
        </div>

        {/* Location Tag */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>{pkg.destination}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold font-serif text-snow-50 group-hover:text-gold-200 transition-colors leading-snug">
            {pkg.title}
          </h3>

          <p className="mt-3 text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {pkg.overview}
          </p>

          {/* Highlights checklist */}
          <div className="mt-4 space-y-2">
            {pkg.highlights.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Booking Actions */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
              Bespoke Tariff From
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-serif text-gold-300">
                {formatPriceINR(pkg.priceStarting)}
              </span>
              <span className="text-xs text-slate-400">/ guest</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-himalaya-950 hover:bg-himalaya-800 border border-gold-500/30 text-gold-400 hover:text-gold-300 transition-colors"
              title="Quick WhatsApp Booking"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <Link
              href={`/packages#${pkg.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-semibold text-xs transition-all shadow-md shadow-gold-500/20 active:scale-95"
            >
              <span>Itinerary</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
