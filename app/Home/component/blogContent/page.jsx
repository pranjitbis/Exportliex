"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./NewsEvents.module.css";

export default function NewsEvents() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const newsItems = [
    {
      type: "blog",
      title:
        "Live Updates: Trump Administration Tariffs, Trade Policy Changes, and Impacts on Global Supply Chains",
      description:
        "Stay informed on the latest tariff changes and their effects on global logistics and supply chain operations.",
      image:
        "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg",
      alt: "Shipping containers at port",
      date: "May 15, 2024",
      readTime: "5 min read",
      link: "/blog/tariff-updates",
    },
    {
      type: "webinar",
      title:
        "Tariff Trends 2025: Expert Insights on the New U.S. Customs Landscape and Tariff Simulator Demo",
      description:
        "Join our experts for a deep dive into upcoming tariff changes and see our new tariff simulator in action.",
      image: "https://images.pexels.com/photos/448828/pexels-photo-448828.jpeg",
      alt: "Cargo ship in port",
      date: "June 4, 2025",
      time: "2:00 PM EST",
      link: "/webinars/tariff-trends-2025",
    },
    {
      type: "news",
      title:
        "Flexport CEO Says AI Poised for Big Things in Global Supply Chain",
      description:
        "Industry leaders discuss how artificial intelligence is transforming logistics and supply chain management.",
      image:
        "https://images.pexels.com/photos/4320234/pexels-photo-4320234.jpeg",
      alt: "AI and logistics technology",
      date: "April 22, 2024",
      source: "FreightWaves",
      link: "/news/ai-supply-chain",
    },
    {
      type: "blog",
      title:
        "Global Shipping Trends 2024: What's Changing in International Logistics",
      description:
        "Analysis of emerging trends in international shipping and logistics for the coming year.",
      image:
        "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg",
      alt: "Container port operations",
      date: "March 30, 2024",
      readTime: "7 min read",
      link: "/blog/shipping-trends-2024",
    },
    {
      type: "news",
      title: "New Maritime Regulations Impact Global Shipping Routes",
      description:
        "Latest IMO regulations are changing how shipping companies operate on international routes.",
      image: "https://images.pexels.com/photos/704982/pexels-photo-704982.jpeg",
      alt: "Cargo ship at sea",
      date: "February 18, 2024",
      source: "Maritime Executive",
      link: "/news/maritime-regulations",
    },
    {
      type: "webinar",
      title:
        "Digital Transformation in Logistics: From Paperwork to AI Automation",
      description:
        "Learn how digital tools are revolutionizing traditional logistics processes and documentation.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      alt: "Digital logistics dashboard",
      date: "July 12, 2024",
      time: "11:00 AM EST",
      link: "/webinars/digital-transformation",
    },
    {
      type: "blog",
      title: "Supply Chain Resilience in the Face of Global Challenges",
      description:
        "How companies are building more resilient supply chains to withstand global disruptions.",
      image:
        "https://images.pexels.com/photos/2108342/pexels-photo-2108342.jpeg",
      alt: "Warehouse logistics",
      date: "January 28, 2024",
      readTime: "6 min read",
      link: "/blog/supply-chain-resilience",
    },
    {
      type: "news",
      title: "Sustainability Initiatives Transforming Global Shipping",
      description:
        "New eco-friendly technologies and practices are revolutionizing the shipping industry.",
      image:
        "https://images.pexels.com/photos/3250360/pexels-photo-3250360.jpeg",
      alt: "Green logistics concept",
      date: "December 15, 2023",
      source: "Green Logistics Journal",
      link: "/news/sustainability-shipping",
    },
  ];

  const slidesToShow = 3;
  const totalSlides = Math.ceil(newsItems.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleItems = () => {
    const start = currentSlide * slidesToShow;
    const end = start + slidesToShow;
    return newsItems.slice(start, end);
  };

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>NEWS & EVENTS</h2>
          <p className={styles.subtitle}>
            Latest news, expert analysis, and industry events in global
            logistics and supply chain management.
          </p>
        </div>

        {/* News Grid Slider */}
        <div className={styles.newsSlider} ref={sliderRef}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {newsItems.map((item, index) => (
              <div key={index} className={styles.slideItem}>
                <div className={styles.newsCard}>
                  {/* Image */}
                  <div className={styles.imageContainer}>
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index < 3 ? "eager" : "lazy"}
                      className={styles.newsImage}
                    />
                  </div>

                  {/* Content */}
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>

                      <p className={styles.cardDescription}>
                        {item.description}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className={styles.metadata}>
                      <div className={styles.dateInfo}>
                        <FaCalendarAlt className={styles.calendarIcon} />
                        <span className={styles.date}>{item.date}</span>
                        {item.time && (
                          <span className={styles.time}>{item.time}</span>
                        )}
                        {item.readTime && (
                          <span className={styles.readTime}>
                            {item.readTime}
                          </span>
                        )}
                        {item.source && (
                          <span className={styles.source}>
                            via {item.source}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className={styles.actionContainer}>
                      <Link href={item.link} className={styles.actionButton}>
                        {item.type === "webinar" ? "Watch Now" : "Read More"}
                        <FaArrowRight className={styles.arrowIcon} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className={styles.mobileGrid}>
          {getVisibleItems().map((item, index) => (
            <div key={index} className={styles.newsCard}>
              <div className={styles.imageContainer}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className={styles.newsImage}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>

                  <p className={styles.cardDescription}>{item.description}</p>
                </div>

                <div className={styles.metadata}>
                  <div className={styles.dateInfo}>
                    <FaCalendarAlt className={styles.calendarIcon} />
                    <span className={styles.date}>{item.date}</span>
                    {item.time && (
                      <span className={styles.time}>{item.time}</span>
                    )}
                    {item.readTime && (
                      <span className={styles.readTime}>{item.readTime}</span>
                    )}
                    {item.source && (
                      <span className={styles.source}>via {item.source}</span>
                    )}
                  </div>
                </div>

                <div className={styles.actionContainer}>
                  <Link href={item.link} className={styles.actionButton}>
                    {item.type === "webinar" ? "Watch Now" : "Read More"}
                    <FaArrowRight className={styles.arrowIcon} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slider Controls */}
        <div className={styles.sliderControls}>
          <button
            className={styles.sliderBtn}
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <FaChevronLeft />
          </button>

          <div className={styles.slideIndicator}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`${styles.slideDot} ${
                  currentSlide === index ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <button
            className={styles.sliderBtn}
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
