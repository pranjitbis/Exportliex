"use client";

import { FiPackage, FiTrendingUp, FiClock, FiCreditCard } from "react-icons/fi";
import AOS from "aos";
import { useEffect } from "react";
import styles from "./TradeFinanceFeatures.module.css";

export default function TradeFinanceFeatures() {
  
  const features = [
    {
      title: "Inventory & Logistics Funding",
      desc: "Cover the cost of inventory, international freight, customs duties, and warehousing without blocking your working capital. Repay as goods move through your supply chain.",
      icon: <FiPackage />,
    },
    {
      title: "Flexible Term Financing",
      desc: "Secure growth capital for sourcing, expansion, or bulk orders with predictable repayment schedules and clearly defined financing terms.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Accelerated Duty Refunds",
      desc: "Access eligible duty drawback amounts in days instead of months, improving cash flow immediately after shipment clearance.",
      icon: <FiClock />,
    },
    {
      title: "Asset-Backed Credit Lines",
      desc: "Unlock liquidity from inventory and receivables with automated credit limits, transparent pricing, and no hidden conditions.",
      icon: <FiCreditCard />,
    },
  ];

  return (
    <section className={styles.section}  data-aos="fade-up">
      <div className={styles.container}>
        <h2 className={styles.heading}>Smarter Financing for Global Trade</h2>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
