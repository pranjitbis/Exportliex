"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./LogisticsImpact.module.css";

export default function LogisticsImpact() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className={styles.impact}>
      <div className={styles.container}>
        {/* METRIC 1 */}
        <motion.div
          className={styles.metric}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-aos="fade-up"
        >
          <span className={styles.value}>12%</span>
          <p className={styles.text}>
            Organizations using Logistics Command report measurable reductions
            in freight spend through improved planning accuracy, execution
            visibility, and exception management.
          </p>
        </motion.div>

        {/* METRIC 2 */}
        <motion.div
          className={`${styles.metric} ${styles.highlight}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className={styles.value}>9%</span>
          <p className={styles.text}>
            Improved container and capacity utilization achieved by identifying
            inefficiencies across routing decisions, consolidation strategies,
            and service selection.
          </p>
        </motion.div>

        {/* METRIC 3 */}
        <motion.div
          className={styles.metric}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className={styles.value}>30%</span>
          <p className={styles.text}>
            Faster response to disruptions by centralizing shipment status,
            operational signals, and stakeholder coordination into a single
            command layer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
