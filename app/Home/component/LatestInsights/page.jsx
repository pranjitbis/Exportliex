"use client";

import { useEffect, useState } from "react";
import styles from "./LatestInsights.module.css";

const slides = [
  {
    featured: {
      tag: "2025 RFP SEASON",
      title:
        "Logistics RFP 2025 Preparation Hub: Go-to resources for planning a successful logistics RFP",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      link: "Read More",
    },
    side: [
      {
        tag: "WEBINAR",
        title: "Ocean Market Predictions for 2025",
        image:
          "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1200&q=80",
        link: "Watch Now",
      },
      {
        tag: "MARKET UPDATE",
        title: "Global Logistics Update",
        image:
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
        link: "Read More",
      },
    ],
  },
  {
    featured: {
      tag: "AIR FREIGHT",
      title:
        "The Outlook for the 2025 Air Freight Market: Five Factors Shaping Global Cargo Volumes",
      image:
        "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=80",
      link: "Read More",
    },
    side: [
      {
        tag: "CUSTOMS",
        title:
          "U.S. Administration Takes Executive Action on De Minimis Imports",
        image:
          "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
        link: "Read More",
      },
      {
        tag: "OCEAN FREIGHT",
        title: "Ocean Capacity and Pricing Trends Ahead",
        image:
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        link: "Read More",
      },
    ],
  },
];

export default function LatestInsights() {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ FIX: DEFINE mobileSlides HERE
  const mobileSlides = slides.flatMap((slide) => [
    slide.featured,
    ...slide.side,
  ]);

  const next = () => {
    if (isMobile) {
      setMobileIndex((p) => (p + 1) % mobileSlides.length);
    } else {
      setDesktopIndex((p) => (p + 1) % slides.length);
    }
  };

  const prev = () => {
    if (isMobile) {
      setMobileIndex((p) => (p === 0 ? mobileSlides.length - 1 : p - 1));
    } else {
      setDesktopIndex((p) => (p === 0 ? slides.length - 1 : p - 1));
    }
  };

  const dotsCount = isMobile ? mobileSlides.length : slides.length;

  const activeDot = isMobile ? mobileIndex : desktopIndex;

  const currentDesktop = slides[desktopIndex];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>LATEST INSIGHTS</h2>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      {!isMobile && (
        <div className={styles.grid}>
          <div>
            <img
              src={currentDesktop.featured.image}
              className={styles.featuredImage}
              alt=""
            />
            <div className={styles.featuredContent}>
              <span className={styles.tag}>{currentDesktop.featured.tag}</span>
              <h3 className={styles.title}>{currentDesktop.featured.title}</h3>
              <a target="_blank" href="/" className={styles.link}>{currentDesktop.featured.link}</a>
            </div>
          </div>

          <div className={styles.side}>
            {currentDesktop.side.map((item, i) => (
              <div key={i} className={styles.sideCard}>
                <img src={item.image} alt="" />
                <div className={styles.sideContent}>
                  <span>{item.tag}</span>
                  <h4>{item.title}</h4>
                  <a target="_blank" href="/">{item.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== MOBILE VIEW (SINGLE CARD) ===== */}
      {isMobile && (
        <div className={styles.mobileCard}>
          <img
            src={mobileSlides[mobileIndex].image}
            className={styles.mobileImage}
            alt=""
          />
          <div className={styles.mobileContent}>
            <span className={styles.tag}>{mobileSlides[mobileIndex].tag}</span>
            <h3>{mobileSlides[mobileIndex].title}</h3>
            <a className={styles.link}>{mobileSlides[mobileIndex].link}</a>
          </div>
        </div>
      )}

      {/* ===== CONTROLS ===== */}
      <div className={styles.controls}>
        <button onClick={prev} className={styles.arrow}>
          ←
        </button>

        <div className={styles.dots}>
          {Array.from({ length: dotsCount }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${
                i === activeDot ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>

        <button onClick={next} className={styles.arrow}>
          →
        </button>
      </div>
    </section>
  );
}
