"use client";

import { useState } from "react";
import styles from "./ExpandableFeatureGrid.module.css";
import { FiClock, FiBookOpen, FiShuffle } from "react-icons/fi";

const features = [
  {
    icon: <FiClock />,
    title: "FAST SETUP",
    short:
      "Create structured product classification records quickly and at scale.",
    long: "Build clean, audit-ready product classification records in days—not months. Our streamlined workflows support large SKU volumes while maintaining consistency, accuracy, and traceability across all markets and shipments.",
  },
  {
    icon: <FiBookOpen />,
    title: "PRODUCT CLARITY",
    short: "Gain a clear, defensible view of your entire product library.",
    long: "Our trade specialists review your full product catalog to determine the most accurate and defensible HS classifications. Each decision balances regulatory compliance with duty efficiency, helping reduce risk while protecting commercial outcomes.",
  },
  {
    icon: <FiShuffle />,
    title: "RULE ADAPTATION",
    short: "Stay compliant as codes, regulations, and definitions change.",
    long: "Tariff schedules, trade rules, and product definitions evolve constantly. We proactively reassess classifications to keep your compliance programs, FTA eligibility, and duty exposure aligned as regulatory requirements shift.",
  },
];

export default function ExpandableFeatureGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.heading}>Product Classification, Simplified</h2>
          <p className={styles.subheading}>
            A structured, compliant approach to classifying products, managing
            regulatory change, and supporting confident global trade decisions.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className={styles.grid}>
          {features.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                data-aos="flip-left"
                key={index}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.title}>{item.title}</h3>

                <div
                  className={`${styles.textWrap} ${
                    isActive ? styles.open : ""
                  }`}
                >
                  <p className={styles.text}>
                    {isActive ? item.long : item.short}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
