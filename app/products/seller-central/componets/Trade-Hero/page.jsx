"use client";

import { useEffect } from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Midjourney from "@/public/products/Midjourney.png";
import { FiShoppingCart } from "react-icons/fi";

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
            <FiShoppingCart className={styles.badgeIcon} />
            <span>SELLER CENTRAL</span>
          </div>

          <h2>Everything Sellers Need to Run and Grow Their Business</h2>

          <p>
            Seller Central provides a unified space for managing products,
            handling orders, tracking payments, and coordinating fulfillment.
            Built to support sellers at every stage, it simplifies operations
            and enables consistent, scalable growth.
          </p>

          <button className={styles.cta}>
            Continue as Seller
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className={styles.imageWrap}>
          <Image
            src={Midjourney}
            alt="Seller operations and order fulfillment"
            priority
          />
        </div>
      </div>
    </section>
  );
}
