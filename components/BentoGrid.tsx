'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Compass, Shield, Coffee, MapPin, ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  className?: string;
  badge: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
  linkText?: string;
  linkHref?: string;
  children?: React.ReactNode;
}

function BentoItem({
  className = '',
  badge,
  title,
  description,
  image,
  tag,
  linkText = 'Explore Region',
  linkHref = '/destinations',
  children,
}: BentoCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(prev => ({ ...prev, active: false }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl bg-himalaya-900/60 border border-slate-800 hover:border-gold-500/40 transition-all duration-500 flex flex-col justify-between ${className}`}
    >
      {/* Handcrafted Dynamic Radial Gold Spotlight Shader via Bounding Coordinates */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: mousePos.active
            ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.15), transparent 70%)`
            : 'none',
        }}
      />

      {/* Subtle border highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        style={{
          background: mousePos.active
            ? `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.3), transparent 60%)`
            : 'none',
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />

      {/* Optional Background Image */}
      {image && (
        <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950 via-himalaya-950/70 to-himalaya-950/30" />
        </div>
      )}

      {/* Card Content */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
        <div>
          {/* Badge & Tag */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/10 border border-gold-500/30 text-gold-300 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 text-gold-400" />
              {badge}
            </span>
            {tag && (
              <span className="text-xs text-slate-400 font-medium">
                {tag}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold font-serif text-snow-50 group-hover:text-gold-200 transition-colors leading-snug">
            {title}
          </h3>
          <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
            {description}
          </p>

          {children}
        </div>

        {/* Footer Link */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gold-400 group-hover:text-gold-300">
          <Link href={linkHref} className="inline-flex items-center gap-1.5 hover:underline">
            <span>{linkText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="py-24 bg-himalaya-950 text-snow-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Architected by Himalayan Insiders
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold font-serif text-snow-50">
            The Dimensions of Himalayan Luxury
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Beyond standard tourism: private tea estate heritage, alpine glacial lakes at 17,800 ft, and sovereign kingdoms experienced with unmatched comfort.
          </p>
        </div>

        {/* Asymmetrical 5-Cell Bento Composition with Viewport Adaptive Heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
          {/* Card 1: 2-Column Wide Heritage Tea Card */}
          <BentoItem
            className="md:col-span-2 row-span-1"
            badge="Heritage Planter Living"
            tag="Darjeeling & Kurseong"
            title="Private Tea Garden Bungalows & Century-Old Colonial Estates"
            description="Rest inside working tea estates with private verandas looking out towards Mount Kanchenjunga. Sip first-flush Muscatel tea curated by master blenders after exclusive sunrise walks."
            image="https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=1600&q=80"
            linkHref="/packages"
            linkText="View Darjeeling Itineraries"
          >
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 rounded-md bg-himalaya-950/80 border border-slate-700 text-slate-300">
                Makaibari & Glenburn Access
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-himalaya-950/80 border border-slate-700 text-slate-300">
                Colonial High-Tea Service
              </span>
              <span className="text-xs px-2.5 py-1 rounded-md bg-himalaya-950/80 border border-slate-700 text-slate-300">
                UNESCO Toy Train VIP Salon
              </span>
            </div>
          </BentoItem>

          {/* Card 2: Sikkim Alpine Lake (Vertical 1-column) */}
          <BentoItem
            className="md:col-span-1 row-span-1"
            badge="17,800 FT Expedition"
            tag="North Sikkim"
            title="Sacred Gurudongmar & Yumthang Alpine Valley"
            description="Witness the sacred emerald glacial waters of Gurudongmar Lake, surrounded by permanent Tibetan snow domes and wild blooming rhododendron valleys."
            image="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80"
            linkHref="/packages"
            linkText="North Sikkim Expeditions"
          />

          {/* Card 3: Kingdom of Bhutan Cultural Sanctuary */}
          <BentoItem
            className="md:col-span-1 row-span-1"
            badge="Thunder Dragon Kingdom"
            tag="Paro & Punakha"
            title="The Cliffside Tiger's Nest & Sovereign Dzongs"
            description="A journey into Gross National Happiness. Ancient monastic fortress walls, Himalayan hot-stone baths, and private licensed guides appointed by the kingdom."
            image="https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80"
            linkHref="/packages"
            linkText="Kingdom of Bhutan Tour"
          />

          {/* Card 4: 2-Column Wide Luxury 4WD Fleet & Mountain Concierge */}
          <BentoItem
            className="md:col-span-2 row-span-1"
            badge="Bespoke Transport & Safety"
            tag="Siliguri Dispatch HQ"
            title="Private Sanitized 4WD Fleet & Seamless Mountain Permits"
            description="Navigate winding Himalayan highways with veteran mountain pilots in customized Toyota Innova Crysta and Fortuner SUVs. We secure restricted area permits (Nathula, Gurudongmar, Bhutan Visas) before you even touch down."
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            linkHref="/contact"
            linkText="Consult With Our Concierge"
          >
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-himalaya-950/70 border border-slate-800 text-xs text-slate-300">
                ✓ 100% 4x4 / AWD Mountain Fleet
              </div>
              <div className="p-2 rounded-lg bg-himalaya-950/70 border border-slate-800 text-xs text-slate-300">
                ✓ Protected Area Permits Handled
              </div>
              <div className="p-2 rounded-lg bg-himalaya-950/70 border border-slate-800 text-xs text-slate-300">
                ✓ 24/7 Dedicated Radio / Mobile Desk
              </div>
            </div>
          </BentoItem>
        </div>
      </div>
    </section>
  );
}
