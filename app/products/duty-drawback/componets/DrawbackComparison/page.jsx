"use client";

import styles from "./DrawbackProblemsSolutions.module.css";
import { FiAlertTriangle, FiZap } from "react-icons/fi";

const items = [
  {
    problemTitle: "Heavy Manual Effort",
    problemText:
      "Duty drawback workflows often rely on spreadsheets, emails, and paper documents, slowing teams down and increasing operational burden.",
    solutionText:
      "Our platform automates data ingestion and claim preparation, reducing manual effort and accelerating the recovery process.",
  },
  {
    problemTitle: "Unreliable Data Sources",
    problemText:
      "Import and export data is frequently fragmented across systems, leading to errors, missed opportunities, and compliance risk.",
    solutionText:
      "We consolidate and normalize trade data into a single, audit-ready dataset that supports accurate matching and validation.",
  },
  {
    problemTitle: "Lack of Claim Visibility",
    problemText:
      "Businesses struggle to track claim status, historical filings, and supporting documents across multiple tools.",
    solutionText:
      "Centralized dashboards provide real-time visibility into every claim, document, and recovery milestone.",
  },
];

export default function DrawbackProblemsSolutions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Turning Duty Drawback Challenges into Recoveries
        </h2>

        <p className={styles.subheading}>
          A modern, structured approach to eliminating complexity and unlocking
          consistent, compliant duty recovery.
        </p>

        <div className={styles.stack}>
          {items.map((item, index) => (
            <div key={index} className={styles.row}>
              {/* PROBLEM */}
              <div className={styles.problem}>
                <div className={styles.iconProblem}>
                  <FiAlertTriangle />
                </div>
                <h3>{item.problemTitle}</h3>
                <p>{item.problemText}</p>
              </div>

              {/* ARROW */}
              <div className={styles.arrowWrapper}>
                <span className={styles.arrow}>→</span>
              </div>

              {/* SOLUTION */}
              <div className={styles.solution}>
                <div className={styles.iconSolution}>
                  <FiZap />
                </div>
                <h3>Our Solution</h3>
                <p>{item.solutionText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
