import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.ctaWrapper}>
      <div className={styles.ctaContent}>
        <h2>Ready to get started?</h2>
        <p>
          Talk to a supply chain solutions expert and see the platform in
          action.
        </p>

        <Link href="/register" className={styles.ctaButton}>
          Get Started
        </Link>
      </div>
    </section>
  );
}
