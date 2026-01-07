import React from 'react'
import Nav from "@/app/Home/component/Nav/page"
import Hero from "./componets/hero/page"
import CustomsTechnology from "./componets/CustomsTechnology/page"
import TrustSection from "./componets/TrustSection/page"
import TransformingCustoms from "./componets/TransformingCustoms/page"
import TariffConfidence from "./componets/TariffConfidence/page"
import CustomsCapabilities from "./componets/CustomsCapabilities/page"
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <CustomsTechnology />
      <TrustSection />
      <TransformingCustoms />
      <TariffConfidence />
      <CustomsCapabilities />
    </div>
  )
}
