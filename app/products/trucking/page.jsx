import React from "react";
import Nav from "@/app/Home/component/Nav/page.jsx";
import TruckingHero from "./components/TruckingHero/page.jsx";
import FeatureHighlights from "./components/FeatureHighlights/page.jsx";
import WarehouseDD from "./components/WarehouseDD/page.jsx";
import PlatformInsights from "./components/PlatformInsights/page.jsx";
import TrustSection from "./components/TrustSection/page.jsx";
import TruckingFAQ from "./components/TruckingFAQ/page.jsx";

export default function page() {
  return (
    <div>
      <Nav />
      <TruckingHero />
      <FeatureHighlights />
      <WarehouseDD />
      <PlatformInsights />
      <TrustSection />
      <TruckingFAQ />
    </div>
  );
}
