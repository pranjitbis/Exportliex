import React from 'react';
import Nav from "@/app/Home/component/Nav/page.jsx"
import Footer from "@/app/Home/component/Footer/page.jsx"
import Hero from "./componets/hero/page.jsx"
import FeatureHighlights from "./componets/FeatureHighlights/page.jsx"
import Testimonial from "./componets/Testimonial/page.jsx"
import DutyDrawbackInfo from "./componets/DutyDrawbackInfo/page.jsx"
import DutyDrawbackProcess from "./componets/CustomsDiagram/page.jsx"
import DrawbackComparison from "./componets/DrawbackComparison/page.jsx"
import DutyDrawbackFeatures from "./componets/DutyDrawbackFeatures/page.jsx"
import DutyDrawbackBestPractices from "./componets/DutyDrawbackBestPractices/page.jsx"
import FAQSection from "./componets/FAQSection/page.jsx"

export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <FeatureHighlights />
      <Testimonial />
      <DutyDrawbackInfo />
      <DutyDrawbackProcess />
      <DrawbackComparison />
      <DutyDrawbackFeatures />
      <DutyDrawbackBestPractices />
      <FAQSection />
      <Footer />
    </div>
  )
}
