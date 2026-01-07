"use client";
import React, { useState, useEffect, useRef } from "react";
import brandLogos from "./brandLogos";
import styles from "./BrandLogos.module.css";

export default function BrandLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  // Double the logos array for seamless looping
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className={styles.brandSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
           Join Thousands Of Leading Brands On Flexport
          </h2>
        </div>
        <div
          className={styles.marqueeContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays for fade effect */}
          <div className={styles.fadeLeft}></div>
          <div className={styles.fadeRight}></div>

          {/* Moving Track */}
          <div
            className={`${styles.marqueeTrack} ${
              isPaused ? styles.paused : ""
            }`}
            ref={trackRef}
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
