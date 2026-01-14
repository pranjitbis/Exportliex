"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import { motion, AnimatePresence } from "framer-motion";
import "aos/dist/aos.css";
import styles from "./TradeOpportunities.module.css";

const tabs = [
  {
    id: "analysis",
    label: "ACE Analysis",
    title: "Trade Intelligence That Reveals Opportunity",
    description:
      "We analyze historical trade data to uncover cost-saving opportunities, identify compliance gaps, and surface insights that are difficult to detect through manual review alone.",
    image: "/products/ACE-Analysis.png",
  },
  {
    id: "compliance",
    label: "Compliance Assessments",
    title: "Clear Insight Into Trade Risk",
    description:
      "Our compliance assessments provide a structured review of your trade activity, helping you reduce exposure, improve accuracy, and build confidence across regulatory requirements.",
    image: "/products/Compliance-Assessments.png",
  },
  {
    id: "duty",
    label: "Duty Minimization",
    title: "Reduce Duty Spend With Proven Strategies",
    description:
      "Duty optimization is achievable with the right expertise. We help you apply tariff engineering, origin strategies, and drawback programs to lower landed costs responsibly.",
    image: "/products/Duty-Minimization.png",
  },
  {
    id: "support",
    label: "Trade Support",
    title: "Ongoing Advisory Across Every Program",
    description:
      "From valuation reviews to trusted trader programs, our advisors support you with ongoing guidance to strengthen operations and adapt to regulatory change.",
    image: "/products/Trade-Support.png",
  },
];

export default function TradeOpportunities() {
  const [active, setActive] = useState(tabs[0]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} data-aos="fade-up">
        Uncover Global Trade Opportunities
      </h2>

      {/* TABS */}
      <div className={styles.tabs} data-aos="fade-up">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              active.id === tab.id ? styles.active : ""
            }`}
            onClick={() => setActive(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.contentWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            {/* LEFT */}
            <div className={styles.text} data-aos="fade-right">
              <span className={styles.label}>{active.label.toUpperCase()}</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>

            {/* RIGHT */}
            <div className={styles.image} data-aos="fade-left">
              <img src={active.image} alt={active.label} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
