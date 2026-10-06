import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Play, 
  Volume2, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Laptop, 
  TrendingUp, 
  Wrench,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

interface HeroProps {
  onOpenBookingModal: (service?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onScrollToSection }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'website' | 'meta' | 'computer'>('video');
  const [isPlayingDemo, setIsPlayingDemo] = useState(true);
  const [demoLanguage, setDemoLanguage] = useState<'tamil' | 'english'>('tamil');

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-900/20 via-sky-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Headline & CTA on left/top, Interactive live demo on right/bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Message */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Chennai Local Service Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-medium text-indigo-300">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Chennai's 4-in-1 Digital & Tech Service Hub</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance leading-[1.15]">
              AI-Powered Videos, Websites & Digital Solutions for Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Create professional AI videos, build your online presence, promote your business on social media, and get reliable computer services — all under one roof.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>AI Videos from ₹900</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Websites from ₹1,200</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>FREE Meta Ads Setup</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Chennai Doorstep PC Repair</span>
              </div>
            </div>

            {/* Primary CTA Area */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
              <a
                href={createWhatsAppUrl('Hello Divine Animation Chennai! I would like to know more about your AI Videos, Websites, Meta Ads, and Computer services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-900/40 hover:from-emerald-500 hover:to-teal-500 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: {CONTACT_INFO.phone}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-indigo-500/40 bg-indigo-950/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-900/60 hover:border-indigo-400 transition-all active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>Call: {CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Pricing Teaser Link */}
            <div className="text-xs text-slate-400 pt-1 flex items-center justify-center lg:justify-start gap-4">
              <span>Instant Support: 9:00 AM – 8:30 PM</span>
              <span>·</span>
              <button 
                onClick={() => onScrollToSection('pricing')}
                className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-medium"
              >
                View Full Rate Card <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Right Column: High-End Interactive Showcase Console */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0C1222]/90 shadow-2xl backdrop-blur-xl p-4 sm:p-5">
              
              {/* Showcase Tab Selector */}
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800/80 mb-4">
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'video'
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Play className="h-3.5 w-3.5" />
                  <span className="truncate">AI Video</span>
                </button>

                <button
                  onClick={() => setActiveTab('website')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'website'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Laptop className="h-3.5 w-3.5" />
                  <span className="truncate">Website</span>
                </button>

                <button
                  onClick={() => setActiveTab('meta')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'meta'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span className="truncate">Meta Ads</span>
                </button>

                <button
                  onClick={() => setActiveTab('computer')}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'computer'
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Wrench className="h-3.5 w-3.5" />
                  <span className="truncate">PC Repair</span>
                </button>
              </div>

              {/* TAB 1: AI VIDEO LIVE SIMULATOR */}
              {activeTab === 'video' && (
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col justify-between p-4">
                    
                    {/* Simulated Studio Visual */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/80 via-slate-900/60 to-purple-950/40 pointer-events-none" />
                    
                    {/* Top bar inside player */}
                    <div className="relative z-10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-md border border-slate-700/60 text-slate-200">
                        <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                        <span className="font-mono uppercase font-bold text-[10px]">AI Studio HD</span>
                      </div>
                      
                      {/* Language Toggle */}
                      <div className="flex items-center bg-slate-900/90 rounded-md p-0.5 border border-slate-800 text-[11px]">
                        <button
                          onClick={() => setDemoLanguage('tamil')}
                          className={`px-2 py-0.5 rounded ${demoLanguage === 'tamil' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                        >
                          தமிழ்
                        </button>
                        <button
                          onClick={() => setDemoLanguage('english')}
                          className={`px-2 py-0.5 rounded ${demoLanguage === 'english' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
                        >
                          English
                        </button>
                      </div>
                    </div>

                    {/* Virtual Presenter Center Avatar Simulation */}
                    <div className="relative z-10 my-auto flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-cyan-400/80 p-1 bg-slate-900/80 shadow-lg shadow-cyan-500/20 flex items-center justify-center overflow-hidden">
                          {/* Vector stylized AI presenter illustration */}
                          <div className="w-full h-full rounded-full bg-gradient-to-b from-indigo-500 to-slate-800 flex items-center justify-center text-white font-bold text-2xl relative">
                            <span>AI</span>
                            {/* Speaking ripple wave */}
                            {isPlayingDemo && (
                              <div className="absolute inset-0 rounded-full border border-cyan-300 animate-ping opacity-30" />
                            )}
                          </div>
                        </div>
                        <span className="absolute bottom-0 right-0 bg-emerald-500 text-[10px] text-white px-1.5 py-0.2 rounded-full font-bold">
                          Tamil & EN
                        </span>
                      </div>

                      <div className="mt-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80 max-w-sm">
                        <p className="text-xs font-medium text-cyan-300">
                          {demoLanguage === 'tamil' 
                            ? 'வணக்கம்! உங்கள் கடை அல்லது பிசினஸுக்கு AI வீடியோ விளம்பரம் தயார்!'
                            : 'Hello Chennai! Elevate your brand with high-converting AI presenter videos.'}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Controls inside player */}
                    <div className="relative z-10 bg-slate-950/70 backdrop-blur p-2 rounded-lg border border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setIsPlayingDemo(!isPlayingDemo)}
                          className="h-7 w-7 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-transform active:scale-95"
                          title="Play/Pause Simulation"
                        >
                          {isPlayingDemo ? <span className="font-mono text-xs font-bold">||</span> : <Play className="h-3 w-3 fill-current ml-0.5" />}
                        </button>
                        <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
                          <Volume2 className="h-3.5 w-3.5 text-cyan-400" />
                          <span>AI Voice Model Sync</span>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-slate-400">
                        1080p · 9:16 Reel
                      </div>
                    </div>
                  </div>

                  {/* Pricing quick action for AI video */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400">Starts at: </span>
                      <span className="text-cyan-400 font-bold text-sm">₹900</span>
                      <span className="text-slate-400"> (Without Model) / </span>
                      <span className="text-indigo-400 font-bold text-sm">₹1,700</span>
                      <span className="text-slate-400"> (With Model)</span>
                    </div>
                    <a
                      href={createWhatsAppUrl('Hello! I would like to order an AI promotional video for my business.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
                    >
                      Get Video
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 2: WEBSITE CREATION PREVIEW */}
              {activeTab === 'website' && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                        <span className="ml-2 font-mono text-[11px] text-slate-300">yourbusinessname.com</span>
                      </div>
                      <span className="text-emerald-400 text-[11px] font-bold">Starts @ ₹1,200</span>
                    </div>

                    {/* Simulated Website Wireframe */}
                    <div className="space-y-2.5 pt-1">
                      <div className="h-16 rounded-lg bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/20 p-2.5 flex items-center justify-between">
                        <div>
                          <div className="h-3 w-32 bg-slate-200 rounded font-semibold text-[10px] text-slate-900 px-1 leading-3 truncate">
                            Your Chennai Business
                          </div>
                          <div className="h-2 w-44 bg-slate-500/60 rounded mt-1.5" />
                        </div>
                        <div className="h-7 px-2.5 bg-emerald-600 text-white rounded text-[10px] font-bold flex items-center">
                          WhatsApp
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded border border-slate-800 bg-slate-900/60 p-2 text-center">
                          <div className="h-2 w-12 bg-cyan-400/80 mx-auto rounded mb-1" />
                          <span className="text-[10px] text-slate-400">Fast Speed</span>
                        </div>
                        <div className="rounded border border-slate-800 bg-slate-900/60 p-2 text-center">
                          <div className="h-2 w-12 bg-cyan-400/80 mx-auto rounded mb-1" />
                          <span className="text-[10px] text-slate-400">Mobile Ready</span>
                        </div>
                        <div className="rounded border border-slate-800 bg-slate-900/60 p-2 text-center">
                          <div className="h-2 w-12 bg-cyan-400/80 mx-auto rounded mb-1" />
                          <span className="text-[10px] text-slate-400">Google Map</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400">Website Creation Starts @ </span>
                      <span className="text-cyan-400 font-bold text-sm">₹1,200</span>
                    </div>
                    <a
                      href={createWhatsAppUrl('Hello Divine Animation Chennai! I want to create a professional business website starting at ₹1,200.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
                    >
                      Create Website
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 3: META ADS FREE ASSISTANCE */}
              {activeTab === 'meta' && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <TrendingUp className="h-4 w-4 text-purple-400" />
                        <span className="font-semibold">Meta Ads Setup Assistance</span>
                      </div>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                        100% FREE SETUP
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">Facebook & Instagram Campaign</span>
                        <span className="text-cyan-400 font-semibold">Ready to Launch</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">Audience Targeting for Chennai</span>
                        <span className="text-emerald-400 font-semibold">Configured</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                        <span className="text-slate-300">Direct WhatsApp Inbound Leads</span>
                        <span className="text-purple-400 font-semibold">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-300">Zero Agency Setup Fees</span>
                    </div>
                    <a
                      href={createWhatsAppUrl('Hello! I would like FREE assistance setting up Meta Ads (Facebook & Instagram) for my business.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors"
                    >
                      Get Free Assistance
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 4: COMPUTER SERVICES */}
              {activeTab === 'computer' && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Wrench className="h-4 w-4 text-emerald-400" />
                        <span className="font-semibold">Chennai Doorstep Computer Support</span>
                      </div>
                      <span className="text-cyan-400 text-[11px] font-semibold">Home & Office Visits</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Desktop & Laptop</span>
                        <span className="text-slate-200 font-medium">Hardware Repair</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 text-[11px] block">OS & Software</span>
                        <span className="text-slate-200 font-medium">Windows & macOS</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Sales & Refurb</span>
                        <span className="text-slate-200 font-medium">Laptops from ₹12k</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                        <span className="text-slate-400 text-[11px] block">Technician Visits</span>
                        <span className="text-slate-200 font-medium">All Chennai Areas</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-400">On-site Support Across Chennai</span>
                    </div>
                    <button
                      onClick={() => onOpenBookingModal('Computer Sales & Repair')}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
                    >
                      Book a Service
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
