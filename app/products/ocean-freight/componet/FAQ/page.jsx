"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    id: 1,
    question: "What is ocean freight and how does it work?",
    answer:
      "Ocean freight is a global shipping method used to transport cargo across international waters using large container vessels. It is commonly chosen for moving high-volume or heavy goods efficiently between countries.",
  },
  {
    id: 2,
    question: "Which shipment types are supported in ocean freight?",
    answer:
      "Ocean freight typically supports Full Container Load (FCL) and Less Than Container Load (LCL) shipments. Businesses can select the option that best aligns with their cargo size, budget, and delivery timeline.",
  },
  {
    id: 3,
    question: "How can I track and monitor my ocean shipments?",
    answer:
      "Shipment visibility is provided through digital tracking tools that offer real-time updates, key milestones, estimated arrival times, and access to shipping documents throughout the journey.",
  },
  {
    id: 4,
    question: "What factors commonly impact ocean freight transit times?",
    answer:
      "Transit times can be affected by port congestion, weather conditions, customs clearance, carrier schedules, and global trade disruptions that influence vessel routing.",
  },
  {
    id: 5,
    question:
      "Which global trade routes are covered by ocean freight services?",
    answer:
      "Ocean freight services operate across major international trade lanes, including Trans-Pacific, Asia–Europe, Trans-Atlantic, and intra-Asia routes, ensuring broad global coverage.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState(1); // first open by default

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
      <h2>Frequently Asked Questions</h2>

      <div className={styles.faqList}>
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`${styles.faqItem} ${
              activeId === item.id ? styles.active : ""
            }`}
            onClick={() => toggleFAQ(item.id)}
          >
            <div className={styles.faqQuestion}>
              <h4>{item.question}</h4>
              <span>{activeId === item.id ? "−" : "+"}</span>
            </div>

            <div className={styles.faqAnswer}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
