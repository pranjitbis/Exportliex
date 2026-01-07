"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiClipboard,
  FiTag,
  FiFileText,
  FiSearch,
  FiTruck,
  FiShield,
} from "react-icons/fi";

import styles from "./CustomsDiagram.module.css";

export default function CustomsDiagram() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  const steps = [
    {
      step: "01",
      icon: <FiClipboard />,
      title: "Pre-Clearance Setup",
      text: "Shipment details and commercial documents are collected and validated early to prevent downstream delays.",
    },
    {
      step: "02",
      icon: <FiTag />,
      title: "Classification & Valuation",
      text: "Products are classified accurately with verified HS codes and declared values aligned to regulations.",
    },
    {
      step: "03",
      icon: <FiFileText />,
      title: "Digital Entry Filing",
      text: "Entries, permits, and certificates are filed electronically with real-time status visibility.",
    },
    {
      step: "04",
      icon: <FiSearch />,
      title: "Customs Review",
      text: "Authorities review submissions while inquiries, holds, or exams are proactively managed.",
    },
    {
      step: "05",
      icon: <FiTruck />,
      title: "Release & Delivery",
      text: "Once cleared, cargo is released and coordinated for final delivery with logistics partners.",
    },
    {
      step: "06",
      icon: <FiShield />,
      title: "Post-Clearance Support",
      text: "Ongoing compliance support, audits, and duty reconciliation ensure long-term risk control.",
    },
  ];

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header} data-aos="fade-up">
        <h2>How our customs brokerage process works</h2>
        <p>
          A structured, technology-enabled workflow designed to reduce risk,
          increase speed, and maintain compliance from submission to delivery.
        </p>
      </div>

      {/* DIAGRAM */}
      <div className={styles.diagram}>
        {steps.map((item, index) => (
          <div
            key={index}
            className={styles.node}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className={styles.circle}>
              <span className={styles.icon}>{item.icon}</span>
            </div>

            <span className={styles.step}>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            {index !== steps.length - 1 && <div className={styles.line} />}
          </div>
        ))}
      </div>
    </section>
  );
}
