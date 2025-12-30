import React from "react";
import HeroSignup from "./components/HeroSignup/page.jsx";
import Nav from "@/app/Home/component/Nav/page";
import AirFreightFeatures from "./components/AirFreightFeatures/page.jsx";
import AirFreightInsights from "./components/AirFreightInsights/page.jsx";

export default function page() {
  return (
    <div>
      <Nav />
      <HeroSignup />
      <AirFreightFeatures />
      <AirFreightInsights />
    </div>
  );
}
