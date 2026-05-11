"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DownloadIcon, AndroidIcon } from "./Icons";

const FIREBASE_URL = process.env.NEXT_PUBLIC_FIREBASE_DOWNLOAD_URL || "#download";

export default function DownloadCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="download" className="py-40 md:py-56 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/8 rounded-full blur-[200px]" />
      </div>

      <motion.div
        className="container-tight relative text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
          Ready to know<br /><span className="gradient-text">your scroll?</span>
        </h2>
        <p className="text-xl text-white/35 max-w-md mx-auto mb-14 font-light">
          Free. Offline. No sign-up. Just install and gain clarity.
        </p>

        <motion.a
          href={FIREBASE_URL}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:scale-[1.03]"
          whileTap={{ scale: 0.97 }}
        >
          <DownloadIcon size={20} className="text-black" />
          <span>Download for Android</span>
          <AndroidIcon size={18} className="text-black/40" />
        </motion.a>

        <p className="text-[13px] text-white/20 mt-8">Android 9+ · ~8 MB · No in-app purchases</p>
      </motion.div>
    </section>
  );
}
