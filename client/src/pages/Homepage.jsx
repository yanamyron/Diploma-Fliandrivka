import React from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/sections/Home';
import AboutUs from '../components/sections/AboutUs';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
    <Navigation />
      <Home />
      <AboutUs />
      <Cards/>
      <Reviews />
      <FAQ />
      <Footer />
      </>
  )
}

export default Homepage;