import React from 'react';
import HeroOrderManagemen from "./componets/HeroSignup/page.jsx";
import Nav from "@/app/Home/component/Nav/page.jsx";
import Footer from "@/app/Home/component/Footer/page.jsx";
import AirFreightFeatures from "@/app/Home/component/Nav/page.jsx";
import OrderManagement from "./componets/OrderManagement/page.jsx";
import OrderManagementSections from "./componets/OrderManagementSections/page.jsx";
import Testimonial from "./componets/Testimonial/page.jsx";
import OrderManagementTabs from "./componets/OrderManagementTabs/page.jsx";
import OnboardingExpertise from "./componets/OnboardingExpertise/page.jsx";
import FaqSection from "./componets/FaqSection/page.jsx";

export default function page() {
  return (
    <div>
      <Nav />
      <HeroOrderManagemen />
      <OrderManagement />
      <OrderManagementSections />
      <Testimonial />
      <OrderManagementTabs />
      <OnboardingExpertise />
      <FaqSection />
    </div>
  )
}
