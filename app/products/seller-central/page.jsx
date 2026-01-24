import React from "react";
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";
import Hero from "./componets/Trade-Hero/page";
import SupplyChainFlow from "./componets/SupplyChainFlow/page";
import HowItWorks from "./componets/HowItWorks/page";
import GrowthFeatures from "./componets/GrowthFeatures/page";
import ImpactTestimonial from "./componets/ImpactTestimonial/page";
import FAQSection from "./componets/FAQSection/page";
import CTASection from "./componets/CTASection/page";

export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <SupplyChainFlow />
      <HowItWorks />
      <GrowthFeatures />
      <ImpactTestimonial />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
