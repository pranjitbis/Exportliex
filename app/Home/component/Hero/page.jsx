import style from "./Hero.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <section className={style.hero}>
      {/* Background Image with Overlay */}
      <div className={style.background}>
        <div className={style.imageOverlay}></div>
      </div>

      {/* Content Container */}
      <div className={style.container}>
        {/* Main Content */}
        <div className={style.content}>
          <div className={style.badge}>
            <span>Global Logistics Platform</span>
          </div>

          <h1 className={style.title}>
            The Operating System
            <br />
            for <span className={style.highlight}>Global Trade</span>
          </h1>

          <p className={style.description}>
            Move freight faster, track inventory in real-time, and automate your
            customs compliance. Exportliex connects your entire supply chain on
            one intelligent platform.
          </p>

          {/* CTA Buttons */}
          <div className={style.buttons}>
            <Link href="/start" className={style.primaryButton}>
              Start Shipping
            </Link>
            <Link href="/demo" className={style.secondaryButton}>
              Book a Demo
            </Link>
          </div>

          {/* Stats */}
          <div className={style.stats}>
            <div className={style.statItem}>
              <div className={style.statNumber}>99.8%</div>
              <div className={style.statLabel}>On-Time Delivery</div>
            </div>
            <div className={style.statItem}>
              <div className={style.statNumber}>150+</div>
              <div className={style.statLabel}>Countries Served</div>
            </div>
            <div className={style.statItem}>
              <div className={style.statNumber}>24/7</div>
              <div className={style.statLabel}>Real-Time Tracking</div>
            </div>
          </div>
        </div>

        {/* Map Dashboard */}
        <div className={style.dashboard}>
          <div className={style.dashboardCard}>
            <div className={style.dashboardHeader}>
              <h3 className={style.dashboardTitle}>Active Shipments</h3>
              <div className={style.dashboardStatus}>
                <span className={style.statusDot}></span>
                <span>Live Tracking</span>
              </div>
            </div>

            <div className={style.mapContainer}>
              <video
                src="/hero/Hero_map-V2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={style.mapVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
