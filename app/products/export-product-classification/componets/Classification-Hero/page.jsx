"use client";

import { useEffect } from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Midjourney from "@/public/products/Midjourney.png";
import { FiPackage } from "react-icons/fi";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 120,
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className={styles.content}>
          <div className={styles.badge}>
            <FiPackage className={styles.badgeIcon} />
            <span>PRODUCT CLASSIFICATION</span>
          </div>

          <h2>Master the Codes. Level Up Your Supply Chain.</h2>

          <p>
            Accurate HS code classification is the foundation of compliant
            global trade. Our specialists help you classify products with
            precision, reduce customs risk, prevent penalties, and unlock
            duty optimization opportunities across international markets.
          </p>

          <button className={styles.cta}>Talk To An Expert</button>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className={styles.imageWrap}>
          <Image
            src={Midjourney}
            alt="Export product classification and warehouse inspection"
            priority
          />
        </div>
      </div>
    </section>
  );
}
