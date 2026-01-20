"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DutyDrawbackInfo.module.css";
import { FiHelpCircle, FiCheckCircle, FiTrendingUp } from "react-icons/fi";

export default function DutyDrawbackInfo() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const items = [
    {
      icon: <FiHelpCircle />,
      title: "What is Duty Drawback?",
      text: "Duty drawback is a customs refund program that allows businesses to recover a significant portion of duties, taxes, and fees paid on imported goods that are later exported or destroyed. It helps reduce landed costs, improve cash flow, and increase trade efficiency.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Who Is Eligible?",
      text: "Any business that imports goods and subsequently exports them, or exports products manufactured using imported materials, may qualify. Eligibility depends on accurate records, compliance with customs rules, and timely filings under applicable regulations.",
    },
    {
      icon: <FiTrendingUp />,
      title: "How Do You Maximize Recovery?",
      text: "Maximizing duty drawback requires connecting import, export, and product data while maintaining full compliance. Automation, expert review, and accurate documentation ensure eligible refunds are identified, filed correctly, and recovered faster.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Understanding Duty Drawback
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Duty drawback can be a powerful source of recovered value, but
            understanding eligibility, compliance requirements, and recovery
            strategies is essential to maximizing refunds and maintaining audit
            confidence.
          </motion.p>
        </div>

        {/* CARDS */}
        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
