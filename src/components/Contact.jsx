// Contact.jsx — Contact section with form and info
import React, { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const headRef = useScrollReveal();
  const bodyRef = useScrollReveal({ threshold: 0.08 });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // Simulate form submission (replace with real endpoint or EmailJS)
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 900);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        {/* Header */}
        <div ref={headRef} className={`reveal ${styles.header}`}>
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-heading">Let's Build Something<br />Exceptional</h2>
        </div>

        <div ref={bodyRef} className={`reveal ${styles.grid}`}>
          {/* Left: info */}
          <div className={styles.info}>
            <p className={styles.infoText}>
              Whether it's automating workflows, securing infrastructure, or scaling cloud
              systems — I'm ready to help. Reach out and let's talk.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:momen.elpesa123@gmail.com" className={styles.contactLink}>
                <FiMail /> momen.elpesa123@gmail.com
              </a>
              <a href="https://github.com/MomenLotfy" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FiGithub /> github.com/MomenLotfy
              </a>
              <a href="https://www.linkedin.com/in/momendevops/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <FiLinkedin /> linkedin.com/in/momendevops
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
              disabled={loading}
            >
              {loading ? 'Sending…' : <><FiSend size={14} /> Send Message</>}
            </button>

            {sent && (
              <p className={styles.successMsg}>
                ✅ Thanks! Your message has been sent.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
