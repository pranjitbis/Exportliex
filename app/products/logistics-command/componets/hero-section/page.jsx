"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiActivity, FiEye, FiTrendingUp, FiShield } from "react-icons/fi";
import Image from "next/image";
import "./LogisticsCommand.css";
import logistics from "@/public/products/logistics-command.png"
export default function LogisticsCommandPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="logisticsCommand">
      <div className="overlay" />

      <div className="container">
        {/* LEFT CONTENT */}
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">
            <FiActivity /> Logistics Command
          </span>

          <h1 className="title">
            Command and orchestrate <br />
            logistics operations in real time
          </h1>

          <p className="description">
            Logistics Command provides a unified operational layer for
            monitoring shipments, inventory, and execution signals. Identify
            risks early, coordinate faster, and maintain control across your
            global logistics network with live intelligence.
          </p>

          <div className="actions">
            <button className="primaryBtn">Talk to an Expert</button>
            <button className="secondaryBtn">View Capabilities</button>
          </div>

          <div className="features">
            <div className="featureItem" data-aos="fade-up">
              <FiEye />
              <span>End-to-end visibility</span>
            </div>

            <div
              className="featureItem"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FiTrendingUp />
              <span>Predictive performance insights</span>
            </div>

            <div
              className="featureItem"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FiShield />
              <span>Resilient execution control</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="imageWrapper">
            <Image
              src={logistics}
              alt="Logistics Command Visualization"
              className="commandImage"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
