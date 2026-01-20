import React from 'react'
import Nav from "@/app/Home/component/Nav/page"
import Footer from "@/app/Home/component/Footer/page"
import Hero from "./componets/hero/page"
import CustomsTechnology from "./componets/CustomsTechnology/page"
import TransformingCustoms from "./componets/TransformingCustoms/page"
import TariffConfidence from "./componets/TariffConfidence/page"
import CustomsCapabilities from "./componets/CustomsCapabilities/page"
import TradeHero from "./componets/TradeHero/page"
import CustomsDiagram from "./componets/CustomsDiagram/page"
import CustomsPrevention from "./componets/CustomsPrevention/page"
import CTASection from "./componets/CTASection/page"
import FAQSection from "./componets/FAQSection/page"
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <CustomsTechnology />
      <TransformingCustoms />
      <TariffConfidence />
      <CustomsCapabilities />
      <TradeHero />
      <CustomsDiagram />
      <CustomsPrevention />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  )
}
