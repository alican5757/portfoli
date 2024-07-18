import '../../App.css';
import React from 'react';
import Header from './potfoliocomponents/header/Header';
import Home from './potfoliocomponents/home/Home';
import About from './potfoliocomponents/about/About';
import Skills from './potfoliocomponents/skills/Skills';
import Services from './potfoliocomponents/services/Services';
import Qualification from './potfoliocomponents/qualification/Qualification'; // Corrected typo in import
import Work from './potfoliocomponents/work/Work';
import Testimonials from './potfoliocomponents/testimonials/Testimonials';
import Contact from './potfoliocomponents/contact/Contact';
import Footer from './potfoliocomponents/footer/Footer';
import Scrollup from './potfoliocomponents/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
