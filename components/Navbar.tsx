'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mountain, Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Tour Packages', href: '/packages' },
  { name: 'About Heritage', href: '/about' },
  { name: 'Contact Desk', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-himalaya-950/85 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
              <Mountain className="w-5 h-5 text-himalaya-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-snow-50 group-hover:text-gold-300 transition-colors">
                MY TRAVEL EXPERT
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold-400 font-sans -mt-1 font-semibold">
                Himalayan Luxury Journeys
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-himalaya-900/60 border border-slate-800/80 px-4 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-300 border border-gold-500/40'
                      : 'text-slate-300 hover:text-snow-50 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Desk: Direct Call & WhatsApp */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-gold-300 transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-himalaya-950 font-semibold text-xs tracking-wider uppercase shadow-md shadow-gold-500/20 hover:from-gold-400 hover:to-amber-500 transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Plan Trip</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-himalaya-900/80 border border-slate-800 text-slate-300 hover:text-snow-50"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-himalaya-950/95 backdrop-blur-2xl border-b border-gold-500/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wide ${
                  pathname === link.href
                    ? 'bg-gold-500/15 text-gold-300 border border-gold-500/30'
                    : 'text-slate-300 hover:text-snow-50 hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-3 text-sm text-slate-300 px-4 py-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gold-500 text-himalaya-950 font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
