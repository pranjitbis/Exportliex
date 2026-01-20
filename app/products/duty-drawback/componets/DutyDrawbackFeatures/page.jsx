"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DutyDrawbackFeatures.module.css";

export default function DutyDrawbackFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const features = [
    {
      tag: "AUTOMATED",
      title: "Automated Data Integration for Accurate Claims",
      text:
        "Connect import entries, export records, ERP systems, and supplier data into a single automated workflow. Our platform continuously reconciles and validates information, eliminating manual spreadsheets while reducing errors and missed drawback opportunities.",
      image: "/products/feature-automation.png",
      reverse: false,
    },
    {
      tag: "COMPLIANT",
      title: "Compliance Built In, Not Added Later",
      text:
        "Every duty drawback claim is validated against evolving customs regulations, ACE requirements, and trade rules. Proactive checks and automated updates ensure submissions remain audit-ready without constant manual oversight.",
      image: "/products/feature-compliance.png",
      reverse: true,
    },
    {
      tag: "TRANSPARENT",
      title: "End-to-End Visibility Across Every Claim",
      text:
        "Monitor eligibility, filings, supporting documentation, and claim status in real time. Gain full transparency across historical and active claims, providing confidence and control from analysis through payment receipt.",
      image: "/products/feature-visibility.png",
      reverse: false,
    },
    {
      tag: "ACCELERATED",
      title: "Faster Refund Cycles, Stronger Cash Flow",
      text:
        "Structured automation and standardized filings significantly reduce processing timelines. Established programs can begin receiving duty drawback refunds in weeks instead of months.",
      image: "/products/feature-speed.png",
      reverse: true,
    },
    {
      tag: "BALANCED",
      title: "Technology Enhanced by Expert Oversight",
      text:
        "Automation handles scale and consistency, while experienced trade specialists review, optimize, and support each claim. The result is speed without sacrificing accuracy or compliance confidence.",
      image: "/products/feature-experts.png",
      reverse: false,
    },
  ];

  return (
    <section className={styles.section}>
      {features.map((item, index) => (
        <div
          key={index}
          className={`${styles.row} ${
            item.reverse ? styles.reverse : ""
          }`}
        >
          {/* IMAGE */}
          <div
            className={styles.imageWrap}
            data-aos={item.reverse ? "fade-left" : "fade-right"}
          >
            <img src={item.image} alt={item.title} />
          </div>

          {/* CONTENT */}
          <div
            className={styles.content}
            data-aos={item.reverse ? "fade-right" : "fade-left"}
          >
            <span className={styles.tag}>{item.tag}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
