# Reel Counter — Product Website

A premium product landing page for the Reel Counter Android app. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** (custom design tokens, glass morphism)
- **Framer Motion** (scroll-triggered animations, spring physics)
- **TypeScript**
- **Custom SVG Icons** (no emoji, all hand-crafted vectors)

## Getting Started

```bash
cd webPageForHost
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` with your Firebase download URL:

```
NEXT_PUBLIC_FIREBASE_DOWNLOAD_URL=https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT.appspot.com/o/reel-counter.apk?alt=media
```

## Deploy to Vercel

1. Push this directory to a Git repository
2. Import in [vercel.com/new](https://vercel.com/new)
3. Set the environment variable `NEXT_PUBLIC_FIREBASE_DOWNLOAD_URL` in Vercel dashboard → Settings → Environment Variables
4. Deploy — Vercel auto-detects Next.js

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom utilities
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page composing all sections
└── components/
    ├── Navbar.tsx        # Sticky nav with progress bar
    ├── Hero.tsx          # Animated phone mockup + CTA
    ├── Features.tsx      # 6 feature cards with stagger
    ├── HowItWorks.tsx    # 3-step flow
    ├── Analytics.tsx     # Dashboard preview (heatmap, charts)
    ├── Privacy.tsx       # Privacy emphasis section
    ├── DownloadCTA.tsx   # Final CTA with Firebase link
    ├── Footer.tsx        # Minimal footer
    └── Icons.tsx         # 12 custom SVG icon components
```

## Design Philosophy

- Apple/Google-tier product page aesthetics
- Deep dark theme with indigo/violet gradient accents
- Glass morphism cards with subtle borders
- Scroll-triggered reveals with staggered timing
- Custom SVG icons throughout — zero emoji
- Generous whitespace and large typography
- Mobile-first responsive design
