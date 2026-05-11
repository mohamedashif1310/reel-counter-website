import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reel Counter — Know Your Scroll",
  description: "Track every Instagram Reel you watch. Understand your habits with rich analytics, smart insights, and achievement-driven goals — all 100% offline.",
  keywords: ["instagram", "reels", "screen time", "digital wellness", "analytics", "tracker"],
  openGraph: {
    title: "Reel Counter — Know Your Scroll",
    description: "Track every Instagram Reel. Rich analytics. Zero data leaves your device.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
