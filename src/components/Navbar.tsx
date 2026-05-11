"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Download", href: "#download" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.04]" : ""
      }`}
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9" />
              <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-semibold text-white/90">Reel Counter</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 tracking-wide">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#download"
          className="text-[13px] font-medium text-white/70 hover:text-white px-5 py-2 rounded-full border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300">
          Get App
        </a>
      </div>

      <motion.div className="h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" style={{ width: progressWidth }} />
    </motion.nav>
  );
}
