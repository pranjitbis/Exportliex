"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./LogisticsCTA.module.css";

export default function LogisticsCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>
            Take control of logistics execution <br />
            with confidence and clarity
          </h2>

          <p className={styles.description}>
            Modern supply chains demand more than disconnected tools and
            reactive workflows. Logistics Command provides a centralized
            operational foundation that helps teams anticipate risk, improve
            coordination, and make informed decisions across every shipment,
            order, and partner.
          </p>

          <p className={styles.description}>
            Connect with our team to explore how Logistics Command can support
            your organization’s goals — from cost efficiency and service
            reliability to operational resilience at scale.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field} data-aos="fade-up">
                <label>First name</label>
                <input type="text" placeholder="First name" />
              </div>

              <div className={styles.field} data-aos="fade-up">
                <label>Last name</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field} data-aos="fade-up">
                <label>Work email</label>
                <input type="email" placeholder="name@company.com" />
              </div>

              <div className={styles.field} data-aos="fade-up">
                <label>Company name</label>
                <input type="text" placeholder="Company name" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field} data-aos="fade-up">
                <label>Country code</label>
                <select>
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
              </div>

              <div className={styles.field} data-aos="fade-up">
                <label>Business phone</label>
                <input type="tel" placeholder="Business phone" />
              </div>
            </div>

            <div className={styles.checkbox} data-aos="fade-up">
              <input type="checkbox" />
              <span>
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </div>

            <button className={styles.submit} data-aos="fade-up">
              Request a demo
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
