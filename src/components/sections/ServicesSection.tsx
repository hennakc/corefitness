"use client";

import { useState } from "react";
import { Dumbbell, User, Users, Trophy, Zap, ArrowRight, RotateCcw } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppUrl } from "@/lib/utils";

const services = [
  {
    id: 1,
    icon: Dumbbell,
    title: "General Training",
    tagline: "Built for every body.",
    frontBg: "from-zinc-900 to-zinc-950",
    accentColor: "#D40000",
    description:
      "Access to all gym equipment with structured workout programs tailored for your fitness goals. Perfect for self-motivated individuals looking to build strength and endurance.",
    features: [
      "Full access to all equipment",
      "Structured workout guidance",
      "Suitable for all fitness levels",
      "Flexible training hours from 4AM",
    ],
    whatsappMsg: "Hi Core Fitness Club, I'm interested in General Training. Please share more details.",
    featured: false,
  },
  {
    id: 2,
    icon: User,
    title: "Personal Training",
    tagline: "Your goals. Our obsession.",
    frontBg: "from-zinc-900 to-zinc-950",
    accentColor: "#D40000",
    description:
      "One-on-one sessions with our REPS India Level 3 certified trainer. Custom workout plans, real-time form corrections, and nutrition advice designed exclusively for you.",
    features: [
      "1-on-1 coaching with certified PT",
      "Fully customized program",
      "Real-time form correction",
      "Personalized nutrition guidance",
    ],
    whatsappMsg: "Hi Core Fitness Club, I'm interested in Personal Training sessions. Please share more details.",
    featured: false,
  },
  {
    id: 3,
    icon: Users,
    title: "Group Fitness",
    tagline: "Train together. Rise together.",
    frontBg: "from-zinc-900 to-zinc-950",
    accentColor: "#D40000",
    description:
      "High-energy group training sessions that blend community motivation with expert instruction. Build strength, burn fat, and push beyond your limits alongside like-minded athletes.",
    features: [
      "Expert-led group sessions",
      "Community & team energy",
      "Structured daily programs",
      "All fitness levels welcome",
    ],
    whatsappMsg: "Hi Core Fitness Club, I'm interested in Group Fitness sessions. Please share more details.",
    featured: false,
  },
  {
    id: 4,
    icon: Trophy,
    title: "Bodybuilding Prep",
    tagline: "Stage-ready. Competition-grade.",
    frontBg: "from-zinc-900 to-zinc-950",
    accentColor: "#D40000",
    description:
      "Competition-grade preparation for aspiring bodybuilders. Our trainer — a former Mr. Palakkad Junior — knows exactly what it takes to step on stage and claim the top spot.",
    features: [
      "Periodized training plans",
      "Peak week & contest prep",
      "Posing & stage coaching",
      "Detailed nutrition protocol",
    ],
    whatsappMsg: "Hi Core Fitness Club, I'm interested in Bodybuilding Preparation. Please share more details.",
    featured: false,
  },
  {
    id: 5,
    icon: Zap,
    title: "60-Day Transformation",
    tagline: "60 days. Zero excuses.",
    frontBg: "from-red-950 to-zinc-950",
    accentColor: "#D40000",
    description:
      "Our flagship program. 60 days of laser-focused training, accountability, and nutrition engineering designed to deliver visible, measurable, life-changing results.",
    features: [
      "Full 60-day structured program",
      "Daily accountability check-ins",
      "Body composition tracking",
      "Nutrition & meal timing plan",
    ],
    whatsappMsg: "Hi Core Fitness Club, I'm interested in the 60-Day Body Transformation program. Please share more details.",
    featured: true,
  },
];

function FlipCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div
      className="reveal group"
      style={{
        animationDelay: `${index * 100}ms`,
        perspective: "1200px",
        height: "340px",
      }}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Flip container */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ─────────────────────────────── */}
        <div
          className={`absolute inset-0 rounded-2xl overflow-hidden border ${
            service.featured ? "border-brand-red/40" : "border-white/8"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: `linear-gradient(135deg, ${
              service.featured ? "rgba(212,0,0,0.08)" : "rgba(255,255,255,0.03)"
            } 0%, rgba(0,0,0,0.8) 100%)`,
          }}
        >
          {/* Top accent line */}
          {service.featured && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
          )}

          {/* POPULAR badge */}
          {service.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-brand-red rounded-full text-white text-xs font-bold tracking-wider shadow-lg shadow-red-900/40">
              POPULAR
            </div>
          )}

          <div className="p-7 flex flex-col h-full">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-5">
              <Icon size={26} className="text-brand-red" />
            </div>

            {/* Title */}
            <h3 className="font-display text-3xl text-white mb-2">{service.title}</h3>
            <p className="text-white/40 text-sm italic mb-auto">{service.tagline}</p>

            {/* Flip hint */}
            <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
              <span className="text-white/30 text-xs tracking-wide">Tap to learn more</span>
              <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                <span className="text-white/30 text-xs">↻</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────── */}
        <div
          className={`absolute inset-0 rounded-2xl overflow-hidden border ${
            service.featured ? "border-brand-red/50" : "border-brand-red/25"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(135deg, rgba(212,0,0,0.12) 0%, rgba(0,0,0,0.95) 100%)",
          }}
        >
          {/* Top red accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

          <div className="p-6 flex flex-col h-full">
            {/* Title row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon size={18} className="text-brand-red" />
                <h3 className="font-display text-xl text-white">{service.title}</h3>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center hover:border-brand-red/40 transition-colors"
                aria-label="Flip back"
              >
                <RotateCcw size={13} className="text-white/40" />
              </button>
            </div>

            {/* Description */}
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-1.5 mb-5 flex-1">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-brand-red text-xs mt-0.5 flex-shrink-0">◆</span>
                  <span className="text-white/70 text-xs">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={getWhatsAppUrl(service.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-brand-red rounded-xl text-white text-xs font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-900/30"
            >
              Enquire Now
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/30 to-black pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-6">
            <SectionLabel>What We Offer</SectionLabel>
          </div>
          <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
            OUR SERVICES
          </h2>
          <p className="reveal text-white/50 max-w-xl mx-auto text-base sm:text-lg">
            Tap any card to discover what each program delivers.
          </p>
        </div>

        {/* Flip cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FlipCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}