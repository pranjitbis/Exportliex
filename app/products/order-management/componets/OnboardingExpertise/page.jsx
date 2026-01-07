"use client";

import Image from "next/image";
import styles from "./OnboardingExpertise.module.css";

import onboardingImg from "@/public/products/onboarding-illustration.avif";
import expertiseImg from "@/public/products/team-expertise.png";

export default function OnboardingExpertise() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionIntro}>
        <h2>Order Management Built for Modern Supply Chains</h2>
        <p>
          Manage orders, collaborate with suppliers, and keep shipments on track
          using one connected platform designed to reduce manual work and
          improve execution speed.
        </p>
      </div>
      <div className={styles.container}>
        {/* SECTION 1 */}
        <div className={styles.section}>
          <div className={styles.text}>
            <span className={styles.tag}>ORDER MANAGEMENT ONBOARDING</span>
            <h2>Make Supplier Onboarding Simple and Consistent</h2>
            <p>
              Bring suppliers into your order workflow with a guided onboarding
              experience that removes confusion and speeds up setup.
            </p>
            <p>
              Standard steps, clear requirements, and built-in support help
              suppliers start working confidently from day one.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <img
              src={onboardingImg.src}
              alt="Supplier onboarding"
              className={styles.image}
              priority
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.text}>
            <span className={styles.tag}>PLATFORM EXPERTISE</span>
            <h2>Expert Support for Everyday Order Operations</h2>
            <p>
              Work with experienced supply chain specialists who understand
              real-world order execution challenges.
            </p>
            <p>
              From managing schedules to assisting with bookings, expert
              guidance keeps operations running smoothly.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src={expertiseImg}
              alt="Supply chain experts"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
