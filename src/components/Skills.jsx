// Skills.jsx — Skills section with skill icon grid & hover shake
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Skills.module.css';

// Skill data — using emoji/text icons as SVG images won't load without assets
const SKILLS = [
  { name: 'Linux', emoji: '🐧' },
  { name: 'Bash', emoji: '💻' },
  { name: 'Python', emoji: '🐍' },
  { name: 'Git', emoji: '🔀' },
  { name: 'GitHub', emoji: '🐙' },
  { name: 'GitLab', emoji: '🦊' },
  { name: 'Jenkins', emoji: '🤖' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'Ansible', emoji: '⚙️' },
  { name: 'Terraform', emoji: '🏗️' },
  { name: 'Kubernetes', emoji: '☸️' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Prometheus', emoji: '📊' },
  { name: 'Grafana', emoji: '📈' },
];

export default function Skills() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className={`reveal ${styles.header}`}>
          <p className="section-eyebrow">My Skills</p>
          <h2 className="section-heading">Technologies.</h2>
          <p className="section-subheading">
            Tools and platforms I work with every day to deliver reliable, automated infrastructure.
          </p>
        </div>

        {/* Skill grid — stagger animate on reveal */}
        <div ref={gridRef} className={`reveal-stagger ${styles.grid}`}>
          {SKILLS.map(({ name, emoji }) => (
            <div key={name} className={styles.skillCard} title={name}>
              <span className={styles.skillIcon}>{emoji}</span>
              <span className={styles.skillName}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
