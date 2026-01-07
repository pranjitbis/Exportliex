"use client";

import { FaChartLine, FaClock, FaUsers } from "react-icons/fa";
import styles from "./PlatformStats.module.css";

const stats = [
  {
    id: 1,
    icon: <FaChartLine />,
    value: "90%+",
    title: "Clearer Communication",
    desc: "Most teams report faster, more transparent coordination across suppliers, partners, and internal stakeholders after adopting the platform.",
  },
  {
    id: 2,
    icon: <FaClock />,
    value: "4 hrs",
    title: "Weekly Time Saved",
    desc: "Operations teams reduce manual follow-ups and repetitive tasks, saving hours every week through centralized workflows.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    value: "50+",
    title: "Team Members Onboarded",
    desc: "Companies typically onboard dozens of users across logistics, finance, support, and sales—keeping everyone aligned.",
  },
];

export default function PlatformStats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>

            <div className={styles.value}>{item.value}</div>

            <h3 className={styles.title}>{item.title}</h3>

            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
