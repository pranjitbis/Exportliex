"use client";

import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DutyDrawbackFAQ.module.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Why is duty drawback often overlooked?",
    answer:
      "Historically, duty drawback has been complex and manual, requiring deep regulatory knowledge and fragmented data. Modern platforms now simplify the process, making recovery more accessible and practical for businesses of all sizes.",
  },
  {
    question: "How much value can duty drawback generate?",
    answer:
      "Recovery amounts vary by duty paid, export activity, and product mix. Even moderate programs can unlock meaningful cash flow when eligible transactions are consistently identified and filed.",
  },
  {
    question: "Who is typically eligible for duty drawback?",
    answer:
      "Companies that import goods and later export them, or export products manufactured using imported materials, often qualify. Eligibility depends on accurate documentation and regulatory alignment.",
  },
  {
    question: "What is required to get started?",
    answer:
      "Getting started involves eligibility assessment, data review, program setup, and structured claim preparation. With the right foundation, duty drawback becomes scalable and repeatable.",
  },
  {
    question: "How are refunds calculated?",
    answer:
      "Refunds are based on duties paid on imported goods that are later exported or destroyed. Accurate matching of import and export records is essential for compliant calculation.",
  },
  {
    question: "How often can claims be submitted?",
    answer:
      "Claims can be filed retroactively for several years and then on a recurring cadence such as monthly or quarterly, depending on volume and business needs.",
  },
];

export default function DutyDrawbackFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header} data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
          <p>
            Clear, practical answers to common questions about duty drawback and
            recovery.
          </p>
        </div>

        {/* FAQ */}
                
        <div data-aos="fade-up" className={styles.faqList}>
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                data-aos-delay={index * 60}
              >
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>

                <div className={styles.answerWrapper}>
                  <div className={styles.answer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
