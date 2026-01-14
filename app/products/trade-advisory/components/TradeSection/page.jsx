"use client";

import { useEffect } from "react";
import AOS from "aos";
import { FiCompass } from "react-icons/fi";
import styles from "./TradeFinanceSection.module.css";

export default function TradeAdvisorySection() {
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
    <section className={styles.tradeFinance}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header} data-aos="fade-up">
          <h2>Trade Advisory for Global Markets</h2>
          <p>
            Make informed trade decisions with expert guidance. Our advisory
            services help you navigate global markets, manage risk, and turn
            complex trade data into strategic advantage.
          </p>
        </div>

        {/* SECTION 1: IMAGE LEFT | TEXT RIGHT */}
        <div className={styles.row}>
          <div className={styles.image} data-aos="fade-right">
            <img
              src="/products/TradeSectionOne.png"
              alt="Trade advisory analysis"
            />
          </div>

          <div className={styles.content} data-aos="fade-left">
            <h3>Expert Guidance Across Trade Decisions</h3>
            <p>
              Our trade advisors work closely with your teams to evaluate market
              conditions, assess exposure, and guide critical decisions across
              sourcing, financing, and cross-border transactions. Every insight
              is grounded in real-world trade experience.
            </p>
          </div>
        </div>

        {/* SECTION 2: IMAGE LEFT | TEXT RIGHT (DESKTOP) */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.image} data-aos="fade-left">
            <img
              src="/products/TradeSectionTow.png"
              alt="Trade advisory collaboration"
            />
          </div>

          <div className={styles.content} data-aos="fade-right">
            <h3>Collaborative Advisory Built on Trust</h3>
            <p>
              We collaborate with finance teams, logistics partners, and senior
              stakeholders to align strategy and execution. Clear guidance,
              transparent communication, and actionable insights ensure
              confident decision-making across global trade operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
