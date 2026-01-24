"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AOS from "aos";
import styles from "./GrowthFeatures.module.css";
import Image from "next/image";

const features = [
  {
    title: "Global Shipping Made Simple",
    desc: "Move products across borders with streamlined logistics, compliant workflows, and flexible routing designed for international scale.",
    img: "/products/global-shipping.png",
    icon: "🌍",
  },
  {
    title: "Sell Across Multiple Channels",
    desc: "Expand into new marketplaces without duplicating inventory. Manage sales channels efficiently from a single operational flow.",
    img: "/products/Multi-Channel-Selling.png",
    icon: "🛒",
  },
  {
    title: "Inbound Once, Fulfill Everywhere",
    desc: "Send inventory to one location and distribute intelligently to customers and retail destinations for faster delivery.",
    img: "/products/Inbound-&-Fulfillment.png",
    icon: "📦",
  },
  {
    title: "Inventory That Stays Balanced",
    desc: "Automated replenishment keeps products available without overstocking, helping you maintain healthy inventory levels.",
    img: "/products/Inventory-Management.png",
    icon: "⚖️",
  },
  {
    title: "Flexible Delivery Experiences",
    desc: "Offer customers multiple delivery speeds while maintaining control over costs and service quality.",
    img: "/products/Flexible-Delivery.png",
    icon: "🚚",
  },
  {
    title: "Faster Shipping, Higher Conversions",
    desc: "Accurate delivery timelines build trust, reduce cart abandonment, and improve purchase completion rates.",
    img: "/products/Fast-Shipping-Conversion.png",
    icon: "📈",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  hover: {
    y: -8,
    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
};

export default function GrowthFeatures() {
  const [isHovered, setIsHovered] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header} data-aos="fade-up">
       
          <h2 className={styles.title}>
            Sell Globally.{" "}
            <span className={styles.highlight}>Deliver Reliably.</span> Grow
            Confidently.
          </h2>
          <p className={styles.subtitle}>
            A modern commerce infrastructure that connects logistics,
            fulfillment, and inventory into one seamless growth platform.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {features.map((item, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${isHovered === i ? styles.cardHovered : ""}`}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              custom={i}
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.imageOverlay} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardFooter}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
