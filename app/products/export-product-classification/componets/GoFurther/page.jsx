"use client";

import styles from "./UnderstandingDutyDrawback.module.css";
import AOS from "aos";
import { FiShield, FiUsers, FiRepeat, FiUmbrella } from "react-icons/fi";
import { useEffect } from "react";
const cards = [
  {
    icon: <FiShield />,
    title: "Customs",
    text:
      "Ensure smooth customs clearance with properly prepared filings, reduced inspection risk, and processes designed to meet evolving regulatory requirements.",
  },
  {
    icon: <FiUsers />,
    title: "Trade Advisory",
    text:
      "Leverage expert guidance to navigate complex trade rules, assess compliance risk, and make informed decisions across global supply chains.",
  },
  {
    icon: <FiRepeat />,
    title: "Duty Drawback",
    text:
      "Identify and recover eligible duties and taxes through structured drawback programs that align imports, exports, and supporting documentation.",
  },
  {
    icon: <FiUmbrella />,
    title: "Cargo Insurance",
    text:
      "Protect the financial value of shipments with coverage tailored to international transit risks, from origin through final delivery.",
  },
];


export default function UnderstandingDutyDrawback() {
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
        {/* HEADER */}
        <div data-aos="fade-up" className={styles.header}>
          <h2 className={styles.heading}>Understanding Duty Drawback</h2>
          <p className={styles.subheading}>
            Duty drawback offers a powerful opportunity to recover import costs,
            but success depends on accurate data, regulatory alignment, and
            disciplined compliance across the trade lifecycle.
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div data-aos="flip-left" key={index} className={styles.card}>
              <div className={styles.iconWrap}>{card.icon}</div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.text}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
