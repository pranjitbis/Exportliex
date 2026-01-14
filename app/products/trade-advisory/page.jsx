import React from 'react'
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";
import Trade from "./components/Trade-Hero/page";
import TradeSection from "./components/TradeSection/page";
import TradeOpportunities from "./components/TradeOpportunities/page";
import DutyMinimizationSection from "./components/DutyMinimizationSection/page";
import FaqSection from "./components/FaqSection/page";
export default function page() {
  return (
    <div>
      <Nav />
      <Trade />
      <TradeSection />
      <TradeOpportunities />
      <DutyMinimizationSection />
      <FaqSection />
      <Footer />
    </div>
  )
}
