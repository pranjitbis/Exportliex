"use client";

import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      {/* Decorative shapes */}
      <span className={styles.circleOne}></span>
      <span className={styles.circleTwo}></span>

      <div className={styles.container}>
        <h2 className={styles.title}>Ready to get started?</h2>

        <p className={styles.description}>
          Speak with a supply chain solutions expert and experience the platform
          firsthand. Learn how real-time visibility, smarter workflows, and
          connected data can help you move faster and operate with confidence.
        </p>

        <button className={styles.ctaBtn}>Get Started</button>
      </div>
    </section>
  );
}
