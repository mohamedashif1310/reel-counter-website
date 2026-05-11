"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 15, suffix: "s", label: "Avg reel duration" },
  { value: 47, suffix: "", label: "Reels per day avg" },
  { value: 100, suffix: "%", label: "Offline operation" },
  { value: 12, suffix: "", label: "Achievements" },
  { value: 15, suffix: "", label: "Content categories" },
  { value: 0, suffix: "", label: "Data shared", highlight: true },
];

function MarqueeContent() {
  return (
    <div className="flex shrink-0">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-baseline gap-3 px-10 whitespace-nowrap">
          <span className={`text-4xl md:text-5xl font-black tracking-tight ${stat.highlight ? "text-emerald-400" : "text-white"}`}>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </span>
          <span className="text-sm text-white/30">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function StatsMarquee() {
  return (
    <section className="py-20 border-y border-white/[0.04] overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </section>
  );
}
