import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/Meal'
import TeamMember from './components/Team'
import AppLaunch from './components/AppLaunch'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Career from './components/Career'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF5D5' }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TeamMember />
      <AppLaunch />
      <Career/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
