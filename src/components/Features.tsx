"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollIcon, OcrIcon, AnalyticsIcon, ShieldIcon, TrophyIcon, TimerIcon } from "./Icons";

const features = [
  {
    icon: ScrollIcon,
    title: "Auto Detection",
    description: "Every reel scroll detected in real-time via accessibility events. No manual input needed.",
    accent: "#60a5fa",
  },
  {
    icon: OcrIcon,
    title: "OCR Intelligence",
    description: "Extracts creator usernames and hashtags using on-device ML Kit text recognition.",
    accent: "#a78bfa",
  },
  {
    icon: AnalyticsIcon,
    title: "Rich Analytics",
    description: "Heatmaps, hourly distributions, weekly trends, and week-over-week comparisons.",
    accent: "#818cf8",
  },
  {
    icon: TimerIcon,
    title: "Duration Tracking",
    description: "Measures watch time per reel. Total screen time and end-of-day predictions.",
    accent: "#fbbf24",
  },
  {
    icon: TrophyIcon,
    title: "Achievements",
    description: "12 unlockable badges. Daily streaks. Milestone tracking. Gamified awareness.",
    accent: "#34d399",
  },
  {
    icon: ShieldIcon,
    title: "Total Privacy",
    description: "Zero network calls. No accounts. No SDK telemetry. Everything on-device.",
    accent: "#f472b6",
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section id="features" ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="px-6 mb-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">Capabilities</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Everything happens<br />
              <span className="gradient-text">automatically.</span>
            </h2>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <motion.div style={{ x }} className="flex gap-5 pl-6 md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex-shrink-0 w-[80vw] md:w-[38vw] lg:w-[28vw] rounded-[1.5rem] border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${feature.accent}10`, border: `1px solid ${feature.accent}20` }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-[15px] text-white/40 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/20 mt-6">
                  <span className="w-6 h-[1px]" style={{ backgroundColor: feature.accent, opacity: 0.4 }} />
                  <span>0{i + 1}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
