import React from 'react'
import Navbar from './Nabvar'
import Home from "../components/Home"
import ShopByOccasion from '../components/ShopByOccasion'
import FabricSection from '../components/FabricSection'
import ShopByTrend from '../components/ShopByTrend'
import TestimonialsSection from '../components/TestimonialsSection'
import DrapedByAtulya from '../components/DrapedByAtulya'
import Footer from "../components/Footer"
import AtulyaPopup from './AtulyaPopup'

function Dashboad() {
  return (
    <div>
    <AtulyaPopup/>
    <Navbar/>
    <div>
    <Home/>
    <ShopByOccasion/>
    <FabricSection/>
    <ShopByTrend/>
    <TestimonialsSection/>
    <DrapedByAtulya/>
    <Footer />
    
    </div>
      
    </div>
  )
}

export default Dashboad
