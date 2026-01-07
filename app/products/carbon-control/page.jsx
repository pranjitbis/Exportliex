import React from 'react';
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";
import TruckingHero from "./components/TruckingHero/page"
import FeatureHighlights from "./components/FeatureHighlights/page"
import CarbonMeasureSection from "./components/CarbonMeasureSection/page"
import ClientSpotlight from "./components/ClientSpotlight/page"
import TrustSection from "./components/TrustSection/page"
import CircularEconomy from "./components/CircularEconomy/page"
import CTASection from "./components/CTASection/page"
import FAQSection from "./components/FAQSection/page"
export default function page() {
  return (
    <div>
      <Nav />
      <TruckingHero />
      <FeatureHighlights />
      <CarbonMeasureSection />
      <ClientSpotlight />
      <TrustSection />
      <CircularEconomy />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
