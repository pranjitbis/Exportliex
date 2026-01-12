"use client";

import styles from "./InsuranceBlogSection.module.css";

export default function InsuranceBlogSection() {
  const posts = [
    {
      date: "December 19, 2023",
      title: "10 Smart Strategies to Safeguard Your Cargo Shipments",
      image:
        "https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      date: "November 27, 2023",
      title: "Cargo Insurance Explained: Coverage, Benefits, and Use Cases",
      image:
        "https://images.pexels.com/photos/14479747/pexels-photo-14479747.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      date: "November 21, 2023",
      title: "Understanding Ocean Cargo Claims and Settlement Timelines",
      image:
        "https://images.pexels.com/photos/3183170/pexels-photo-3183170.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Check out the latest from insurance
        </h2>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
              </div>

              <span className={styles.date}>{post.date}</span>

              <h3 className={styles.title}>{post.title}</h3>

              <a href="#" className={styles.read}>
                Read
                <span className={styles.underline}></span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
