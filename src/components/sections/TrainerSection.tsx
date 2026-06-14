"use client";

import { Award, Star, Dumbbell, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppUrl } from "@/lib/utils";

const certifications = [
  {
    title: "Diploma in Personal Training",
    subtitle: "REPS India Level 3 — Highest level for personal trainers",
    icon: Award,
    color: "bg-yellow-400/10 border-yellow-400/20 text-yellow-400",
  },
  {
    title: "NSQF Level 4 Fitness Trainer",
    subtitle: "National Skills Qualifications Framework — Govt. of India",
    icon: Shield,
    color: "bg-blue-400/10 border-blue-400/20 text-blue-400",
  },
  {
    title: "REPS India Registered PT",
    subtitle: "Category A Personal Trainer — Nationally registered",
    icon: Award,
    color: "bg-green-400/10 border-green-400/20 text-green-400",
  },
  {
    title: "CPR & AED Certified",
    subtitle: "Emergency response ready — Member safety first",
    icon: Shield,
    color: "bg-red-400/10 border-red-400/20 text-red-400",
  },
];

const experience = [
  {
    role: "Personal Trainer",
    place: "Al Saaf Body Building, Sharjah, UAE",
    duration: "1 Year",
    flag: "🇦🇪",
  },
  {
    role: "Gym Instructor & Personal Trainer",
    place: "Hercules Fitness Centre, Palakkad",
    duration: "4 Years",
    flag: "🇮🇳",
  },
];

const achievements = [
  { title: "Mr. Palakkad Junior", year: "2018 & 2019", icon: "🏆" },
  {
    title: "Calicut University Inter-College",
    year: "Best Physique Runner-Up",
    icon: "🥈",
  },
  { title: "State-Level Basketball Player", year: "Kerala", icon: "🏀" },
];

export default function TrainerSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="trainer" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-red/5 blur-[150px] pointer-events-none" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-6">
            <SectionLabel>Expert Guidance</SectionLabel>
          </div>
          <h2 className="reveal font-display text-5xl sm:text-6xl lg:text-7xl text-white">
            MEET YOUR COACH
          </h2>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Profile card */}
          <div className="reveal lg:col-span-2">
            <div className="card-glass rounded-3xl p-8 h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

              {/* Avatar placeholder */}
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-brand-red to-red-800 flex items-center justify-center mb-6 mx-auto">
                <Dumbbell size={48} className="text-white" />
              </div>

              <div className="text-center mb-6">
                <h3 className="font-display text-3xl text-white mb-1">
                  MUHAMMED JAFFER RAZAK
                </h3>
                <p className="text-brand-red text-sm font-semibold tracking-wide uppercase">
                  Head Trainer & Founder
                </p>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                  <span className="text-white/40 text-xs ml-1">5+ years exp.</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { value: "5+", label: "Years" },
                  { value: "4", label: "Certs" },
                  { value: "2x", label: "Champion" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/5 rounded-xl p-3 text-center"
                  >
                    <p className="font-display text-2xl text-brand-red">
                      {s.value}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppUrl(
                  "Hi, I would like to book a personal training session with Muhammed Jaffer Razak."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-brand-red text-white font-semibold rounded-xl hover:bg-red-700 transition-colors text-sm"
              >
                Book a Session
              </a>
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Certifications */}
            <div className="reveal">
              <h4 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={cert.title}
                      className={`card-glass rounded-xl p-4 border flex items-start gap-3 transition-all duration-300 hover:-translate-y-0.5 ${cert.color}`}
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <Icon size={18} className="mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">
                          {cert.title}
                        </p>
                        <p className="text-white/40 text-xs mt-1 leading-relaxed">
                          {cert.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience */}
            <div className="reveal">
              <h4 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                Experience
              </h4>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div
                    key={exp.place}
                    className="card-glass rounded-xl p-5 flex items-center gap-4"
                  >
                    <span className="text-3xl">{exp.flag}</span>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">
                        {exp.role}
                      </p>
                      <p className="text-white/40 text-xs mt-0.5">{exp.place}</p>
                    </div>
                    <div className="px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
                      <p className="text-brand-red text-xs font-semibold">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="reveal">
              <h4 className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-4">
                Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {achievements.map((ach) => (
                  <div
                    key={ach.title}
                    className="card-glass rounded-xl p-4 text-center"
                  >
                    <span className="text-2xl mb-2 block">{ach.icon}</span>
                    <p className="text-white text-xs font-semibold leading-tight">
                      {ach.title}
                    </p>
                    <p className="text-white/40 text-xs mt-1">{ach.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
