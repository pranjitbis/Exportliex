"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import styles from "./HeroSection.module.css";
import heroImage from "@/public/products/logistics-platform.jpg"; // replace image

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.left}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={styles.badge}>
            <FiCalendar /> BOOKING INTELLIGENCE
          </span>

          <h1 className={styles.title}>
            Smarter Ocean Freight <br />
            Starts with Better Control
          </h1>

          <p className={styles.description}>
            Plan, allocate, and manage ocean freight bookings from one connected
            platform. Track contract performance in real time, reduce capacity
            risk, and respond faster to change—without operational complexity.
          </p>

          <button className={styles.cta}>
            Schedule a Demo <FiArrowRight />
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className={styles.right}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src={heroImage}
            alt="Ocean freight container operations"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
