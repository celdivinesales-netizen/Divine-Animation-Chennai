import React from 'react';
import { 
  BadgePercent, 
  Cpu, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Affordable Pricing',
      description: 'Professional digital services at budget-friendly prices.',
      details: 'Transparent rates without hidden fees — AI videos from ₹900, websites starting @ ₹1,200, and free Meta Ads setup assistance.',
      icon: BadgePercent,
      color: 'from-blue-500 to-indigo-600',
      borderGlow: 'hover:border-blue-500/60',
      badge: 'Transparent Rates',
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Modern AI video and digital marketing solutions for businesses.',
      details: 'Cutting-edge AI presenters, neural voice models in English and Tamil, and algorithmic audience targeting to maximize ROI.',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      borderGlow: 'hover:border-indigo-500/60',
      badge: 'Modern Technology',
    },
    {
      title: 'Complete Business Support',
      description: 'Videos, websites, advertising and computer services in one place.',
      details: 'Never run between multiple agencies or vendors. Get your creative promotional videos, website, ad campaigns, and computer repair from one team.',
      icon: Layers,
      color: 'from-purple-500 to-pink-600',
      borderGlow: 'hover:border-purple-500/60',
      badge: 'All-in-One Hub',
    },
    {
      title: 'Chennai-Based Service',
      description: 'Convenient support for businesses and customers across Chennai.',
      details: 'Local understanding of Tamil Nadu markets, quick response times, and convenient doorstep home/office computer repair visits.',
      icon: MapPin,
      color: 'from-emerald-500 to-teal-600',
      borderGlow: 'hover:border-emerald-500/60',
      badge: 'Local Presence',
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#070A12] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Why Choose Divine Animation?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We empower small businesses, retail shops, and professionals in Chennai with high-impact digital tools and dependable technical support.
          </p>
        </div>

        {/* 4 Icon-based Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl border border-slate-800 bg-[#0B101E]/80 p-6 backdrop-blur transition-all duration-200 ${reason.borderGlow} flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  {/* Icon badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${reason.color} p-0.5 shadow-lg shadow-indigo-950/50`}>
                      <div className="h-full w-full rounded-[10px] bg-slate-950/70 backdrop-blur flex items-center justify-center text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-slate-400 border border-slate-800 px-2 py-0.5 rounded-md bg-slate-900/60">
                      {reason.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-200 leading-snug">
                    {reason.description}
                  </p>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {reason.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-cyan-400 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Guaranteed Satisfaction</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">500+</span>
              <p className="text-xs text-slate-400">AI Videos & Reels Delivered</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">150+</span>
              <p className="text-xs text-slate-400">Websites Launched in TN</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">₹0</span>
              <p className="text-xs text-slate-400">Meta Ads Setup Fee</p>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">100%</span>
              <p className="text-xs text-slate-400">Chennai On-Site Tech Support</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
