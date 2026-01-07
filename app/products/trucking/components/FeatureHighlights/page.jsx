"use client";

import { useState } from "react";
import styles from "./ExpandableFeatureGrid.module.css";
import { FiMonitor, FiClock, FiTrendingUp } from "react-icons/fi";

const features = [
  {
    icon: <FiMonitor />,
    title: "Near Real-Time Visibility",
    short:
      "Plan and coordinate trucking and warehousing with shared, live data.",
    long: "Custom logistics tools connect carriers, drivers, and warehouses in one workflow. Track freight across yards, regions, and borders while maintaining complete visibility at every stage of the journey.",
  },
  {
    icon: <FiClock />,
    title: "Exceptional On-Time Performance",
    short: "Stay on schedule with proactive alerts and operational insights.",
    long: "Milestone tracking and real-time alerts help teams anticipate delays early. Reduce accessorial costs such as detention and demurrage with live container updates, load status tracking, and performance reporting.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Competitive & Flexible Rates",
    short: "Optimize cost and speed with flexible routing strategies.",
    long: "Move freight efficiently even during congestion using FTL, transloading, and intermodal services. Compare routing scenarios and transit times to balance delivery speed and budget.",
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
