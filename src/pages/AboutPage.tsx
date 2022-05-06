import React from 'react'
import About from '../components/aboutPageComponents/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WarningBlock from '../components/WarningBlock'

function AboutPage() {
  return (
    <div className="wrapper">
      <Header/>
      <About/>
      <WarningBlock/>
      <Footer/>
    </div>
  )
}

export default AboutPage