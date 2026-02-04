"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import SmartImage from "../ui/SmartImage";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 400;

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft <= 10) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)]">
      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="flex flex-col w-full max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 md:gap-0">
            {/* Title */}
            <div className="flex flex-col gap-2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[28px] font-bold tracking-tight text-white"
              >
                Selected Projects
              </motion.h2>
              <div className="h-1 w-12 bg-[var(--accent-primary)] rounded-full" />
            </div>

            {/* Controls - Desktop Only */}
            <div className="hidden md:flex gap-3">
              <button
                className="w-11 h-11 rounded-full border border-[var(--border-active)] flex items-center justify-center text-white transition-all duration-200 hover:bg-white/5"
                onClick={() => scroll("left")}
                aria-label="Scroll Left"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                className="w-11 h-11 rounded-full border border-[var(--accent-primary)] bg-[var(--accent-primary)] flex items-center justify-center text-white transition-all duration-200 shadow-[0_4px_15px_rgba(19,73,236,0.2)]"
                onClick={() => scroll("right")}
                aria-label="Scroll Right"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop: Horizontal Scroll */}
          <div className="hidden md:block overflow-hidden -mx-6 px-6">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-8 scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
              {portfolioConfig.projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-[400px] snap-start flex flex-col gap-4 no-underline"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                    <SmartImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[600ms] ease-out hover:scale-110"
                    />
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-[22px] font-bold mb-1 text-white transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
                        {project.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm font-normal leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="text-[var(--text-muted)] transition-all duration-200 mt-1 hover:text-white hover:translate-x-0.5 hover:-translate-y-0.5"
                      size={18}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold px-3 py-1 bg-[var(--bg-secondary)] rounded-full text-[var(--text-secondary)] border border-[var(--border-active)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="flex md:hidden flex-col gap-8">
            {portfolioConfig.projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col gap-4 no-underline"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Footer */}
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="text-[var(--text-muted)] mt-1"
                    size={18}
                  />
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold px-3 py-1 bg-[var(--bg-secondary)] rounded-full text-[var(--text-secondary)] border border-[var(--border-active)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
