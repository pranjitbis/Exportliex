"use client";
import React from "react";
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";
import HeroSignup from "./componet/HeroSection/page.jsx";
import FeatureCards from "./componet/FeatureCards/page.jsx";
import PlatformStats from "./componet/PlatformStats/page.jsx";
import TrustSection from "./componet/TrustSection/page.jsx";
import SupplyChainFlow from "./componet/SupplyChainFlow/page.jsx";
import Section from "./componet/Section-wise/page.jsx";
import FAQ from "./componet/FAQ-SECTION/page.jsx";
export default function page() {
  return (
    <div>
      <Nav />
      <HeroSignup />
      <FeatureCards />
      <PlatformStats />
      <TrustSection />
      <Section />
      <SupplyChainFlow />
      <FAQ />
      <Footer />
    </div>
  );
}
