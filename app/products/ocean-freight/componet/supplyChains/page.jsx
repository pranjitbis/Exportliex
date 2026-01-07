"use client";

import { useState } from "react";
import { FiBox, FiTrendingUp, FiDatabase } from "react-icons/fi";
import styles from "./Features.module.css";

const cards = [
  {
    title: "Tailored Expertise for Ocean Freight",
    short: "Leverage customized and guided solutions from industry experts.",
    full: "Leverage customized and guided solutions from industry experts to optimize for your specific needs. Whether it’s timing, routing, or commodity, find the right balance between speed and cost with easy-to-compare services.",
    icon: <FiBox />,
  },
  {
    title: "End-to-End Supply Chain Management",
    short: "Get real-time visibility with automated milestone tracking.",
    full: "Get track-and-trace visibility and automated milestone updates down to the SKU level. Protect your supply chain with exception management backed by expert teams, so changes never catch you off guard.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Data That Drives Better Decisions",
    short: "Make smarter decisions using comprehensive logistics data.",
    full: "Make decisions and run your business with comprehensive supply chain data. Analyze transit times, landed costs, and container utilization to ship more for less and stay ahead of competitors.",
    icon: <FiDatabase />,
  },
];

export default function ExpandableCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.section}>
      {/* SECTION HEADING */}
      <div className={styles.header}>
        <h2 className={styles.heading}>Built for Modern Global Trade</h2>
        <p className={styles.description}>
          Powerful tools, expert guidance, and real-time data—everything you
          need to manage ocean freight efficiently and scale your supply chain
          with confidence.
        </p>
      </div>

      {/* CARDS */}
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className={styles.icon}>{card.icon}</div>

            <h3 className={styles.title}>{card.title}</h3>

            <p className={styles.text}>
              {activeIndex === index ? card.full : card.short}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
