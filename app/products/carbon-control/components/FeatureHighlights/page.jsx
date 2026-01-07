"use client";

import { useState } from "react";
import styles from "./ExpandableFeatureGrid.module.css";
import { FiActivity, FiBarChart2, FiWind } from "react-icons/fi";

const features = [
  {
    icon: <FiActivity />,
    title: "Accurate Emissions Measurement",
    short:
      "Track carbon emissions across shipments with consistent, auditable data.",
    long:
      "Carbon Control captures emissions across transport modes, lanes, and partners—giving you a reliable foundation to understand your logistics footprint at every level.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Actionable Insights & Reporting",
    short:
      "Turn emissions data into insights you can act on.",
    long:
      "Built-in analytics transform emissions data into dashboards and reports, helping teams identify high-impact routes and support ESG and compliance reporting without manual work.",
  },
  {
    icon: <FiWind />,
    title: "Smarter Reduction Strategies",
    short:
      "Reduce emissions without disrupting operations.",
    long:
      "Model alternative routes, modes, and consolidation strategies to lower emissions while maintaining service levels and controlling logistics costs.",
  },
];

export default function ExpandableFeatureGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Built for Modern Trucking Operations
          </h2>
          <p className={styles.subheading}>
            Powerful tools that give you visibility, control, and confidence
            across every mile of your supply chain.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className={styles.grid}>
          {features.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
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
