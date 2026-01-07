"use client";

import Image from "next/image";
import styles from "./OrderManagementSections.module.css";

import poManagement from "@/public/products/po-management.png";
import collaboration from "@/public/products/order-collaboration.avif";
import booking from "@/public/products/simple-booking.webp";

export default function OrderManagementSections() {
  return (
    <section className={styles.wrapper}>
      {/* SECTION HEADING */}
      <div className={styles.sectionHeader}>
        <h2>Powerful Tools to Manage Orders End to End</h2>
        <p>
          Streamline order workflows, collaborate with suppliers, and create
          bookings faster with a centralized platform built for modern supply
          chains.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className={styles.section}>
        <div className={styles.imageWrap}>
          <Image
            src={poManagement}
            alt="Automated purchase order management"
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.text}>
          <h3>Automate and Control Purchase Orders</h3>
          <p>
            Bring all purchase orders into one unified workflow to reduce manual
            coordination and improve execution speed. Automated rules and
            approvals ensure consistency across every order.
          </p>
          <p>
            With real-time visibility and accurate data, teams can prevent
            errors, track progress, and keep orders moving smoothly from
            creation to fulfillment.
          </p>
        </div>
      </div>

      {/* SECTION 2 (REVERSE) */}
      <div className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.imageWrap}>
          <img
            src={collaboration.src}
            alt="Supplier collaboration on orders"
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <h3>Centralize Supplier Collaboration</h3>
          <p>
            Work directly with suppliers in a shared workspace to manage order
            updates, quantities, and delivery timelines. All discussions stay
            connected to the order for full context.
          </p>
          <p>
            Faster communication and clear status updates help teams stay
            aligned and reduce delays caused by manual follow-ups.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className={styles.section}>
        <div className={styles.imageWrap}>
          <Image
            src={booking}
            alt="Simple booking workflow"
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <h3>Simplify the Booking Experience</h3>
          <p>
            Create bookings quickly using an intuitive interface designed to
            save time. Assign orders individually or upload files to link
            multiple orders at once.
          </p>
          <p>
            Fewer steps and fewer errors allow teams to move shipments forward
            confidently while maintaining operational consistency.
          </p>
        </div>
      </div>
    </section>
  );
}
