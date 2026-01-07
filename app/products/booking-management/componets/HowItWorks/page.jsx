"use client"
import Image from "next/image";
import styles from "./HowItWorks.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bookingImg from "@/public/products/booking.png";
import communicationImg from "@/public/products/communication.avif";
import analyticsImg from "@/public/products/analytics.png";

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false, // ✅ REPEAT animation
      mirror: true, // ✅ animate when scrolling UP
      offset: 120,
    });
  }, []);
  return (
    <section className={styles.section}>
      <div data-aos="fade-up" className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.subheading}>
            A streamlined workflow designed to simplify bookings, improve
            collaboration, and unlock data-driven decision-making across your
            ocean freight operations.
          </p>
        </div>

        {/* ROW 1 */}
        <div data-aos="fade-up" className={styles.row}>
          <div className={styles.imageWrap}>
            <Image src={bookingImg} alt="Booking management" fill />
          </div>

          <div className={styles.text}>
            <h3>Suppliers place bookings in one system</h3>
            <p>
              Suppliers submit bookings directly through your platform, aligned
              with your allocation strategy. We manage carrier-direct and NVO
              contracts while giving you full visibility into utilization,
              performance, and capacity usage across lanes.
            </p>
          </div>
        </div>

        {/* ROW 2 (REVERSE) */}
        <div data-aos="fade-up" className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.imageWrap}>
            <Image
              src={communicationImg}
              alt="Centralized communication"
              fill
            />
          </div>

          <div className={styles.text}>
            <h3>Centralized communication across all parties</h3>
            <p>
              Act as a single control tower for communication between suppliers,
              carriers, and internal teams. Reduce email noise, keep everyone in
              sync, and strengthen carrier relationships through consistent,
              transparent collaboration.
            </p>
          </div>
        </div>

        {/* ROW 3 */}
        <div data-aos="fade-up" className={styles.row}>
          <div className={styles.imageWrap}>
            <Image src={analyticsImg} alt="Allocation analytics" fill />
          </div>

          <div className={styles.text}>
            <h3>Real-time insights drive smarter planning</h3>
            <p>
              Analyze contract utilization, forecast future shipping volumes,
              and automatically generate reports—without leaving your dashboard.
              Track milestones, monitor performance, and plan ahead with
              confidence using reliable, real-time data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
