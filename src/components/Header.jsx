/* components/Header.jsx */
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow/blur to nav after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          Mo'<span>Ops</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className={styles.controls}>
          {/* Theme toggle */}
          <button
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>

          {/* Hire Me CTA */}
          <a href="#contact" className={styles.cta}>Hire Me</a>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className={styles.mobileLink} onClick={handleLinkClick}>
            {label}
          </a>
        ))}
        <a href="#contact" className={styles.mobileCta} onClick={handleLinkClick}>
          Hire Me
        </a>
      </div>
    </header>
  );
}
