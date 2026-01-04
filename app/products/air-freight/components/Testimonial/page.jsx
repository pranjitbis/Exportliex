"use client";

import { useState } from "react";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    text: "A centralized logistics platform has changed how we respond to critical shipments. With consistent workflows and real-time insight, our teams stay in control even during unexpected disruptions.",
    name: "Emily Carter",
    role: "Head of Global Supply Operations",
  },
  {
    text: "Reliable capacity and shared visibility have helped us eliminate delays and improve cross-team coordination. Our supply chain now runs with clarity and predictability.",
    name: "Michael Brown",
    role: "Director of Logistics Strategy",
  },
  {
    text: "Standardizing our freight operations under one platform allowed us to scale globally while maintaining consistency, transparency, and on-time performance.",
    name: "Sophia Nguyen",
    role: "Global Operations Manager",
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
