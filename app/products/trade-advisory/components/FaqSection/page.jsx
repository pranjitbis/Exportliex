"use client";

import { useState, useEffect } from "react";
import styles from "./FaqSection.module.css";
import AOS from "aos";
const faqs = [
  {
    question: "What is Trade Advisory?",
    answer:
      "Trade Advisory is a strategic consulting service that helps businesses navigate complex global trade requirements. It combines expert guidance with data-driven analysis to support decision-making across compliance, duty optimization, and cross-border operations.",
  },
  {
    question: "Who should use Trade Advisory services?",
    answer:
      "Trade Advisory is designed for importers, exporters, and supply chain or finance teams that operate across multiple markets and require expert support to manage risk, improve efficiency, and adapt to evolving trade regulations.",
  },
  {
    question: "How does Trade Advisory help improve decision-making?",
    answer:
      "Advisors analyze historical trade activity, regulatory requirements, and operational workflows to deliver clear recommendations. This structured approach helps organizations identify opportunities, address gaps, and make informed decisions with confidence.",
  },
  {
    question: "Does Trade Advisory support compliance and risk management?",
    answer:
      "Yes, Trade Advisory services include compliance assessments, regulatory guidance, and best-practice recommendations to help businesses reduce exposure, improve accuracy, and maintain alignment with international trade requirements.",
  },
  {
    question: "How is Trade Advisory engagement structured?",
    answer:
      "Engagements are tailored to your business needs and scope of activity. Our team works closely with you to define objectives, provide targeted advisory support, and deliver practical guidance aligned with your trade operations.",
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
        <h2 data-aos="zoom-out-down" className={styles.heading}>
          Frequently Asked Questions
        </h2>

        <div  data-aos="fade-up" className={styles.faqList}>
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
