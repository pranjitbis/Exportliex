import React from "react";
import styles from "./TalkToExpert.module.css";
import TalkImage from "@/public/TalkToExpert/businessman-pointing.png";
import Image from "next/image";

export default function TalkToExpert() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Build your logistics operations on a single global platform
          </h2>
          <p className={styles.description}>
            We connect every stage of your supply chain to deliver consistent,
            end-to-end results with full visibility and control.
          </p>

          <a href="/" className={styles.cta}>
            Talk to an Expert
          </a>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrap}>
          <Image src={TalkImage} alt="Logistics expert consultation" priority />
        </div>
      </div>
    </section>
  );
}
