"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnalyticsIcon, TimerIcon, TrophyIcon, BrainIcon } from "./Icons";
import ScrollRevealText from "./ScrollRevealText";

const panels = [
  {
    icon: AnalyticsIcon,
    title: "Heatmaps & Trends",
    text: "GitHub-style 5-week activity grids. Hourly distribution charts. Weekly and monthly trend lines that reveal your patterns at a glance.",
    accent: "#818cf8",
  },
  {
    icon: TimerIcon,
    title: "Session Intelligence",
    text: "Automatic session detection with 5-minute timeout. Average session length, total sessions, and per-session reel counts.",
    accent: "#fbbf24",
  },
  {
    icon: BrainIcon,
    title: "Predictive Insights",
    text: "End-of-day projections based on current pace. Week-over-week change percentages. Peak hour identification. Year-end estimates.",
    accent: "#34d399",
  },
  {
    icon: TrophyIcon,
    title: "Content Breakdown",
    text: "15 automated categories from OCR-extracted hashtags: Sports, Comedy, Food, Music, Tech, Fashion, Travel, Gaming, and more.",
    accent: "#f472b6",
  },
];

function DashboardVisual({ progress }: { progress: any }) {
  const activeIndex = useTransform(progress, [0, 1], [0, 3]);

  return (
    <div className="relative w-full max-w-md aspect-square">
      <div className="absolute inset-0 blur-[80px] bg-brand-500/10 rounded-full" />
      <div className="relative w-full h-full rounded-[2rem] border border-white/[0.06] bg-white/[0.02] p-6 overflow-hidden">
        {/* Heatmap */}
        <div className="mb-4">
          <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Activity</p>
          <div className="grid grid-cols-7 gap-[3px]">
            {Array.from({ length: 35 }).map((_, i) => {
              const intensity = Math.random();
              return (
                <div
                  key={i}
                  className="aspect-square rounded-[3px]"
                  style={{
                    backgroundColor: intensity > 0.6
                      ? `rgba(99,102,241,${intensity})`
                      : intensity > 0.3
                      ? `rgba(99,102,241,${intensity * 0.4})`
                      : "rgba(255,255,255,0.03)",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Hourly bars */}
        <div className="mb-4">
          <p className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Hourly</p>
          <div className="flex items-end gap-[2px] h-16">
            {Array.from({ length: 24 }).map((_, i) => {
              const h = i >= 20 ? 50 + Math.random() * 50 : i >= 12 && i <= 14 ? 20 + Math.random() * 30 : Math.random() * 15;
              return <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-brand-600/50 to-brand-400/70" style={{ height: `${h}%` }} />;
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2">
          {[{ l: "Today", v: "47" }, { l: "Predicted", v: "72" }, { l: "Peak", v: "10PM" }, { l: "Sessions", v: "4" }].map((s) => (
            <div key={s.l} className="bg-white/[0.03] rounded-lg p-2 border border-white/[0.04]">
              <p className="text-[8px] text-white/25">{s.l}</p>
              <p className="text-lg font-bold text-white/80">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Analytics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="analytics" ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container-tight w-full grid lg:grid-cols-2 gap-16 items-center px-6">
          {/* Left — Rotating text panels */}
          <div className="relative h-[60vh] flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-6">Intelligence</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-12">
              Data that speaks<br /><span className="gradient-text">for itself.</span>
            </h2>

            <div className="relative h-48">
              {panels.map((panel, i) => {
                const Icon = panel.icon;
                const start = i / panels.length;
                const mid = (i + 0.5) / panels.length;
                const end = (i + 1) / panels.length;

                return (
                  <PanelItem key={panel.title} panel={panel} index={i} progress={scrollYProgress} start={start} mid={mid} end={end} />
                );
              })}
            </div>
          </div>

          {/* Right — Pinned dashboard */}
          <div className="hidden lg:flex justify-center">
            <DashboardVisual progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelItem({ panel, index, progress, start, mid, end }: any) {
  const Icon = panel.icon;
  const opacity = useTransform(progress, [start, start + 0.05, mid, end - 0.05, end], [0, 1, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.05, end - 0.05, end], [30, 0, 0, -30]);

  return (
    <motion.div className="absolute inset-0 flex flex-col justify-start" style={{ opacity, y }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${panel.accent}15`, border: `1px solid ${panel.accent}25` }}>
          <Icon size={20} className="text-white/80" />
        </div>
        <h3 className="text-xl font-semibold">{panel.title}</h3>
      </div>
      <p className="text-lg text-white/40 leading-relaxed max-w-md">{panel.text}</p>
    </motion.div>
  );
}
