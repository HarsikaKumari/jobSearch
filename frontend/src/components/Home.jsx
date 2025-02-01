// import React from 'react'
import CategoryCarousel from './CategoryCarousel.jsx'
import HeroSection from './HeroSection.jsx'
import LatestJobs from './LatestJobs.jsx'
import Footer from './shared/Footer.jsx'
import Navbar from './shared/Navbar.jsx'

function Home() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <Footer />
    </div>
  )
}

export default Home