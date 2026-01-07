"use client";

import { useState } from "react";
import styles from "./page.module.css";

const faqs = [
  {
    q: "What is this logistics platform?",
    a: "It’s a cloud-based supply chain management platform designed to give businesses end-to-end visibility and control—from purchase orders through final delivery—inside a single digital workspace."
  },
  {
    q: "Who is this platform built for?",
    a: "The platform is designed for importers, exporters, and supply chain teams that need real-time visibility, better coordination, and data-driven decision-making across global operations."
  },
  {
    q: "What capabilities does the platform provide?",
    a: "Core capabilities include shipment tracking, order and inventory management, analytics dashboards, compliance support, and collaboration tools that connect internal teams with logistics partners."
  },
  {
    q: "Can it connect with my existing tools and systems?",
    a: "Yes. The platform supports API-based integrations and data exchange with ERP, WMS, and other enterprise systems, helping reduce manual work and improve data accuracy."
  },
  {
    q: "How is pricing structured?",
    a: "Pricing varies based on business needs, shipment volume, and required features. Teams can speak with a logistics specialist to receive tailored recommendations and transparent pricing options."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>

        <div className={styles.faqList}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span>{item.q}</span>
                  <span className={styles.icon}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.faqAnswer}>
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
