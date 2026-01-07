import React from "react";
import Nav from "@/app/Home/component/Nav/page"
import Footer from "@/app/Home/component/Footer/page"
import HeroSection from "./componets/HeroSection/page";
import InsightsSection from "./componets/InsightsSection/page";
import HowItWorks from "./componets/HowItWorks/page";
import TrustSection from "./componets/TrustSection/page";
import FAQ from "./componets/FAQSection/page";
import GetStartedCTA from "./componets/GetStartedCTA/page";
export default function page() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <InsightsSection />
      <HowItWorks />
      <TrustSection />
      <FAQ />
      <GetStartedCTA />
      <Footer />
    </div>
  );
}
