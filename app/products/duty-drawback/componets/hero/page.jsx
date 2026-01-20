import styles from "./Hero.module.css";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.wrapper}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.icon}>
              <FaMoneyBillTransfer />
            </span>
            <span>DUTY DRAWBACK SOLUTION</span>
          </div>

          <h1 className={styles.title}>Effortless Duty Drawback Claim Management</h1>

          <p className={styles.text}>
            Exportliex helps exporters track eligible shipments, manage duty
            drawback documentation, and claim refunds accurately through a
            centralized platform that improves compliance, speeds up processing,
            and strengthens cash flow visibility.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Get Started with Exportliex</h2>

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
            <input type="email" placeholder="Business Email Address" />
          </div>

          <div className={styles.fieldGrid}>
            <div className={styles.field}>
              <label>Country Code*</label>
              <select>
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Business Phone*</label>
              <input type="tel" placeholder="Contact Number" />
            </div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button className={styles.submitBtn}>Request Demo</button>
        </div>
      </div>
    </section>
  );
}
