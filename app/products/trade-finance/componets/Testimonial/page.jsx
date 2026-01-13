"use client";

import { useState } from "react";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    text: "Using a single trade finance platform has transformed how we manage cross-border transactions. We now have real-time visibility into invoices, payments, and financing status, which has significantly improved our cash flow planning.",
    name: "Michael Turner",
    role: "Head of Trade Finance",
  },
  {
    text: "The ability to centralize documents, approvals, and financing workflows has reduced operational risk and manual errors. Our finance team can execute faster while staying fully compliant.",
    name: "Sophia Nguyen",
    role: "Trade Operations Manager",
  },
  {
    text: "With structured trade-finance workflows and better collaboration with banking partners, we’ve been able to scale international trade confidently while maintaining transparency across all markets.",
    name: "Rajiv Mehta",
    role: "Director of Global Finance",
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
