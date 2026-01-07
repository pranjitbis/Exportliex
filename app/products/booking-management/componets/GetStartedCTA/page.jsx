import styles from "./GetStartedCTA.module.css";

export default function GetStartedCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>GET STARTED</span>

        <h2 className={styles.title}>
          Effortlessly manage your entire ocean freight operation from one
          unified platform
        </h2>

        <button className={styles.cta}>Schedule a Demo</button>
      </div>

      {/* Decorative background shapes */}
      <div className={styles.shapeOne} />
      <div className={styles.shapeTwo} />
    </section>
  );
}
