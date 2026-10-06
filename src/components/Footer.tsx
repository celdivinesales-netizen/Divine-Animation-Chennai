import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Sparkles, Clock, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#05070D] text-slate-400 text-xs pb-20 sm:pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-display font-bold tracking-wider text-white text-base">
                DIVINE ANIMATION CHENNAI
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Your trusted partner for professional AI promotional videos, modern business websites, free Meta Ads assistance, and doorstep computer sales & repairs across Chennai.
            </p>

            <div className="pt-1 space-y-2">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 text-white hover:text-cyan-400 font-semibold"
              >
                <Phone className="h-3.5 w-3.5 text-cyan-400" />
                <span>Call: {CONTACT_INFO.displayPhone}</span>
              </a>

              <a
                href={createWhatsAppUrl('Hello Divine Animation Chennai! I have an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 font-semibold"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp: {CONTACT_INFO.displayPhone}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#ai-videos" className="hover:text-white transition-colors">
                  AI Video with Presenter (₹1,700)
                </a>
              </li>
              <li>
                <a href="#ai-videos" className="hover:text-white transition-colors">
                  AI Video without Model (₹900)
                </a>
              </li>
              <li>
                <a href="#ai-videos" className="hover:text-white transition-colors">
                  Monthly 8 Videos Pack (₹10,000)
                </a>
              </li>
              <li>
                <a href="#websites" className="hover:text-white transition-colors">
                  Website Creation (Starts @ ₹1,200)
                </a>
              </li>
              <li>
                <a href="#meta-ads" className="hover:text-white transition-colors">
                  FREE Meta Ads Setup Assistance
                </a>
              </li>
              <li>
                <a href="#computer-services" className="hover:text-white transition-colors">
                  Computer Sales & Desktop/Laptop Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Chennai Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Chennai Service Hub
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
              <span>Doorstep Visits & On-Site Support across Greater Chennai</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.hours}</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Covering Anna Nagar, T. Nagar, Velachery, Tambaram, OMR, Porur, Guindy, Ambattur, Vadapalani, Kilpauk, and neighboring regions.
            </p>
          </div>

          {/* Direct CTA (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Fast Booking
            </h4>
            <p className="text-slate-400 leading-snug">
              Get an instant quotation or book technician on WhatsApp.
            </p>
            <a
              href={createWhatsAppUrl('Hello! I would like to book a service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} DIVINE ANIMATION CHENNAI. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Phone: 9092558217</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
