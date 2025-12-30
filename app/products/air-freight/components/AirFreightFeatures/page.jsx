"use client";

import { useState } from "react";
import {
  FaPlaneDeparture,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa";
import styles from "./AirFreightFeatures.module.css";

const features = [
  {
    id: 1,
    icon: <FaPlaneDeparture />,
    title: "Stay on Schedule with Predictable Air Bookings",
    short:
      "Plan with confidence using stable capacity and centralized booking tools.",
    long: "Our centralized platform connects your entire supply chain, giving you stable capacity, powerful planning tools, and predictable air bookings. With Flexport, every shipment is designed to keep your business moving on schedule.",
  },
  {
    id: 2,
    icon: <FaExclamationTriangle />,
    title: "Catch Issues in Time for Takeoff",
    short:
      "Identify and resolve exceptions before they disrupt delivery timelines.",
    long: "When goods move at the speed of air, exceptions must be addressed immediately. The Flexport Platform flags unexpected issues in real time, enabling your teams to act fast and keep just-in-time supply chains on track.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "See the Full Value of Your Air Freight",
    short:
      "Compare costs and make smarter shipping decisions with real insights.",
    long: "Flexport’s analytics tools help you compare costs across shipping modes and calculate true landed costs down to the SKU. Access insights instantly to optimize spend, improve forecasting, and make confident, data-driven decisions.",
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
