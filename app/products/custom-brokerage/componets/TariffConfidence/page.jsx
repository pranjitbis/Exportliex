import styles from "./TariffConfidenceSection.module.css";

export default function TariffConfidenceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT IMAGE (YOU PLACE IMAGE HERE) */}
        <div className={styles.imageWrap}>
          <img src="/products/TariffConfidence.png" alt="Tariff preview" />
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Calculate tariffs
            <br />
            with confidence
          </h2>

          <p className={styles.description}>
            Get a clear, accurate view of duties and total landed costs before
            your shipment moves across borders. Our tariff insights help
            importers make faster, smarter decisions in a complex global trade
            environment.
          </p>

          <p className={styles.subText}>
            With real-time data, landed-cost calculations, and automated alerts
            for policy changes, teams can evaluate duty exposure, identify cost
            savings, and stay compliant as trade regulations evolve.
          </p>

          <button className={styles.cta}>Calculate Now</button>
        </div>
      </div>
    </section>
  );
}
