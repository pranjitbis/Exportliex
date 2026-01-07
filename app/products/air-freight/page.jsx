import React from "react";
import HeroSignup from "./components/HeroSignup/page.jsx";
import Nav from "@/app/Home/component/Nav/page";
import AirFreightFeatures from "./components/AirFreightFeatures/page.jsx";
import AirFreightInsights from "./components/AirFreightInsights/page.jsx";
import Testimonial from "./components/Testimonial/page.jsx";
import SecuritySection from "./components/SecuritySection/page.jsx";
import SupplyChainFlow from "./components/SupplyChainFlow/page.jsx";
import TrustSection from "./components/TrustSection/page.jsx";
import ReportsSection from "./components/ReportsSection/page.jsx";
import CTASection from "./components/CTASection/page.jsx";
import FAQSection from "./components/FAQSection/page.jsx";
import Footer from "@/app/Home/component/Footer/page.jsx"
export default function page() {
  return (
    <div>
      <Nav />
      <HeroSignup />
      <AirFreightFeatures />
      <AirFreightInsights />
      <Testimonial />
      <SecuritySection />
      <SupplyChainFlow />
      <TrustSection />
      <ReportsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}
