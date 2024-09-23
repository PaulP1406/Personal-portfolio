import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import LeaveAQuote from './Pages/LeaveAQuote';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <SpeedInsights />
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/quotes" element={<LeaveAQuote />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
