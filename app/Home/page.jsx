"use client";
import React from "react";
import Nav from "./component/Nav/page";
import Hero from "./component/Hero/page";
import TrustSection from "./component/TrustSection/page";
import ServiceSection from "./component/ServiceSection/page";
import SupplyChainFlow from "./component/SupplyChainFlow/page";
import BlogContent from "./component/blogContent/page";
import GlobalServicesMap from "./component/GlobalServicesMap/page";
import LatestInsights from "./component/LatestInsights/page";
import TalkToExpert from "./component/TalkToExpert/page";
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <TrustSection />
      <SupplyChainFlow />
      <ServiceSection />
      <BlogContent />
      <GlobalServicesMap />
      <LatestInsights />
      <TalkToExpert />
    </div>
  );
}
