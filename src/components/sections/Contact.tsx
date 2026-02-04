"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import styles from "./Contact.module.css";
import { Mail, Linkedin, Github, Twitter, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`layout-container`}>
        <div className={`layout-content-container`}>
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.titleWrapper}>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={styles.title}
                >
                  Let&apos;s Work Together
                </motion.h2>
                <div className={styles.titleIndicator} />
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={styles.text}
              >
                {portfolioConfig.contact.message}
              </motion.p>

              <div className={styles.details}>
                <a href={`mailto:${portfolioConfig.email}`} className={styles.detailItem}>
                  <div className={styles.detailIcon}><Mail size={20} /></div>
                  <span className={styles.detailText}>{portfolioConfig.email}</span>
                </a>
                <a href="#" className={styles.detailItem}>
                  <div className={styles.detailIcon}><Linkedin size={20} /></div>
                  <span className={styles.detailText}>linkedin.com/in/{portfolioConfig.name.toLowerCase().replace(" ", "")}</span>
                </a>
                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}><MapPin size={20} /></div>
                  <span className={styles.detailText}>{portfolioConfig.location}</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              // className={styles.formWrapper}
            >
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.field}>
                  <label htmlFor="name">NAME</label>
                  <input type="text" id="name" placeholder="Your name" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" id="email" placeholder="example@email.com" className={styles.input} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">MESSAGE</label>
                  <textarea id="message" rows={4} placeholder="Tell me about your project..." className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
