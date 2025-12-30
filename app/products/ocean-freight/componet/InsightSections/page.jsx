import Image from "next/image";
import styles from "./InsightSections.module.css";
import SectionOne from "@/public/products/photo-1586528116311-ad8dd3c8310d.jpg";
import SectionTow from "@/public/products/photo-1578575437130-527eed3abbec.jpg";
import SectionThree from "@/public/products/photo-1542744173-8e7e53415bb0.jpg";
import SectionFore from "@/public/products/photo-1603791440384-56cd371ee9a7.jpg";
import SectionFive from "@/public/products/nathan.jpg";

export default function InsightSections() {
  return (
    <main className={styles.wrapper}>
      {/* SECTION 1 — CONTENT LEFT / IMAGE RIGHT */}
      <section className={styles.section}>
        <div className={styles.text}>
          <span className={styles.tag}>OCEAN TRANSIT TIMES</span>
          <h2>Clearer timelines for confident planning</h2>
          <p>
            Plan your ocean shipments with greater certainty using data-driven
            transit insights. Intelligent models analyze historical routes,
            carrier performance, and real-world conditions to deliver dependable
            time estimates—so you can plan inventory and deliveries with
            confidence.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src={SectionOne} alt="" className={styles.image} />
        </div>
      </section>

      {/* SECTION 2 — IMAGE LEFT / CONTENT RIGHT */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.text}>
          <span className={styles.tag}>SHARPER FORESIGHT</span>
          <h2>Predictability that keeps shipments moving</h2>
          <p>
            Gain better control over your supply chain with forward-looking
            insights. Deep carrier integrations enable faster rate
            confirmations, quicker Shipping Order releases, and more accurate
            transit predictions—helping you stay ahead of disruptions before
            they happen.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src={SectionTow} alt="" className={styles.image} />
        </div>
      </section>

      {/* SECTION 3 — CONTENT LEFT / IMAGE RIGHT */}
      <section className={styles.section}>
        <div className={styles.text}>
          <span className={styles.tag}>OCEAN FREIGHT SERVICES</span>
          <h2>More shipping options, greater control</h2>
          <p>
            Choose the ocean freight service level that best fits your business
            priorities. Whether you’re optimizing for speed, cost efficiency, or
            flexibility, multiple service options help you tailor decisions
            based on shipment size and inventory needs.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Full Container Load (FCL):</strong> Dedicated container
              space for large shipments, offering better security and faster
              handling.
            </li>
            <li>
              <strong>Less Than Container Load (LCL):</strong> A cost-efficient
              option for smaller shipments that share container space.
            </li>
            <li>
              <strong>Buyer’s Consolidation (BC):</strong> Combine cargo from
              multiple suppliers into one container to reduce costs.
            </li>
            <li>
              <strong>Order Management (OM):</strong> A streamlined order-to-
              delivery workflow with minimal manual effort.
            </li>
          </ul>
        </div>

        <div className={styles.imageWrap}>
          <Image src={SectionThree} alt="" className={styles.image} />
        </div>
      </section>

      {/* SECTION 4 — IMAGE LEFT / CONTENT RIGHT */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.text}>
          <span className={styles.tag}>YOUR ALL-IN-ONE PARTNER</span>
          <h2>One connected flow for every ocean shipment</h2>
          <p>
            Watch every part of your ocean freight operation move in sync—from
            container staging at the port to loading, sailing, and delivery. Our
            unified platform connects physical freight movement with digital
            execution, giving you full visibility across every step of the
            journey.
          </p>
          <p>
            Manage Less Than Container Load (LCL), Buyer’s Consolidation,
            bookings, and order workflows within a single system. With all
            shipment data, milestones, and decisions centralized, your supply
            chain stays coordinated, predictable, and easy to control.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <img
            src="/products/Logistic-and-supply-chain.gif"
            alt=""
            className={styles.image}
          />
        </div>
      </section>

      {/* SECTION 5 — CONTENT LEFT / IMAGE RIGHT */}
      <section className={styles.section}>
        <div className={styles.text}>
          <span className={styles.tag}>
            WORKFLOW MANAGEMENT IN THE FORWARDING APP
          </span>
          <h2>Streamlining freight operations with intelligent workflows</h2>
          <p>
            Simplify complex freight operations through a centralized workflow
            system. From carrier bookings and customs documentation to
            multi-modal coordination, every operational step is managed in one
            unified interface.
          </p>
          <p>
            Smart automation reduces repetitive manual work, allowing teams to
            focus on quality assurance, exception handling, and customer
            outcomes—while maintaining speed and consistency at scale.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src={SectionFore} alt="" className={styles.image} />
        </div>
      </section>

      {/* SECTION 6 — IMAGE LEFT / CONTENT RIGHT */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.text}>
          <span className={styles.tag}>NAVIGATING A DYNAMIC OCEAN MARKET</span>
          <h2>
            Reliable, cost-effective ocean shipping powered by intelligence
          </h2>
          <p>
            Navigate shifting ocean market conditions with confidence using
            data-driven decision support. Advanced optimization continuously
            balances cost, transit time, and carrier availability to deliver
            reliable shipping performance.
          </p>
          <p>
            Predictive insights reduce uncertainty, improve planning accuracy,
            and help teams respond quickly to disruptions—ensuring consistent
            results across global trade lanes.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src={SectionFive} alt="" className={styles.image} />
        </div>
      </section>
    </main>
  );
}
