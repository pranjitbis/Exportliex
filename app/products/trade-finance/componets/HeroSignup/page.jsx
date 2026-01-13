"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FiTrendingUp } from "react-icons/fi";
import styles from "./HeroSignup.module.css";

export default function HeroSignup() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false, // 🔥 IMPORTANT: allow replay
      mirror: true, // 🔥 animate when scrolling back up
      offset: 120,
    });

    // 🔥 Refresh AOS when component mounts again
    AOS.refresh();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left} data-aos="fade-right">
          <span className={styles.badge}>
            <FiTrendingUp className={styles.badgeIcon} />
            TRADE & FINANCE PLATFORM
          </span>

          <h1>Power Your Global Trade with Smart Financing Solutions</h1>

          <p className={styles.description}>
            Access trade financing, manage cross-border transactions, and track
            international operations from one unified platform. Built to help
            growing businesses move faster, safer, and with complete financial
            visibility.
          </p>

          <button className={styles.ctaBtn}>Book a Free Demo</button>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard} data-aos="zoom-in">
          <h3>Get Started with Exportliex</h3>

          <form className={styles.form}>
            <div className={styles.row}>
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

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Country Code*</label>
                <select>
                  <option>+1</option>
                  <option>+91</option>
                  <option>+44</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Business Phone*</label>
                <input type="tel" placeholder="Business Phone" />
              </div>
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>*
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
