"use client";

import styles from "./InsuranceServices.module.css";

export default function InsuranceServices() {
  const services = [
    {
      title: "Marine Cargo Insurance",
      image: "/products/Marine-Cargo-Insurance.png",
      description:
        "Comprehensive coverage for goods transported by sea. Protect your shipments from risks such as damage, theft, or loss during international and domestic marine transit.",
    },
    {
      title: "Package Protection",
      image: "/products/Package-Protection.png",
      description:
        "Designed for modern e-commerce businesses, this coverage safeguards individual parcels during last-mile delivery, reducing disputes, refunds, and customer dissatisfaction.",
    },
    {
      title: "Motor Truck Cargo Insurance",
      image: "/products/Motor-Truck-Cargo-Insurance.png",
      description:
        "Financial protection for cargo transported by road. Ideal for logistics providers and fleet operators seeking coverage against loss or damage while goods are in transit.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
            </div>

            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
