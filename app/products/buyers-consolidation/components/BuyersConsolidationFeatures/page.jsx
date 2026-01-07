"use client";

import { useState, useEffect } from "react";
import { FaLayerGroup, FaClipboardCheck, FaChartBar } from "react-icons/fa";
import styles from "./AirFreightFeatures.module.css";
import AOS from "aos";
const features = [
  {
    id: 1,
    icon: <FaLayerGroup />,
    title: "A smarter way to consolidate and optimize",
    short:
      "Group shipments from multiple suppliers to maximize container utilization.",
    long: "Buyer’s Consolidation brings multiple suppliers together under a single shipment, allowing you to make better use of container space. By reducing partial loads and unnecessary LCL movements, you can lower freight costs, improve operational efficiency, and reduce downstream handling and inventory complexity.",
  },
  {
    id: 2,
    icon: <FaClipboardCheck />,
    title: "Streamlined planning and approvals",
    short: "Replace manual coordination with structured planning workflows.",
    long: "Move away from spreadsheets and long email threads with centralized planning and approval workflows. Digitize shipment planning, configure approval rules, and collaborate with stakeholders in real time—so decisions are faster, clearer, and aligned before cargo is ready to move.",
  },
  {
    id: 3,
    icon: <FaChartBar />,
    title: "End-to-end visibility and control",
    short: "Track utilization, performance, and outcomes from one dashboard.",
    long: "Get a complete view of your consolidated shipments—from booking and container utilization to milestones and delivery outcomes. Visualize transit times, cost performance, and utilization trends while generating reports that support better planning, forecasting, and decision-making across your supply chain.",
  },
];

export default function AirFreightFeatures() {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // animate every time
      mirror: true, // animate on scroll up
      offset: 120,
    });
  }, []);
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
            data-aos="flip-right"
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
