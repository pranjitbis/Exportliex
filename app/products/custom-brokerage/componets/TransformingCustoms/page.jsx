"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./TransformingCustoms.module.css";

import { FiBarChart2, FiGlobe, FiDollarSign } from "react-icons/fi";

import heroImg from "@/public/products/TransformingCustoms.png"; // replace with your image

export default function TransformingCustoms() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className={styles.section}>
      {/* TOP AREA */}
      <div className={styles.top}>
        {/* LEFT CONTENT */}
        <div className={styles.left} data-aos="fade-right">
          <span className={styles.tag}>
            TRANSFORMING THE CUSTOMS PROCESS
          </span>

          <h2 className={styles.title}>
            Structuring complexity and
            <br />
            turning it into opportunity.
          </h2>

          <p className={styles.description}>
            We modernize customs operations with intelligent automation and
            seamless system integrations. Our platform digitizes and unifies
            data to improve accuracy, reduce errors, and accelerate response
            times—helping teams operate with confidence across global trade.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right} data-aos="fade-left">
          <div className={styles.imageWrap}>
            <Image
              src={heroImg}
              alt="Customs operations and inspection"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURES */}
      <div className={styles.features}>
        <div className={styles.feature} data-aos="fade-up">
          <FiBarChart2 className={styles.icon} />
          <h3>Data-Backed Decisions</h3>
          <p>
            Make informed decisions on pricing, sourcing, and inventory with
            full visibility into landed costs and SKU-level import reporting.
          </p>
        </div>

        <div className={styles.feature} data-aos="fade-up" data-aos-delay="100">
          <FiGlobe className={styles.icon} />
          <h3>Proactive Clearance</h3>
          <p>
            Identify potential issues before they occur. Our experts monitor
            risks in advance and take swift action to keep shipments moving.
          </p>
        </div>

        <div className={styles.feature} data-aos="fade-up" data-aos-delay="200">
          <FiDollarSign className={styles.icon} />
          <h3>Save Money</h3>
          <p>
            Reduce duty exposure without compromising compliance by applying
            smarter import strategies and duty optimization techniques.
          </p>
        </div>
      </div>
    </section>
  );
}
