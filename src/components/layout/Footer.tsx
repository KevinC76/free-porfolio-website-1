import { portfolioConfig } from "@/config/portfolio";
import styles from "./Footer.module.css";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";
import { FaTerminal } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`layout-container`}>
        <div className={`layout-content-container ${styles.container}`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <FaTerminal size={16} />
            </div>
          </div>
          <h3 className={`text-serif ${styles.quote}`}>
            &ldquo;Simplicity is the ultimate sophistication.&rdquo;
          </h3>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
          </p>
          
          <div className={styles.socials}>
            <a href={`mailto:${portfolioConfig.email}`} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Mail size={18} /></a>
            <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Github size={18} /></a>
            <a href={portfolioConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Linkedin size={18} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Globe size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
