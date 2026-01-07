"use client";

import styles from "./TruckingHero.module.css";
import Image from "next/image";
import carbonImg from "@/public/products/Carbon-Impact.png";
import { FiWind } from "react-icons/fi";
import { motion } from "framer-motion";

export default function CarbonControlHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <FiWind />
            <span>CARBON CONTROL</span>
          </div>

          <h1 className={styles.title}>
            Take Control of <br />
            Your <span>Carbon Impact</span>
          </h1>

          <p className={styles.description}>
            Measure, manage, and reduce emissions across your supply chain with
            confidence. Carbon Control gives you clear visibility into freight
            emissions, actionable insights to lower your footprint, and the
            tools to build more sustainable logistics operations—without slowing
            your business down.
          </p>

          <button className={styles.cta}>
            Start Reducing Emissions
          </button>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Floating circles */}
          <motion.span
            className={styles.circleOne}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className={styles.circleTwo}
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main Image */}
          <div className={styles.imageCircle}>
            <Image
              src={carbonImg}
              alt="Carbon emissions tracking and sustainability"
              className={styles.image}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
