import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Check, 
  Film, 
  UserCheck, 
  Layers, 
  Package, 
  MessageCircle, 
  Phone, 
  Clock, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { AI_VIDEO_SAMPLES, CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { VideoSample } from '../types';

interface AiVideoSectionProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const AiVideoSection: React.FC<AiVideoSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedSample, setSelectedSample] = useState<VideoSample | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'presenter' | 'motion'>('all');

  const filteredSamples = AI_VIDEO_SAMPLES.filter(sample => {
    if (activeFilter === 'presenter') return sample.type === 'With AI Presenter';
    if (activeFilter === 'motion') return sample.type === 'Motion Graphics';
    return true;
  });

  return (
    <section id="ai-videos" className="py-16 md:py-24 border-t border-slate-800/80 bg-[#080B14] relative">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300">
            <Film className="h-3.5 w-3.5 text-cyan-400" />
            <span>AI Video Production</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Professional AI Videos at Affordable Prices
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Create eye-catching AI promotional videos for businesses, products, services, social media, advertisements and marketing campaigns.
          </p>
        </div>

        {/* 3 Core Pricing Cards for AI Video */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Without Model */}
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur flex flex-col justify-between hover:border-slate-700 transition-all group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">Entry Package</span>
                <span className="text-xs text-slate-400 font-mono">24h Delivery</span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-white font-display">
                AI Video without Model
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dynamic animated text, kinetic product visuals, 3D motion graphics & energetic background track.
              </p>

              <div className="mt-5 pb-5 border-b border-slate-800/80 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums">₹900</span>
                <span className="text-xs text-slate-400">/ single video ad</span>
              </div>

              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>20–30s fast-paced promo reel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>High-resolution product cutouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Custom offer banner & WhatsApp sticker</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Licensed commercial audio track</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-2">
              <a
                href={createWhatsAppUrl('Hello Divine Animation! I would like to order the AI Video without Model (₹900) for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-white py-3 text-xs sm:text-sm font-semibold transition-all"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>Order for ₹900</span>
              </a>
            </div>
          </div>

          {/* Card 2: With AI Model (Featured) */}
          <div className="relative rounded-2xl border-2 border-indigo-500/80 bg-gradient-to-b from-[#11162B] to-[#0D1222] p-6 shadow-xl shadow-indigo-950/40 backdrop-blur flex flex-col justify-between group">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-1 text-[11px] font-bold text-white shadow-md">
              MOST POPULAR CHOICE
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300">High Conversion Anchor</span>
                <span className="text-xs text-slate-300 font-mono">Priority Export</span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-white font-display">
                AI Video with AI Model
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Photorealistic AI human presenter speaking directly to your audience in Tamil or English with realistic lip-sync.
              </p>

              <div className="mt-5 pb-5 border-b border-indigo-800/40 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums">₹1,700</span>
                <span className="text-xs text-slate-400">/ single presenter reel</span>
              </div>

              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-white">Realistic Male / Female AI Presenter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Fluent Tamil or English voiceover</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>30–45s HD Reel format (Instagram & WhatsApp)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Script writing & hook assistance included</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-2">
              <a
                href={createWhatsAppUrl('Hello Divine Animation! I want to order the AI Video with AI Model (₹1,700) with virtual presenter.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 text-white py-3 text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.99]"
              >
                <Sparkles className="h-4 w-4" />
                <span>Get Your AI Video – ₹1,700</span>
              </a>
            </div>
          </div>

          {/* Card 3: Monthly Package */}
          <div className="relative rounded-2xl border border-purple-500/40 bg-slate-900/60 p-6 backdrop-blur flex flex-col justify-between hover:border-purple-400/60 transition-all group">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-purple-400">Social Media Growth</span>
                <span className="text-xs text-emerald-400 font-bold">Save ₹3,600</span>
              </div>

              <h3 className="mt-3 text-xl font-bold text-white font-display">
                Monthly Package (8 Videos)
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Consistency is key for Instagram Reels & Facebook Ads. 8 professionally edited videos rolled out every month.
              </p>

              <div className="mt-5 pb-5 border-b border-slate-800/80 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums">₹10,000</span>
                <span className="text-xs text-slate-400">/ 8 videos monthly</span>
              </div>

              <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-white">8 Complete AI Promotional Videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Mix of AI Models & product kinetic ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>FREE Meta Ads setup assistance included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Continuous 2x weekly publishing schedule</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-2">
              <a
                href={createWhatsAppUrl('Hello Divine Animation! I am interested in the 8 AI Videos Monthly Package for ₹10,000.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-purple-500/50 bg-purple-950/40 hover:bg-purple-900/60 text-purple-200 hover:text-white py-3 text-xs sm:text-sm font-semibold transition-all"
              >
                <Package className="h-4 w-4 text-purple-400" />
                <span>Choose Monthly Pack</span>
              </a>
            </div>
          </div>

        </div>

        {/* Central Prominent CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Need a Custom Script or Urgent 12-Hour Delivery?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our Chennai production team. Quick WhatsApp assistance available.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-700"
            >
              <Phone className="h-4 w-4 text-cyan-400" />
              <span>Call: {CONTACT_INFO.phone}</span>
            </a>

            <a
              href={createWhatsAppUrl('Hello Divine Animation! I want to discuss a new AI Video project for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-900/30"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Get Your AI Video</span>
            </a>
          </div>
        </div>

        {/* Interactive Visual Cards: AI-generated presenters, products, businesses & social media ads */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Explore AI Video Styles & Formats
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Click any style below to preview the script structure, presenter format, and turnaround time.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start sm:self-auto">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Styles
              </button>
              <button
                onClick={() => setActiveFilter('presenter')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeFilter === 'presenter' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                With Presenter (₹1,700)
              </button>
              <button
                onClick={() => setActiveFilter('motion')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  activeFilter === 'motion' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Motion Graphics (₹900)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredSamples.map((sample) => (
              <div
                key={sample.id}
                onClick={() => setSelectedSample(sample)}
                className="group cursor-pointer rounded-2xl border border-slate-800 bg-[#0A0F1D] overflow-hidden hover:border-indigo-500/60 transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Card Media Preview Header */}
                  <div className={`relative h-44 bg-gradient-to-br ${sample.accentColor} p-4 flex flex-col justify-between overflow-hidden`}>
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
                    
                    {/* Header info inside card */}
                    <div className="relative z-10 flex items-center justify-between text-[11px]">
                      <span className="bg-black/60 backdrop-blur px-2 py-0.5 rounded text-white font-medium border border-white/10">
                        {sample.aspectRatio}
                      </span>
                      <span className="bg-white/90 text-slate-900 font-extrabold px-2 py-0.5 rounded">
                        {sample.price}
                      </span>
                    </div>

                    {/* Central Simulated AI Graphic */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <div className="h-14 w-14 rounded-full bg-black/50 border border-white/30 backdrop-blur flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 fill-white ml-0.5 text-white" />
                      </div>
                      <span className="text-[11px] font-semibold text-white/90 mt-2 bg-black/40 px-2 py-0.5 rounded">
                        {sample.type}
                      </span>
                    </div>

                    {/* Duration badge */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-white/80">
                      <span>{sample.category}</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="h-3 w-3" />
                        {sample.duration}
                      </span>
                    </div>
                  </div>

                  {/* Body text */}
                  <div className="p-4 space-y-2">
                    <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {sample.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {sample.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between text-xs text-cyan-400 font-medium">
                  <span>View Script & Details</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SAMPLE DETAIL MODAL */}
      {selectedSample && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-[#0B0F1C] p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  {selectedSample.category} · {selectedSample.type}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedSample.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSample(null)}
                className="h-8 w-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Sample Voiceover Script Snippet:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                "{selectedSample.scriptSnippet}"
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 block">Features Included:</span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedSample.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block">Price:</span>
                <span className="text-2xl font-extrabold text-white font-display tabular-nums">
                  {selectedSample.price}
                </span>
              </div>

              <div className="flex gap-2">
                <a
                  href={createWhatsAppUrl(`Hello! I want to order this video style: ${selectedSample.title} (${selectedSample.price})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
