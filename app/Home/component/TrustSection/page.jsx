"use client";
import React from "react";
import brandLogos from "./brandLogos";
import styles from "./BrandLogos.module.css";

export default function BrandLogos() {
  return (
    <section className={styles.brandLogos}>
      <h2>Trusted by the world’s fastest growing brands</h2>

      <div className={styles.slider}>
        {/* Left & Right fade */}
        <div className={styles.leftFade}></div>
        <div className={styles.rightFade}></div>

        {/* Moving track */}
        <div className={styles.track}>
          {brandLogos.concat(brandLogos).map((logo, index) => (
            <div className={styles.card} key={index}>
              <img src={logo.logo} alt={logo.name || "brand"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
