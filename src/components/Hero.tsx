"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DownloadIcon, AndroidIcon } from "./Icons";

const FIREBASE_URL = process.env.NEXT_PUBLIC_FIREBASE_DOWNLOAD_URL || "#download";

const headlineWords = ["Know", "Your", "Scroll."];

function AnimatedMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Mesh gradient blobs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", top: "-20%", left: "-10%" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", top: "20%", right: "-5%" }}
        animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #ec4899 0%, transparent 70%)", bottom: "-10%", left: "30%" }}
        animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[260px] h-[540px]">
      <div className="absolute inset-0 blur-[80px] bg-brand-500/15 rounded-full scale-125" />
      <div className="relative w-full h-full rounded-[3rem] border-[2px] border-white/[0.08] bg-surface-1 shadow-2xl overflow-hidden">
        <div className="flex justify-center pt-3">
          <div className="w-20 h-5 bg-black rounded-full" />
        </div>
        <div className="px-4 pt-4">
          <div className="text-center mb-4">
            <p className="text-[9px] text-white/30 uppercase tracking-widest">Today</p>
            <motion.p
              className="text-5xl font-black gradient-text mt-1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              47
            </motion.p>
            <p className="text-[9px] text-white/30">reels watched</p>
          </div>
          <div className="flex justify-center mb-4">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.04)" strokeWidth="6" fill="none" />
              <motion.circle
                cx="50" cy="50" r="42" stroke="url(#hg)" strokeWidth="6" fill="none"
                strokeLinecap="round" strokeDasharray={264}
                initial={{ strokeDashoffset: 264 }}
                animate={{ strokeDashoffset: 264 * 0.37 }}
                transition={{ delay: 1.4, duration: 2, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="hg"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#6366f1" /></linearGradient>
              </defs>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[{ l: "Streak", v: "5d" }, { l: "Peak", v: "10PM" }, { l: "Session", v: "23m" }, { l: "Week", v: "312" }].map((s, i) => (
              <motion.div key={s.l} className="bg-white/[0.03] rounded-xl p-2 border border-white/[0.04]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 + i * 0.1 }}>
                <p className="text-[8px] text-white/30">{s.l}</p>
                <p className="text-sm font-bold text-white/80">{s.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
      <AnimatedMesh />

      <motion.div style={{ y, opacity }} className="relative z-10 container-tight flex flex-col lg:flex-row items-center gap-20 pt-24 pb-16">
        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[11px] text-white/50 font-medium tracking-wide">100% Offline · Zero Data Shared</span>
          </motion.div>

          {/* Headline — word by word */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className={`inline-block mr-4 ${i === 2 ? "gradient-text" : "text-white"}`}
                initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-white/40 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          >
            Track every Instagram Reel. Understand your habits with intelligence that never leaves your device.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a href={FIREBASE_URL}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <DownloadIcon size={18} className="text-black" />
              <span>Download for Android</span>
              <AndroidIcon size={16} className="text-black/50" />
            </a>
            <a href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white/60 hover:text-white border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300">
              See what it does
            </a>
          </motion.div>
        </div>

        {/* Right — Phone */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 60, rotateY: -15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <PhoneMockup />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
