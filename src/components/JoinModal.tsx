import React, { useState } from 'react';
import { X, Check, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { GYM_PHONE, getWhatsAppUrl } from '../utils/contact';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  initialPlan = 'Transform',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [goal, setGoal] = useState('Build Muscle & Six Pack');
  const [preferredSlot, setPreferredSlot] = useState('Evening (6:00 PM – 9:00 PM)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*New Member Inquiry - SIX ABS*\n\n👤 *Name:* ${name || 'Prospective Member'}\n📱 *Contact:* ${phone || 'N/A'}\n🎯 *Goal:* ${goal}\n📦 *Plan Chosen:* ${selectedPlan}\n⏰ *Preferred Slot:* ${preferredSlot}\n\nI want to schedule my trial / consultation session!`;
    
    window.open(getWhatsAppUrl(formattedMsg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0B0B]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#141414] border-2 border-[#A80710]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(168,7,16,0.35)] text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1A1A1A] text-[#B8B8B8] hover:text-white flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/40 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Quick Gym Registration
          </div>
          <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white tracking-wide">
            JOIN <span className="text-[#A80710]">SIX ABS</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#B8B8B8] mt-1">
            Fill this quick form to connect with our head trainer and secure your batch slot.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full bg-[#0B0B0B] border border-white/15 focus:border-[#A80710] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#A80710] transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1.5">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9876543210"
              className="w-full bg-[#0B0B0B] border border-white/15 focus:border-[#A80710] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#A80710] transition-colors"
            />
          </div>

          {/* Plan Choice */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1.5">
              Select Membership Plan
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'BASIC', price: '₹1,500' },
                { name: 'TRANSFORM', price: '₹2,500' },
                { name: 'MENTORSHIP', price: '₹4,500' },
              ].map((p) => (
                <button
                  type="button"
                  key={p.name}
                  onClick={() => setSelectedPlan(p.name)}
                  className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedPlan.toUpperCase().includes(p.name)
                      ? 'bg-[#A80710] border-[#A80710] text-white shadow-md'
                      : 'bg-[#0B0B0B] border-white/10 text-[#B8B8B8] hover:border-white/30'
                  }`}
                >
                  <div className="text-xs font-bold font-heading">{p.name}</div>
                  <div className="text-[11px] font-semibold mt-0.5">{p.price}/m</div>
                </button>
              ))}
            </div>
          </div>

          {/* Primary Fitness Goal */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1.5">
              Primary Goal
            </label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-[#0B0B0B] border border-white/15 focus:border-[#A80710] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#A80710] transition-colors"
            >
              <option value="Build Muscle & Six Pack">Build Muscle & Six Pack</option>
              <option value="Fat Loss & Body Recomposition">Fat Loss & Body Recomposition</option>
              <option value="Beginner Fitness Guidance">Beginner Fitness Guidance</option>
              <option value="Strength & Functional Conditioning">Strength & Functional Conditioning</option>
              <option value="Personal 1-on-1 Mentorship">Personal 1-on-1 Mentorship</option>
            </select>
          </div>

          {/* Preferred Slot */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#B8B8B8] mb-1.5">
              Preferred Training Batch
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Morning (7:00 AM – 9:00 AM)',
                'Evening (6:00 PM – 9:00 PM)',
              ].map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setPreferredSlot(slot)}
                  className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    preferredSlot === slot
                      ? 'bg-[#1A1A1A] border-[#A80710] text-white'
                      : 'bg-[#0B0B0B] border-white/10 text-[#B8B8B8] hover:border-white/20'
                  }`}
                >
                  <div className="font-semibold">{slot.split(' (')[0]}</div>
                  <div className="text-[10px] text-[#B8B8B8]">{slot.split(' (')[1]?.replace(')', '')}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-3 space-y-2.5">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#A80710] hover:bg-[#c00813] text-white font-heading font-black text-base uppercase tracking-wider py-3.5 rounded-xl shadow-[0_0_20px_rgba(168,7,16,0.6)] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>SEND VIA WHATSAPP & LOCK SLOT</span>
            </button>

            <div className="text-center">
              <span className="text-[11px] text-[#B8B8B8]">
                Or call us directly at{' '}
                <a href={`tel:${GYM_PHONE}`} className="text-white font-bold underline decoration-[#A80710]">
                  {GYM_PHONE}
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
