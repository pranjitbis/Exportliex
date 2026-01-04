"use client";

import styles from "./HeroSignup.module.css";

export default function HeroSignup() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>AIR FREIGHT</span>

          <h1>
            Fast, Reliable Air Freight with Real - time Visibility
          </h1>

          {/* ✅ DESCRIPTION (FULL WIDTH) */}
          <p className={styles.description}>
            When speed is critical, move your cargo with confidence. Our air
            freight solutions combine global carrier access, real-time tracking,
            and intelligent coordination to keep your shipments moving without
            delays.
          </p>

          <button className={styles.ctaBtn}>Get Started</button>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <h3>Sign Up With Flexport</h3>

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
                <label>Country code*</label>
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
