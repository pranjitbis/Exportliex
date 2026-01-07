import Image from "next/image";
import styles from "./InsightsSection.module.css";

import oceanImg from "@/public/products/ocean-contracts.jpg";
import teamImg from "@/public/products/team-visibility.avif";
import dataImg from "@/public/products/data-decisions.jpg";

const cards = [
  {
    image: oceanImg,
    title: "Contracts and Bookings, Simplified",
    desc: "Manage ocean contracts and carrier bookings across your entire provider network from a single workspace. Improve allocation accuracy, reduce booking errors, and align capacity with real demand.",
  },
  {
    image: teamImg,
    title: "One Unified Source of Visibility",
    desc: "Bring communication, documentation, shipment tracking, and analytics together in one place. Enable teams to collaborate with shared, real-time insights across carriers, lanes, and partners.",
  },
  {
    image: dataImg,
    title: "Smarter Decisions with Reliable Data",
    desc: "Turn booking and shipment data into actionable intelligence. Forecast capacity needs, uncover trends early, and adapt procurement strategies with confidence.",
  },
];

export default function InsightsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <span className={styles.tag}>BOOKING INSIGHTS</span>
          <h2 className={styles.heading}>
            One Platform to Plan, Book, and Optimize Ocean Freight
          </h2>
          <p className={styles.subheading}>
            Gain end-to-end visibility into contracts, bookings, and performance
            data—so your teams can move faster, reduce risk, and make confident
            decisions at every stage.
          </p>
        </div>

        {/* CARDS */}
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div data-aos="flip-left" className={styles.card} key={index}>
              <div className={styles.imageWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>

              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.desc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
