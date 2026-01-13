"use client";

import { useEffect } from "react";
import AOS from "aos";
import styles from "./TradeFinanceSection.module.css";

export default function TradeFinanceSection() {
 useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,       // 🔥 IMPORTANT: allow replay
      mirror: true,      // 🔥 animate when scrolling back up
      offset: 120,
    });

    // 🔥 Refresh AOS when component mounts again
    AOS.refresh();
  }, []);

  return (
    <section className={styles.tradeFinance}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header} data-aos="fade-up" >
          <h2>Trade Finance for Global Trade</h2>
          <p>
            Simplify cross-border financing, reduce risk, and accelerate cash
            flow with a modern trade-finance platform.
          </p>
        </div>

        {/* SECTION 1: TEXT LEFT | IMAGE RIGHT */}
        <div className={styles.row}>
          <div className={styles.image} data-aos="fade-right">
            <img
              src="/products/trade-finance-illustration.png"
              alt="Trade finance workflow"
            />
          </div>
          <div className={styles.content} data-aos="fade-left">
            <h3>Automate and Secure Trade Finance Operations</h3>
            <p>
              Digitize letters of credit, guarantees, and invoice financing into
              a single controlled workflow with automated validations. Track
              financing status, shipment progress, and payments in real-time to
              reduce risk and improve working capital.
            </p>
          </div>
        </div>

        {/* SECTION 2: IMAGE LEFT | TEXT RIGHT (DESKTOP ONLY) */}
        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.image} data-aos="fade-left">
            <img
              src="/products/business-collaboration.png"
              alt="Trade finance collaboration"
            />
          </div>

          <div className={styles.content} data-aos="fade-right">
            <h3>Centralize Trade Finance Collaboration</h3>
            <p>
              Work seamlessly with banks, insurers, and logistics partners in a
              shared trade-finance workspace. All approvals, documents, and
              discussions stay connected to the transaction for complete
              transparency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
