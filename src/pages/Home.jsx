import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Activity from '../components/Activity'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Activity/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home