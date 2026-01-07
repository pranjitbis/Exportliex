"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./CustomsCapabilities.module.css";

import img1 from "@/public/products/enterprise-logistics.avif";
import img2 from "@/public/products/global-trade.avif";
import img3 from "@/public/products/paperwork.avif";
import img4 from "@/public/products/SKUs.avif";
import img5 from "@/public/products/Cargo-containers.jpg";

export default function CustomsCapabilities() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const sections = [
    {
      img: img1,
      title: "Increase filing speed and accuracy with technology-first customs",
      text: `Modern customs clearance demands speed, precision, and consistency.
      Digitally enabled workflows reduce manual effort and eliminate common
      errors in documentation and filings. With forwarder-agnostic support
      across shipment types, teams can standardize processes while applying
      intelligent classification and duty optimization strategies that improve
      clearance timelines and reduce costly delays.`,
    },
    {
      img: img2,
      title: "Strengthen your import strategy with data-driven insight",
      text: `Historical customs data holds powerful insight when used
      strategically. Access completed entries, detailed filing records, and
      analytical reports to identify long-term duty reduction opportunities.
      Evaluate sourcing decisions with confidence, model regulatory impact, and
      stay prepared for evolving trade requirements with expert-backed guidance.`,
    },
    {
      img: img3,
      title: "Find critical information instantly, in one place",
      text: `Disconnected systems slow teams down and increase risk. A unified
      search experience allows users to locate products, SKUs, HS codes,
      purchase orders, and entry numbers instantly. By centralizing access to
      customs records, teams reduce operational friction and respond faster to
      questions, audits, and exceptions.`,
    },
    {
      img: img4,
      title: "Centralize product data with a secure product library",
      text: `A centralized product library creates a reliable source of truth
      for SKU-level data used across customs filings. Consistent classification
      improves accuracy, accelerates repeat entries, and enables faster issue
      resolution. Over time, structured product data also unlocks continuous
      duty savings and operational efficiency.`,
    },
    {
      img: img5,
      title: "Gain clear visibility into landed costs",
      text: `Understanding true landed cost is critical for pricing, margin
      control, and sourcing strategy. Accurate visibility into duties, taxes,
      and fees before goods arrive empowers teams to plan inventory and make
      informed commercial decisions. This clarity supports long-term cost
      optimization across the entire supply chain.`,
    },
  ];

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header} data-aos="fade-up">
        <h2 className={styles.mainTitle}>
          Built to simplify customs at every stage
        </h2>
        <p className={styles.mainDesc}>
          Modern customs operations require more than manual processes. Our
          technology and expert-led approach help teams move faster, stay
          compliant, and uncover savings across every shipment—without adding
          operational complexity.
        </p>
      </div>

      {/* SECTIONS */}
      {sections.map((item, i) => (
        <div
          key={i}
          className={`${styles.row} ${i % 2 !== 0 ? styles.reverse : ""}`}
        >
          <div
            className={styles.imageWrap}
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className={styles.image}
              priority={i === 0}
            />
          </div>

          <div
            className={styles.content}
            data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
