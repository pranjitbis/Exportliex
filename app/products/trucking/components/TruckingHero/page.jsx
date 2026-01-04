"use client";

import styles from "./TruckingHero.module.css";
import Image from "next/image";
import truckImg from "@/public/products/TruckingHero.jpg";
import { FiTruck } from "react-icons/fi";
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
            <FiTruck />
            <span>TRUCKING</span>
          </div>

          <h1 className={styles.title}>
            Shift Your Trucking <br />
            into <span>High Gear</span>
          </h1>

          <p className={styles.description}>
            Modern trucking solutions that move containers across yards,
            regions, and borders with confidence. Track every mile, coordinate
            handoffs, and collaborate with partners seamlessly—all from one
            connected platform.
          </p>

          <button className={styles.cta}>Get Started</button>
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
              src={truckImg}
              alt="Trucking transportation"
              className={styles.image}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
