"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioConfig } from "@/config/portfolio";
import { Terminal, Menu, X } from "lucide-react";

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-[100] h-18 flex items-center bg-[rgba(10,15,26,0.85)] backdrop-blur-[16px] border-b border-white/5">
      <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center w-full max-w-[1200px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-4 font-extrabold text-lg tracking-tight text-white"
          >
            <div className="w-8 h-8 bg-[var(--accent-primary)] flex items-center justify-center rounded text-white">
              <Terminal size={18} />
            </div>
            <span>{portfolioConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:text-[var(--accent-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={portfolioConfig.resumeUrl}
              className="text-[11px] font-bold uppercase tracking-wider px-6 py-3 bg-[var(--accent-primary)] text-white rounded transition-all duration-200 hover:bg-[var(--accent-secondary)] hover:shadow-[0_4px_15px_rgba(19,73,236,0.3)]"
            >
              My Resume
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-white transition-colors duration-200 hover:text-[var(--accent-primary)]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <Portal>
          {/* Root container - plain div for solid background to ensure opacity */}
          <div className="fixed inset-0 z-[9999] bg-[#0a0f1a] md:hidden flex flex-col">
            {/* Menu Header (Logo + Close Button) */}
            <div className="flex items-center justify-center px-4 md:px-6 lg:px-8 h-18 border-b border-white/5">
              <div className="flex flex-row justify-between items-center w-full max-w-[1200px]">
                {/* Logo */}
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="flex items-center gap-4 font-extrabold text-lg tracking-tight text-white"
                >
                  <div className="w-8 h-8 bg-[var(--accent-primary)] flex items-center justify-center rounded text-white">
                    <Terminal size={18} />
                  </div>
                  <span>{portfolioConfig.name}</span>
                </Link>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-white transition-colors duration-200 hover:text-[var(--accent-primary)]"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 pb-18">
              {/* Mobile Navigation Links */}
              <ul className="flex flex-col items-center gap-8 list-none text-center">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-2xl font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:text-[var(--accent-primary)]"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link
                  href={portfolioConfig.resumeUrl}
                  onClick={handleLinkClick}
                  className="inline-block text-sm font-bold uppercase tracking-wider px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg transition-all duration-200 hover:bg-[var(--accent-secondary)] hover:shadow-[0_4px_15px_rgba(19,73,236,0.3)]"
                >
                  My Resume
                </Link>
              </motion.div>
            </div>
          </div>
        </Portal>
      )}
    </nav>
  );
}
