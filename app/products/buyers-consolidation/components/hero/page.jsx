"use client"
import styles from "./Hero.module.css";
import {useEffect} from "react"
import { FiPackage } from "react-icons/fi";
import AOS from "aos";
export default function Hero() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,   // animate every time
      mirror: true,  // animate on scroll up
      offset: 120,
    });
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.wrapper}>
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className={styles.left}>
          <div className={styles.badge}>
            <FiPackage className={styles.icon} />
            <span>BUYER’S CONSOLIDATION</span>
          </div>

          <h1 className={styles.title}>
            Consolidate shipments.
            <br />
            Reduce costs.
          </h1>

          <p className={styles.text}>
            Combine cargo from multiple suppliers into a single container while
            maintaining full visibility across your supply chain. Buyer’s
            Consolidation helps you optimize space, lower freight costs, and
            move ocean shipments more efficiently.
          </p>

          <p className={styles.subText}>
            By consolidating at origin, you get the flexibility of LCL with the
            cost advantages of FCL—without sacrificing transparency, timelines,
            or operational control.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div data-aos="fade-left" className={styles.card}>
          <h2 className={styles.cardTitle}>
            Get Started with Buyer’s Consolidation
          </h2>

          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <label>First Name*</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className={styles.field}>
              <label>Last Name*</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className={styles.field}>
            <label>Work Email*</label>
            <input type="email" placeholder="Work Email" />
          </div>

          <div className={styles.fieldGrid}>
            {/* Country Code */}
            <div className={`${styles.field} ${styles.selectField}`}>
              <label htmlFor="countryCode">Country Code*</label>
              <select id="countryCode">
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
              </select>
            </div>

            {/* Phone */}
            <div className={styles.field}>
              <label htmlFor="phone">Business Phone*</label>
              <input id="phone" type="tel" placeholder="Business Phone" />
            </div>
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button className={styles.submitBtn}>Talk to an Expert</button>
        </div>
      </div>
    </section>
  );
}
