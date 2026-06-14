"use client";

import { Check, MessageCircle, Zap } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppUrl } from "@/lib/utils";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: "1,000",
    period: "Per Month",
    duration: "1 Month",
    description: "Try us out. No long commitment.",
    features: [
      "Full gym access",
      "All equipment",
      "Locker room access",
      "Basic workout guidance",
    ],
    featured: false,
    badge: null,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "3,000",
    period: "3 Months",
    duration: "3 Months",
    description: "Build consistency. Save money.",
    features: [
      "Everything in Monthly",
      "Fitness assessment",
      "Nutrition basics",
      "Priority support",
    ],
    featured: false,
    badge: null,
  },
  {
    id: "annual",
    name: "Annual",
    price: "12,000",
    period: "12 Months",
    duration: "12 Months",
    description: "Best value. Serious results.",
    features: [
      "Everything in Quarterly",
      "1 free PT session/month",
      "Body transformation tracking",
      "VIP member status",
      "Dedicated trainer access",
    ],
    featured: true,
    badge: "BEST VALUE",
  },
];

export default function PricingSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-6">
            <SectionLabel>Membership Plans</SectionLabel>
          </div>
          <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            INVEST IN YOURSELF
          </h2>
          <p className="reveal text-white/50 max-w-lg mx-auto text-sm sm:text-base">
            Choose the plan that matches your commitment level. Every plan
            includes full gym access.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`reveal relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                plan.featured
                  ? "pricing-featured border border-brand-red/40 shadow-2xl shadow-red-900/20"
                  : "card-glass border border-white/8 hover:border-brand-red/20"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Top glow for featured */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-brand-red rounded-full text-white text-xs font-bold tracking-wider">
                  {plan.badge}
                </div>
              )}

              <div className="p-7 sm:p-8">
                {/* Plan name */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.featured && (
                      <Zap size={16} className="text-brand-red" />
                    )}
                    <h3
                      className={`font-display text-2xl ${
                        plan.featured ? "text-brand-red" : "text-white/80"
                      }`}
                    >
                      {plan.name.toUpperCase()}
                    </h3>
                  </div>
                  <p className="text-white/40 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/5">
                  <div className="flex items-start gap-1">
                    <span className="text-white/50 text-lg mt-2">₹</span>
                    <span className="font-display text-5xl sm:text-6xl text-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm mt-1">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.featured
                            ? "bg-brand-red"
                            : "bg-white/10"
                        }`}
                      >
                        <Check
                          size={11}
                          className={
                            plan.featured ? "text-white" : "text-white/60"
                          }
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-white/60 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={getWhatsAppUrl(
                    `Hi Core Fitness Club, I'm interested in the ${plan.name} membership plan (₹${plan.price} for ${plan.duration}). Please share more details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-red-900/30"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <MessageCircle size={16} />
                  Join via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="reveal text-center text-white/30 text-xs mt-8">
          All plans are subject to availability. Contact us via WhatsApp for
          group and corporate memberships.
        </p>
      </div>
    </section>
  );
}
