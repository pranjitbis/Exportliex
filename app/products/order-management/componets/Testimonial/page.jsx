"use client";

import { useState } from "react";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    text: "Having one unified platform for logistics has made a real difference for our team. We can react faster to changes, stay aligned across regions, and manage urgent shipments with confidence.",
    name: "Emma Richardson",
    role: "Senior Manager, Supply Chain Operations",
  },
  {
    text: "Improved visibility and structured workflows have reduced delays and improved collaboration across departments. Our teams now make decisions faster with accurate, real-time information.",
    name: "Daniel Foster",
    role: "Logistics Planning Lead",
  },
  {
    text: "By bringing our freight processes into a single system, we’ve been able to scale operations smoothly while maintaining transparency and consistent performance across markets.",
    name: "Aisha Patel",
    role: "International Operations Director",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.quoteIcon}>“</div>

        {/* Slider */}
        <div className={styles.slider}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div className={styles.slide} key={i}>
                <p className={styles.quoteText}>{item.text}</p>
                <div className={styles.author}>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button onClick={handlePrev} aria-label="Previous testimonial">
            ‹
          </button>
          <button onClick={handleNext} aria-label="Next testimonial">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
