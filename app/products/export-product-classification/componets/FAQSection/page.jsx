"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "What does product classification mean in global trade?",
    answer:
      "Product classification is the process of assigning the correct Harmonized System (HS) or tariff code to goods traded internationally. These codes determine applicable duties, taxes, regulatory controls, and reporting requirements in each destination market.",
  },
  {
    question: "Why is accurate product classification important?",
    answer:
      "Accurate classification helps prevent overpaid duties, shipment delays, penalties, and audit exposure. Even small errors in classification can significantly affect landed costs, compliance posture, and access to trade benefits.",
  },
  {
    question: "How do trade specialists support product classification?",
    answer:
      "Trade specialists evaluate product descriptions, materials, manufacturing methods, and intended use to determine defensible classifications. Decisions are based on regulatory guidance, tariff rules, and classification precedent to ensure long-term compliance.",
  },
  {
    question: "What information is required to begin classification?",
    answer:
      "Accurate classification typically requires detailed product descriptions, component or material breakdowns, country of origin, and supporting materials such as drawings, photos, catalogs, or prior classification references.",
  },
  {
    question: "Can products be classified for multiple countries?",
    answer:
      "Yes. While the Harmonized System provides a global structure, each country applies local tariff extensions and interpretations. Classifications must be reviewed and adjusted to meet individual market requirements.",
  },
  {
    question: "How often do HS or tariff codes change?",
    answer:
      "International tariff frameworks are updated periodically, and national tariff schedules may change more frequently. Ongoing monitoring ensures classifications remain accurate and aligned with evolving regulations.",
  },
  {
    question: "Does product classification impact duty optimization?",
    answer:
      "Yes. Tariff classification directly affects duty rates, eligibility for trade programs, and applicable taxes. Strategic, compliant classification can help manage duty exposure while maintaining regulatory integrity.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div data-aos="fade-up" className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                >
                  <span>{item.question}</span>
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
