"use client";

import { useMemo, useState, useEffect } from "react";
import styles from "./WorkingCapitalCalculator.module.css";
import AOS from "aos";
export default function WorkingCapitalCalculator() {
  const [revenue, setRevenue] = useState(2800000);
  const [margin, setMargin] = useState(32);
  const [salesType, setSalesType] = useState("DTC");
  const [shipping, setShipping] = useState("Ocean");
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // 🔥 IMPORTANT: allow replay
      mirror: true, // 🔥 animate when scrolling back up
      offset: 120,
    });

    // 🔥 Refresh AOS when component mounts again
    AOS.refresh();
  }, []);
  // REAL FINANCE CALCULATION
  const result = useMemo(() => {
    const dailyRevenue = revenue / 365;

    // Inventory Days by shipping
    const inventoryDays =
      shipping === "Ocean" ? 90 : shipping === "Air" ? 45 : 30;

    // Receivable Days by sales type
    const receivableDays =
      salesType === "B2B" ? 35 : salesType === "Mix" ? 28 : 20;

    // Payables assumption (industry average)
    const payableDays = 20;

    // Cash Conversion Cycle
    const ccc = inventoryDays + receivableDays - payableDays;

    // Working Capital Tied Up
    const workingCapital = dailyRevenue * ccc * (1 - margin / 100);

    return {
      ccc: Math.round(ccc),
      amount: Math.round(workingCapital),
    };
  }, [revenue, margin, salesType, shipping]);

  return (
    <section className={styles.calculator} data-aos="fade-up">
      {/* LEFT */}
      <div className={styles.left}>
        <h2>How much working capital is tied up in your supply chain?</h2>

        <div className={styles.control}>
          <div className={styles.labelRow}>
            <span>Annual Revenue</span>
            <strong>${(revenue / 1_000_000).toFixed(1)}M</strong>
          </div>
          <input
            type="range"
            min="500000"
            max="20000000"
            step="100000"
            value={revenue}
            onChange={(e) => setRevenue(+e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <div className={styles.labelRow}>
            <span>Gross Margin</span>
            <strong>{margin}%</strong>
          </div>
          <input
            type="range"
            min="10"
            max="70"
            value={margin}
            onChange={(e) => setMargin(+e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <span>How do you sell your products?</span>
          <div className={styles.buttonRow}>
            {["DTC", "B2B", "Mix"].map((t) => (
              <button
                key={t}
                className={salesType === t ? styles.active : ""}
                onClick={() => setSalesType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.control}>
          <span>How do you ship your products?</span>
          <div className={styles.buttonRow}>
            {["Ocean", "Air", "Truck"].map((t) => (
              <button
                key={t}
                className={shipping === t ? styles.active : ""}
                onClick={() => setShipping(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button className={styles.linkBtn}>Show Advanced Settings</button>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <h3>Working Capital Tied Up In Your Supply Chain</h3>
        <div className={styles.amount}>${result.amount.toLocaleString()}</div>
        <p>
          It takes <strong>~{result.ccc} days</strong> to convert your inventory
          into cash from sales.
        </p>

        <p className={styles.subtext}>
          Unlock this capital with inventory finance, logistics funding,
          asset-based credit lines, and trade financing solutions.
        </p>
      </div>
    </section>
  );
}
