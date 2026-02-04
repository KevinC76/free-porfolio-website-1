"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import styles from "./Hero.module.css";
import SmartImage from "../ui/SmartImage";

import heroImage from "@/assets/hero-image.png";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <SmartImage
          src={heroImage}
          alt="Hero background"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.role}
        >
          {portfolioConfig.role}
        </motion.p>

        <div className={styles.titleContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.titleMain}
          >
            DESIGNING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-serif ${styles.titleSub}`}
          >
            THE FUTURE
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.bio}
        >
          {portfolioConfig.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={styles.actions}
        >
          <a href="#projects" className={styles.btnWork}>
            View My Work
          </a>
          <a href="#contact" className={styles.contactLink}>
            Contact Me <span className={styles.arrowIcon}>↗</span>
          </a>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
