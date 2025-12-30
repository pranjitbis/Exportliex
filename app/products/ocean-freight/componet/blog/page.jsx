import React from "react";
import blogAPI from "./blogAPI";
import styles from "./BlogAPI.module.css";

export default function Page() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogHeader}>
        <h2>Industry Insights</h2>
        <p>
          Latest updates and expert perspectives on global shipping, trade
          routes, and supply chain developments.
        </p>
      </div>

      <div className={styles.blogGrid}>
        {blogAPI.map((blog) => (
          <article className={styles.blogCard} key={blog.id}>
            <div className={styles.imageWrapper}>
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className={styles.cardContent}>
              <h4>{blog.title}</h4>
              <p>{blog.description}</p>

              <a href={blog.link} className={styles.readMore}>
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
