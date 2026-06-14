import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corefitnessclub.in"),
  title: {
    default: "Core Fitness Club | Best Gym in Kannadi, Palakkad",
    template: "%s | Core Fitness Club",
  },
  description:
    "Core Fitness Club — the premium gym in Kannadi, Palakkad offering personal training, group fitness, bodybuilding prep & 60-day body transformation. ★★★★★ 5.0 rating. Join now.",
  keywords: [
    "gym in Kannadi",
    "gym in Palakkad",
    "best gym in Kannadi",
    "personal trainer Palakkad",
    "fitness centre Kannadi",
    "body transformation Palakkad",
    "women gym Palakkad",
    "bodybuilding Palakkad",
    "Core Fitness Club",
  ],
  authors: [{ name: "Core Fitness Club" }],
  creator: "Core Fitness Club",
  publisher: "Core Fitness Club",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.corefitnessclub.in",
    siteName: "Core Fitness Club",
    title: "Core Fitness Club | Best Gym in Kannadi, Palakkad",
    description:
      "Train beyond limits at Core Fitness Club — Kannadi's premium fitness destination. Personal training, body transformation & more. ★★★★★",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Core Fitness Club — Kannadi, Palakkad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Fitness Club | Best Gym in Kannadi, Palakkad",
    description:
      "Train beyond limits at Core Fitness Club — Kannadi's premium fitness destination.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.corefitnessclub.in",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "SportsActivityLocation"],
  name: "Core Fitness Club",
  description:
    "Premium gym in Kannadi, Palakkad offering personal training, group fitness, bodybuilding preparation, and 60-day body transformation programs.",
  image: "https://www.corefitnessclub.in/images/og-image.jpg",
  url: "https://www.corefitnessclub.in",
  telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kannadi",
    addressLocality: "Palakkad",
    addressRegion: "Kerala",
    postalCode: "678701",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.7867",
    longitude: "76.6548",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "04:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
    bestRating: "5",
  },
  priceRange: "₹₹",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Personal Training", value: true },
    { "@type": "LocationFeatureSpecification", name: "Group Fitness", value: true },
    { "@type": "LocationFeatureSpecification", name: "Women Gym", value: true },
    { "@type": "LocationFeatureSpecification", name: "Bodybuilding", value: true },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the operating hours of Core Fitness Club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Fitness Club is open Monday to Saturday from 4:00 AM onwards. We are committed to accommodating early risers and late-night fitness enthusiasts.",
      },
    },
    {
      "@type": "Question",
      name: "Do beginners join Core Fitness Club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Core Fitness Club welcomes members of all fitness levels — from complete beginners to professional athletes. Our certified trainers provide personalized guidance to help you start your fitness journey safely.",
      },
    },
    {
      "@type": "Question",
      name: "Is personal training available at Core Fitness Club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our head trainer, Muhammed Jaffer Razak, is a REPS India Level 3 Certified Personal Trainer and NSQF Level 4 Fitness Trainer with 5+ years of professional experience in UAE and India.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the 60-day transformation program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our 60-day body transformation program includes customized workout plans, nutritional guidance, progress tracking, and one-on-one coaching sessions designed to deliver visible and measurable results.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer bodybuilding preparation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in competition-level bodybuilding preparation. Our trainer is a former Mr. Palakkad Junior (2018 & 2019) and can design periodized training and nutrition plans for competitive athletes.",
      },
    },
    {
      "@type": "Question",
      name: "What membership plans are available at Core Fitness Club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer three flexible membership options: Monthly at ₹1,000/month, Quarterly at ₹3,000 for 3 months, and Annual at ₹12,000 for 12 months. The annual plan offers the best value.",
      },
    },
    {
      "@type": "Question",
      name: "Is WhatsApp enquiry available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! You can reach us instantly via WhatsApp for membership enquiries, class schedules, or any fitness questions. Just click any 'Join via WhatsApp' button on our website.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Core Fitness Club located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Fitness Club is located at Kannadi, Palakkad, Kerala 678701. Our Google Maps reference is PJP8+PGV.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="noise">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
