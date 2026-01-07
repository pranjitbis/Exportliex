"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What is Booking Management?",
    answer:
      "Booking Management is a centralized system that helps you create, track, and confirm freight bookings across suppliers and carriers in one place. It reduces manual coordination and keeps shipment details accurate and up to date.",
  },
  {
    question: "Who is this solution designed for?",
    answer:
      "It’s built for importers, exporters, logistics teams, and supply chain managers who handle multiple shipments and suppliers and want better visibility, control, and on-time performance.",
  },
  {
    question: "How does the booking workflow work?",
    answer:
      "Suppliers receive booking requests through the platform, confirm or update shipment details, and all changes are reflected in real time. Your team always has visibility into booking status, schedules, and updates.",
  },
  {
    question: "Can it integrate with other systems?",
    answer:
      "Yes. Booking Management integrates with order management, shipment tracking, and reporting tools so confirmed bookings stay aligned with purchase orders, milestones, and downstream workflows.",
  },
  {
    question: "Is pricing flexible?",
    answer:
      "Pricing depends on shipment volume, feature requirements, and level of support. Our team works with you to design a plan that fits your operational needs and scale.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        {/* FAQ LIST */}
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className={`${styles.item} ${
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
