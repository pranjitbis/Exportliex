"use client";
import { useState } from "react";
import {
  FaShip,
  FaPlane,
  FaFileContract,
  FaTruck,
  FaBoxOpen,
  FaClock,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";
import styles from "./SupplyChainFlow.module.css";
import Image from "next/image";
import Export from "@/public/Chain-Management/transport.png";
export default function SupplyChainFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: (
        <div className={styles.iconWithImage}>
          <Image src={Export} alt="Ocean & Air Freight" />
        </div>
      ),
      title: "Ocean & Air Freight",
      description:
        "Move goods globally with optimized routing, real-time tracking, and predictable transit times.",
      stats: {
        time: "5-28 days",
        success: "99.5%",
        technology: "Real-time Tracking",
      },
    },

    {
      icon: <FaFileContract />,
      title: "Customs Clearance",
      description:
        "Clear borders faster with automated compliance, duty visibility, and expert brokerage support.",
      stats: {
        time: "24-48 hours",
        success: "98%",
        technology: "Document AI",
      },
    },
    {
      icon: <FaTruck />,
      title: "Trucking",
      description:
        "Move cargo seamlessly with nationwide carriers and real-time, milestone-level visibility.",
      stats: {
        time: "1-5 days",
        success: "99%",
        technology: "GPS Tracking",
      },
    },
    {
      icon: <FaBoxOpen />,
      title: "Fulfillment",
      description:
        "Deliver faster with distributed fulfillment, inventory intelligence, and last-mile optimization.",
      stats: {
        time: "1-2 days",
        success: "99.8%",
        technology: "Smart Routing",
      },
    },
  ];

  return (
    <section className={styles.flowSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>End-to-End Supply Chain Management</h2>
          <p className={styles.subtitle}>
            Seamless logistics from factory to customer with complete visibility
            and control.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className={styles.desktopTimeline}>
          <div className={styles.timelineLine}>
            <div
              className={styles.timelineProgress}
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className={styles.stepsDesktop}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.stepDesktop} ${
                  activeStep === index ? styles.active : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.stepDesktopContent}>
                  <div
                    className={styles.stepDesktopIcon}
                    style={{
                      backgroundColor:
                        activeStep >= index ? "#D0DEF2" : "white",
                      borderColor: activeStep >= index ? "#1d4ed8" : "#e2e8f0",
                      color: activeStep >= index ? "#585C66" : "#1d4ed8",
                    }}
                  >
                    {step.icon}
                  </div>
                  <div className={styles.stepDesktopNumber}>{index + 1}</div>
                  <h4 className={styles.stepDesktopTitle}>{step.title}</h4>
                  <p className={styles.stepDesktopDescription}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className={styles.mobileTimeline}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${styles.stepMobile} ${
                activeStep === index ? styles.activeMobile : ""
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className={styles.stepMobileHeader}>
                <div
                  className={styles.stepMobileIcon}
                  style={{
                    backgroundColor: activeStep >= index ? "#D0DEF2" : "white",
                    borderColor: activeStep >= index ? "#1d4ed8" : "#e2e8f0",
                    color: activeStep >= index ? "#585C66" : "#1d4ed8",
                  }}
                >
                  {step.icon}
                </div>
                <div className={styles.stepMobileContent}>
                  <div className={styles.stepMobileNumber}>
                    Step {index + 1}
                  </div>
                  <h4 className={styles.stepMobileTitle}>{step.title}</h4>
                </div>
              </div>

              {activeStep === index && (
                <div className={styles.stepMobileDescription}>
                  <p>{step.description}</p>

                  <div className={styles.mobileStats}>
                    <div className={styles.mobileStat}>
                      <div className={styles.mobileStatIcon}>
                        <FaClock />
                      </div>
                      <div>
                        <div className={styles.mobileStatValue}>
                          {step.stats.time}
                        </div>
                        <div className={styles.mobileStatLabel}>
                          Average Duration
                        </div>
                      </div>
                    </div>

                    <div className={styles.mobileStat}>
                      <div className={styles.mobileStatIcon}>
                        <FaChartLine />
                      </div>
                      <div>
                        <div className={styles.mobileStatValue}>
                          {step.stats.success}
                        </div>
                        <div className={styles.mobileStatLabel}>
                          Success Rate
                        </div>
                      </div>
                    </div>

                    <div className={styles.mobileStat}>
                      <div className={styles.mobileStatIcon}>
                        <FaCogs />
                      </div>
                      <div>
                        <div className={styles.mobileStatValue}>
                          {step.stats.technology}
                        </div>
                        <div className={styles.mobileStatLabel}>
                          Key Technology
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Info (Desktop) */}
        <div className={styles.activeInfoDesktop}>
          <div className={styles.activeStepHeader}>
            <h3 className={styles.activeStepTitle}>
              {steps[activeStep].title}
            </h3>
            <p className={styles.activeStepDescription}>
              {steps[activeStep].description} Our platform provides automated
              workflows and real-time monitoring to ensure efficiency and
              reliability.
            </p>
          </div>

          <div className={styles.activeStepStats}>
            <div className={styles.activeStat}>
              <div
                className={styles.activeStatIcon}
                style={{ backgroundColor: "#e0e7ff" }}
              >
                <FaClock color="#1d4ed8" />
              </div>
              <div>
                <div className={styles.activeStatValue}>
                  {steps[activeStep].stats.time}
                </div>
                <div className={styles.activeStatLabel}>Average Duration</div>
              </div>
            </div>

            <div className={styles.activeStat}>
              <div
                className={styles.activeStatIcon}
                style={{ backgroundColor: "#d1fae5" }}
              >
                <FaChartLine color="#059669" />
              </div>
              <div>
                <div className={styles.activeStatValue}>
                  {steps[activeStep].stats.success}
                </div>
                <div className={styles.activeStatLabel}>Success Rate</div>
              </div>
            </div>

            <div className={styles.activeStat}>
              <div
                className={styles.activeStatIcon}
                style={{ backgroundColor: "#e0e7ff" }}
              >
                <FaCogs color="#1d4ed8" />
              </div>
              <div>
                <div className={styles.activeStatValue}>
                  {steps[activeStep].stats.technology}
                </div>
                <div className={styles.activeStatLabel}>Key Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
