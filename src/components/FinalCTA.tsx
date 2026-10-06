import React from 'react';
import { MessageCircle, Phone, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#0D1326] to-[#070913] border-t border-slate-800/80">
      {/* Background ambient halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold text-cyan-300">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>Get Started Today in Chennai</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display text-balance leading-tight">
          Ready to Grow Your Business with AI & Digital Solutions?
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From AI promotional videos and affordable websites to Meta Ads assistance and computer repair services, Divine Animation Chennai is here to help.
        </p>

        {/* Highly Visible Phone Number Block */}
        <div className="py-2">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-4 rounded-2xl border border-indigo-500/40 bg-indigo-950/40 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-semibold text-slate-300">
              Direct Business Helpline:
            </span>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-white font-display tracking-wider hover:opacity-90"
            >
              Call / WhatsApp: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Dual Primary Action Buttons: WhatsApp Us | Call Now */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={createWhatsAppUrl('Hello Divine Animation Chennai! I am ready to get started with your digital and computer services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-900/40 transition-all active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-8 py-4 text-sm sm:text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            <Phone className="h-5 w-5 text-cyan-400" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Trust details */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Fast Turnaround</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Transparent Pricing</span>
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>Doorstep Service across Chennai</span>
          </span>
        </div>

      </div>
    </section>
  );
};
