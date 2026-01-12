"use client";

import styles from "./TruckingHero.module.css";
import Image from "next/image";
import insurance from "@/public/products/cargo-insurance-hero.png";
import { FiShield } from "react-icons/fi";
import { motion } from "framer-motion";

export default function TruckingHero() {
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
            <FiShield />
            <span>CARGO INSURANCE</span>
          </div>

          <h1 className={styles.title}>
            Secure End-to-End <br />
            <span>Cargo Insurance</span>
          </h1>

          <p className={styles.description}>
            Protect your shipments across air, ocean, and land with smart cargo
            insurance designed for global supply chains. Reduce risk, simplify
            claims, and gain complete peace of mind—no matter where your cargo
            travels.
          </p>

          {/* BUTTON CLASS NAME NOT CHANGED */}
          <button className={styles.cta}>Get a Quote</button>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Main Image */}
          <div className={styles.imageCircle}>
            <Image
              src={insurance}
              alt="Cargo insurance protection"
              className={styles.image}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
