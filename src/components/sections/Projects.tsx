"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import styles from "./Projects.module.css";
import SmartImage from "../ui/SmartImage";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 400; // Match card width

      if (direction === "right") {
        // Check if we are at the end (or close to it)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Loop back to start
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      } else {
        // Check if we are at the start
        if (scrollLeft <= 10) {
          // Loop to end
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section id="projects" className={styles.section}>
      <div className={`layout-container`}>
        <div className={`layout-content-container`}>
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={styles.title}
              >
                Selected Projects
              </motion.h2>
              <div className={styles.titleIndicator} />
            </div>
            <div className={styles.controls}>
              <button 
                className={styles.controlBtn} 
                onClick={() => scroll("left")}
                aria-label="Scroll Left"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                className={`${styles.controlBtn} ${styles.controlBtnActive}`} 
                onClick={() => scroll("right")}
                aria-label="Scroll Right"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className={styles.scrollWrapper}>
            <div className={styles.grid} ref={scrollRef}>
              {portfolioConfig.projects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={styles.card}
                >
                  <div className={styles.imageWrapper}>
                    <SmartImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.footer}>
                    <div className={styles.info}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.description}>{project.description}</p>
                    </div>
                    <ArrowUpRight className={styles.arrow} size={18} />
                  </div>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
