import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>SUPPLY CHAIN PLATFORM</span>

          <h1 className={styles.heroTitle}>
            Manage Your Global Logistics
            From One Intelligent Platform
          </h1>

          <p className={styles.heroDesc}>
            Plan, track, and optimize every shipment with real-time visibility,
            actionable insights, and seamless coordination across your entire
            supply chain.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div  className={`${styles.grid} ${styles.reverse}`}>
          <div className={styles.text}>
            <span className={styles.label}>ACCESS</span>
            <h2>See the Big Picture. Act with Confidence.</h2>
            <p>
              Gain a clear, high-level view of your global supply chain while
              staying ready to take action instantly. Track shipments, purchase
              orders, and operational activity in one connected workspace.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/products/access-dashboard.webp"
              alt="Supply chain overview dashboard"
              width={1200}
              height={700}
              className={styles.image}
              priority
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={`${styles.grid} `}>
          <div className={styles.text}>
            <span className={styles.label}>VISIBILITY</span>
            <h2>One Place to Manage Everything</h2>
            <p>
              Monitor cost trends, supplier performance, and container
              utilization with historical and live data combined. Make smarter
              planning decisions with visibility that scales with your business.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/products/Visibility-Dashboard.webp"
              alt="Supply chain visibility dashboard"
              width={1200}
              height={700}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className={`${styles.section} `}>
        <div className={`${styles.grid} ${styles.reverse}`}>
          <div className={styles.text}>
            <span className={styles.label}>INSIGHTS</span>
            <h2>Data That Drives Better Decisions</h2>
            <p>
              Analyze transit times, landed costs, carrier performance, and
              inventory impact over time. Built-in analytics help teams spot
              trends, measure outcomes, and improve results continuously.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/products/analytics-dashboard.png"
              alt="Logistics analytics dashboard"
              width={1200}
              height={700}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.text}>
            <span className={styles.label}>INTEGRATIONS</span>
            <h2>Connect Seamlessly with Your ERP Systems</h2>
            <p>
              Sync logistics data with leading ERP platforms to streamline
              purchasing, inventory, and financial workflows. Work within your
              existing systems without duplicated effort.
            </p>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/products/exception-dashboard.webp"
              alt="ERP integration interface"
              width={1200}
              height={700}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className={`${styles.section} ${styles.alt}`}>
        <div className={`${styles.grid} ${styles.reverse}`}>
          <div className={styles.text}>
            <span className={styles.label}>QUOTES</span>
            <h2>Instant Freight Quotes, Built for Speed</h2>
            <p>
              Search, compare, and book freight in minutes across air, ocean,
              and multimodal services. Transparent pricing helps you choose the
              best option for cost or speed—without surprises.
            </p>

            <button className={styles.cta}>Get Started</button>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/products/freight-quotes.png"
              alt="Freight quotes interface"
              width={1200}
              height={700}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
