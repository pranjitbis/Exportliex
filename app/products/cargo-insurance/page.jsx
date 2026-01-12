import React from 'react';
import Nav from "@/app/Home/component/Nav/page"
import Footer from "@/app/Home/component/Footer/page"
import Hero from "./components/TruckingHero/page"
import GetStartedSection from "./components/GetStartedSection/page"
import FeatureHighlights from "./components/FeatureHighlights/page"
import StatsSection from "./components/StatsSection/page"
import InsuranceServices from "./components/InsuranceServices/page"
import InsuranceBlogSection from "./components/InsuranceBlogSection/page"
import FaqSection from "./components/FaqSection/page"

export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <GetStartedSection />
      <FeatureHighlights />
      <StatsSection />
      <InsuranceServices />
      <InsuranceBlogSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
