import React, { useState } from 'react';
import { 
  Wrench, 
  Monitor, 
  Laptop, 
  HardDrive, 
  Home, 
  Building2, 
  Check, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { COMPUTER_SERVICES, CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

interface ComputerServiceProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ComputerServiceSection: React.FC<ComputerServiceProps> = ({ onOpenBookingModal }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(COMPUTER_SERVICES[0].id);

  const keyHighlights = [
    { title: 'Computer Sales', desc: 'New branded PCs & certified refurbished laptops with warranty', icon: Monitor },
    { title: 'Desktop Repair', desc: 'Motherboard fix, SMPS, RAM, GPU & power troubleshooting', icon: Cpu },
    { title: 'Laptop Repair', desc: 'Broken screen, battery replacement, hinge fix, keyboard replacement', icon: Laptop },
    { title: 'Software Support', desc: 'Windows 10/11 installation, virus removal, driver updates & MS Office', icon: HardDrive },
    { title: 'Hardware Troubleshooting', desc: 'Overheating fan service, SSD speed upgrade & data recovery', icon: Wrench },
    { title: 'Home & Office Visits', desc: 'Certified technician reaches your doorstep anywhere in Chennai', icon: Home },
  ];

  return (
    <section id="computer-services" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#080B13] relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Wrench className="h-3.5 w-3.5 text-emerald-400" />
            <span>Computer Sales & Technical Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Computer Sales & Repair Services in Chennai
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We provide computer sales, repair and technical support for homes and offices.
          </p>
        </div>

        {/* Highlight Banner: Home & Office Visits */}
        <div className="mt-10 rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 p-6 sm:p-8 backdrop-blur shadow-xl shadow-emerald-950/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Doorstep Service across Chennai</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Home & Office Computer Repair Visits Available Around Chennai
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                No need to disconnect heavy cables or travel in Chennai traffic. Our expert computer hardware engineer visits your home, retail store, school, or corporate office for fast, transparent diagnosis and repairs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenBookingModal('Doorstep Computer Repair Visit')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition-all active:scale-[0.98]"
              >
                <Zap className="h-4 w-4" />
                <span>Book a Service</span>
              </button>
              
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500/50 bg-emerald-950/50 hover:bg-emerald-900/60 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>Call: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Chennai Coverage Area Pills */}
          <div className="mt-6 pt-5 border-t border-emerald-800/40">
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
              <span className="font-semibold text-emerald-300">Popular Service Localities:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CONTACT_INFO.coverageAreas.map((area, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-800 flex items-center gap-1"
                >
                  <MapPin className="h-2.5 w-2.5 text-cyan-400" />
                  {area}
                </span>
              ))}
              <span className="rounded-lg bg-emerald-950/60 px-2.5 py-1 text-[11px] font-medium text-emerald-300 border border-emerald-800/60">
                + All other Chennai areas
              </span>
            </div>
          </div>
        </div>

        {/* 6 Key Highlights Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyHighlights.map((hl, index) => {
            const Icon = hl.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-[#0A0F1D]/80 p-6 backdrop-blur hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {hl.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {hl.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400">
                  <span className="font-semibold">Fast Turnaround</span>
                  <button
                    onClick={() => onOpenBookingModal(hl.title)}
                    className="hover:underline flex items-center gap-1"
                  >
                    Inquire <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Inspection Accordion / Tabs */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Detailed Service Specs & Turnaround
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Transparent repairs with genuine replacement components and warranty.
              </p>
            </div>

            <a
              href={createWhatsAppUrl('Hello! I need computer repair/sales support in Chennai. Please share your availability.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white self-start sm:self-auto"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp Direct Help</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPUTER_SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="p-5 rounded-xl border border-slate-800 bg-[#0B101E] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                      <Clock className="h-3 w-3" /> {serv.turnaround}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Chennai</span>
                  </div>

                  <h4 className="font-bold text-white text-base font-display">
                    {serv.title}
                  </h4>
                  
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {serv.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                    {serv.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">On-site Support</span>
                  <button
                    onClick={() => onOpenBookingModal(serv.title)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
