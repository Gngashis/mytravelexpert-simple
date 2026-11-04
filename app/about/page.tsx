'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mountain, ShieldCheck, Award, Users, Compass, CheckCircle2, HeartHandshake, PhoneCall, ArrowUpRight } from 'lucide-react';
import { TRUST_PILLARS, BUSINESS_INFO } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="bg-himalaya-950 text-snow-100 min-h-screen pt-28 pb-20">
      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Rooted in the Eastern Himalayas
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold font-serif text-snow-50">
            The Story of My Travel Expert
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Headquartered in Siliguri — the strategic gateway where the plains meet Darjeeling, Sikkim, and Bhutan — we were founded on a singular conviction: the Eastern Himalayas should be experienced with reverence, local intimacy, and bespoke luxury.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-96 sm:h-[480px] rounded-3xl overflow-hidden border border-gold-500/20 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85"
              alt="Himalayan mountain peaks"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-himalaya-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-himalaya-950/90 backdrop-blur-md border border-gold-500/30">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Native Heritage
              </span>
              <h3 className="text-lg font-serif font-bold text-snow-50 mt-1">
                Siliguri HQ • The Himalayan Crossroads
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Zero middle-men. Every driver, hotel manager, and forest officer is our direct personal relationship.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Our Mountain Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-snow-50 mt-2 leading-tight">
                Why Generic Tourism Fails in the High Himalayas
              </h2>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Standard commercial travel agencies treat Darjeeling, Sikkim, and Bhutan as checkboxes on a map. But the high Himalayas are alive: sudden mountain fog on Tiger Hill, shifting permit regulations at Nathula Pass, high-altitude acclimatization on the road to Gurudongmar (17,800 ft), and sacred cultural protocol in Bhutanese dzongs.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              At My Travel Expert, every journey is planned by native sons and daughters of these hills. We know which tea estate verandas catch the first pink dawn off Kanchenjunga; we know the monk elders who permit quiet meditation inside century-old monastery chambers; and we operate our own fleet of sanitized 4WD vehicles with veteran mountain pilots.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div>
                <div className="text-3xl font-serif font-bold text-gold-300">10+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years of Mountain Operations</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-gold-300">5,000+</div>
                <div className="text-xs text-slate-400 mt-0.5">Discerning Travelers Guided</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-gold-300">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Native Mountain Pilots</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-gold-300">24/7</div>
                <div className="text-xs text-slate-400 mt-0.5">Active Ground Dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars Grid */}
      <section className="bg-himalaya-900/40 py-20 border-y border-slate-800/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              The Four Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-snow-50 mt-2">
              Our Uncompromising Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-himalaya-950/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-snow-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Pledge */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-3xl bg-himalaya-900/60 border border-gold-500/30 p-8 sm:p-14">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Ecology & Cultural Conservation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-snow-50 mt-2 leading-tight">
              Our Himalayan Stewardship Pledge
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              We operate strictly in alignment with Sikkim's 100% organic regulations and Bhutan's High Value, Low Impact philosophy. We strictly ban single-use plastics on all our high-altitude expeditions, hire exclusively licensed local Sherpa and Sikkimese guides, and channel booking proceeds directly into remote monastic preservation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Zero Single-Use Plastic Policy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Fair-Wage Mountain Guides</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Monastery Conservation Fund</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-3xl bg-gradient-to-br from-himalaya-900 to-himalaya-950 border border-gold-500/30">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-snow-50">
            Ready to Design Your Bespoke Himalayan Itinerary?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto">
            Our senior mountain trip planner is available right now for direct consultations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-gold-500/20"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direct WhatsApp Chat</span>
            </a>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-himalaya-950 hover:bg-himalaya-900 border border-slate-700 text-snow-100 font-semibold text-xs uppercase tracking-wider transition-all"
            >
              <span>Explore Tour Packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
