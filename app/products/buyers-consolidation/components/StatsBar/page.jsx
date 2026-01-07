import styles from "./StatsBar.module.css";

export default function StatsBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* STAT 1 */}
        <div className={styles.stat}>
          <h3 className={styles.value}>30–50%</h3>
          <p className={styles.text}>
            Potential cost savings through optimized buyer consolidation,
            compared to traditional LCL workflows (results may vary based on
            market conditions).
          </p>
        </div>

        {/* STAT 2 */}
        <div className={`${styles.stat} ${styles.highlight}`}>
          <h3 className={styles.value}>250+</h3>
          <p className={styles.text}>
            Businesses using buyer-led consolidation to streamline ocean freight
            operations across global trade lanes.
          </p>
        </div>
      </div>
    </section>
  );
}
