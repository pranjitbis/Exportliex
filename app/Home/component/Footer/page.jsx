import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TOP RED STRIP */}
      <div className={styles.redStrip} />

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>Exportliex</h2>
          <p className={styles.description}>
            Exportliex helps modern businesses navigate global trade with
            clarity, control, and confidence—bringing structure to complex
            logistics operations.
          </p>

          <div className={styles.socials}>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Order Status</a>
            </li>
            <li>
              <a href="#">Wholesale</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Exportliex. All rights reserved.</p>
      </div>
    </footer>
  );
}
