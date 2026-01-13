import React from 'react'
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";
import Hero from "./componets/HeroSignup/page"
import TradeFinance from "./componets/TradeFinanceSection/page"
import WorkingCapitalCalculator from "./componets/WorkingCapitalCalculator/page"
import TradeFinanceFeatures from "./componets/TradeFinanceFeatures/page"
import WhyTradeFinance from "./componets/WhyTradeFinance/page"
import StatsSection from "./componets/StatsSection/page"
import Testimonial from "./componets/Testimonial/page"
import FaqSection from "./componets/FaqSection/page"
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <TradeFinance />
      <WorkingCapitalCalculator />
      <TradeFinanceFeatures />
      <WhyTradeFinance />
      <StatsSection />
      <Testimonial />
      <FaqSection />
      <Footer />

    </div>
  )
}
