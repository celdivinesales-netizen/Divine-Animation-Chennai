import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'AI Videos', href: '#ai-videos' },
    { label: 'Websites', href: '#websites' },
    { label: 'Meta Ads', href: '#meta-ads' },
    { label: 'Computer Repair', href: '#computer-services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Us', href: '#why-us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080B12]/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 text-base font-bold tracking-tight text-white transition-opacity hover:opacity-90 sm:text-lg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/20">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            DIVINE ANIMATION CHENNAI
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/60 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-cyan-400" />
            <span>9092558217</span>
          </a>

          <a
            href={createWhatsAppUrl('Hello Divine Animation Chennai! I would like to inquire about your services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-900/30 transition-all hover:bg-emerald-500 whitespace-nowrap"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/90 text-cyan-400"
            aria-label="Call 9092558217"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0A0E1A]/95 backdrop-blur-xl px-4 py-5 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 py-2.5 text-xs font-semibold text-slate-100 hover:bg-slate-800"
            >
              <Phone className="h-3.5 w-3.5 text-cyan-400" />
              <span>Call: 9092558217</span>
            </a>
            <a
              href={createWhatsAppUrl('Hello Divine Animation Chennai! I would like to inquire about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-xs font-semibold text-white hover:bg-emerald-500"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
