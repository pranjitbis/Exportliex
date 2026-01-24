"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SupplyChainFlow.module.css";
import {
  FiBox,
  FiTruck,
  FiArchive,
  FiSettings,
  FiRepeat,
  FiHome,
  FiCornerUpLeft,
} from "react-icons/fi";

const steps = [
  { label: "Factory", icon: <FiBox /> },
  { label: "Freight", icon: <FiTruck /> },
  { label: "Storage", icon: <FiArchive /> },
  { label: "Preparation", icon: <FiSettings /> },
  { label: "Replenishment", icon: <FiRepeat /> },
  { label: "Fulfillment", icon: <FiHome /> },
  { label: "Parcel", icon: <FiTruck /> },
  { label: "Customer", icon: <FiHome /> },
  { label: "Retail", icon: <FiArchive /> },
  { label: "Returns", icon: <FiCornerUpLeft /> },
];

export default function SupplyChainFlow() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      // Initial state
      tl.set(".step", { opacity: 0, y: 20 }).set(".arrow", {
        opacity: 0,
        backgroundPositionX: "0%",
      });

      // Sequence
      steps.forEach((_, i) => {
        tl.to(`.step-${i}`, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        });

        if (i < steps.length - 1) {
          tl.to(`.arrow-${i}`, {
            opacity: 1,
            duration: 0.3,
          }).to(`.arrow-${i}`, {
            backgroundPositionX: "100%",
            duration: 1,
            ease: "linear",
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <h2>From Factory Floor to Final Destination</h2>
        <p>
          Each stage of the supply chain activates in sequence—clearly
          visualizing how goods move from production through fulfillment,
          delivery, and returns with precision and control.
        </p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <div key={i} className={styles.item}>
            <div className={`${styles.step} step step-${i}`}>
              <div className={styles.icon}>{step.icon}</div>
              <span>{step.label}</span>
            </div>

            {i < steps.length - 1 && (
              <div className={`${styles.arrow} arrow arrow-${i}`} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
