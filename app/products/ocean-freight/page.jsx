import React from "react";
import Hero from "./componet/hero/page";
import SupplyChains from "./componet/supplyChains/page";
import TrustSection from "./componet/TrustSection/page";
import InsightSections from "./componet/InsightSections/page";
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";
import Blog from "./componet/blog/page";
import FAQ from "./componet/FAQ/page";
import CTASection from "./componet/CTASection/page";
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <SupplyChains />
      <TrustSection />
      <InsightSections />
      <Blog />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
