// Services.jsx — Technical Skills & Services section
import React from 'react';
import { FiCloud, FiGitMerge, FiBox, FiActivity, FiShield, FiGlobe } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Services.module.css';

const SERVICES = [
  {
    icon: <FiCloud size={26} />,
    title: 'Infrastructure & Cloud',
    desc: 'Design and manage scalable cloud infrastructure on AWS, Azure, and GCP.',
  },
  {
    icon: <FiGitMerge size={26} />,
    title: 'CI/CD & Automation',
    desc: 'Streamline development using GitHub Actions, Jenkins, and scripting tools.',
  },
  {
    icon: <FiBox size={26} />,
    title: 'Containers & Orchestration',
    desc: 'Build and scale containerized applications using Docker & Kubernetes.',
  },
  {
    icon: <FiActivity size={26} />,
    title: 'Monitoring & Logging',
    desc: 'Implement observability using Prometheus, Grafana, ELK, and Loki.',
  },
  {
    icon: <FiShield size={26} />,
    title: 'Security & Compliance',
    desc: 'Secure systems and ensure compliance with DevSecOps best practices.',
  },
  {
    icon: <FiGlobe size={26} />,
    title: 'Web & Application',
    desc: 'Deploy and manage full-stack web applications with high availability.',
  },
];

export default function Services() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className={`reveal ${styles.header}`}>
          <p className="section-eyebrow">What I Offer</p>
          <h2 className="section-heading">Technical Skills &amp; Services</h2>
          <p className="section-subheading">What I know — and what I can build for you.</p>
        </div>

        {/* Services grid with stagger animation */}
        <div ref={gridRef} className={`reveal-stagger ${styles.grid}`}>
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconWrap}>{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
