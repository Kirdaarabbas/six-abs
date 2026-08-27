import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FaqItem } from '../types';
import { getWhatsAppUrl, GYM_PHONE } from '../utils/contact';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Is SIX ABS beginner friendly?',
      answer: 'Yes. SIX ABS is designed to welcome beginners and provide guidance on proper training and progression.',
    },
    {
      id: 'faq-2',
      question: 'Is the gym for both men and women?',
      answer: 'Yes. SIX ABS welcomes both men and women.',
    },
    {
      id: 'faq-3',
      question: 'Is personal mentorship available?',
      answer: 'Yes. Personal mentorship is available through the Personal Mentorship plan.',
    },
    {
      id: 'faq-4',
      question: 'Does SIX ABS sell supplements?',
      answer: 'Yes. The gym offers supplements such as whey protein, creatine, mass gainer, multivitamins and pre-workout.',
    },
    {
      id: 'faq-5',
      question: 'What are the opening hours?',
      answer: 'Morning: 7:00 AM–9:00 AM\nEvening: 6:00 PM–9:00 PM',
    },
    {
      id: 'faq-6',
      question: 'Where is SIX ABS located?',
      answer: 'Plot No. 573, Opposite Swarna Jayanti Park, NITI KHAND I, Indirapuram, Ghaziabad, Uttar Pradesh 201014.',
    },
    {
      id: 'faq-7',
      question: 'How can I contact SIX ABS?',
      answer: `Call or WhatsApp ${GYM_PHONE}.`,
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#1A1A1A] border border-[#A80710]/30 text-[#A80710] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase font-heading tracking-tight text-white">
            FREQUENTLY ASKED <span className="text-[#A80710]">QUESTIONS</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B8B8B8]">
            Everything you need to know about memberships, coaching and joining SIX ABS.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#1A1A1A] border-[#A80710]/60 shadow-[0_0_15px_rgba(168,7,16,0.15)]'
                    : 'bg-[#141414] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#A80710] text-white rotate-180'
                        : 'bg-[#1A1A1A] text-white/70'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#B8B8B8] leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help WhatsApp Footer */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-[#B8B8B8]">
          <span>Still have questions not listed above?</span>
          <a
            href={getWhatsAppUrl("Hi SIX ABS! I have a question before joining.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#A80710] transition-colors underline decoration-[#A80710] underline-offset-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            Ask directly on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
