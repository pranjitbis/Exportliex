"use client";

import { useState, useEffect } from "react";
import styles from "./FAQ.module.css";
import { FiMinus, FiPlus } from "react-icons/fi";
import AOS from "aos";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: "What is Buyer’s Consolidation?",
      answer:
        "Buyer’s Consolidation is a logistics strategy that combines shipments from multiple suppliers—often located within the same origin region—into a single container. This approach improves container utilization, lowers freight costs, and simplifies downstream shipping and customs processes.",
    },
    {
      question: "How does Buyer’s Consolidation work?",
      answer:
        "Purchase orders from different suppliers are collected and delivered to a consolidation facility at origin. Once all cargo is received, it is loaded into a single container and shipped together. Throughout the process, shipment status and milestones can be tracked from one centralized platform.",
    },
    {
      question: "What are the key benefits of using Buyer’s Consolidation?",
      answer: (
        <ul>
          <li>
            Lower per-unit freight costs through better container utilization
          </li>
          <li>Fewer individual shipments to coordinate and manage</li>
          <li>Simplified customs clearance and documentation</li>
          <li>More predictable transit schedules and delivery timelines</li>
          <li>Reduced environmental impact per unit shipped</li>
        </ul>
      ),
    },
    {
      question: "Who should consider Buyer’s Consolidation?",
      answer:
        "Buyer’s Consolidation is ideal for importers working with multiple suppliers in close geographic proximity. It’s especially valuable for businesses looking to control shipping costs, improve planning accuracy, and gain better visibility across inbound supply chains.",
    },
    {
      question: "How much does Buyer’s Consolidation cost?",
      answer:
        "Pricing varies based on shipment volume, origin locations, consolidation requirements, and market conditions. To receive an accurate quote tailored to your supply chain, we recommend speaking directly with a logistics expert.",
    },
  ];
    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // animate every time
      mirror: true, // animate on scroll up
      offset: 120,
    });
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.list}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div data-aos="fade-up" key={index} className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  {isOpen ? <FiMinus /> : <FiPlus />}
                </button>

                {isOpen && <div className={styles.answer}>{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
