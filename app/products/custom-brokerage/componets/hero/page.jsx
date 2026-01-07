import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.wrapper}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.icon}>🛃</span>
            <span>CUSTOMS BROKERAGE</span>
          </div>

          <h1 className={styles.title}>
            Simplified Customs Clearance,
            <br />
            Built for Global Trade
          </h1>

          <p className={styles.text}>
            Manage customs clearance with confidence through a centralized
            platform that gives you real-time visibility into filings,
            documentation, and clearance status across every shipment.
          </p>

          <p className={styles.subText}>
            Our customs brokerage services help reduce delays, control duty
            costs, and keep your cargo moving smoothly across borders—backed by
            expert support and compliance-driven workflows.
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
            <input type="email" placeholder="Work Email" />
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
              <input type="tel" placeholder="Business Phone" />
            </div>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <button className={styles.submitBtn}>Get Connected</button>
        </div>
      </div>
    </section>
  );
}
