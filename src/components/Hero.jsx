// Hero.jsx — Hero section with typewriter animation and stats
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

// Roles that cycle through the typewriter
const ROLES = ['DevOps Engineer', 'Cloud Engineer', 'Automation Engineer', 'DevSecOps Advocate'];

// Stats data
const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '24/7', label: 'Online Support' },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter logic using useEffect + state
  useEffect(() => {
    const current = ROLES[roleIndex];
    let delay = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === current.length) {
      // Pause at full word before deleting
      delay = 1400;
    }

    if (isDeleting && charIndex === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(current.substring(0, charIndex));
      if (!isDeleting && charIndex < current.length) {
        setCharIndex(c => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting) {
        setCharIndex(c => c - 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text content */}
          <div className={styles.textBlock}>
            <p className={styles.greeting}>Hi, I'm</p>
            <h1 className={styles.name}>Mo'men Lotfy</h1>
            <h2 className={styles.roleWrapper}>
              <span className={styles.roleText}>{displayText}</span>
              <span className={styles.cursor} aria-hidden="true">|</span>
            </h2>
            <p className={styles.bio}>
              Passionate DevOps engineer with hands-on experience in CI/CD, automation, and cloud
              infrastructure. I build scalable, secure systems that accelerate agile delivery and
              drive business growth.
            </p>
            <div className={styles.buttons}>
              <a href="#" className={styles.btnPrimary} download>Download CV</a>
              <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
            </div>
          </div>

          {/* Avatar placeholder with decorative ring */}
          <div className={styles.avatarArea}>
            <div className={styles.avatarRing} aria-hidden="true" />
            <div className={styles.avatar}>
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.avatarSvg}>
                <circle cx="100" cy="100" r="100" fill="var(--bg-secondary)" />
                <circle cx="100" cy="82" r="34" fill="var(--accent-soft)" />
                <ellipse cx="100" cy="180" rx="58" ry="40" fill="var(--accent-soft)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.stats}>
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
