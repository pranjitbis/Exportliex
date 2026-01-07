"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is customs brokerage?",
    answer:
      "Customs brokerage is the process of managing import and export clearance on behalf of businesses. It includes preparing documentation, classifying goods, calculating duties and taxes, and ensuring shipments comply with local and international customs regulations.",
  },
  {
    question: "Can I use your customs brokerage service with any freight provider?",
    answer:
      "Yes. Our customs brokerage services operate independently of freight carriers. You can continue shipping with your existing logistics partners while relying on our team to manage customs clearance and compliance.",
  },
  {
    question: "How do you ensure customs compliance and accurate classification?",
    answer:
      "Shipments are reviewed by licensed customs professionals supported by technology-driven validation. Product classifications, declared values, and duty calculations are checked for accuracy, and records are maintained digitally to support audits and regulatory reviews.",
  },
  {
    question: "What are the advantages of using a digital customs brokerage platform?",
    answer:
      "A digital approach reduces manual errors, speeds up clearance, and provides real-time visibility into filing status. Centralized documentation and automated checks help teams stay compliant while improving operational efficiency across shipments.",
  },
  {
    question: "Do you support customs clearance outside the United States?",
    answer:
      "While U.S. customs clearance is a core offering, brokerage support is also available across key global trade lanes. Our team can help manage international import and export compliance based on your shipping regions and requirements.",
  },
  {
    question: "How can I get started or request a customs brokerage quote?",
    answer:
      "You can request a consultation or pricing estimate directly through our platform. A customs specialist will review your shipment volumes, trade lanes, and compliance needs to recommend the right solution for your business.",
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
