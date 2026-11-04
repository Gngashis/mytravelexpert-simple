'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck, Compass, HelpCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    region: 'Darjeeling & Sikkim',
    duration: '4-6 Days',
    month: 'November 2026',
    guestCount: '2 Guests',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello My Travel Expert!%0A%0A*New Custom Expedition Inquiry:*%0A- Name: ${encodeURIComponent(
      formData.fullName
    )}%0A- Phone: ${encodeURIComponent(
      formData.phone
    )}%0A- Email: ${encodeURIComponent(
      formData.email
    )}%0A- Target Region: ${encodeURIComponent(
      formData.region
    )}%0A- Duration: ${encodeURIComponent(
      formData.duration
    )}%0A- Preferred Month: ${encodeURIComponent(
      formData.month
    )}%0A- Guests: ${encodeURIComponent(
      formData.guestCount
    )}%0A- Notes: ${encodeURIComponent(
      formData.notes || 'None'
    )}`;

    window.open(`https://wa.me/918001247778?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-himalaya-950 text-snow-100 min-h-screen pt-28 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Dedicated Ground Liaison
          </span>
          <h1 className="mt-3 text-4xl sm:text-6xl font-bold font-serif text-snow-50">
            Concierge & Custom Booking
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-sans">
            Directly connect with our native mountain trip planners at our Siliguri headquarters. We craft private itineraries and facilitate all restricted area clearances within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Coordinates & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-himalaya-900/60 border border-gold-500/30 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Siliguri Command Office
              </span>
              <h2 className="text-2xl font-serif font-bold text-snow-50">
                My Travel Expert Headquarters
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Located right at the confluence of the Darjeeling Hills, Sikkim borders, and Bhutan gateways. All mountain convoys and dispatch drivers depart from here.
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-snow-100 block text-xs uppercase tracking-wider text-slate-400">Office Location</strong>
                    <span className="text-slate-300 text-xs">{BUSINESS_INFO.officeAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <strong className="text-snow-100 block text-xs uppercase tracking-wider text-slate-400">Direct Telephone Desk</strong>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-gold-300 hover:underline text-xs font-semibold">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <strong className="text-snow-100 block text-xs uppercase tracking-wider text-slate-400">Electronic Mail</strong>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-gold-300 text-xs">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <strong className="text-snow-100 block text-xs uppercase tracking-wider text-slate-400">Operations Window</strong>
                    <span className="text-xs text-slate-300">24/7 Mountain Dispatch & Emergency Helpline</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-4">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-gold-500/20 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat (+91 80012 47778)</span>
                </a>
              </div>
            </div>

            {/* Safety & Permit Assurance */}
            <div className="p-6 rounded-3xl bg-himalaya-900/40 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Logistics Stress</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need Nathula Pass Indo-China military clearance, Gurudongmar Lake permits, or Bhutan Sustainable Development Fee (SDF) registration, our desk processes all paperwork seamlessly in advance.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Bespoke Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-himalaya-900/60 border border-slate-800 shadow-2xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Tailor-Made Expedition Builder
                </span>
                <h3 className="text-2xl font-serif font-bold text-snow-50 mt-1">
                  Design Your Private Himalayan Circuit
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Submit your travel criteria below. Our senior mountain planner will review vehicle availability and respond with a customized quotation.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-snow-50">
                    Your Expedition Request Has Been Dispatched
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    We have launched your customized details directly into our WhatsApp dispatch desk. You can also reach us immediately at {BUSINESS_INFO.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-himalaya-950 border border-gold-500/40 text-gold-300 text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="E.g. Siddharth Sen"
                        className="w-full px-4 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">WhatsApp / Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="siddharth@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Target Region *</label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors cursor-pointer"
                      >
                        <option value="Darjeeling Tea Estates">Darjeeling Tea Heritage & Kurseong</option>
                        <option value="Sikkim Alpine Lake">North Sikkim (Gurudongmar, Yumthang & Lachen)</option>
                        <option value="Kingdom of Bhutan">Kingdom of Bhutan (Thimphu, Paro & Punakha)</option>
                        <option value="Grand Himalayan Circuit">Grand Circuit (Darjeeling + Sikkim Combined)</option>
                        <option value="Dooars Wildlife Safari">Dooars Rhino Wilderness & Tea Foothills</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Duration</label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors cursor-pointer"
                      >
                        <option value="3 Nights / 4 Days">3 Nights / 4 Days</option>
                        <option value="4 Nights / 5 Days">4 Nights / 5 Days</option>
                        <option value="6 Nights / 7 Days">6 Nights / 7 Days</option>
                        <option value="8+ Nights Custom">8+ Nights Custom</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Preferred Month</label>
                      <select
                        value={formData.month}
                        onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors cursor-pointer"
                      >
                        <option value="November 2026">November 2026</option>
                        <option value="December 2026">December 2026 (Winter Peak)</option>
                        <option value="January 2027">January 2027 (Snow Season)</option>
                        <option value="March 2027">March 2027 (Spring Bloom)</option>
                        <option value="April - May 2027">April - May 2027 (Rhododendron)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Party Size</label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 text-xs outline-none transition-colors cursor-pointer"
                      >
                        <option value="Solo Traveler">1 Solo Traveler</option>
                        <option value="2 Guests">2 Guests (Couple / Friends)</option>
                        <option value="3-4 Guests">3 - 4 Guests (Family)</option>
                        <option value="5+ Guests">5+ Guests (Private Group)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">
                      Bespoke Requests & Special Interests
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="E.g., Private Toy Train tickets, high-tea at Glenburn, heritage hotel preferences, elderly traveler assistance..."
                      className="w-full px-4 py-3 rounded-xl bg-himalaya-950 border border-slate-800 focus:border-gold-500 text-snow-100 placeholder-slate-600 text-xs outline-none resize-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Request to Concierge Desk</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Immediate response via WhatsApp or phone. Zero booking obligation.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-slate-900 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Clarity & Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-snow-50 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-himalaya-900/40 border border-slate-800">
              <h4 className="text-sm font-bold text-snow-50 font-serif">
                How do we reach Darjeeling and Sikkim?
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                The gateway is Bagdogra Airport (IXB) or New Jalpaiguri Railway Station (NJP) near Siliguri. Our private chauffeur greets you with your vehicle directly outside the arrival gate and escorts you up the scenic mountain highway.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-himalaya-900/40 border border-slate-800">
              <h4 className="text-sm font-bold text-snow-50 font-serif">
                How are Inner Line Permits (ILP) and Nathula clearances handled?
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                You simply share your identification documents (Passport / Voter ID / Aadhaar) with our desk digitally before travel. We pre-clear all army and forest permits so your vehicle passes checkpoints without delays.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-himalaya-900/40 border border-slate-800">
              <h4 className="text-sm font-bold text-snow-50 font-serif">
                What vehicles do you use for high-altitude mountain terrain?
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                We operate strictly luxury high-clearance 4WD vehicles (Toyota Innova Crysta and Fortuner) equipped with heating, sanitized interiors, emergency medical kits, and certified veteran mountain pilots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
