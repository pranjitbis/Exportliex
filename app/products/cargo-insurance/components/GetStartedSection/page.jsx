"use client";

import { useEffect } from "react";
import styles from "./GetStartedSection.module.css";
import Image from "next/image";
import cargoImg from "@/public/products/cargoImg.png";
import AOS from "aos";

export default function GetStartedSection() {
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
    <section data-aos="fade-up" className={styles.section}>
      <div className={styles.content}>
        <h2>Move Faster With Confidence</h2>
        <p>Get covered in minutes and keep your cargo moving—protected at every step</p>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div data-aos="fade-right" className={styles.imageWrapper}>
            <Image
              src={cargoImg}
              alt="Cargo shipping at port"
              className={styles.image}
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className={styles.right}>
          {/* SECTION HEADING */}
          <span className={styles.kicker}>GET STARTED</span>

          <h2 className={styles.title}>
            Simple Peace of Mind
            Starts Here
          </h2>

          {/* SHORT DESCRIPTION */}
          <p className={styles.shortDesc}>
            Fast, flexible cargo insurance designed for modern global trade.
          </p>

          <p className={styles.description}>
            Apply in minutes, secure coverage instantly, and ship with
            confidence. Our streamlined insurance process removes friction while
            keeping your cargo protected at every stage of transit.
          </p>

          {/* BUTTON TEXT CHANGED */}
          <button className={styles.cta}>Start Coverage</button>
        </div>
      </div>
    </section>
  );
}
