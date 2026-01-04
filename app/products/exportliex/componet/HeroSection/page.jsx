"use client";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.platformBadge}>
            <span className={styles.dot} />
            OPERATIONS PLATFORM
          </div>

          <h1 className={styles.title}>
            One Unified System for 
            Global Supply Operations
          </h1>

          <p className={styles.description}>
            Manage shipments, partners, and milestones from a single intelligent
            platform. Stay informed in real time, reduce manual follow-ups, and
            move cargo with confidence from origin to destination.
          </p>

          <button className={styles.cta}>Speak With a Specialist</button>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.formCard}>
          <h3>Create Your Account</h3>

          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>First Name*</label>
                <input type="text" placeholder="First name" />
              </div>

              <div className={styles.field}>
                <label>Last Name*</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Business Email*</label>
              <input type="email" placeholder="Work email address" />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Country Code*</label>
                <select>
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Phone Number*</label>
                <input type="tel" placeholder="Business phone" />
              </div>
            </div>

            <div className={styles.checkbox}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <span>Terms of Use</span> and{" "}
                <span>Privacy Policy</span>
              </label>
            </div>

            <button className={styles.submit}>Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
}
