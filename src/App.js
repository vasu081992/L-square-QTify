import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
//import Card1 from './components/Card/Card';
import React from "react"
import Card1 from './components/Card/Card';
import Section from './components/Section/Section';
// Import the register function from Swiper


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Section/>
    </div>
  );
}

export default App;
