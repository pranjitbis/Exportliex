"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    q: "What advantage does the Seller Portal offer compared to managing logistics separately?",
    a: "Instead of coordinating multiple carriers, warehouses, and spreadsheets, the Seller Portal centralizes your entire supply chain in one place. This reduces manual effort, improves accuracy, and gives you a single source of truth for faster, more confident decisions.",
  },
  {
    q: "What is the Seller Portal?",
    a: "The Seller Portal is a unified platform designed for eCommerce brands to manage shipping, inventory visibility, and fulfillment operations across global supply chains from a single interface.",
  },
  {
    q: "Who is the Seller Portal designed for?",
    a: "It is built for online sellers ranging from emerging brands to high-growth businesses operating across marketplaces, direct-to-consumer channels, and international markets.",
  },
  {
    q: "How does the Seller Portal support inventory management?",
    a: "The platform provides real-time visibility into inventory across suppliers, transit, fulfillment centers, and retail locations. This helps prevent stockouts, reduce excess inventory, and maintain strong marketplace performance.",
  },
  {
    q: "Can I connect my existing selling platforms to the Seller Portal?",
    a: "Yes. The Seller Portal integrates with leading eCommerce marketplaces and sales platforms, allowing you to synchronize demand, track orders, and manage replenishment without manual reconciliation.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 data-aos="fade-up">Frequently Asked Questions</h2>

        <div className={styles.list}>
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`${styles.item} ${
                openIndex === i ? styles.active : ""
              }`}
            >
              {/* QUESTION */}
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className={styles.icon}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
