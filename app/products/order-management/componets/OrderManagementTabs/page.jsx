"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./OrderManagementTabs.module.css";

import messagingImg from "@/public/products/feature-messaging.webp";
import collaborationImg from "@/public/products/feature-collaboration.png";
import dateImg from "@/public/products/feature-date.png";
import approvalImg from "@/public/products/feature-approval.png";
import insightsImg from "@/public/products/feature-insights.png";

const tabs = [
  {
    key: "messaging",
    label: "Messaging",
    tag: "ORDER MESSAGING",
    title: "Centralize Order Conversations",
    desc: "Communicate with suppliers directly at the purchase order level instead of using scattered emails, keeping all discussions, confirmations, and decisions linked to the order for easy access and better alignment.",
    image: messagingImg,
  },
  {
    key: "collaboration",
    label: "Collaboration",
    tag: "COLLABORATION",
    title: "Work Together on Orders in One Place",
    desc: "Allow suppliers to acknowledge orders, request changes, and ask questions in a shared workspace where every update is tracked clearly, improving transparency, accountability, and faster decision-making.",
    image: collaborationImg,
  },
  {
    key: "dates",
    label: "Date Management",
    tag: "DATE MANAGEMENT",
    title: "Keep Orders on Schedule",
    desc: "Set clear booking deadlines and cargo-ready dates while receiving automatic alerts when timelines are missed, helping teams take early action and avoid last-minute shipment delays.",
    image: dateImg,
  },
  {
    key: "approval",
    label: "Booking Approval",
    tag: "BOOKING APPROVAL",
    title: "Ensure Accurate and Compliant Bookings",
    desc: "Apply simple validation rules to confirm supplier bookings meet your requirements and automatically catch destination, quantity, or transport mismatches before shipments are approved.",
    image: approvalImg,
  },
  {
    key: "insights",
    label: "Insights",
    tag: "INSIGHTS",
    title: "Track Performance with Actionable Reports",
    desc: "Access standard or custom reports to analyze supplier performance, booking accuracy, and exception trends in one place, enabling data-driven decisions without relying on manual spreadsheets.",
    image: insightsImg,
  },
];


export default function OrderManagementTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Order Management Key Features</h2>

      {/* TABS */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tab} ${
              active.key === tab.key ? styles.active : ""
            }`}
            onClick={() => setActive(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        {/* LEFT TEXT */}
        <div key={active.key} className={styles.textAnim}>
          <span className={styles.tag}>{active.tag}</span>
          <h3>{active.title}</h3>
          <p>{active.desc}</p>
        </div>

        {/* RIGHT IMAGE */}
        <div key={active.image.src} className={styles.imageAnim}>
          <div className={styles.imageWrap}>
            <Image
              src={active.image}
              alt={active.title}
              className={styles.image}
              sizes="(max-width: 768px) 90vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
