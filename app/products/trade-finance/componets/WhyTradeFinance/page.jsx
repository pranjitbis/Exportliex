"use client";

import {
  FiShield,
  FiDollarSign,
  FiLayers,
  FiZap,
  FiEye,
  FiRepeat,
} from "react-icons/fi";
import {useEffect} from "react"
import AOS from "aos";
import styles from "./WhyTradeFinance.module.css";
export default function WhyTradeFinance() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // 🔥 IMPORTANT: allow replay
      mirror: true, // 🔥 animate when scrolling back up
      offset: 120,
    });

    // 🔥 Refresh AOS when component mounts again
    AOS.refresh();
  }, []);

  const items = [
    {
      icon: <FiShield />,
      title: "Non-Dilutive Capital",
      desc: "Access growth funding without giving up equity or control as your business scales globally.",
    },
    {
      icon: <FiDollarSign />,
      title: "Release Trapped Cash",
      desc: "Convert inventory and in-transit goods into usable capital to fuel operations and expansion.",
    },
    {
      icon: <FiLayers />,
      title: "Built-In Finance",
      desc: "Manage logistics and financing together through one connected, easy-to-use platform.",
    },
    {
      icon: <FiZap />,
      title: "Faster Approvals",
      desc: "Simple underwriting and streamlined reviews mean quicker access to the funds you need.",
    },
    {
      icon: <FiEye />,
      title: "Transparent Pricing",
      desc: "Know exactly what you’re paying with clear terms and no unexpected charges.",
    },
    {
      icon: <FiRepeat />,
      title: "Flexible Capital Use",
      desc: "Move funds across inventory, freight, and operations as your priorities change.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 data-aos="zoom-out" className={styles.heading}>
          Why Choose Our Trade Finance Platform?
        </h2>

        <p data-aos="zoom-out" className={styles.subheading}>
          Designed to support modern importers, exporters, and global brands
          with flexible, transparent financing solutions.
        </p>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div data-aos="zoom-out-down" key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
