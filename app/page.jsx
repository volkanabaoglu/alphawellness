import React from 'react'
 import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
const HomePage = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-black">
  
    <Hero />
      <Services/>
    <Footer />
  </div>
  )
}

export default HomePage