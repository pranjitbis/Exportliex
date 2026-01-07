"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CarbonScrollSteps.module.css";

import step1Img from "@/public/products/Emissions.png";
import step2Img from "@/public/products/Break-down.png";
import step3Img from "@/public/products/Reduce.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    kicker: "MEASURE",
    title: "Emissions calculations you can count on",
    text: "Carbon Control applies standardized emissions methodologies across all transport modes, delivering reliable emissions data for reporting, compliance, and long-term sustainability planning.",
    image: step1Img,
  },
  {
    kicker: "ANALYZE",
    title: "Understand emissions across your network",
    text: "Break emissions down by carrier, route, mode, and geography to surface hotspots and prioritize the highest-impact reduction opportunities.",
    image: step2Img,
  },
  {
    kicker: "REDUCE",
    title: "Turn insight into real impact",
    text: "Test routing changes, modal shifts, and consolidation strategies before execution—reducing emissions without compromising service or cost control.",
    image: step3Img,
  },
];

export default function CarbonScrollSteps() {
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const activeIndex = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      stepRefs.current.forEach((step, i) => {
        gsap.set(step, {
          autoAlpha: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 40,
        });
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${steps.length * window.innerHeight}`,
        pin: true,

        onUpdate: (self) => {
          const index = Math.round(self.progress * (steps.length - 1));
          if (index === activeIndex.current) return;

          const prev = activeIndex.current;
          activeIndex.current = index;

          // Hide previous
          gsap.to(stepRefs.current[prev], {
            autoAlpha: 0,
            y: -40,
            duration: 0.3,
            ease: "power2.inOut",
          });

          // Show current
          gsap.fromTo(
            stepRefs.current[index],
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            }
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.wrapper}
      style={{ height: `${steps.length * 30}vh` }}
    >
      <div className={styles.sticky}>
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (stepRefs.current[i] = el)}
            className={styles.step}
          >
            <div className={styles.content}>
              <span className={styles.kicker}>{step.kicker}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>

            <div className={styles.imageWrap}>
              <Image
                src={step.image}
                alt={step.title}
                className={styles.image}
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
