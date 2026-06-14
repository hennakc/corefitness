# Core Fitness Club — Premium Website

**Stack:** Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · GSAP · Lenis

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add your assets

```
public/
├── images/
│   ├── logo.png          ← Rename Asset 10.png to logo.png
│   ├── hero-poster.jpg   ← A still from your hero video
│   └── og-image.jpg      ← 1200×630px social share image
└── videos/
    └── hero.mp4          ← Your hero background video
```

### 3. Configure WhatsApp number

Edit `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919895XXXXXX
```

Replace `919895XXXXXX` with your number in international format (91 = India code, no + or spaces).

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com), import repo
3. Add environment variable: `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy — done ✅

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx        ← Root layout, SEO metadata, schemas
│   ├── page.tsx          ← Main page (assembles all sections)
│   ├── globals.css       ← Global styles, CSS variables
│   ├── sitemap.ts        ← Auto-generated sitemap
│   └── robots.ts         ← robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScroll.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TrainerSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       └── SectionLabel.tsx
├── hooks/
│   └── useScrollReveal.ts
└── lib/
    └── utils.ts
```

---

## ✅ SEO Included

- LocalBusiness + SportsActivityLocation schema
- FAQPage schema (Google rich results)
- Open Graph + Twitter Card metadata
- Canonical URLs
- Sitemap + robots.txt
- 95+ Lighthouse ready
