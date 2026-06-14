"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "What are the operating hours of Core Fitness Club?",
    a: "Core Fitness Club is open Monday to Saturday from 4:00 AM onwards. We are committed to accommodating early risers and those who prefer late-night training sessions.",
  },
  {
    q: "Do beginners join Core Fitness Club?",
    a: "Absolutely! Core Fitness Club welcomes members of all fitness levels — from complete beginners to professional athletes. Our certified trainers provide personalized guidance to help you start your fitness journey safely and effectively.",
  },
  {
    q: "Is personal training available at Core Fitness Club?",
    a: "Yes. Our head trainer, Muhammed Jaffer Razak, is a REPS India Level 3 Certified Personal Trainer and NSQF Level 4 Fitness Trainer with 5+ years of professional experience in the UAE and India. One-on-one sessions are available by appointment.",
  },
  {
    q: "What is included in the 60-day transformation program?",
    a: "Our 60-day body transformation program includes a customized workout plan, nutritional guidance, weekly progress tracking, and dedicated one-on-one coaching sessions. The program is designed to deliver visible and measurable results within 60 days.",
  },
  {
    q: "Do you offer bodybuilding preparation?",
    a: "Yes, we specialize in competition-level bodybuilding preparation. Our trainer is a former Mr. Palakkad Junior (2018 & 2019) champion and can design periodized training and detailed nutrition plans for competitive athletes.",
  },
  {
    q: "What membership plans are available at Core Fitness Club?",
    a: "We offer three flexible membership options: Monthly at ₹1,000/month, Quarterly at ₹3,000 for 3 months, and Annual at ₹12,000 for 12 months. The annual plan is our most popular — it offers the best value and includes additional perks.",
  },
  {
    q: "Is WhatsApp enquiry available?",
    a: "Yes! You can reach us instantly via WhatsApp for membership enquiries, class schedules, personal training bookings, or any fitness questions. Click any 'Join via WhatsApp' button on our site or message us directly.",
  },
  {
    q: "Where is Core Fitness Club located?",
    a: "Core Fitness Club is located at Kannadi, Palakkad, Kerala 678701. Our Google Maps Plus Code is PJP8+PGV. Click 'Get Directions' on the contact section for easy navigation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useScrollReveal();

  return (
    <section id="faq" className="section-padding">
      <div
        ref={sectionRef}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex justify-center mb-6">
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            GOT QUESTIONS?
          </h2>
          <p className="reveal text-white/50 text-sm sm:text-base">
            Everything you need to know before you begin your transformation.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`reveal rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-red/30 bg-brand-red/5"
                    : "border-white/8 bg-white/3 hover:border-white/15"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`font-semibold text-sm sm:text-base transition-colors ${
                      isOpen ? "text-white" : "text-white/80"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-brand-red" : "bg-white/10"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={14} className="text-white" />
                    ) : (
                      <Plus size={14} className="text-white/60" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="w-full h-px bg-white/5 mb-4" />
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
