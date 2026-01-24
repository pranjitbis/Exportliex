"use client";

import styles from "./ImpactTestimonial.module.css";
import Image from "next/image";

export default function ImpactTestimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.quoteIcon}>“</div>

          <p className={styles.quote}>
            By positioning inventory closer to demand, the platform enabled us
            to shorten delivery times without increasing operational overhead.
            Orders now reach customers faster, with minimal internal effort.
            This shift fundamentally changed how we scale fulfillment.
          </p>

          <div className={styles.author}>
            <span className={styles.name}>Akira Chaudhary</span>
            <span className={styles.role}>
             Ceo of Exportliex
            </span>
          </div>
        </div>

      
      </div>

      {/* METRICS */}
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <h3>27%</h3>
          <p>increase in repeat purchases driven by faster delivery</p>
        </div>

        <div className={`${styles.metric} ${styles.highlight}`}>
          <h3>99.2%</h3>
          <p>of orders processed within one business day</p>
        </div>

        <div className={styles.metric}>
          <h3>98.6%</h3>
          <p>on-time delivery performance across regions</p>
        </div>
      </div>
    </section>
  );
}
