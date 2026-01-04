"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is Air Freight?",
    answer:
      "Air freight is a fast and reliable shipping method used to transport goods internationally by air. It is ideal for time-sensitive shipments, high-value cargo, and products that require shorter transit times and predictable delivery schedules.",
  },
  {
    question: "What types of air freight services are available?",
    answer:
      "Air freight services typically include express shipping for urgent deliveries and standard air freight for cost-efficient transport. Options can be tailored based on speed, budget, cargo type, and destination requirements.",
  },
  {
    question: "How does air freight improve shipment visibility and control?",
    answer:
      "Modern air freight platforms provide real-time tracking, digital documentation, automated milestone updates, and centralized communication. This gives teams complete visibility into shipment status and enables faster decision-making when disruptions occur.",
  },
  {
    question: "Which industries commonly use air freight?",
    answer:
      "Air freight is widely used across industries such as retail, electronics, automotive, healthcare, apparel, and manufacturing. Any business that requires fast, reliable international shipping can benefit from air freight solutions.",
  },
  {
    question: "How is air freight pricing determined?",
    answer:
      "Air freight costs depend on factors such as shipment weight and dimensions, route, urgency, fuel surcharges, and customs requirements. Pricing is typically customized to meet specific shipping needs and service levels.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.faqList}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.open : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
