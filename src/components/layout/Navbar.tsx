"use client";

import Link from "next/link";
import { portfolioConfig } from "@/config/portfolio";
import styles from "./Navbar.module.css";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`layout-container`}>
        <div className={`layout-content-container ${styles.innerContainer}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Terminal size={18} />
            </div>
            <span className={styles.logoText}>{portfolioConfig.name}</span>
          </Link>

          <div className={styles.navRight}>
            <ul className={styles.links}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <Link href={portfolioConfig.resumeUrl} className={styles.resumeBtn}>
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
