import React from 'react'
import Nav from "@/app/Home/component/Nav/page"
import Footer from "@/app/Home/component/Footer/page"
import Classification from "./componets/Classification-Hero/page"
import FeatureHighlights from "./componets/FeatureHighlights/page"
import DutyDrawbackFeatures from "./componets/DutyDrawbackFeatures/page"
import GoFurther from "./componets/GoFurther/page"
import FAQSection from "./componets/FAQSection/page"
export default function page() {
  return (
    <div>
      <Nav />
      <Classification />
      <FeatureHighlights />
      <DutyDrawbackFeatures />
      <GoFurther />
      <FAQSection />
      <Footer />
    </div>
  )
}
