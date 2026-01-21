"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DutyDrawbackFeatures.module.css";

export default function DutyDrawbackFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
  }, []);

const features = [
  {
    tag: "STRUCTURED",
    title: "Build a Reliable Foundation for Product Classification",
    text:
      "Accurate product classification starts with well-organized information. By aligning product descriptions, materials, and tariff data from the beginning, businesses reduce errors, ensure consistency across shipments, and strengthen compliance throughout the supply chain.",
    image: "/products/Classificatio-Foundation.png",
    reverse: false,
  },
  {
    tag: "INSIGHT",
    title: "Expert Review Reveals the True Impact of Trade Codes",
    text:
      "HTS and HS codes influence duties, reporting, and eligibility. When reviewed by experienced trade professionals, subtle classification differences can unlock savings, prevent misclassification risk, and support more informed global trade decisions.",
    image: "/products/Expert-Analysis.png",
    reverse: true,
  },
  {
    tag: "STRATEGIC",
    title: "Plan Product Design With Duty Outcomes in Focus",
    text:
      "Tariff engineering considers how materials, components, and assembly affect classification. Making informed design choices early helps businesses legally reduce duty exposure while maintaining product quality and regulatory compliance.",
    image: "/products/Tariff-Engineering.jpeg",
    reverse: false,
  },
];


  return (
    <section className={styles.section}>
      {features.map((item, index) => (
        <div
          key={index}
          className={`${styles.row} ${
            item.reverse ? styles.reverse : ""
          }`}
        >
          {/* IMAGE */}
          <div
            className={styles.imageWrap}
            data-aos={item.reverse ? "fade-left" : "fade-right"}
          >
            <img src={item.image} alt={item.title} />
          </div>

          {/* CONTENT */}
          <div
            className={styles.content}
            data-aos={item.reverse ? "fade-right" : "fade-left"}
          >
            <span className={styles.tag}>{item.tag}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
