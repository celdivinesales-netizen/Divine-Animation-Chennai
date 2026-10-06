import React from 'react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  HelpCircle,
  Tag
} from 'lucide-react';
import { PRICING_PLANS, CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

interface PricingSectionProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#080B14] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Tag className="h-3.5 w-3.5 text-cyan-400" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Simple, Affordable Pricing for Every Business
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            No expensive retainers or hidden surprise fees. Choose the ideal solution for your budget and growth targets.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const isModelPlan = plan.id === 'ai-video-model';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-6 backdrop-blur flex flex-col justify-between transition-all duration-200 ${
                  isModelPlan
                    ? 'border-indigo-500/80 bg-gradient-to-b from-[#131936] to-[#0D1226] shadow-xl shadow-indigo-950/50 scale-[1.02]'
                    : 'border-slate-800 bg-[#0B0F1C]/80 hover:border-slate-700'
                }`}
              >
                {/* Popular badge */}
                {isModelPlan && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-3.5 py-0.5 text-[10px] font-bold text-white shadow">
                    RECOMMENDED
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {plan.title}
                    </span>
                    <span className="text-[10px] font-semibold text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-white font-display leading-tight">
                    {plan.subtitle}
                  </h3>

                  <div className="mt-5 pb-5 border-b border-slate-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-400">{plan.currency}</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-0.5">{plan.period}</span>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 leading-relaxed min-h-[48px]">
                    {plan.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={createWhatsAppUrl(`Hello Divine Animation! I am interested in ${plan.title} - ${plan.subtitle} for ${plan.currency}${plan.price}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-bold transition-all shadow-md active:scale-[0.98] ${
                      isModelPlan
                        ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 text-white shadow-indigo-600/30'
                        : 'border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{plan.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear CTA below pricing cards */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            Need a Custom Combo or Volume Discount for Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Get an instant custom quotation tailored to your exact video quantity, website design requirements, or computer service needs.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-base sm:text-lg font-bold text-cyan-400">
              Call / WhatsApp Now: <span className="text-white font-mono">{CONTACT_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={createWhatsAppUrl('Hello! I would like to get a custom quote from Divine Animation Chennai.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-900/30"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-semibold text-slate-100"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
