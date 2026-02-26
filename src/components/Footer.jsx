// Footer.jsx — Site footer with branding, links, and social icons
import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from 'react-icons/fi';
import styles from './Footer.module.css';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'];
const SOCIAL = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/MomenLotfy', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/momendevops/', label: 'LinkedIn' },
  { icon: <FiInstagram size={18} />, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Branding */}
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>Mo'<span>Ops</span></a>
          <p className={styles.tagline}>DevOps &amp; Cloud Engineer</p>
        </div>

        {/* Quick links */}
        <nav className={styles.links} aria-label="Footer navigation">
          {NAV_LINKS.map(label => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className={styles.link}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className={styles.social}>
          {SOCIAL.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>© 2025 Mo'men Lotfy. All Rights Reserved.</p>
        <button className={styles.toTop} onClick={scrollToTop} aria-label="Scroll to top">
          <FiArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
