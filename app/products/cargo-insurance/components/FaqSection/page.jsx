"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is cargo insurance?",
      answer:
        "Cargo insurance provides financial protection for goods while they are transported by sea, air, road, or rail. Coverage applies from the point of origin through to final delivery.",
    },
    {
      question: "Why do I need cargo insurance?",
      answer:
        "Carrier liability is often limited and may not fully cover the value of your shipment. Cargo insurance ensures you can recover the insured value in the event of loss, theft, or damage.",
    },
    {
      question: "What types of shipments can be insured?",
      answer:
        "Most commercial shipments can be insured, including sea freight, air freight, and inland transport. Door-to-door and multimodal shipments are also supported.",
    },
    {
      question: "How much does cargo insurance cost?",
      answer:
        "Insurance costs are typically a small percentage of the insured shipment value and depend on factors such as cargo type, route, and declared value.",
    },
    {
      question: "How do I file a cargo insurance claim?",
      answer:
        "If your shipment is damaged or lost, notify your insurer promptly and submit required documents such as invoices, packing lists, and photographs. A claims specialist will guide you through the process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADING */}
        <div className={styles.header}>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <p className={styles.subheading}>
            Find clear answers to common questions about cargo insurance,
            coverage options, pricing, and claims.
          </p>
        </div>

        {/* FAQ ITEMS */}
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggleFaq(index)}
              aria-expanded={activeIndex === index}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>
                {activeIndex === index ? "–" : "+"}
              </span>
            </button>

            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.open : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
