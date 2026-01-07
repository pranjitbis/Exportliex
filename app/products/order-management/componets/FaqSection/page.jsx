"use client";

import { useState } from "react";
import styles from "./FaqSection.module.css";

const faqs = [
  {
    question: "What is Order Management?",
    answer:
      "Order Management is a cloud-based solution that helps you manage purchase orders from creation to delivery. It gives your team a clear view of supplier updates, production progress, and shipment status in one centralized platform.",
  },
  {
    question: "Who should use Order Management?",
    answer:
      "Order Management is designed for importers, exporters, and supply chain teams working with multiple suppliers who want better coordination, fewer delays, and more control over their order workflows.",
  },
  {
    question: "How does Order Management improve visibility?",
    answer:
      "The platform brings together order, supplier, and shipment data into a single view, allowing teams to track order progress in real time, including key milestones like production, inspections, and delivery timelines.",
  },
  {
    question: "Can Order Management integrate with freight and logistics?",
    answer:
      "Yes, Order Management connects directly with freight and logistics workflows so purchase orders flow smoothly into shipment planning and execution without manual data transfer.",
  },
  {
    question: "How much does Order Management cost?",
    answer:
      "Pricing depends on your business size and requirements. You can speak with our team to receive a personalized quote based on your order volume and operational needs.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
