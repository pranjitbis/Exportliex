"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DutyDrawbackBestPractices.module.css";

import {
  FiFileText,
  FiLink,
  FiCheckCircle,
  FiClock,
  FiUsers,
  FiDatabase,
  FiShield,
  FiCpu,
} from "react-icons/fi";

export default function DutyDrawbackBestPractices() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const practices = [
    {
      icon: <FiFileText />,
      title: "Maintain Accurate Trade Records",
      text:
        "Ensure all import entries, invoices, shipping documents, and export filings are complete, consistent, and easily retrievable to support drawback eligibility.",
    },
    {
      icon: <FiLink />,
      title: "Link Imports to Exports Early",
      text:
        "Establish clear relationships between imported goods and exported products as early as possible to improve accuracy and avoid missed refund opportunities.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Confirm Eligibility Before Filing",
      text:
        "Review which goods, materials, or components qualify for duty drawback based on export, destruction, and regulatory requirements.",
    },
    {
      icon: <FiClock />,
      title: "Meet Filing Deadlines",
      text:
        "Submitting claims within approved regulatory timeframes is critical to preserving eligibility and accelerating refund recovery.",
    },
    {
      icon: <FiUsers />,
      title: "Engage Compliance Expertise",
      text:
        "Trade and customs specialists help interpret regulations, reduce filing errors, and ensure claims remain audit-ready.",
    },
    {
      icon: <FiDatabase />,
      title: "Centralize Import and Export Data",
      text:
        "Managing trade data in a single system improves visibility, simplifies claim preparation, and strengthens operational control.",
    },
    {
      icon: <FiShield />,
      title: "Conduct Ongoing Compliance Reviews",
      text:
        "Routine internal reviews help validate claim accuracy, reduce regulatory risk, and protect your business from penalties.",
    },
    {
      icon: <FiCpu />,
      title: "Leverage Automation and Technology",
      text:
        "Automation reduces manual effort, improves data quality, and enables faster, more reliable duty drawback recovery.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header} data-aos="fade-up">
          <h2>Duty Drawback Best Practices</h2>
          <p>
            Proven strategies that help importers and exporters improve
            compliance, reduce risk, and maximize duty drawback recovery.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {practices.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
