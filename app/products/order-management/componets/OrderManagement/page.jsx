"use client";

import { useState } from "react";
import { FaProjectDiagram, FaCogs, FaSmile, FaChartLine } from "react-icons/fa";
import styles from "./OrderManagement.module.css"
const features = [
  {
    id: 1,
    icon: <FaProjectDiagram />,
    title: "Enhance End-to-End Supply Chain Visibility",
    short:
      "Unlock clear, line-level order transparency across your entire supply chain.",
    long: "Gain a unified view of orders, suppliers, and shipment milestones from origin to destination. With real-time visibility into order lines and inventory movement, teams can make informed decisions, improve receiving accuracy, and proactively manage disruptions before they impact fulfillment.",
  },
  {
    id: 2,
    icon: <FaCogs />,
    title: "Reduce Operational Costs Through Automation",
    short:
      "Streamline workflows and eliminate manual coordination with smart automation.",
    long: "Automate order bookings, approvals, and supplier communication using predefined rules and SLAs. By reducing manual handoffs and synchronizing changes instantly across systems, teams lower costs, accelerate execution, and ensure shipments move efficiently without unnecessary delays.",
  },
  {
    id: 3,
    icon: <FaSmile />,
    title: "Improve Customer Experience at Scale",
    short: "Deliver consistent service even as order volumes grow.",
    long: "Keep internal teams, partners, and customers aligned with real-time order and shipment updates. Transparent communication and proactive status notifications help reduce uncertainty, prevent stockouts, and maintain high service levels—even during periods of increased demand.",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "Leverage Data to Optimize Performance",
    short: "Turn operational data into confident, data-driven decisions.",
    long: "Use performance metrics, analytics, and historical trends to identify improvement opportunities across your supply chain. By analyzing cost, timing, and reliability data, teams can adapt quickly, improve predictability, and navigate changing market conditions with confidence.",
  },
];

export default function AirFreightFeatures() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className={styles.features}>
      <div className={styles.content}>
        <h2>Smarter Air Freight, Built for Speed and Visibility</h2>
        <p>
          Move cargo faster and with confidence using data-driven air freight
          solutions designed to keep your supply chain on schedule, informed,
          and in control.
        </p>
      </div>
      <div className={styles.container}>
        {features.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              activeId === item.id ? styles.active : ""
            }`}
            onClick={() => setActiveId(item.id)}
          >
            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{activeId === item.id ? item.long : item.short}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
