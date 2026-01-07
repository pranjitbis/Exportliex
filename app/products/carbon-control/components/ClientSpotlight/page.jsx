import Image from "next/image";
import styles from "./ClientSpotlight.module.css";

export default function ClientSpotlight() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.kicker}>CLIENT SPOTLIGHT</span>

          <h2 className={styles.title}>
            Reducing emissions through smarter supply chain decisions
          </h2>

          <p className={styles.description}>
            Learn how forward-thinking brands are lowering transportation
            emissions by optimizing routes, choosing cleaner modes, and using
            data-driven insights to reduce their carbon footprint—without
            sacrificing speed or reliability.
          </p>

         
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/products/ClientSpotlight.avif"
            alt="Client spotlight sustainability"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
