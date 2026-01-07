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
          Connect with a supply chain solutions expert to explore how our
          platform helps simplify customs, improve visibility, and reduce
          operational risk. See how technology-driven workflows, real-time
          insights, and expert support come together to keep shipments moving
          smoothly and compliance on track— from planning through final
          delivery.
        </p>

        <button className={styles.ctaBtn}>Get Started</button>
      </div>
    </section>
  );
}
