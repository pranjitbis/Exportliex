"use client";

import Image from "next/image";
import styles from "./TruckingSections.module.css";

import img1 from "@/public/products/Truckload.avif";
import img2 from "@/public/products/ModernTrucking.jpg";
import img3 from "@/public/products/connectivity.png";
import img4 from "@/public/products/flexu-truck.png";
import img5 from "@/public/products/highway-trucks.avif";

export default function TruckingSections() {
  return (
    <section className={styles.page}>
      {/* PAGE HEADER */}
      <div className={styles.header}>
        <span className={styles.kicker}>TRUCKING SOLUTIONS</span>
        <h1 className={styles.pageTitle}>
          Smarter Trucking for Modern Supply Chains
        </h1>
        <p className={styles.pageDesc}>
          Manage full truckload freight with real-time visibility, connected
          partners, and scalable nationwide capacity—built to keep your supply
          chain moving efficiently.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className={styles.row}>
        <div className={styles.text}>
          <span className={styles.tag}>FULL TRUCKLOAD</span>
          <h2 className={styles.title}>Truckloads of Flexible Options</h2>
          <p className={styles.desc}>
            Move freight across regions with dependable full truckload capacity.
            Avoid congestion, reduce delays, and simplify cross-border shipping
            with smarter routing and proactive execution.
          </p>
        </div>
        <div className={styles.imageWrap}>
          <img src={img1.src} alt="Full truckload operations" />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.text}>
          <span className={styles.tag}>EDUCATION</span>
          <h2 className={styles.title}>
            Learn the Fundamentals of Modern Trucking
          </h2>
          <p className={styles.desc}>
            Build confidence in trucking decisions by understanding capacity
            types, routing strategies, and execution models through practical,
            easy-to-follow learning content.
          </p>
          <button className={styles.btn}>Watch Now</button>
        </div>
        <div className={styles.imageWrap}>
          <Image src={img4} alt="Trucking education" />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className={styles.row}>
        <div className={styles.text}>
          <span className={styles.tag}>REAL-TIME VISIBILITY</span>
          <h2 className={styles.title}>
            Turn Live Data into Operational Clarity
          </h2>
          <p className={styles.desc}>
            Monitor shipments, locations, and performance signals in real time.
            Identify risks early, respond faster, and make confident decisions
            across every mile.
          </p>
          <ul className={styles.list}>
            <li>End-to-end shipment tracking</li>
            <li>Early alerts for delays and exceptions</li>
            <li>Unified dashboards for teams</li>
          </ul>
        </div>
        <div className={styles.imageWrap}>
          <Image src={img2} alt="Real-time trucking visibility" />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.text}>
          <span className={styles.tag}>CONNECTIVITY</span>
          <h2 className={styles.title}>
            Work Smarter with a Connected Logistics Network
          </h2>
          <p className={styles.desc}>
            Bring carriers, warehouses, and internal teams onto one shared
            platform. Updates stay in sync and everyone works from the same
            real-time information.
          </p>
          <p className={styles.desc}>
            Reduce manual coordination, speed up response times, and keep
            freight moving smoothly from pickup to delivery.
          </p>
        </div>
        <div className={styles.imageWrap}>
          <Image src={img3} alt="Connected logistics workflow" />
        </div>
      </div>

      {/* SECTION 5 */}
      <div className={styles.row}>
        <div className={styles.text}>
          <span className={styles.tag}>NATIONWIDE CAPACITY</span>
          <h2 className={styles.title}>
            Operate Confidently at National Scale
          </h2>
          <p className={styles.desc}>
            Access dependable capacity, automated carrier matching, and
            end-to-end execution tools to scale operations without losing speed
            or control.
          </p>
          <button className={styles.btnOutline}>Learn More</button>
        </div>
        <div className={styles.imageWrap}>
          <img src={img5.src} alt="Nationwide trucking network" />
        </div>
      </div>
    </section>
  );
}
