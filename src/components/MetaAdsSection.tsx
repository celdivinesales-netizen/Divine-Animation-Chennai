import React, { useState } from 'react';
import { 
  TrendingUp, 
  Check, 
  MessageCircle, 
  Phone, 
  Share2, 
  Target, 
  Users, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  Instagram,
  Facebook,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export const MetaAdsSection: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<'both' | 'instagram' | 'facebook'>('both');

  const adFeatures = [
    {
      title: 'Meta Ads Setup Assistance',
      description: 'Complete onboarding: business manager account creation, pixel configuration, and payment gateway setup without headaches.',
      icon: Target,
    },
    {
      title: 'Facebook Advertising',
      description: 'Reach local families, homeowners, and B2B buyers across Chennai with customized carousel ads and local event promotions.',
      icon: Facebook,
    },
    {
      title: 'Instagram Advertising',
      description: 'Hook Gen-Z and millennial shoppers with high-converting Instagram Reels and Story ads paired with our AI promo videos.',
      icon: Instagram,
    },
    {
      title: 'Social Media Promotion Guidance',
      description: 'Actionable tips on what content to post, best posting times in Chennai, and how to convert comments into paying clients.',
      icon: Share2,
    },
    {
      title: 'Campaign Setup Support',
      description: 'Step-by-step assistance choosing ad objectives: WhatsApp message clicks, website visits, lead form fills, or local footfalls.',
      icon: BarChart3,
    },
    {
      title: 'Direct WhatsApp Leads Integration',
      description: 'Configure "Click to WhatsApp" buttons so prospects message your phone number directly the moment they view your ad.',
      icon: MessageCircle,
    },
  ];

  return (
    <section id="meta-ads" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#090D18] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-3.5 py-1 text-xs font-semibold text-purple-300">
            <TrendingUp className="h-3.5 w-3.5 text-purple-400" />
            <span>Meta Ads & Social Media Assistance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Launch Your Business Online with Confidence
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Get <span className="text-emerald-400 font-bold underline decoration-emerald-500/50 underline-offset-4">FREE assistance</span> setting up Meta Ads across social media platforms. We help you target real customers in Chennai without expensive agency fees.
          </p>
        </div>

        {/* Highlight Banner: 100% Free Setup */}
        <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 p-6 sm:p-8 backdrop-blur flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              Zero Service Fee Setup Guarantee
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Why Spend ₹15,000+ on Retainer Fees?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              When you produce your AI promotional videos or website with Divine Animation Chennai, our experienced team provides comprehensive, complimentary assistance to configure and launch your official Meta ad campaigns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={createWhatsAppUrl('Hello! I would like to get FREE assistance setting up Meta Ads (Facebook & Instagram) for my Chennai business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-6 py-3.5 text-xs sm:text-sm font-bold shadow-lg shadow-emerald-900/40 transition-all"
            >
              <Sparkles className="h-4 w-4" />
              <span>Get Free Assistance</span>
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-[#0B101E]/70 p-6 backdrop-blur hover:border-purple-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center text-[11px] text-emerald-400 font-semibold gap-1.5">
                  <Check className="h-3.5 w-3.5" />
                  <span>Complimentary Support Included</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Campaign Process Preview */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              How We Launch Your Ad Campaign in 3 Easy Steps
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Zero complicated jargon. From video creation to real customer phone calls in 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Step 1 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-[#0A0E1C] relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-purple-400">STEP 01</span>
                <span className="text-xs bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800/60">Creative</span>
              </div>
              <h4 className="text-base font-bold text-white">Create High-Hook Video</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We craft an engaging AI video with presenter or kinetic graphics that explains your product or shop offer clearly in Tamil / English.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-[#0A0E1C] relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-cyan-400">STEP 02</span>
                <span className="text-xs bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800/60">Targeting</span>
              </div>
              <h4 className="text-base font-bold text-white">Configure Chennai Target</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We guide you in pinpointing exact pin codes, age brackets, interests, and budget (even starting at just ₹200/day).
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl border border-slate-800 bg-[#0A0E1C] relative space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-emerald-400">STEP 03</span>
                <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/60">Inbound Leads</span>
              </div>
              <h4 className="text-base font-bold text-white">Direct WhatsApp Inquiries</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Customers tap the ad on Instagram or Facebook and instantly message your business WhatsApp number with their inquiry.
              </p>
            </div>

          </div>

          {/* Quick CTA inside step container */}
          <div className="mt-8 text-center pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs sm:text-sm text-slate-300">
              Ready to advertise on Facebook & Instagram?
            </span>
            <a
              href={createWhatsAppUrl('Hello! I want guidance to set up my Facebook & Instagram Meta Ads in Chennai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs sm:text-sm font-semibold text-white transition-all shadow-md shadow-purple-900/30"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Get Free Assistance: {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
