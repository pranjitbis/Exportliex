import Image from "next/image";
import styles from "./TradeHero.module.css";

// image import
import heroImg from "@/public/products/TradeHero.png";

export default function TradeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <p className={styles.kicker}>TARIFFS & GLOBAL TRADE</p>

          <h1 className={styles.title}>
            Navigate tariff complexity
            <br />
            with confidence
          </h1>

          <p className={styles.description}>
            Tariffs and trade regulations continue to evolve, creating new
            challenges for importers. Our platform helps businesses stay ahead
            by bringing together accurate data, regulatory context, and
            operational visibility across customs and trade workflows.
          </p>

          <p className={styles.subText}>
            From managing tariff exposure to reducing compliance risk and
            identifying cost recovery opportunities, teams gain the clarity they
            need to make informed decisions in a rapidly changing trade
            environment.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrap}>
          <Image
            src={heroImg}
            alt="Customs and global trade operations"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
