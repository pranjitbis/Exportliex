"use client";

import styles from "./DutyMinimizationSection.module.css";

export default function DutyMinimizationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT IMAGE / VISUAL */}
        <div className={styles.visual}>
          <div className={styles.line}></div>

          <div className={styles.illustration}>
            <img
              src="/products/Dut-Minimization.png"
              alt="Duty minimization strategy"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <span className={styles.tag}>DUTY MINIMIZATION</span>

          <h3>High-Impact Savings Without Added Complexity</h3>

          <p>
            Reducing duty exposure doesn’t need to be complex or disruptive.
            With the right expertise and data-driven approach, businesses can
            identify legitimate savings opportunities while maintaining full
            compliance.
          </p>

          <p>
            Our advisory-led process simplifies analysis, documentation, and
            execution—allowing your teams to focus on results instead of
            operational burden.
          </p>
        </div>
      </div>
    </section>
  );
}
