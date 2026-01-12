"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./ExpandableCards.module.css";

export default function ExpandableCards() {
  const cards = [
    {
      id: 1,
      title: "Fast Coverage",
      image: "/products/fast-coverage.png",
      short: "Get insured quickly.",
      long: "Apply in minutes and secure cargo insurance instantly, without slowing down your shipment or operations.",
    },
    {
      id: 2,
      title: "Global Protection",
      image: "/products/global-protection.png",
      short: "Worldwide coverage.",
      long: "Protect your cargo across air, ocean, and land with comprehensive, end-to-end global insurance coverage.",
    },
    {
      id: 3,
      title: "Simple Claims",
      image: "/products/simple-claims.png",
      short: "Hassle-free claims.",
      long: "Benefit from fast, transparent claims processing designed to minimize delays and reduce operational friction.",
    },
  ];

  const [activeId, setActiveId] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardSelect = useCallback(
    (id) => {
      if (isAnimating || id === activeId) return;
      setIsAnimating(true);
      setActiveId(id);

      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, activeId]
  );

  // Auto-rotate cards every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = cards.findIndex((card) => card.id === activeId);
      const nextIndex = (currentIndex + 1) % cards.length;
      handleCardSelect(cards[nextIndex].id);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeId, cards, handleCardSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;

      e.preventDefault();
      const currentIndex = cards.findIndex((card) => card.id === activeId);
      let newIndex;

      if (e.key === "ArrowRight") {
        newIndex = (currentIndex + 1) % cards.length;
      } else {
        newIndex = (currentIndex - 1 + cards.length) % cards.length;
      }

      handleCardSelect(cards[newIndex].id);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId, cards, handleCardSelect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    active: { scale: 1.03 },
  };

  const textVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      marginTop: 0,
    },
    expanded: {
      height: "auto",
      opacity: 1,
      marginTop: "1rem",
    },
  };

  const indicatorVariants = {
    inactive: { scale: 0, opacity: 0 },
    active: { scale: 1, opacity: 1 },
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className={style.section} aria-labelledby="section-heading">
      {/* SECTION HEADER */}
      <motion.header
        className={style.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 id="section-heading" className={style.heading}>
          Why Choose Our{" "}
          <span className={style.highlight}>Cargo Insurance?</span>
        </h2>
        <p className={style.subheading}>
          Experience comprehensive protection designed to support modern global
          trade at every stage of transit.
        </p>
      </motion.header>

      {/* CARDS CONTAINER */}
      <motion.div
        className={style.cardsContainer}
        role="tablist"
        aria-label="Cargo insurance features"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={style.cards}>
          {cards.map((card, index) => {
            const isActive = activeId === card.id;

            return (
              <motion.article
                key={card.id}
                className={`${style.card} ${isActive ? style.active : ""}`}
                variants={cardVariants}
                onClick={() => handleCardSelect(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardSelect(card.id);
                  }
                }}
                role="tab"
                id={`card-tab-${card.id}`}
                aria-controls={`card-panel-${card.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                whileHover="hover"
                animate={isActive ? "active" : "rest"}
              >
                {/* CARD IMAGE WITH OVERLAY */}
                <motion.div
                  className={style.imageContainer}
                  variants={imageVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className={style.image}
                    loading="lazy"
                    width={280}
                    height={180}
                  />
                  <div className={style.imageOverlay} />

                  {/* Gradient border effect */}
                  {isActive && (
                    <motion.div
                      className={style.gradientBorder}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                {/* CARD CONTENT */}
                <div className={style.content}>
                  <div className={style.titleWrapper}>
                    <h3 className={style.title}>{card.title}</h3>
                    <div className={style.indicator}>
                      <motion.span
                        className={style.indicatorInner}
                        variants={indicatorVariants}
                        animate={isActive ? "active" : "inactive"}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                      />
                    </div>
                  </div>

                  <div className={style.textContainer}>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={isActive ? "long" : "short"}
                        className={style.text}
                        id={`card-panel-${card.id}`}
                        role="tabpanel"
                        aria-labelledby={`card-tab-${card.id}`}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {isActive ? card.long : card.short}
                      </motion.p>
                    </AnimatePresence>

                    {/* EXPAND/COLLAPSE HINT */}
                    <motion.div
                      className={style.hint}
                      animate={{ y: isActive ? 10 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={style.hintText}>
                        {isActive ? "Click to collapse" : "Click to learn more"}
                      </span>
                      <motion.svg
                        className={style.arrow}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <path
                          d="M7 10l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>

                {/* Floating badge for active card */}
                {isActive && (
                  <motion.div
                    className={style.activeBadge}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.1,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* NAVIGATION DOTS WITH PROGRESS INDICATOR */}
        <div
          className={style.navigation}
          role="navigation"
          aria-label="Card navigation"
        >
          <div className={style.dots}>
            {cards.map((card) => (
              <button
                key={card.id}
                className={`${style.dot} ${
                  activeId === card.id ? style.dotActive : ""
                }`}
                onClick={() => handleCardSelect(card.id)}
                aria-label={`Go to ${card.title}`}
                aria-current={activeId === card.id}
              >
                {activeId === card.id && (
                  <motion.div
                    className={style.dotPulse}
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
