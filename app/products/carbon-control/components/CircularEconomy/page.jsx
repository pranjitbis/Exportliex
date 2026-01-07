import styles from "./CircularEconomy.module.css";

export default function CircularEconomySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.kicker}>PRODUCT REUSE</span>

          <h2 className={styles.title}>Give excess inventory a second life</h2>

          <p className={styles.description}>
            Move usable goods where they matter most. Our redistribution
            workflows help businesses redirect surplus, returns, and overstocked
            items to trusted partners—reducing waste while creating measurable
            social and environmental value.
          </p>

        </div>

        {/* RIGHT VISUAL CARD */}
        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>Inventory Redistribution</div>

            <div className={styles.cardBody}>
              <div className={styles.field}>
                <span className={styles.label}>Item Category</span>
                <div className={styles.inputPlaceholder} />
              </div>

              <div className={styles.field}>
                <span className={styles.label}>Condition</span>
                <div className={styles.toggleRow}>
                  <span className={styles.toggleActive} />
                  <span className={styles.toggle} />
                  <span className={styles.toggle} />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.smallField}>
                  <span className={styles.label}>Units</span>
                  <div className={styles.inputPlaceholder} />
                </div>

                <div className={styles.smallField}>
                  <span className={styles.label}>Estimated Weight</span>
                  <div className={styles.inputPlaceholder} />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative ring */}
          <span className={styles.ring} />
        </div>
      </div>
    </section>
  );
}
