import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.wrapper}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.icon}>🚢</span>
            <span>OCEAN FREIGHT</span>
          </div>

          <h1 className={styles.title}>
            You fill the container.
            <br />
            We fill in the rest.
          </h1>

          <p className={styles.text}>
            Track container locations, milestones, and exceptions — all from a
            single platform designed to deliver higher reliability and global
            ocean capacity.
          </p>

          <p className={styles.subText}>
            Ocean freight is the most scalable and cost-effective way to move
            containerized cargo across international trade routes.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Sign Up With Exportliex</h2>

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

          <button className={styles.submitBtn}>Sign Up</button>
        </div>
      </div>
    </section>
  );
}
