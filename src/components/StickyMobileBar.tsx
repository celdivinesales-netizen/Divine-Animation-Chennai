import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

interface StickyMobileBarProps {
  onOpenBookingModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden border-t border-slate-800 bg-[#070A14]/95 backdrop-blur-md px-3 py-2 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-lg border border-slate-700 bg-slate-900/90 text-white font-semibold text-xs active:bg-slate-800"
        >
          <Phone className="h-3.5 w-3.5 text-cyan-400" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={createWhatsAppUrl('Hello Divine Animation Chennai! I want to inquire about your services.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 h-10 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-950/40 active:bg-emerald-500"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Booking Button */}
        <button
          onClick={onOpenBookingModal}
          className="flex items-center justify-center h-10 px-3 rounded-lg bg-indigo-600 text-white text-xs font-semibold active:bg-indigo-500"
          aria-label="Quick inquiry modal"
        >
          <Sparkles className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
