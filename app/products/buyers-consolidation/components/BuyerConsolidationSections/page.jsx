"use client";
import AOS from "aos";
import Image from "next/image";
import styles from "./BuyerConsolidationSections.module.css";
import {useEffect} from "react";
import portImg from "@/public/products/port.png";
import warehouseImg from "@/public/products/warehouse.avif";
import visibilityImg from "@/public/products/visibility.png";
import blogImg from "@/public/products/blog.avif";

export default function BuyerConsolidationSections() {
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
    <section className={styles.sectionWrapper}>
      {/* SECTION 1 */}
      <div className={styles.row} data-aos="fade-up">
        <div className={styles.imageWrap}>
          <Image src={portImg} alt="Ocean port operations" />
        </div>

        <div className={styles.content}>
          <span className={styles.kicker}>SERVICE OFFERINGS</span>
          <h2>A flexible alternative to traditional LCL and FCL</h2>
          <p>
            Buyer’s Consolidation helps reduce per-unit shipping costs by
            grouping cargo from multiple suppliers into a single container. This
            approach improves utilization, lowers handling complexity, and
            adapts easily to changing shipment volumes or timelines.
          </p>
        </div>
      </div>

      {/* SECTION 2 (REVERSE) */}
      <div data-aos="fade-up" className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.imageWrap}>
          <img src={warehouseImg.src} alt="Container inspection at origin" />
        </div>

        <div className={styles.content}>
          <span className={styles.kicker}>VALUE ADDED SERVICES</span>
          <h2>Purpose-built infrastructure at origin</h2>
          <p>
            Our origin facilities are designed to support secure consolidation,
            efficient handling, and operational flexibility. With structured
            processes and strong access controls, shipments are prepared,
            inspected, and staged for reliable downstream execution.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div data-aos="fade-up" className={styles.row}>
        <div className={styles.imageWrap}>
          <Image src={visibilityImg} alt="Supply chain visibility layers" />
        </div>

        <div className={styles.content}>
          <span className={styles.kicker}>VISIBILITY</span>
          <h2>Services tailored to every supply chain need</h2>
          <p>
            Choose from a range of consolidation services including sorting,
            labeling, repacking, and quality checks. Combine Buyer’s
            Consolidation with order-level and booking workflows to maintain
            full visibility across SKUs, shipments, and milestones.
          </p>
        </div>
      </div>

      {/* SECTION 4 (BLOG) */}
      <div data-aos="fade-up" className={`${styles.row} ${styles.blogRow}`}>
        <div className={`${styles.content} ${styles.blogContent}`}>
          <span className={styles.kicker}>BLOG</span>
          <h2>Unlocking efficiency with Buyer’s Consolidation</h2>
          <p>
            Learn how consolidation strategies can reduce costs, improve
            predictability, and simplify ocean freight operations in today’s
            global supply chains.
          </p>

          <button className={styles.blogBtn}>Read More</button>
        </div>

        <div className={`${styles.imageWrap} ${styles.blogImage}`}>
          <img src={blogImg.src} alt="Stacked shipping containers" />
        </div>
      </div>
    </section>
  );
}
