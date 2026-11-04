'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mountain, Mail, Phone, MapPin, Send, ArrowUpRight, ShieldCheck, HeartHandshake, Compass, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO, DESTINATIONS } from '@/lib/data';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-himalaya-950 text-snow-100 pt-20 pb-12 overflow-hidden border-t border-gold-500/20">
      {/* High-Elevation Radial Atmospheric Light Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Glass Card: Newsletter & Bespoke Dispatch */}
        <div className="rounded-3xl bg-himalaya-900/80 border border-gold-500/30 p-8 sm:p-12 mb-16 backdrop-blur-xl shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Compass className="w-3.5 h-3.5 text-gold-400" />
                <span>The Himalayan Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-snow-50 leading-tight">
                Receive Secret Mountain Trails & Seasonal Curations
              </h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                Be the first to learn when North Sikkim permits unlock for the season and receive private invitation access to heritage tea tastings.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your private email address"
                className="flex-1 px-5 py-4 rounded-xl bg-himalaya-950/80 border border-slate-700 focus:border-gold-400 text-snow-100 placeholder-slate-500 text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2 shrink-0"
              >
                {subscribed ? (
                  <span>Subscribed ✓</span>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 4-Column Grid: Heritage, Destinations, Packages, Concierge */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center">
                <Mountain className="w-4 h-4 text-himalaya-950" />
              </div>
              <span className="font-serif font-bold text-lg tracking-wider text-snow-50">
                MY TRAVEL EXPERT
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rooted in Siliguri at the foothills of Mount Kanchenjunga. We curate elite, responsible, private Himalayan journeys with native insiders.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-himalaya-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-himalaya-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-300 hover:border-gold-500/40 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Featured Regions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Sacred Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/destinations#${dest.slug}`}
                    className="hover:text-gold-300 hover:underline flex items-center justify-between"
                  >
                    <span>{dest.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{dest.altitude}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Signature Itineraries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Curated Circuits
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/packages#darjeeling-heritage-tea-mist" className="hover:text-gold-300 hover:underline">
                  Darjeeling Tea Mist (4N/5D)
                </Link>
              </li>
              <li>
                <Link href="/packages#sikkim-alpine-odyssey" className="hover:text-gold-300 hover:underline">
                  Sikkim Gurudongmar & Yumthang (6N/7D)
                </Link>
              </li>
              <li>
                <Link href="/packages#bhutan-thunder-dragon-odyssey" className="hover:text-gold-300 hover:underline">
                  Kingdom of Bhutan Odyssey (5N/6D)
                </Link>
              </li>
              <li>
                <Link href="/packages#dooars-wilderness-tea-trail" className="hover:text-gold-300 hover:underline">
                  Dooars Wilderness Safari (3N/4D)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-300 hover:underline text-gold-400 font-semibold">
                  Custom Tailored Expeditions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Mountain Desk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">
              Concierge HQ
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-gold-300">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold-300">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded-md bg-himalaya-900 border border-slate-700 text-[11px] text-emerald-400 font-medium">
                  ● 24/7 Mountain Dispatch Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Crafted with Himalayan passion.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300">About Heritage</Link>
            <Link href="/packages" className="hover:text-slate-300">Tour Catalog</Link>
            <Link href="/contact" className="hover:text-slate-300">Concierge Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
