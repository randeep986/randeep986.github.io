import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Stats} from './components/Stats/stats'
import Calender from './components/Calender/Calender'
import './App.css';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Calender />
      <Stats />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
