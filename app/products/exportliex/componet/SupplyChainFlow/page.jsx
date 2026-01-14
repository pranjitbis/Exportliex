"use client";

import { useState } from "react";
import styles from "./SupplyChainFlow.module.css";
import {
  FiShoppingCart,
  FiCalendar,
  FiMapPin,
  FiShield,
  FiTruck,
} from "react-icons/fi";

const steps = [
  {
    label: "Order",
    icon: <FiShoppingCart />,
    title: "Streamline Orders from the Start",
    desc: `Centralize purchase orders and supplier collaboration in one platform.
    Validate SKUs, quantities, pricing, and delivery timelines early to eliminate
    errors before cargo moves.`,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Book",
    icon: <FiCalendar />,
    title: "Let Suppliers Manage Bookings with Control",
    desc: `Empower suppliers to book shipments within predefined rules.
    Automated checks ensure compliance while reducing manual coordination.`,
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Track",
    icon: <FiMapPin />,
    title: "Track Every Shipment in Real Time",
    desc: `Monitor shipment milestones and locations across all transport modes.
    Receive proactive alerts for delays and disruptions.`,
    image: "https://cdn-icons-png.freepik.com/512/16919/16919219.png",
    imageClass: "track-step-image", // Custom class only for Track
  },
  {
    label: "Clear",
    icon: <FiShield />,
    title: "Clear Customs Without Friction",
    desc: `Automate documentation and compliance workflows to avoid
    unexpected holds and accelerate clearance.`,
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Deliver",
    icon: <FiTruck />,
    title: "Coordinate Final-Mile Delivery Seamlessly",
    desc: `Align warehouses, carriers, and schedules for smooth last-mile execution
    with real-time updates.`,
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
];
export default function SupplyChainFlow() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Manage Your Supply Chain End to End</h2>

      {/* Steps */}
      <div className={styles.steps}>
        {steps.map((step, i) => (
          <button
            key={step.label}
            className={`${styles.step} ${active === i ? styles.active : ""}`}
            onClick={() => setActive(i)}
          >
            <div className={styles.icon}>{step.icon}</div>
            <span>{step.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div
          key={steps[active].title}
          className={`${styles.text} ${styles.textAnim}`}
        >
          <span className={styles.tag}>
            {steps[active].label.toUpperCase()}
          </span>
          <h3>{steps[active].title}</h3>
          <p>{steps[active].desc}</p>
        </div>

        <div
          key={steps[active].image}
          className={`${styles.imageWrap} ${styles.imageAnim} ${
            steps[active].label === "Track" ? styles.herobahi : ""
          }`}
        >
        <img
  src={steps[active].image}
  alt={steps[active].label}
  className={`${styles.image} ${
    steps[active].label === "Track" ? styles.Tracks : ""
  }`}
/>
        </div>
      </div>
    </section>
  );
}
