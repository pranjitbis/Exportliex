"use client";
import React, { useState, useRef } from "react";
import brandLogos from "./brandLogos";
import styles from "./BrandLogos.module.css";

export default function BrandLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className={styles.brandSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Trusted by Industry-Leading Brands Worldwide
          </h2>
          <p className={styles.subtitle}>
            Global teams rely on our platform to streamline logistics, improve
            visibility, and scale operations with confidence.
          </p>
        </div>

        <div
          className={styles.marqueeContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade overlays */}
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />

          {/* Moving Track */}
          <div
            ref={trackRef}
            className={`${styles.marqueeTrack} ${
              isPaused ? styles.paused : ""
            }`}
          >
            {duplicatedLogos.map((logo, index) => (
              <div className={styles.logoItem} key={index}>
                <div className={styles.logoWrapper}>
                  <img
                    src={logo.logo}
                    alt={logo.name || "Brand logo"}
                    className={styles.logoImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
