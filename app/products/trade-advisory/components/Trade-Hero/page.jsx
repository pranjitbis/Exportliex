"use client";
import { useEffect } from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import AOS from "aos";
import Midjourney from "@/public/products/Midjourney.png";
import { FiGlobe } from "react-icons/fi";
export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // animate every time
      mirror: true, // animate on scroll up
      offset: 120,
    });
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className={styles.content}>
          <div className={styles.badge}>
            <FiGlobe className={styles.badgeIcon} />
            <span>TRADE ADVISORY</span>
          </div>

          <h2>Transform Trade Data Into Strategic Advantage</h2>

          <p>
            Global trade generates vast amounts of data—but real value comes
            from insight. Our trade advisors help you interpret complex
            information, manage risk, and make confident decisions across every
            transaction.
          </p>

          <button className={styles.cta}>Connect With an Advisor</button>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className={styles.imageWrap}>
          <Image src={Midjourney} alt="Trade advisory discussion" />
        </div>
      </div>
    </section>
  );
}
