"use client";

import styles from "./SecuritySection.module.css";
import Image from "next/image";
import securityImg from "@/public/products/SecuritySection.png";

export default function SecuritySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.tag}>SECURITY</span>

          <h2 className={styles.title}>
            Advanced Protection for Cargo in Motion
          </h2>

          <p className={styles.description}>
            Mission-critical shipments require more than standard handling. Our
            logistics network combines real-time GPS tracking, controlled access
            zones, and monitored facilities to ensure valuable goods remain
            secure throughout their journey. From departure to final delivery,
            visibility and protection are built into every step.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrap}>
          <Image
            src={securityImg}
            alt="Cargo security and tracking illustration"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
