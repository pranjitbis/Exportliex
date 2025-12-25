"use client";
import styles from "./SupplyChainFlow.module.css";

export default function SupplyChainFlow() {
  return (
    <section className={styles.flowSection}>
      <h2>From Factory to Customer</h2>
      <p className={styles.subtitle}>
        Every shipment moves through a connected, intelligent logistics
        pipeline.
      </p>

      <div className={styles.flow}>
        {/* Step 1 */}
        <div className={styles.step}>
          <div className={styles.icon}>🚢✈️</div>
          <h4>Ocean & Air Freight</h4>
          <p>
            Move goods globally with optimized routing, real-time tracking, and
            predictable transit times.
          </p>
        </div>

        <div className={styles.arrow}>→</div>

        {/* Step 2 */}
        <div className={styles.step}>
          <div className={styles.icon}>🛃</div>
          <h4>Customs Clearance</h4>
          <p>
            Clear borders faster with automated compliance, duty visibility, and
            expert brokerage support.
          </p>
        </div>

        <div className={styles.arrow}>→</div>

        {/* Step 3 */}
        <div className={styles.step}>
          <div className={styles.icon}>🚚</div>
          <h4>Trucking</h4>
          <p>
            Move cargo seamlessly with nationwide carriers and real-time, milestone-level visibility.
          </p>
        </div>

        <div className={styles.arrow}>→</div>

        {/* Step 4 */}
        <div className={styles.step}>
          <div className={styles.icon}>📦</div>
          <h4>Fulfillment</h4>
          <p>
            Deliver faster with distributed fulfillment, inventory intelligence,
            and last-mile optimization.
          </p>
        </div>
      </div>
    </section>
  );
}
