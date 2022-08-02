import React from "react";
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Services from './components/services';
import Works from "./components/work";
import Contact from "./components/contact";
import Footer from './components/footer';
import Portfolio from "./components/portfolio";
import Gallery from "./components/gallery";

import "./App.css";
import items from "./components/items";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/work" component={Works} />
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
      </Routes>
      
      <Intro />
      <About />
      <Services />
      <Works />
      <Portfolio items={items} />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;