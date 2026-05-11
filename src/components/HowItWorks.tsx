"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DownloadIcon, TargetIcon, BrainIcon } from "./Icons";

const steps = [
  {
    number: "01",
    icon: DownloadIcon,
    title: "Install & Enable",
    description: "Download the APK, grant accessibility permission, and you're done. One-time setup takes under 30 seconds.",
    gradient: "from-brand-500 to-violet-500",
  },
  {
    number: "02",
    icon: TargetIcon,
    title: "Scroll Naturally",
    description: "Open Instagram and browse Reels as usual. The app detects every scroll, measures duration, and extracts metadata — silently.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    icon: BrainIcon,
    title: "Gain Insights",
    description: "Open Reel Counter anytime to see your analytics dashboard — trends, predictions, streaks, achievements, and content breakdown.",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-tight" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-brand-400 font-medium mb-4">How It Works</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Three steps to
            <br />
            <span className="gradient-text">self-awareness.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center mb-8">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient} opacity-10 absolute`} />
                    <div className="w-20 h-20 rounded-full glass flex items-center justify-center relative">
                      <Icon size={32} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 text-xs font-bold text-brand-400 bg-surface-2 px-2 py-0.5 rounded-full border border-brand-500/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/45 leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
