import React from 'react'
import Slider from '../components/slider'
import Whychoose from '../components/whychoose'
import Contact from '../components/contactus'
import Newsletter from '../components/newsletter'
import Header from '../components/header'
const home = () => {
  return (
    <div>
      <Header/>
      <Slider />
      <Whychoose />
      <Contact/>
      <Newsletter/>
    
    </div>
  )
}

export default home
