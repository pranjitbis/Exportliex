"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "How are freight emissions calculated?",
    answer:
      "Emissions are calculated using industry-recognized methodologies that factor in transport mode, distance traveled, shipment weight, and fuel efficiency. This approach ensures accurate, consistent measurement across air, ocean, and ground shipments.",
  },
  {
    question: "How does the platform help reduce freight emissions?",
    answer:
      "The platform provides visibility into carbon impact and helps identify lower-emission routing, cleaner transport modes, and consolidation opportunities. These insights allow teams to reduce emissions while maintaining delivery speed and cost efficiency.",
  },
  {
    question:
      "Can I track emissions for shipments managed outside this platform?",
    answer:
      "Yes. You can include shipments handled by other logistics providers to get a complete view of your supply chain emissions. This allows for centralized reporting and more informed sustainability decisions.",
  },
  {
    question:
      "Which sustainability partners support emission reduction efforts?",
    answer:
      "We collaborate with trusted sustainability and climate partners to support emission reduction and offset initiatives, including low-carbon fuel programs and verified environmental projects with measurable impact.",
  },
  {
    question: "What does it cost to reduce or offset emissions?",
    answer:
      "Costs vary based on shipment volume, transport mode, and selected reduction or offset options. All pricing is transparent, and tailored estimates are available to help align sustainability goals with operational budgets.",
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
