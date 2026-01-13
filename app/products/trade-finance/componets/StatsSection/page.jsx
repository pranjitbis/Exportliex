"use client";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>500+</h3>
          <p>Importers and exporters</p>
        </div>

        <div className={`${styles.statCard} ${styles.highlight}`}>
          <h3>$2B+</h3>
          <p>Invoices financed</p>
        </div>

        <div className={styles.statCard}>
          <h3>30+</h3>
          <p>Supplier countries served</p>
        </div>
      </div>
    </section>
  );
}
