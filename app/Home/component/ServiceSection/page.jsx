"use client";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>
        Everything You Need to Move Goods Faster
      </h2>
      {/* Ocean Freight */}
      <div className={styles.row}>
        <div className={styles.content}>
          <span className={styles.tag}>OCEAN FREIGHT</span>
          <h2>Smart ocean shipping with full visibility</h2>
          <p>
            Move cargo efficiently across global trade lanes with real-time
            tracking, transparent pricing, and end-to-end shipment control. Our
            digital platform simplifies every step of ocean logistics.
          </p>
          <button>Explore Ocean Freight</button>
        </div>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e"
            alt="Ocean Freight"
          />
        </div>
      </div>

      {/* Trucking */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.content}>
          <span className={styles.tag}>TRUCKING</span>
          <h2>Reliable trucking from port to destination</h2>
          <p>
            Optimize inland transportation with nationwide carrier coverage,
            predictable delivery times, and SKU-level shipment insights — all
            managed from one unified dashboard.
          </p>
          <button>Explore Trucking</button>
        </div>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
            alt="Trucking"
          />
        </div>
      </div>

      {/* Air Freight */}
      <div className={styles.row}>
        <div className={styles.content}>
          <span className={styles.tag}>AIR FREIGHT</span>
          <h2>Fast, flexible air shipping when time matters</h2>
          <p>
            Ship urgent cargo with confidence using our air freight solutions,
            including priority handling, live flight updates, and cost-efficient
            routing options.
          </p>
          <button>Explore Air Freight</button>
        </div>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
            alt="Air Freight"
          />
        </div>
      </div>

      {/* Fulfillment */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.content}>
          <span className={styles.tag}>FULFILLMENT</span>
          <h2>Scale your business with fast fulfillment</h2>
          <p>
            Deliver orders faster with distributed fulfillment centers,
            automated inventory planning, and seamless integrations with your
            e-commerce platforms.
          </p>
          <button>Explore Fulfillment</button>
        </div>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
            alt="Fulfillment"
          />
        </div>
      </div>
    </section>
  );
}
