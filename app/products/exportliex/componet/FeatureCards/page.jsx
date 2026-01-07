"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiRefreshCcw, FiBarChart2 } from "react-icons/fi";
import styles from "./FeatureCards.module.css";

const features = [
  {
    id: 1,
    icon: <FiMapPin />,
    title: "End-to-End Shipment Visibility",
    short:
      "Track cargo movement with clear, real-time milestone updates.",
    long:
      "Follow shipments across air, ocean, and ground from origin to final delivery. Get proactive alerts, understand cost impact, and maintain visibility without switching tools."
  },
  {
    id: 2,
    icon: <FiRefreshCcw />,
    title: "Connected Teams, Faster Execution",
    short:
      "Keep operations aligned with fewer emails and delays.",
    long:
      "Collaborate in real time with suppliers, carriers, and warehouses on one shared platform. Streamline workflows, reduce manual coordination, and keep shipments moving efficiently."
  },
  {
    id: 3,
    icon: <FiBarChart2 />,
    title: "Insights That Drive Better Decisions",
    short:
      "Turn logistics activity into reliable performance insights.",
    long:
      "Analyze transit times, landed costs, and utilization trends through structured data. Make confident decisions using metrics designed for modern supply chain operations."
  }
];

export default function FeatureCards() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className={styles.section}>
      {/* SECTION HEADER */}
      <div className={styles.header}>
        <h2>Operate Your Supply Chain with Confidence</h2>
        <p>
          A modern logistics platform designed to give teams visibility,
          alignment, and actionable insights across every shipment.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              className={styles.card}
              onClick={() => setActiveId(item.id)}
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
            >
              <div className={styles.icon}>{item.icon}</div>

              <h3 className={styles.title}>{item.title}</h3>

              <p className={styles.short}>{item.short}</p>

              <AnimatePresence>
                {isActive && (
                  <motion.p
                    className={styles.long}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {item.long}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
