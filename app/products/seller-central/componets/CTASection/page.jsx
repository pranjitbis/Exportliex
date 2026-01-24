"use client";

import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      {/* Decorative shapes */}
      <span className={styles.circleOne}></span>
      <span className={styles.circleTwo}></span>

      <div className={styles.container} data-aos="fade-right">
        <h2 className={styles.title}>Ready to get started?</h2>

        <p className={styles.description}>
          Talk to a supply chain solutions expert and see the platform in
          action.
        </p>

        <button className={styles.ctaBtn}>Get Started</button>
      </div>
    </section>
  );
}
