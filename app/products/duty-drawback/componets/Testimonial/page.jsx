import styles from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <div className={styles.quoteIcon}>“</div>

          <p className={styles.quote}>
            Exportliex simplified our duty drawback process by unifying import
            and export data, enabling faster compliant refunds, reducing
            complexity, improving accuracy, and transforming duty recovery into
            a reliable cash flow advantage.
          </p>

          <div className={styles.author}>
            <strong>Akira Chaudhary</strong>
            <span>CEO Of Exportlie</span>
          </div>
        </div>

      
      </div>
    </section>
  );
}
