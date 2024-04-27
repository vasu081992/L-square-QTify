import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
//import Card1 from './components/Card/Card';
import React from "react"

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
