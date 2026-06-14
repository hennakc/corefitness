"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Red accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-red/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Logo */}
        <div
          ref={logoRef}
          className="mb-8 transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scale(1) translateY(0)" : "scale(0.6) translateY(20px)",
          }}
        >
          <Image
            src="/images/logo1.png"
            alt="Core Fitness Club"
            width={200}
            height={80}
            className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Headline */}
        <div
          ref={textRef}
          className="transition-all duration-1000 delay-300 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] text-white leading-none tracking-wider mb-2">
            CORE FITNESS
          </h1>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.3em] text-brand-red mb-4">
            CLUB
          </h2>

          <div
            className="transition-all duration-1000 delay-500 ease-out"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <p className="text-white/70 text-base sm:text-lg md:text-xl font-light tracking-[0.2em] uppercase mb-10">
              Train Beyond Limits
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToAbout}
                className="group px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm tracking-wide"
              >
                Explore More
                <ChevronDown
                  size={16}
                  className="inline ml-2 group-hover:translate-y-1 transition-transform"
                />
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-brand-red text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 text-sm tracking-wide hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-0.5"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom location badge */}
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-10 transition-all duration-1000 delay-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/60 text-xs tracking-wider">
            Kannadi, Palakkad · Mon–Sat 4:00 AM onwards
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 right-8 flex flex-col items-center gap-2 z-10">
        <span className="text-white/30 text-xs tracking-widest rotate-90 mb-2">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-brand-red" />
      </div>
    </section>
  );
}
