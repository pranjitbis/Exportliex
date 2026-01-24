"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiNavigation,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

import styles from "./LogisticsCommandOverview.module.css";

export default function LogisticsCommandOverview() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        {/* TOP CONTENT */}
        <div className={styles.top}>
          {/* TEXT */}
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.title}>
              Strategic command for modern <br />
              logistics operations
            </h2>

            <p className={styles.description}>
              Logistics Command acts as a centralized intelligence layer that
              brings structure, clarity, and accountability to complex logistics
              operations. It connects shipment movement, order execution,
              supplier coordination, and operational performance into a single,
              cohesive view designed for decision-makers.
            </p>

            <p className={styles.description}>
              Rather than relying on fragmented dashboards or manual reporting,
              teams gain consistent operational context across every stage of
              execution. This enables faster issue detection, improved
              coordination across stakeholders, and more confident decisions
              when conditions change.
            </p>

            <p className={styles.description}>
              By aligning planning data with real-time execution signals,
              Logistics Command helps organizations reduce operational risk,
              improve service reliability, and continuously optimize cost
              structures without increasing complexity.
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/products/logistics-abstract.png"
              alt="Logistics command visualization"
              className={styles.image}
            />
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className={styles.features}>
          <div className={styles.card} data-aos="fade-up">
            <FiNavigation />
            <h4 className={styles.cardTitle}>
              Operational Coordination
            </h4>
            <p className={styles.cardText}>
              Maintain alignment across internal teams, carriers, and service
              providers with shared operational signals that reduce friction
              and improve execution consistency.
            </p>
          </div>

          <div
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <FiPackage />
            <h4 className={styles.cardTitle}>
              Order & Shipment Intelligence
            </h4>
            <p className={styles.cardText}>
              Monitor order progression and shipment movement with contextual
              insights that highlight delays, exceptions, and execution risks
              before they impact outcomes.
            </p>
          </div>

          <div
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay="240"
          >
            <FiTrendingUp />
            <h4 className={styles.cardTitle}>
              Continuous Optimization
            </h4>
            <p className={styles.cardText}>
              Identify opportunities to improve routing decisions, utilization,
              and service selection through data-driven recommendations that
              support long-term efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
