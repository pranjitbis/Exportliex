import styles from "./CustomsCapabilities.module.css";

export default function CustomsCapabilities() {
  return (
    <section className={styles.section}>
      {/* CONTAINER HEADING */}
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          Built to simplify customs at every stage
        </h2>
        <p className={styles.mainDesc}>
          Modern customs operations require more than manual processes. Our
          technology and expert-led approach help teams move faster, stay
          compliant, and uncover savings across every shipment—without adding
          operational complexity.
        </p>
      </div>

      {/* ROW 1 */}
      <div className={styles.row}>
        <div className={styles.imageWrap}>{/* place image */}</div>
        <div className={styles.content}>
          <h3>
            Increase filing speed and accuracy with technology-first customs
          </h3>
          <p>
            Reduce manual effort and improve clearance outcomes with digitally
            enabled customs workflows. Forwarder-agnostic support across cargo
            types, combined with intelligent classification and duty
            optimization, helps teams file accurately and clear shipments
            faster.
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.imageWrap}>{/* place image */}</div>
        <div className={styles.content}>
          <h3>Strengthen your import strategy with data-driven insight</h3>
          <p>
            Turn historical customs data into a strategic advantage. Access
            completed entries, detailed reports, and analytics to uncover duty
            reduction opportunities, evaluate sourcing decisions, and stay ahead
            of regulatory changes with expert guidance.
          </p>
        </div>
      </div>

      {/* ROW 3 */}
      <div className={styles.row}>
        <div className={styles.imageWrap}>{/* place image */}</div>
        <div className={styles.content}>
          <h3>Find critical information instantly, in one place</h3>
          <p>
            Search across products, SKUs, HS codes, purchase orders, and customs
            entry numbers from a single interface. Surface related records
            instantly and eliminate time lost switching between disconnected
            systems.
          </p>
        </div>
      </div>

      {/* ROW 4 */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.imageWrap}>{/* place image */}</div>
        <div className={styles.content}>
          <h3>Centralize product data with a secure product library</h3>
          <p>
            Create a single source of truth for product and SKU-level
            information. A centralized product library accelerates clearance,
            improves classification consistency, and enables faster exception
            resolution while identifying ongoing duty savings.
          </p>
        </div>
      </div>

      {/* ROW 5 */}
      <div className={styles.row}>
        <div className={styles.imageWrap}>{/* place image */}</div>
        <div className={styles.content}>
          <h3>Gain clear visibility into landed costs</h3>
          <p>
            Understand the true cost of bringing products into inventory before
            they arrive. Accurate landed cost visibility supports smarter
            pricing, margin control, and long-term sourcing decisions across
            your supply chain.
          </p>
        </div>
      </div>
    </section>
  );
}
