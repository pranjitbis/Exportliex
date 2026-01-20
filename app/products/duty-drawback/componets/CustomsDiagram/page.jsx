"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiDownload,
  FiUpload,
  FiFileText,
  FiLayers,
  FiCheckCircle,
  FiDollarSign,
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
      icon: <FiDownload />,
      title: "Import & Duty Payment",
      text:
        "Goods are imported and customs duties, taxes, and fees are paid at the time of entry, forming the basis for potential drawback eligibility.",
    },
    {
      step: "02",
      icon: <FiUpload />,
      title: "Export or Destruction",
      text:
        "Imported goods, or products manufactured from them, are exported or destroyed in accordance with customs regulations.",
    },
    {
      step: "03",
      icon: <FiFileText />,
      title: "Document Collection",
      text:
        "Import entries, export records, bills of materials, and supporting documents are gathered to support drawback claims.",
    },
    {
      step: "04",
      icon: <FiLayers />,
      title: "Import–Export Matching",
      text:
        "Eligible imports are accurately matched to corresponding exports to confirm refund qualification and claim validity.",
    },
    {
      step: "05",
      icon: <FiCheckCircle />,
      title: "Claim Filing & Review",
      text:
        "Duty drawback claims are prepared, filed, and reviewed to ensure compliance with customs regulations and audit readiness.",
    },
    {
      step: "06",
      icon: <FiDollarSign />,
      title: "Refund Recovery",
      text:
        "Approved claims result in duty refunds being issued, improving cash flow and converting past costs into recovered value.",
    },
  ];

  return (
    <section className={styles.section}>
      {/* HEADER */}
      <div className={styles.header} data-aos="fade-up">
        <h2>How the Duty Drawback Process Works</h2>
        <p>
          A structured, compliant workflow that helps exporters recover paid
          duties efficiently while maintaining full regulatory confidence.
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

            {index !== steps.length - 0 && <div className={styles.line} />}
          </div>
        ))}
      </div>
    </section>
  );
}
