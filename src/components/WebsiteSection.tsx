import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Check, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Clock, 
  MapPin, 
  Zap, 
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';
import { WEBSITE_TEMPLATES, CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { WebsiteTemplate } from '../types';

export const WebsiteSection: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate>(WEBSITE_TEMPLATES[0]);
  const [deviceView, setDeviceView] = useState<'mobile' | 'desktop'>('desktop');

  return (
    <section id="websites" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#080C16] relative">
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3.5 py-1 text-xs font-semibold text-blue-300">
            <Laptop className="h-3.5 w-3.5 text-cyan-400" />
            <span>Website Creation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Professional Websites Starting at Just ₹1,200
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Get an affordable website for your business, shop, service, portfolio or personal brand.
          </p>
        </div>

        {/* Prominent Price Tag Banner */}
        <div className="mt-10 mx-auto max-w-2xl rounded-2xl border-2 border-cyan-500/60 bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 p-6 text-center shadow-2xl shadow-cyan-950/50 backdrop-blur">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Special Chennai Launch Offer
          </span>
          <div className="mt-2 text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            Website Creation Starts @ <span className="text-cyan-400 tabular-nums">₹1,200</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Clean, mobile-first design ready within 24 to 48 hours. Includes domain linking guidance and direct WhatsApp buttons.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl('Hello Divine Animation! I want to create a website starting at ₹1,200 for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/30 transition-all active:scale-[0.98]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Create My Website</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { title: 'Business Websites', desc: 'Custom tailored for shops, clinics & services', icon: Laptop },
            { title: 'Mobile-Friendly Design', desc: 'Fluid on iPhone, Android & iPad', icon: Smartphone },
            { title: 'Modern Layouts', desc: 'Sleek dark or clean aesthetics', icon: Layers },
            { title: 'Contact / WhatsApp', desc: 'Direct click-to-chat & phone buttons', icon: MessageCircle },
            { title: 'Business Info & Services', desc: 'Showcase rates, menu & location map', icon: MapPin },
            { title: 'Affordable Pricing', desc: 'Starting at ₹1,200 with zero hidden fees', icon: Zap },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="p-4 rounded-xl border border-slate-800 bg-[#0B101E]/80 backdrop-blur text-center flex flex-col items-center justify-center hover:border-cyan-500/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-lg bg-blue-950/80 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-2.5">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="text-xs font-bold text-white leading-tight">{item.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Website Package Showcase & Live Interactive Simulator */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Website Packages */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white font-display">
              Choose the Best Website Tier for Your Business
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Select a tier below to preview its features and simulated live view.
            </p>

            <div className="space-y-3 pt-2">
              {WEBSITE_TEMPLATES.map((tmpl) => (
                <div
                  key={tmpl.id}
                  onClick={() => setSelectedTemplate(tmpl)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedTemplate.id === tmpl.id
                      ? 'border-cyan-500/80 bg-gradient-to-r from-blue-950/60 to-slate-900 shadow-lg shadow-cyan-950/30'
                      : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-300">{tmpl.category}</span>
                    <span className="text-base font-extrabold text-white font-display tabular-nums">
                      {tmpl.startingPrice}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mt-1">{tmpl.title}</h4>
                  
                  <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-400">
                    <Clock className="h-3 w-3 text-cyan-400" />
                    <span>Delivered in {tmpl.turnaround}</span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
                    {tmpl.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">Click to inspect preview</span>
                    <span className="text-cyan-400 font-semibold text-[11px]">View Details →</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl(`Hello! I would like to build the ${selectedTemplate.title} (${selectedTemplate.startingPrice}) with Divine Animation Chennai.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <Sparkles className="h-4 w-4" />
                <span>Create My Website – {selectedTemplate.startingPrice}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Responsive Website Simulator */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0C1222] p-4 sm:p-5 shadow-2xl backdrop-blur">
              
              {/* Simulator Header & Device Switcher */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="hidden sm:inline font-mono text-xs text-slate-300 ml-2 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                    https://divineanimation.in/demo/{selectedTemplate.id}
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold ${
                      deviceView === 'desktop' ? 'bg-cyan-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    <Laptop className="h-3.5 w-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold ${
                      deviceView === 'mobile' ? 'bg-cyan-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* The Screen Display */}
              <div className={`mx-auto transition-all duration-300 ${deviceView === 'mobile' ? 'max-w-xs' : 'w-full'}`}>
                <div className="rounded-xl border border-slate-700/80 bg-slate-950 overflow-hidden shadow-inner">
                  
                  {/* Top Bar inside simulated website */}
                  <div className="bg-slate-900/90 border-b border-slate-800 p-2.5 flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">
                      {selectedTemplate.previewType === 'store' ? 'Chennai Spices & Organic Shop' : 'Dr. Anand Dental Care & Clinic'}
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="px-2 py-0.5 rounded bg-emerald-600 text-[10px] text-white font-bold"
                    >
                      Call Shop
                    </a>
                  </div>

                  {/* Simulated Hero Banner */}
                  <div className="bg-gradient-to-r from-blue-900/60 to-indigo-900/60 p-4 text-center space-y-2 border-b border-slate-800">
                    <span className="text-[10px] text-cyan-300 font-semibold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                      Located in Anna Nagar / Chennai
                    </span>
                    <h5 className="text-sm sm:text-base font-extrabold text-white">
                      {selectedTemplate.previewType === 'store' 
                        ? 'Premium Quality Products Delivered Same-Day' 
                        : 'Advanced Healthcare & Consultation Services'}
                    </h5>
                    <p className="text-[11px] text-slate-300 max-w-xs mx-auto">
                      Trusted by 1,200+ local Chennai families since 2018.
                    </p>
                    <div className="pt-1 flex justify-center gap-2">
                      <span className="px-3 py-1 bg-emerald-600 rounded text-[10px] font-bold text-white flex items-center gap-1 shadow">
                        <MessageCircle className="h-2.5 w-2.5" /> WhatsApp Order
                      </span>
                    </div>
                  </div>

                  {/* Simulated Features / Services Catalog */}
                  <div className="p-3.5 space-y-2.5 bg-slate-950">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                      <span>Featured Offerings</span>
                      <span className="text-cyan-400">View All</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="h-10 rounded bg-slate-800/80 mb-1 flex items-center justify-center text-slate-400 font-medium">
                          Item Photo
                        </div>
                        <span className="text-slate-200 font-bold block truncate">Special Package A</span>
                        <span className="text-cyan-400 font-semibold">₹499</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800">
                        <div className="h-10 rounded bg-slate-800/80 mb-1 flex items-center justify-center text-slate-400 font-medium">
                          Item Photo
                        </div>
                        <span className="text-slate-200 font-bold block truncate">Special Package B</span>
                        <span className="text-cyan-400 font-semibold">₹899</span>
                      </div>
                    </div>

                    {/* Google Map Mockup */}
                    <div className="p-2 rounded bg-slate-900/60 border border-slate-800 text-[10px] flex items-center justify-between text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-red-400" />
                        <span>Google Map Location Embed</span>
                      </div>
                      <span className="text-cyan-400">Chennai, TN</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom specs bar */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Fast Speed Optimization (Google PageSpeed 95+)</span>
                <span className="text-cyan-400 font-medium">100% Mobile Responsive</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
