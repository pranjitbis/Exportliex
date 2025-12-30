"use client";

import styles from "./AirFreightInsights.module.css";
import Image from "next/image";
import airShipmentPlanning from "@/public/products/Resolve-Disruptions.jpg";
import AirPlain from "@/public/products/smart-air-plain.png";
import central from "@/public/products/Central.gif";
export default function AirFreightInsights() {
  return (
    <section className={styles.wrapper}>
      {/* SECTION 1 */}
      <div className={styles.section}>
        <div className={styles.text}>
          <span className={styles.tag}>EXCEPTION MANAGEMENT</span>
          <h2>Resolve Disruptions Before They Impact Delivery</h2>
          <p>
            Stay ahead of unexpected changes with real-time alerts and detailed
            exception insights. Our platform highlights issues the moment they
            arise, allowing teams to take corrective action early and avoid
            costly delays.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src={airShipmentPlanning}
            alt="Air freight exception management"
            className={styles.image}
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.text}>
          <span className={styles.tag}>AIR PLANNING TOOLS</span>
          <h2>Smarter Planning for Faster Air Shipments</h2>
          <p>
            Advanced automation helps teams evaluate scenarios instantly,
            optimize capacity allocation, and balance cost with transit speed.
            Make planning decisions backed by data, not guesswork.
          </p>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src={AirPlain}
            alt="Air shipment planning"
            className={styles.image}
          />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className={styles.section}>
        <div className={styles.text}>
          <span className={styles.tag}>SUPPLY CHAIN VISIBILITY</span>
          <h2>Stay In Control Across Every Stage of Your Supply Chain</h2>
          <p>
            Keep shipments, documents, and delivery milestones clearly organized
            throughout the shipping journey. With timely updates and shared
            shipment visibility, teams remain coordinated from pickup to final
            delivery—without relying on a centralized dashboard.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <img
            src={central.src}
            alt="Supply chain visibility"
            className={styles.image}
          />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className={styles.section}>
        <div className={styles.imageWrap}>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src="/public/products/Capacity.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.text}>
          <span className={styles.tag}>GLOBAL NETWORK</span>
          <h2>Improve Reliability with Reserved Air Capacity from Asia</h2>
          <p>
            To maintain consistent transit schedules, we combine frequent
            commercial air services with our own reserved charter capacity. This
            added flexibility helps protect shipment timelines, minimize
            rollovers, and keep cargo moving reliably—even during high-demand
            periods.
          </p>
        </div>
      </div>
    </section>
  );
}
