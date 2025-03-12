import React from 'react'
import Navbar from './Navbar'
import About from './about/About'
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      {/* <div id="about"><About /></div>
      <div id="features"><Features /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><Contact /></div> */}
    </div>
  )
}

export default LandingPage