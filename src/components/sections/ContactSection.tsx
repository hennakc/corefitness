"use client";

import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ContactSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/20 to-black pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-red/5 to-transparent pointer-events-none" />

      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-6">
            <SectionLabel>Get In Touch</SectionLabel>
          </div>
          <h2 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            START YOUR FITNESS JOURNEY TODAY.
          </h2>
          <p className="reveal text-white/50 max-w-lg mx-auto text-sm sm:text-base">
            Ready to transform? Walk in or message us. We&apos;re here from
            4:00 AM every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left — Info */}
          <div className="flex flex-col gap-5">
            {/* Address card */}
            <div className="reveal card-glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Core Fitness Club
                    <br />
                    Kannadi, Palakkad
                    <br />
                    Kerala 678701
                    <br />
                    <span className="text-white/30 text-xs mt-1 inline-block">
                      Plus Code: PJP8+PGV
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="reveal card-glass rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Hours</h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-white/60 text-sm">
                        Monday – Saturday
                      </span>
                      <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs">
                        4:00 AM onwards
                      </span>
                    </div>
                    <p className="text-white/30 text-xs">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-brand-red rounded-xl text-white font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=PJP8+PGV+Kannadi+Palakkad+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 py-4 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>

            {/* Rating badge */}
            <div className="reveal card-glass rounded-xl p-4 flex items-center gap-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">
                  5.0 / 5.0
                </p>
                <p className="text-white/40 text-xs mt-0.5">
                  8 Verified Google Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right — Map embed */}
          <div className="reveal rounded-2xl overflow-hidden border border-white/8 h-[400px] lg:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.7!2d76.6548!3d10.7867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87e9e3f000001%3A0x0!2sKannadi%2C+Palakkad%2C+Kerala+678701!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Core Fitness Club Location"
              className="grayscale contrast-125 opacity-80"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-red/5 pointer-events-none mix-blend-color" />
            {/* Map pin badge */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-2">
              <MapPin size={14} className="text-brand-red" />
              <span className="text-white text-xs font-medium">
                Core Fitness Club, Kannadi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
