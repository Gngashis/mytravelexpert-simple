'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero3D from '@/components/Hero3D';
import AltitudeTicker from '@/components/AltitudeTicker';
import BentoGrid from '@/components/BentoGrid';
import PackageCard from '@/components/PackageCard';
import InquiryModal from '@/components/InquiryModal';
import { PACKAGES, TRUST_PILLARS, DESTINATIONS, BUSINESS_INFO, TourPackage } from '@/lib/data';
import { ArrowUpRight, Mountain, ShieldCheck, Award, Users, Star, Quote, PhoneCall } from 'lucide-react';

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activePackageForInquiry, setActivePackageForInquiry] = useState<TourPackage | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const filteredPackages = selectedRegion === 'All'
    ? PACKAGES
    : PACKAGES.filter(p => p.region.toLowerCase() === selectedRegion.toLowerCase());

  const handleInquire = (pkg: TourPackage) => {
    setActivePackageForInquiry(pkg);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="bg-himalaya-950 text-snow-100">
      {/* Bespoke 3D Hero Perspective Component */}
      <Hero3D />

      {/* Altitude & Mountain Marquee Ticker */}
      <AltitudeTicker />

      {/* Custom Handcrafted Bento Grid Architecture */}
      <BentoGrid />

      {/* Featured Signature Tour Packages Section */}
      <section className="py-24 bg-himalaya-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Curated Himalayan Circuits
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-serif text-snow-50">
                Signature Expeditions
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
                Every circuit includes luxury 4WD transport, 5-star or heritage boutique stays, private guides, and seamless permits.
              </p>
            </div>

            {/* Region Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-himalaya-950 border border-slate-800">
              {['All', 'Darjeeling', 'Sikkim', 'Bhutan', 'Dooars'].map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                    selectedRegion === region
                      ? 'bg-gold-500 text-himalaya-950 shadow-md shadow-gold-500/20'
                      : 'text-slate-400 hover:text-snow-100'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onInquire={handleInquire}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-14 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-himalaya-900 hover:bg-himalaya-800 border border-gold-500/30 text-gold-300 font-semibold text-xs uppercase tracking-widest transition-all hover:border-gold-400"
            >
              <span>Explore Complete Tour Catalog</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Pillars & The Native Masters Section */}
      <section className="py-24 bg-himalaya-950 relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                The My Travel Expert Guarantee
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-serif text-snow-50 leading-tight">
                Why Discerning Travelers Choose Us
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                The Eastern Himalayas are unforgiving to generic tour operators. High-altitude mountain passes, changing permit rules, and fragile ecosystems demand genuine local mastery.
              </p>

              <div className="mt-8 space-y-6">
                {TRUST_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-himalaya-900/40 border border-slate-800/80">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-serif text-snow-50">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Mosaic of Luxury Mountain Stays */}
            <div className="relative">
              <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85"
                  alt="Luxury Himalayan Resort Chalet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-himalaya-950/85 backdrop-blur-xl border border-gold-500/30">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    <span>The Glenburn & Mayfair Experience</span>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-snow-50">
                    Heritage Luxury In Every Mountain View
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Wake up to private balcony vistas of Mount Kanchenjunga with wood-fired hearths and organic farm-to-table dining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Endorsements & Authentic Reviews */}
      <section className="py-24 bg-himalaya-900/60 relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Traveler Memoirs
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-serif text-snow-50">
              Words From Our Honored Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-himalaya-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "The North Sikkim trip to Gurudongmar was flawless. My Travel Expert arranged our 4x4 Innova Crysta, inner line permits, and oxygen backups seamlessly. Seeing the lake at 17,800 ft without any logistics stress was truly life-changing."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-snow-50">Dr. Rajeshwari Sengupta</div>
                  <div className="text-xs text-gold-400">Sikkim Alpine Odyssey</div>
                </div>
                <div className="flex text-gold-400 text-xs">★★★★★</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-himalaya-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "Our Darjeeling tea estate stay exceeded every expectation. The private dawn excursion to Tiger Hill had zero waiting time, and high-tea on the veranda with Kanchenjunga in the background is etched in our memory forever."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-snow-50">Alistair & Maya Wright</div>
                  <div className="text-xs text-gold-400">Darjeeling Heritage Circuit</div>
                </div>
                <div className="flex text-gold-400 text-xs">★★★★★</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-himalaya-950/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "Traveling to Bhutan with My Travel Expert was effortless. Their native guide handled all immigration and museum checkpoints with royal courtesy. The hike up to Tiger's Nest was paced perfectly."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-snow-50">Vikram Malhotra</div>
                  <div className="text-xs text-gold-400">Bhutan Thunder Dragon Tour</div>
                </div>
                <div className="flex text-gold-400 text-xs">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dramatic Final Call to Action */}
      <section className="py-24 relative overflow-hidden bg-himalaya-950 text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
            alt="Pristine mountain pass"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950 via-himalaya-950/80 to-himalaya-950/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Commence Your Journey
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-serif text-snow-50 leading-tight">
            The Mountains Are Calling Your Name
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak directly with our native Siliguri mountain concierge desk. We craft custom itineraries within 24 hours tailored to your dates, preferences, and luxury standards.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-gold-500/25 active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Connect on WhatsApp (+91 80012 47778)</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-himalaya-900 hover:bg-himalaya-800 border border-gold-500/30 text-snow-100 font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Submit Custom Itinerary Request</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        pkg={activePackageForInquiry}
      />
    </div>
  );
}
