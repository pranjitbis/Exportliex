"use client";

import styles from "./ReportsSection.module.css";
import Image from "next/image";
import reportsImg from "@/public/products/reporting.webp";
import sku from "@/public/products/sku.avif";

export default function ReportsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* BLOCK 1 */}
        <div className={styles.block}>
          <div className={styles.imageWrap}>
            <Image
              src={reportsImg}
              alt="Reports dashboard"
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            <span className={styles.tag}>REPORTS</span>
            <h2 className={styles.title}>
              Build <span>Reports</span> in Minutes <br />
              with Searchable Data
            </h2>
            <p className={styles.description}>
              Turn operational data into clear, actionable reports. Analyze
              costs, transit times, and performance metrics in one place.
              Quickly search, review insights in minutes, or schedule reports to
              be shared automatically.
            </p>
            <button className={styles.cta}>Request a Demo</button>
          </div>
        </div>

        {/* BLOCK 2 (REVERSED) */}
        <div className={`${styles.block} ${styles.reverse}`}>
          <div className={styles.imageWrap}>
            <img
              src={sku.src}
              alt="Reports dashboard"
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <span className={styles.tag}>REPORTS</span>
            <h2 className={styles.title}>
              Powerful Insights <br />
              Without the Complexity
            </h2>
            <p className={styles.description}>
              Compare performance trends, drill down to SKU-level details, and
              understand true landed costs without spreadsheets or manual
              reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
