import React from 'react'
import Nav from "@/app/Home/component/Nav/page"
import Hero from "./componets/hero-section/page"
import LogisticsCommandOverview from "./componets/LogisticsCommandOverview/page"
import LogisticsCTA from "./componets/LogisticsCTA/page"
import LogisticsImpact from "./componets/LogisticsImpact/page"
import Footer from "@/app/Home/component/Footer/page"
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <LogisticsCommandOverview />
      <LogisticsImpact />
      <LogisticsCTA />
      <Footer />

    </div>
  )
}
