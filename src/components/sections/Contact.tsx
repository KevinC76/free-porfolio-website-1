"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 my-12 bg-[var(--bg-primary)]">
      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left: Contact Info */}
            <div>
              <div className="flex flex-col gap-2 mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[28px] font-bold tracking-tight text-white"
                >
                  Let&apos;s Work Together
                </motion.h2>
                <div className="h-1 w-12 bg-[var(--accent-primary)] rounded-full" />
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[var(--text-secondary)] text-lg leading-relaxed mb-12 max-w-[480px]"
              >
                {portfolioConfig.contact.message}
              </motion.p>

              {/* Contact Details with gap-4 */}
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="flex items-center gap-5 py-0.5 text-white no-underline transition-colors duration-200 hover:text-[var(--accent-primary)]"
                >
                  <div className="w-12 h-12 bg-[var(--bg-secondary)] flex items-center justify-center rounded-lg text-[var(--accent-primary)] border border-[var(--border-subtle)] transition-transform duration-200 hover:scale-110 hover:border-[var(--accent-primary)]">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-medium">{portfolioConfig.email}</span>
                </a>
                
                <a
                  href="#"
                  className="flex items-center gap-5 py-0.5 text-white no-underline transition-colors duration-200 hover:text-[var(--accent-primary)]"
                >
                  <div className="w-12 h-12 bg-[var(--bg-secondary)] flex items-center justify-center rounded-lg text-[var(--accent-primary)] border border-[var(--border-subtle)] transition-transform duration-200 hover:scale-110 hover:border-[var(--accent-primary)]">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-lg font-medium">
                    linkedin.com/in/{portfolioConfig.name.toLowerCase().replace(" ", "")}
                  </span>
                </a>
                
                <div className="flex items-center gap-5 py-0.5 text-white">
                  <div className="w-12 h-12 bg-[var(--bg-secondary)] flex items-center justify-center rounded-lg text-[var(--accent-primary)] border border-[var(--border-subtle)]">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg font-medium">{portfolioConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs font-bold text-[var(--text-muted)] tracking-widest">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="bg-transparent border border-[var(--border-subtle)] px-4 py-4 rounded-md text-white text-[15px] w-full transition-colors duration-200 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[#0f172a]"
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs font-bold text-[var(--text-muted)] tracking-widest">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@email.com"
                    className="bg-transparent border border-[var(--border-subtle)] px-4 py-4 rounded-md text-white text-[15px] w-full transition-colors duration-200 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[#0f172a]"
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs font-bold text-[var(--text-muted)] tracking-widest">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-transparent border border-[var(--border-subtle)] px-4 py-4 rounded-md text-white text-[15px] w-full resize-none transition-colors duration-200 focus:outline-none focus:border-[var(--accent-primary)] focus:bg-[#0f172a]"
                  />
                </div>
                
                <button
                  type="submit"
                  className="mt-4 mb-8 px-4 py-4 bg-[var(--accent-primary)] text-white rounded-md font-bold text-[15px] transition-all duration-200 hover:bg-[var(--accent-secondary)] hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(19,73,236,0.3)]"
                >
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
