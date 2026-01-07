"use client";

import styles from "./HeroSignup.module.css";

export default function HeroSignup() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <span className={styles.badge}>ORDER MANAGEMENT PLATFORM</span>

          <h1>Simplify Order Execution Across Your Supply Chain</h1>

          {/* ✅ DESCRIPTION (FULL WIDTH) */}
          <p className={styles.description}>
            Manage purchase orders, supplier coordination, and shipment progress
            from a single platform. Reduce manual effort, prevent errors, and
            keep teams aligned from order creation to final delivery.
          </p>

          <button className={styles.ctaBtn}>Schedule a Demo</button>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <h3>Sign Up With Exportliex</h3>

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
