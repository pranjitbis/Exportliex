import style from "./Hero.module.css";
import Link from "next/link";
import DeliveryGif from "@/public/hero/unnamed.gif";
import Image from "next/image";
export default function Page() {
  return (
    <div className={style.hero}>
      {/* Image + dark overlay */}
      <div className={style.heroImage}></div>

      <div className={style.heroContent}>
        <h2>The Operating System for Global Trade.</h2>
        <p>
          Move freight faster, track inventory in real-time, and automate your
          customs compliance. Exportliex connects your entire supply chain on
          one intelligent platform.
        </p>
        <Link href="/">
          <button>Start Shipping</button>
        </Link>
      </div>
    </div>
  );
}
