import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'AI Video with Model (₹1,700)',
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [locality, setLocality] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Divine Animation Chennai!\n\n` +
      `*Service Request:* ${selectedService}\n` +
      `*Business/Name:* ${businessName || 'Not specified'}\n` +
      `*Contact Phone:* ${phoneNumber || 'Not specified'}\n` +
      `*Location in Chennai:* ${locality || 'Chennai'}\n` +
      `*Requirements/Notes:* ${notes || 'Please provide details and start date.'}\n\n` +
      `Please contact me back. Thank you!`;

    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-[#0A0E1D] p-6 shadow-2xl space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Book a Service / Request Quote
              </h3>
              <p className="text-[11px] text-slate-400">
                Divine Animation Chennai · 9092558217
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Select Service Required *
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
            >
              <option value="AI Video with AI Model (₹1,700)">
                AI Video with AI Model – ₹1,700
              </option>
              <option value="AI Video without Model (₹900)">
                AI Video without Model – ₹900
              </option>
              <option value="Monthly Package: 8 AI Videos (₹10,000)">
                Monthly Package (8 AI Videos) – ₹10,000
              </option>
              <option value="Website Creation (Starts @ ₹1,200)">
                Website Creation – Starts @ ₹1,200
              </option>
              <option value="FREE Meta Ads Setup Assistance">
                Meta Ads Assistance – FREE Setup
              </option>
              <option value="Computer Desktop/Laptop Repair & Sales">
                Computer Sales & Repair (Home/Office Visit in Chennai)
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Business or Name *
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Royal Fashion / Senthil"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Your Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. 9840XXXXXX"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Chennai Locality / Area
            </label>
            <input
              type="text"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              placeholder="e.g. Anna Nagar, T. Nagar, Velachery, OMR, Tambaram..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Specific Requirements or Notes
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us what you'd like to promote or any computer issues you're facing..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-900/30 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Submit & Open WhatsApp</span>
            </button>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 py-3 px-4 text-xs font-semibold text-slate-200"
            >
              <Phone className="h-3.5 w-3.5 text-cyan-400" />
              <span>Call: 9092558217</span>
            </a>
          </div>
        </form>

        <div className="border-t border-slate-800/80 pt-3 text-center">
          <p className="text-[11px] text-slate-400">
            Prompt response guaranteed: Monday to Saturday 9:00 AM – 8:30 PM.
          </p>
        </div>

      </div>
    </div>
  );
};
