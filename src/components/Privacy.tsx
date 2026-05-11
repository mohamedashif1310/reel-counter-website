"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldIcon } from "./Icons";
import ScrollRevealText from "./ScrollRevealText";

export default function Privacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 md:py-56 px-6 relative" ref={ref}>
      <div className="container-tight">
        {/* Scroll reveal text */}
        <ScrollRevealText
          text="We built Reel Counter with a radical philosophy. If data doesn't need to leave your device — it won't. No exceptions. No fine print. No accounts. No analytics SDKs. No network calls. Ever."
          className="text-3xl md:text-5xl font-bold leading-snug tracking-tight max-w-4xl mb-24"
        />

        {/* Privacy pillars */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-[2rem] overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {[
            { title: "Zero Network", desc: "No internet access required or used" },
            { title: "No Accounts", desc: "No sign-up, login, or email ever" },
            { title: "Local Only", desc: "SharedPreferences — uninstall deletes all" },
            { title: "No SDKs", desc: "Zero third-party analytics or ads code" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-surface-1 p-8 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 mb-6" />
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-white/35">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
