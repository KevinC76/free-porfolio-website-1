"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import styles from "./Experience.module.css";
import { Briefcase, Code, MousePointer2 } from "lucide-react";

const icons = [Briefcase, Code, MousePointer2];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={`layout-container`}>
        <div className={`layout-content-container`}>
          <div className={styles.titleWrapper}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              Professional Experience
            </motion.h2>
            <div className={styles.titleIndicator} />
          </div>

          <div className={styles.timeline}>
            {portfolioConfig.experience.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={styles.item}
                >
                  <div className={styles.lineWrapper}>
                    <div className={styles.iconWrapper}>
                      <Icon size={18} className={styles.icon} />
                    </div>
                    {index !== portfolioConfig.experience.length - 1 && (
                      <div className={styles.line} />
                    )}
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.companyInfo}>
                      <span className={styles.companyName}>{item.company}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.period}>{item.period}</span>
                    </p>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
