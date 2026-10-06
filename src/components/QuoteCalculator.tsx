import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  MessageCircle, 
  Phone, 
  Film, 
  Laptop, 
  TrendingUp, 
  Wrench,
  RotateCcw
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export const QuoteCalculator: React.FC = () => {
  const [videoWithModelCount, setVideoWithModelCount] = useState<number>(1);
  const [videoWithoutModelCount, setVideoWithoutModelCount] = useState<number>(0);
  const [hasMonthlyPack, setHasMonthlyPack] = useState<boolean>(false);
  
  const [websiteTier, setWebsiteTier] = useState<'none' | 'starter' | 'pro' | 'catalog'>('starter');
  const [includeMetaAds, setIncludeMetaAds] = useState<boolean>(true);
  const [computerSupport, setComputerSupport] = useState<'none' | 'visit' | 'laptop' | 'desktop'>('none');

  // Calculate pricing
  const calculateTotal = () => {
    let total = 0;

    if (hasMonthlyPack) {
      total += 10000;
    } else {
      total += videoWithModelCount * 1700;
      total += videoWithoutModelCount * 900;
    }

    if (websiteTier === 'starter') total += 1200;
    if (websiteTier === 'pro') total += 2500;
    if (websiteTier === 'catalog') total += 3500;

    if (computerSupport === 'visit') total += 500;
    if (computerSupport === 'laptop') total += 750;
    if (computerSupport === 'desktop') total += 600;

    return total;
  };

  const total = calculateTotal();

  // Create WhatsApp message string
  const generateWhatsAppMessage = () => {
    let msg = `Hello Divine Animation Chennai! I would like to get a quote for the following services:\n\n`;
    
    if (hasMonthlyPack) {
      msg += `• AI Video Monthly Pack: 8 Videos (₹10,000)\n`;
    } else {
      if (videoWithModelCount > 0) {
        msg += `• AI Video with AI Model: ${videoWithModelCount} video(s) (₹${videoWithModelCount * 1700})\n`;
      }
      if (videoWithoutModelCount > 0) {
        msg += `• AI Video without Model: ${videoWithoutModelCount} video(s) (₹${videoWithoutModelCount * 900})\n`;
      }
    }

    if (websiteTier !== 'none') {
      const names = {
        starter: 'Starter Business Website (₹1,200)',
        pro: 'Multi-Page Corporate Website (₹2,500)',
        catalog: 'Digital Catalog & Order Site (₹3,500)',
      };
      msg += `• Website Creation: ${names[websiteTier]}\n`;
    }

    if (includeMetaAds) {
      msg += `• Meta Ads Setup: FREE Setup Assistance\n`;
    }

    if (computerSupport !== 'none') {
      const compNames = {
        visit: 'Home / Office Repair Visit in Chennai (₹500)',
        laptop: 'Laptop Servicing / Hardware Check (₹750)',
        desktop: 'Desktop PC Diagnosis (₹600)',
      };
      msg += `• Computer Service: ${compNames[computerSupport]}\n`;
    }

    msg += `\nEstimated Total: ₹${total.toLocaleString('en-IN')}\n`;
    msg += `Please confirm availability and start date. Thank you!`;

    return msg;
  };

  return (
    <section className="py-16 md:py-20 border-t border-slate-800/80 bg-[#070B16] relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Cost Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Estimate Your Custom Package in Seconds
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Select your preferred AI videos, website design, and computer services to calculate an instant quote.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="rounded-2xl border border-slate-800 bg-[#0A0F20]/90 p-6 sm:p-8 backdrop-blur shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Config Options */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Option 1: AI Videos */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <Film className="h-4 w-4 text-indigo-400" />
                    AI Promotional Videos
                  </span>
                  <button
                    onClick={() => setHasMonthlyPack(!hasMonthlyPack)}
                    className={`text-xs px-2.5 py-1 rounded-md border font-semibold transition-colors ${
                      hasMonthlyPack 
                        ? 'bg-purple-600 border-purple-500 text-white' 
                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                    }`}
                  >
                    {hasMonthlyPack ? 'Monthly Pack (8 Videos - ₹10,000)' : 'Switch to Monthly Pack'}
                  </button>
                </div>

                {!hasMonthlyPack ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                      <div className="text-xs text-slate-300 font-medium">With AI Model (₹1,700 ea)</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-cyan-400 font-bold">₹{videoWithModelCount * 1700}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setVideoWithModelCount(Math.max(0, videoWithModelCount - 1))}
                            className="h-7 w-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center text-sm"
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-sm font-bold text-white tabular-nums">
                            {videoWithModelCount}
                          </span>
                          <button
                            onClick={() => setVideoWithModelCount(videoWithModelCount + 1)}
                            className="h-7 w-7 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center justify-center text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                      <div className="text-xs text-slate-300 font-medium">Without Model (₹900 ea)</div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-cyan-400 font-bold">₹{videoWithoutModelCount * 900}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setVideoWithoutModelCount(Math.max(0, videoWithoutModelCount - 1))}
                            className="h-7 w-7 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center justify-center text-sm"
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-sm font-bold text-white tabular-nums">
                            {videoWithoutModelCount}
                          </span>
                          <button
                            onClick={() => setVideoWithoutModelCount(videoWithoutModelCount + 1)}
                            className="h-7 w-7 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center justify-center text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-purple-300 bg-purple-950/40 p-2.5 rounded-lg border border-purple-800/40">
                    Includes 8 Total AI promotional videos per month with priority delivery & free Meta Ads support.
                  </p>
                )}
              </div>

              {/* Option 2: Website Creation */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-blue-400" />
                  Website Creation Service
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'none', label: 'None', price: '₹0' },
                    { id: 'starter', label: 'Starter Site', price: '₹1,200' },
                    { id: 'pro', label: 'Multi-Page', price: '₹2,500' },
                    { id: 'catalog', label: 'Catalog Site', price: '₹3,500' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setWebsiteTier(tier.id as any)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        websiteTier === tier.id
                          ? 'border-cyan-400 bg-blue-950/80 text-white shadow-sm'
                          : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{tier.label}</div>
                      <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{tier.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Meta Ads Support */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-400" />
                    Meta Ads Setup Assistance
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Facebook & Instagram campaign onboarding
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/40">
                    FREE (₹0)
                  </span>
                </div>
              </div>

              {/* Option 4: Computer Technical Support */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-emerald-400" />
                  Computer Sales & Repair in Chennai
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'none', label: 'Not Needed', price: '₹0' },
                    { id: 'visit', label: 'Doorstep Visit', price: '₹500' },
                    { id: 'laptop', label: 'Laptop Service', price: '₹750' },
                    { id: 'desktop', label: 'Desktop Diagnosis', price: '₹600' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setComputerSupport(c.id as any)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        computerSupport === c.id
                          ? 'border-emerald-400 bg-emerald-950/60 text-white'
                          : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{c.label}</div>
                      <div className="text-[11px] text-emerald-400 font-mono mt-0.5">{c.price}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Live Summary Card */}
            <div className="lg:col-span-5 rounded-xl border border-indigo-500/40 bg-gradient-to-b from-[#10162B] to-[#0A0F1E] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-indigo-900/50 pb-3">
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-300">
                  Quotation Summary
                </span>
                <span className="text-xs text-slate-400">Divine Animation</span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                {hasMonthlyPack ? (
                  <div className="flex justify-between">
                    <span>Monthly 8 AI Videos Pack</span>
                    <span className="font-mono text-white">₹10,000</span>
                  </div>
                ) : (
                  <>
                    {videoWithModelCount > 0 && (
                      <div className="flex justify-between">
                        <span>AI Video w/ Model ({videoWithModelCount}x)</span>
                        <span className="font-mono text-white">₹{videoWithModelCount * 1700}</span>
                      </div>
                    )}
                    {videoWithoutModelCount > 0 && (
                      <div className="flex justify-between">
                        <span>AI Video w/o Model ({videoWithoutModelCount}x)</span>
                        <span className="font-mono text-white">₹{videoWithoutModelCount * 900}</span>
                      </div>
                    )}
                  </>
                )}

                {websiteTier !== 'none' && (
                  <div className="flex justify-between">
                    <span>Website ({websiteTier === 'starter' ? '₹1,200' : websiteTier === 'pro' ? '₹2,500' : '₹3,500'})</span>
                    <span className="font-mono text-white">
                      ₹{websiteTier === 'starter' ? 1200 : websiteTier === 'pro' ? 2500 : 3500}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-emerald-400">
                  <span>Meta Ads Setup Assistance</span>
                  <span className="font-mono font-bold">FREE</span>
                </div>

                {computerSupport !== 'none' && (
                  <div className="flex justify-between">
                    <span>Computer Technician Support</span>
                    <span className="font-mono text-white">
                      ₹{computerSupport === 'visit' ? 500 : computerSupport === 'laptop' ? 750 : 600}
                    </span>
                  </div>
                )}
              </div>

              {/* Total Calculation */}
              <div className="pt-4 border-t border-indigo-900/60">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-300">Estimated Total:</span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-white font-display tabular-nums">
                      ₹{total.toLocaleString('en-IN')}
                    </span>
                    <span className="block text-[10px] text-slate-400">GST / Taxes applicable if registered</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={createWhatsAppUrl(generateWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-900/40 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Quote via WhatsApp</span>
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 bg-slate-900/70 hover:bg-slate-800 text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Discuss on Call: {CONTACT_INFO.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
