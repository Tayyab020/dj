import React from 'react'
import Slider from '../components/slider'
import Whychoose from '../components/whychoose'
import Contact from '../components/contactus'
import Newsletter from '../components/newsletter'
import Header from '../components/header'
import Footer from '../components/footer'
const home = () => {
  return (
    <div>
      <Header/>
      <Slider />
      <Whychoose />
      <Contact/>
      <Newsletter/>
      <Footer />
    
    </div>
  )
}

export default home
