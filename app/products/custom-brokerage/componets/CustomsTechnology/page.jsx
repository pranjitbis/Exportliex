"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./CustomsTechnology.module.css";

import {
  FiFileText,
  FiShield,
  FiDollarSign,
  FiBarChart2,
  FiRefreshCcw,
} from "react-icons/fi";

import customsImg from "@/public/products/Global-trade.png";

export default function CustomsTechnology() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // ✅ REPEAT animation
      mirror: true, // ✅ animate when scrolling UP
      offset: 120,
    });
  }, []);

  return (
    <>
      {/* ================= SECTION 1 ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          {/* LEFT IMAGE */}

          {/* RIGHT CONTENT */}
          <div className={styles.content} data-aos="fade-left">
            <h2 className={styles.title}>What is a customs broker?</h2>

            <p className={styles.text}>
              A customs broker manages the documentation, classification, and
              regulatory filings required to move goods across borders. By
              staying aligned with evolving trade regulations, brokers help
              prevent delays, reduce penalties, and ensure smooth customs
              clearance.
            </p>

            <p className={styles.text}>
              Our customs experts deliver accurate filings, uncover duty-saving
              opportunities, maintain audit-ready records, and resolve customs
              issues quickly—keeping your global supply chain compliant and
              moving without disruption.
            </p>
          </div>
          <div className={styles.imageWrap} data-aos="fade-right">
            <Image
              src={customsImg}
              alt="Customs professionals reviewing shipment details"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className={`${styles.section} ${styles.light}`}>
        <div className={styles.container}>
          {/* RIGHT FEATURE GRID */}
          <div className={styles.grid}>
            <div className={styles.card} data-aos="zoom-in">
              <FiBarChart2 className={styles.icon} />
              <h3>Customs Analysis</h3>
            </div>

            <div
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <FiShield className={styles.icon} />
              <h3>Compliance Toolkit</h3>
            </div>

            <div
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FiDollarSign className={styles.icon} />
              <h3>Tariff Simulator Pro</h3>
            </div>

            <div
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FiFileText className={styles.icon} />
              <h3>Trade Intelligence</h3>
            </div>

            <div
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FiRefreshCcw className={styles.icon} />
              <h3>Duty Drawback</h3>
            </div>
            <div
              className={styles.card}
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FiBarChart2 className={styles.icon} />
              <h3>Classification Accuracy</h3>
            </div>
          </div>
          <div className={styles.content} data-aos="fade-right">
            <h2 className={styles.title}>
              Introducing the Customs
              <br />
              Technology Suite
            </h2>

            <p className={styles.text}>
              A modern set of customs tools built to improve landed cost
              forecasting, classification accuracy, and compliance visibility.
              Gain real-time insights and better control over duties, tariffs,
              and regulatory requirements.
            </p>

            <button className={styles.cta}>Talk with a Customs Expert</button>
          </div>
        </div>
      </section>
    </>
  );
}
