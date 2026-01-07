"use client"
import React from 'react'
import Nav from '@/app/Home/component/Nav/page'
import Footer from '@/app/Home/component/Footer/page'
import Hero from './components/hero/page'
import BuyersConsolidationFeatures from './components/BuyersConsolidationFeatures/page'
import StatsBar from './components/StatsBar/page'
import BuyerConsolidationSections from './components/BuyerConsolidationSections/page'
import FAQ from './components/FAQ/page'
export default function page() {
  return (
    <div>
      <Nav />
      <Hero />
      <BuyersConsolidationFeatures />
      <StatsBar />
      <BuyerConsolidationSections />
      <FAQ />
      <Footer />

    </div>
  )
}
