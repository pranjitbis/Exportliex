"use client";

import styles from "./WarehouseDD.module.css";
import Image from "next/image";
import warehouseImg from "@/public/products/warehouse.avif";
import ddImg from "@/public/products/Real-Time-Visibility.png";

export default function IntelligencePage() {
  return (
    <main>
      {/* SECTION 1 – WAREHOUSE INTELLIGENCE */}
      <section className={styles.section}>
        <div className={styles.container}>
          {/* CONTENT */}
          <div className={styles.content}>
            <span className={styles.tag}>WAREHOUSE INTELLIGENCE</span>

            <h2 className={styles.title}>
              Smarter Warehouse Operations,
          Powered by Live Data
            </h2>

            <p className={styles.description}>
              Gain real-time visibility into inbound and outbound warehouse
              activity. Centralize appointments, monitor milestones, and resolve
              issues before they disrupt operations.
            </p>

            <ul className={styles.list}>
              <li>Track inbound shipments and dock activity in real time</li>
              <li>Coordinate teams and 3PLs from one operational view</li>
              <li>Reduce delays with automated alerts and validations</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className={styles.imageWrap}>
            <img
              src={warehouseImg.src}
              alt="Warehouse intelligence"
              className={styles.image}
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 – REAL-TIME VISIBILITY */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          {/* IMAGE */}
          <div className={styles.imageWrap}>
            <Image
              src={ddImg}
              alt="Real-time visibility"
              className={styles.graphic}
              priority
            />
          </div>

          {/* CONTENT */}
          <div className={styles.content}>
            <span className={styles.tagAlt}>REAL-TIME VISIBILITY</span>

            <h2 className={styles.title}>
              See Your Network in Motion Powered by Live Intelligence
            </h2>

            <p className={styles.description}>
              Watch your supply chain operate in real time. Signals, location
              data, and performance metrics combine into one intelligent control
              layer so teams can act instantly and confidently.
            </p>

            <ul className={styles.list}>
              <li>Live visibility across facilities, routes, and regions</li>
              <li>Early indicators surface risk and delays</li>
              <li>Unified intelligence for faster decisions</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
