"use client";

import { useState,useEffect } from "react";
import styles from "./FaqSection.module.css";
import AOS from "aos";
const faqs = [
  {
    question: "What is Trade Finance?",
    answer:
      "Trade Finance is a digital platform that helps businesses manage cross-border financing activities such as invoice financing, letters of credit, and payment tracking. It centralizes documentation, approvals, and transaction visibility to reduce risk and improve cash flow.",
  },
  {
    question: "Who should use this Trade Finance platform?",
    answer:
      "The platform is designed for importers, exporters, finance teams, and financial institutions that manage international trade transactions and require greater transparency, control, and efficiency across their financing workflows.",
  },
  {
    question: "How does the platform improve visibility and control?",
    answer:
      "All trade finance activities—including invoices, financing status, approvals, and payment milestones—are consolidated into a single real-time dashboard, enabling teams to track progress, identify risks early, and make informed decisions faster.",
  },
  {
    question: "Does the platform support compliance and risk management?",
    answer:
      "Yes, the platform includes structured workflows and automated checks to support regulatory compliance, reduce manual errors, and help organizations manage financial and operational risk across international trade transactions.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing is tailored based on transaction volume, financing complexity, and business requirements. Our team works with you to provide a customized plan that aligns with your trade finance operations.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // 🔥 IMPORTANT: allow replay
      mirror: true, // 🔥 animate when scrolling back up
      offset: 120,
    });

    // 🔥 Refresh AOS when component mounts again
    AOS.refresh();
  }, []);
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 data-aos="zoom-out-down" className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
             data-aos="fade-up"
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
