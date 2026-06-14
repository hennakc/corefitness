"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const reviews = [
  {
    id: 1,
    name: "Rayyan Rayyan",
    rating: 5,
    text: "Amazing facility, top equipment and great environment. Good service with friendly staff and super clean and comfortable gym for everyone from beginners to professional athletes to train at.",
    initials: "RR",
    color: "from-red-600 to-red-800",
  },
  {
    id: 2,
    name: "Zanuj Prakash",
    rating: 5,
    text: "The gym offers modern equipment and clean facilities, catering to all fitness levels.",
    initials: "ZP",
    color: "from-orange-600 to-red-700",
  },
  {
    id: 3,
    name: "Muhammed Muhsin A",
    rating: 5,
    text: "Superb.",
    initials: "MM",
    color: "from-red-700 to-rose-800",
  },
  {
    id: 4,
    name: "Amal Dev",
    rating: 5,
    text: "Powerful.",
    initials: "AD",
    color: "from-rose-600 to-red-700",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review, active }: { review: (typeof reviews)[0]; active: boolean }) {
  return (
    <div
      className={`card-glass rounded-2xl p-6 sm:p-8 min-w-[300px] sm:min-w-[380px] max-w-[420px] transition-all duration-500 ${
        active ? "scale-100 opacity-100" : "scale-95 opacity-60"
      }`}
    >
      <div className="flex items-start gap-4 mb-5">
        {/* Avatar */}
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{review.name}</p>
          <p className="text-white/40 text-xs mt-0.5">Verified Google Review</p>
        </div>
      </div>
      <StarRating />
      <p className="text-white/70 text-sm leading-relaxed mt-4 italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-2 mt-5 pt-4 border-t border-white/5">
        <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-50">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span className="text-white/30 text-xs">Google</span>
      </div>
    </div>
  );
}

export default function TrustSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-20 sm:py-28 overflow-hidden" id="trust">
      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-white font-bold text-3xl">5.0</p>
            <p className="text-white/40 text-sm mt-1">Google Rating</p>
          </div>

          <div className="w-px h-16 bg-white/10 hidden sm:block" />

          <div className="text-center">
            <p className="text-white font-bold text-3xl">8</p>
            <p className="text-white/40 text-sm mt-1">Verified Reviews</p>
          </div>

          <div className="w-px h-16 bg-white/10 hidden sm:block" />

          <div className="text-center">
            <SectionLabel>Community Verified</SectionLabel>
          </div>
        </div>
      </div>

      {/* Cards carousel */}
      <div className="relative">
        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrollable track */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none px-8 sm:px-16 pb-4"
          style={{ scrollbarWidth: "none" }}>
          {reviews.map((review, i) => (
            <div key={review.id} className="snap-center flex-shrink-0">
              <ReviewCard review={review} active={i === activeIndex} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-2 bg-brand-red"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
