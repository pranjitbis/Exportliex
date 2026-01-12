"use client";

import styles from "./StatsSection.module.css";

export default function StatsSection() {
  const stats = [
    {
      value: "8K+",
      label: "Clients served",
    },
    {
      value: "$13.6B+",
      label: "Value insured",
      highlight: true,
    },
    {
      value: "~200k",
      label: "Shipments insured",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              stat.highlight ? styles.highlight : ""
            }`}
          >
            <h3 className={styles.value}>{stat.value}</h3>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
