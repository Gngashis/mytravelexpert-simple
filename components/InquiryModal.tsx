'use client';

import React, { useState } from 'react';
import { X, Send, PhoneCall, Calendar, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { TourPackage, BUSINESS_INFO } from '@/lib/data';

interface InquiryModalProps {
  pkg?: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ pkg, isOpen, onClose }: InquiryModalProps) {
  const [guestCount, setGuestCount] = useState('2');
  const [preferredMonth, setPreferredMonth] = useState('Next Month');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const targetPkgTitle = pkg ? pkg.title : 'Bespoke Custom Himalayan Journey';

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello My Travel Expert Concierge!%0A%0AI want to book / inquire about:%0A- Package: ${encodeURIComponent(
      targetPkgTitle
    )}%0A- Guests: ${guestCount}%0A- Timing: ${encodeURIComponent(
      preferredMonth
    )}%0A- Special requests: ${encodeURIComponent(notes || 'None')}%0A%0APlease connect with bespoke itinerary details.`;

    window.open(`https://wa.me/918001247778?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-3xl bg-himalaya-900 border border-gold-500/30 p-6 sm:p-8 text-snow-100 shadow-2xl shadow-black">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-himalaya-950 text-slate-400 hover:text-snow-100 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-snow-50">
              Inquiry Dispatched to Concierge
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Our native mountain specialist in Siliguri has received your preferences and will connect via WhatsApp / Call.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gold-500 text-himalaya-950 font-semibold text-xs uppercase tracking-wider"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest">
                Priority Mountain Booking
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-snow-50 mt-1">
                {targetPkgTitle}
              </h3>
              {pkg && (
                <p className="text-xs text-slate-300 mt-1">
                  {pkg.destination} • {pkg.duration}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>Guests</span>
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-himalaya-950 border border-slate-800 text-snow-100 text-xs focus:border-gold-500 outline-none"
                >
                  <option value="1">1 Solo Traveler</option>
                  <option value="2">2 Guests (Couple / Friends)</option>
                  <option value="3-4">3 - 4 Guests (Family)</option>
                  <option value="5+">5+ Guests (Private Group)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Month</span>
                </label>
                <select
                  value={preferredMonth}
                  onChange={(e) => setPreferredMonth(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-himalaya-950 border border-slate-800 text-snow-100 text-xs focus:border-gold-500 outline-none"
                >
                  <option value="November 2026">November 2026</option>
                  <option value="December 2026">December 2026 (Winter Peak)</option>
                  <option value="January 2027">January 2027 (Snow Season)</option>
                  <option value="March 2027">March 2027 (Spring Bloom)</option>
                  <option value="April - May 2027">April - May 2027 (Rhododendron Peak)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">
                Special Customizations (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g., Private Toy Train ride, heated mountain villa preference, photography permits..."
                className="w-full px-3 py-2 rounded-xl bg-himalaya-950 border border-slate-800 text-snow-100 placeholder-slate-600 text-xs focus:border-gold-500 outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-himalaya-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Dispatch to WhatsApp Concierge</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Direct hotline: +91 80012 47778 • Zero obligation consultation
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
