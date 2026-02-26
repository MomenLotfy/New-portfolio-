// About.jsx — About Me section
import React from 'react';
import { FiTerminal, FiCloud, FiShield } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './About.module.css';

// Highlights displayed as small tags
const HIGHLIGHTS = [
  { icon: <FiTerminal />, text: 'CI/CD Pipelines' },
  { icon: <FiCloud />, text: 'Cloud Architecture' },
  { icon: <FiShield />, text: 'DevSecOps' },
];

export default function About() {
  const headRef = useScrollReveal();
  const bodyRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* Section header */}
        <div ref={headRef} className={`reveal ${styles.header}`}>
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-heading">Building robust pipelines,<br />one commit at a time.</h2>
        </div>

        {/* Content grid */}
        <div ref={bodyRef} className={`reveal ${styles.grid}`}>
          {/* Left: decorative card */}
          <div className={styles.card}>
            <div className={styles.cardAccent} />
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Mo'men Lotfy</span>
              <span className={styles.cardSub}>DevOps &amp; Cloud Engineer · Cairo, Egypt</span>
              <div className={styles.badges}>
                {HIGHLIGHTS.map(({ icon, text }) => (
                  <span key={text} className={styles.badge}>
                    {icon} {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className={styles.textBlock}>
            <p>
              I'm a DevOps engineer passionate about closing the gap between development and
              operations. With <strong>2+ years</strong> of hands-on experience, I specialize in
              designing automated CI/CD workflows that ship code faster, more reliably, and more
              securely.
            </p>
            <p>
              My toolkit spans the full DevOps landscape — from containerizing applications with
              Docker &amp; Kubernetes to provisioning cloud infrastructure with Terraform on AWS.
              I believe great DevOps isn't just about tools; it's about culture, collaboration, and
              reducing toil so engineers can focus on what matters.
            </p>
            <p>
              When I'm not optimizing pipelines, I'm contributing to open-source projects,
              writing technical blog posts, or experimenting with observability stacks.
            </p>
            <a href="#contact" className={styles.link}>Let's work together →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
