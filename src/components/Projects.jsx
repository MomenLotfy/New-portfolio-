// Projects.jsx — DevOps Projects section with hover card effects
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    name: 'Kubernetes Monitor',
    tools: ['Kubernetes', 'Prometheus', 'Grafana'],
    desc: 'A full observability stack on Kubernetes with auto-scaling, visual dashboards, and PagerDuty alerting.',
    color: '#7c9eba',
    github: 'https://github.com/MomenLotfy',
  },
  {
    name: 'CI/CD Pipeline',
    tools: ['Jenkins', 'Docker', 'GitHub Actions'],
    desc: 'Automated multi-stage builds and deployments for Dockerized microservices with zero-downtime rolling updates.',
    color: '#b5a8d0',
    github: 'https://github.com/MomenLotfy',
  },
  {
    name: 'Infrastructure as Code',
    tools: ['Terraform', 'AWS', 'Ansible'],
    desc: 'Full IaC setup provisioning VPCs, EKS clusters, and RDS instances across multiple environments.',
    color: '#88b496',
    github: 'https://github.com/MomenLotfy',
  },
  {
    name: 'DevSecOps Pipeline',
    tools: ['SonarQube', 'Trivy', 'GitLab CI'],
    desc: 'Security-first CI/CD with automated SAST, dependency scanning, and container image vulnerability checks.',
    color: '#c4976a',
    github: 'https://github.com/MomenLotfy',
  },
  {
    name: 'Log Aggregation Stack',
    tools: ['ELK', 'Loki', 'Fluentd'],
    desc: 'Centralised logging for a 15-service microservices cluster with full-text search and alerting.',
    color: '#7c9eba',
    github: 'https://github.com/MomenLotfy',
  },
  {
    name: 'Multi-Cloud DR',
    tools: ['AWS', 'GCP', 'Velero'],
    desc: 'Disaster recovery strategy with cross-cloud snapshot backups and automated failover under 5 minutes.',
    color: '#b5a8d0',
    github: 'https://github.com/MomenLotfy',
  },
];

export default function Projects() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal({ threshold: 0.06 });

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className={`reveal ${styles.header}`}>
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-heading">DevOps Projects</h2>
          <p className="section-subheading">
            A selection of real-world infrastructure and automation projects.
          </p>
        </div>

        {/* Project cards grid */}
        <div ref={gridRef} className={`reveal-stagger ${styles.grid}`}>
          {PROJECTS.map(({ name, tools, desc, color, github }) => (
            <article key={name} className={styles.card}>
              {/* Coloured top bar */}
              <div className={styles.cardBar} style={{ background: color }} />

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{name}</h3>

                {/* Tools tags */}
                <div className={styles.tools}>
                  {tools.map(t => (
                    <span key={t} className={styles.tool}>{t}</span>
                  ))}
                </div>

                <p className={styles.cardDesc}>{desc}</p>

                {/* Links */}
                <div className={styles.links}>
                  <a href={github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                    <FiGithub size={14} /> GitHub
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.linkBtnAlt}`}>
                    <FiExternalLink size={14} /> View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
