"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./HowItWorks.module.css";
import { FiUserCheck, FiPackage, FiTruck, FiCheckCircle } from "react-icons/fi";
import AOS from "aos";
const steps = [
  {
    title: "Seller Onboarding",
    desc: "Sellers connect their business and define how products should move across fulfillment channels.",
    icon: <FiUserCheck />,
  },
  {
    title: "Product & Inventory Setup",
    desc: "Products are registered, prepared, and aligned with storage, packaging, and handling requirements.",
    icon: <FiPackage />,
  },
  {
    title: "Order Movement & Delivery",
    desc: "Orders flow through logistics, fulfillment centers, and last-mile delivery with operational precision.",
    icon: <FiTruck />,
  },
  {
    title: "Completion & Optimization",
    desc: "Deliveries, retail handoffs, and returns are finalized while insights improve future performance.",
    icon: <FiCheckCircle />,
  },
];

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // animate every time
      mirror: true, // animate on scroll up
      offset: 120,
    });
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".how-step", { opacity: 0, y: 30 });

      gsap.to(".how-step", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.header}>
        <h2>How It Works</h2>
        <p>
          A structured, reliable process designed to move products efficiently
          from sellers to customers while maintaining control at every stage.
        </p>
      </div>

      <div className={styles.grid}>
        {steps.map((step, i) => (
          <div key={i} className={`${styles.card} how-step`}>
            <div className={styles.icon}>{step.icon}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
