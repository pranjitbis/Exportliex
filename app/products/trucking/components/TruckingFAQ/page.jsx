"use client";

import { useState } from "react";
import styles from "./TruckingFAQ.module.css";

const faqs = [
  {
    question: "What is Trucking with Flexport?",
    answer:
      "Flexport Trucking is a modern, technology-driven ground transportation solution designed to simplify freight movement. It enables businesses to move goods reliably and flexibly across North America with greater visibility and control.",
  },
  {
    question: "How does Flexport Trucking operate?",
    answer:
      "Flexport connects shippers with a trusted network of qualified trucking partners. Shipments are managed end-to-end through a digital platform—from booking and tracking to final delivery—reducing manual coordination.",
  },
  {
    question: "Which shipment types are supported?",
    answer:
      "Flexport Trucking supports a wide range of services, including Full Truckload (FTL), Less Than Truckload (LTL), drayage, and transload shipments, allowing flexibility for different cargo sizes and routes.",
  },
  {
    question: "What does Flexport Trucking cost?",
    answer:
      "Pricing depends on shipment details such as distance, equipment type, and service level. For accurate rates and tailored guidance, connect with our logistics specialists for a personalized quote.",
  },
  {
    question: "What types of goods can be shipped?",
    answer:
      "Flexport supports many freight types, including containerized cargo, palletized goods, oversized freight, and more. If your shipment has special requirements, our team can help assess handling and compliance needs.",
  },
];

export default function TruckingFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.section}>
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

            <div
              className={styles.answer}
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
