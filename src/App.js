import React from 'react';
import Navbar from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Gallery from './components/gallery';
import Services from './components/services';
import Tips from './components/tips';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;