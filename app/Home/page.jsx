"use client";
import React from "react";
import Nav from "./component/Nav/page";
import Hero from "./component/Hero/page";
import TrustSection from "./component/TrustSection/page";
import ServiceSection from "./component/ServiceSection/page"
import SupplyChainFlow from "./component/SupplyChainFlow/page"
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <TrustSection/>
      <SupplyChainFlow/>
      <ServiceSection/>
    </div>
  );
}
