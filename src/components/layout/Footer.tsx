import Image from "next/image";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Core Fitness Club"
              width={140}
              height={56}
              className="h-12 w-auto object-contain mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Core Fitness Club is Kannadi&apos;s premium fitness destination,
              offering world-class training for every level — beginner to
              elite.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-white/60 text-sm">
                5.0 · 8 Google Reviews
              </span>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Find Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Kannadi, Palakkad,
                  <br />
                  Kerala 678701
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brand-red shrink-0" />
                <span className="text-white/50 text-sm">
                  Mon–Sat: 4:00 AM onwards
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 text-sm hover:text-brand-red transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Personal Training", "#services"],
                ["Pricing", "#pricing"],
                ["FAQ", "#faq"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 text-sm hover:text-white transition-colors animated-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} Core Fitness Club. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Build. Brand. Bloom.
          </p>
        </div>
      </div>
    </footer>
  );
}
