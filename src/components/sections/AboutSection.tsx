"use client";

import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  { value: "5.0", label: "Google Rating", suffix: "★", icon: Award },
  { value: "2+", label: "Years Serving Members", suffix: "", icon: TrendingUp },
  { value: "100%", label: "Personalized Coaching", suffix: "", icon: Target },
  { value: "All", label: "Fitness Levels Welcome", suffix: "", icon: Users },
];

export default function AboutSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div>
            <div className="reveal mb-6">
              <SectionLabel>Our Story</SectionLabel>
            </div>

            <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
              WHERE DISCIPLINE
              <span className="block text-brand-red">MEETS</span>
              TRANSFORMATION.
            </h2>

            <p className="reveal text-white/60 text-base sm:text-lg leading-relaxed mb-8">
              Core Fitness Club provides a focused training environment designed
              for everyone — from beginners taking their first step into fitness
              to athletes striving for peak performance.
            </p>

            <div className="reveal">
              <div className="flex flex-col gap-3">
                {[
                  "State-of-the-art equipment for every training goal",
                  "REPS India certified personal training experts",
                  "Dedicated women's training space",
                  "Clean, focused, distraction-free environment",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-brand-red mt-1 flex-shrink-0">✓</span>
                    <span className="text-white/60 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="reveal">
            <div className="relative">
              {/* Main card */}
              <div className="card-glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                {/* Red accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

                <div className="font-display text-7xl sm:text-8xl text-brand-red leading-none mb-4">
                  CORE
                </div>
                <div className="font-display text-3xl sm:text-4xl text-white leading-none mb-2">
                  FITNESS CLUB
                </div>
                <div className="text-white/40 text-sm tracking-widest uppercase mt-4 mb-8">
                  Kannadi · Palakkad · Kerala
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-brand-red font-display text-3xl">4AM</p>
                    <p className="text-white/40 text-xs mt-1">Opens Daily</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-brand-red font-display text-3xl">5.0★</p>
                    <p className="text-white/40 text-xs mt-1">Google Rating</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-brand-red rounded-2xl px-4 py-3 shadow-xl shadow-red-900/40">
                <p className="text-white font-bold text-lg leading-none">2+</p>
                <p className="text-white/70 text-xs">Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, suffix, icon: Icon }) => (
            <div
              key={label}
              className="reveal card-glass rounded-2xl p-6 text-center group hover:border-brand-red/20 transition-all duration-300"
            >
              <Icon
                size={24}
                className="text-brand-red mx-auto mb-4 group-hover:scale-110 transition-transform"
              />
              <div className="font-display text-4xl sm:text-5xl text-white mb-2">
                {value}
                <span className="text-brand-red">{suffix}</span>
              </div>
              <p className="text-white/50 text-xs sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
