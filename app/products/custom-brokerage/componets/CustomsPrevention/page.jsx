"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FiFileText, FiHash, FiGlobe } from "react-icons/fi";

import styles from "./CustomsRiskGrid.module.css";

export default function CustomsRiskGrid() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  const data = [
    {
      icon: <FiFileText />,
      title: "Documentation integrity",
      problem:
        "Inconsistent invoices, packing lists, and declarations slow down customs review.",
      solution:
        "Structured validation ensures every document aligns before submission, reducing review cycles and clearance holds.",
    },
    {
      icon: <FiHash />,
      title: "Accurate tariff classification",
      problem:
        "Manual HS code assignment often leads to misclassification and reassessments.",
      solution:
        "Automated classification logic paired with expert review improves accuracy and lowers exposure to penalties.",
    },
    {
      icon: <FiGlobe />,
      title: "Regulatory alignment",
      problem: "Trade rules change frequently across regions and agencies.",
      solution:
        "Continuous regulatory monitoring keeps filings aligned with current requirements across customs authorities.",
    },
  ];

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header} data-aos="fade-up">
        <h2>Reduce customs delays and risk</h2>
        <p>
          Most clearance issues stem from predictable gaps. Addressing them
          early helps teams maintain velocity, reduce risk, and protect margins.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p className={styles.problem}>{item.problem}</p>

            <div className={styles.divider} />

            <p className={styles.solution}>{item.solution}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
