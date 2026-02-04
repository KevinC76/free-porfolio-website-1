"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import SmartImage from "../ui/SmartImage";
import heroImage from "@/assets/hero-image.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[60vh] md:h-screen w-full flex items-center justify-center overflow-hidden text-center"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <SmartImage
          src={heroImage}
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(10,15,26,0.6)] to-[rgba(10,15,26,0.4)]" />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-4 max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--accent-primary)] uppercase tracking-[0.4em] font-bold text-[10px] mb-8"
        >
          {portfolioConfig.role}
        </motion.p>

        {/* Title */}
        <div className="flex flex-col items-center gap-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.8] font-black tracking-tight text-white"
          >
            DESIGNING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.8] font-light italic text-white/90 tracking-tight"
          >
            THE FUTURE
          </motion.h1>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-[440px] text-[var(--text-secondary)] leading-relaxed font-light text-sm tracking-wide"
        >
          {portfolioConfig.bio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mt-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 sm:px-12 sm:py-4 bg-transparent border border-white/20 rounded-2xl text-white text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:bg-white/5 hover:border-white/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-colors duration-200 text-white/60 hover:text-white"
          >
            Contact Me <span className="text-sm">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="hidden md:flex absolute bottom-12 right-12 flex-col items-center gap-4 z-20">
        <span className="text-[10px] [writing-mode:vertical-rl] uppercase tracking-[0.3em] text-white/30">
          Scroll Down
        </span>
        <div className="w-px h-10 bg-white/10" />
      </div>
    </section>
  );
}
