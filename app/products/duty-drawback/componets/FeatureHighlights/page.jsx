"use client";

import { useState } from "react";
import styles from "./ExpandableFeatureGrid.module.css";
import { FiDownload, FiUpload, FiDollarSign } from "react-icons/fi";

const features = [
  {
    icon: <FiDownload />,
    title: "IMPORT",
    short: "Importing goods requires upfront customs duties and taxes payments.",
    long:
      "Every import transaction triggers customs duties, taxes, and fees that directly impact landed cost. Many businesses pay more than necessary due to complex regulations, tariff changes, and limited visibility into duty exposure. Without the right systems in place, these costs remain locked in and difficult to recover.",
  },
  {
    icon: <FiUpload />,
    title: "EXPORT",
    short: "Exporting eligible goods creates opportunities to recover paid duties.",
    long:
      "If imported goods or materials are later exported, you may be eligible to recover previously paid duties. However, fragmented shipment data, disconnected ERP systems, and strict compliance requirements often prevent companies from identifying and claiming eligible refunds in time.",
  },
  {
    icon: <FiDollarSign />,
    title: "DUTY DRAWBACK",
    short: "Duty drawback enables refunds, improving cash flow and profitability.",
    long:
      "Exportliex simplifies duty drawback by unifying import, export, and product data into a single platform. With automated eligibility checks, accurate documentation, and expert oversight, businesses can recover refunds faster, reduce compliance risk, and turn missed opportunities into measurable financial gains.",
  },
];


export default function ExpandableFeatureGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            From Import Costs to Recovered Value
          </h2>
          <p className={styles.subheading}>
            A clear, compliant path to identifying, managing, and recovering
            duty drawback refunds across your global trade operations.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className={styles.grid}>
          {features.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`${styles.card} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={styles.icon}>{item.icon}</div>
                <h3 className={styles.title}>{item.title}</h3>

                <div
                  className={`${styles.textWrap} ${
                    isActive ? styles.open : ""
                  }`}
                >
                  <p className={styles.text}>
                    {isActive ? item.long : item.short}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
