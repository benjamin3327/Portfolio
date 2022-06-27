import React from "react";
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Services from './components/services';
import Works from "./components/work";
import Contact from "./components/contact";
import Footer from './components/footer';
import Portfolio
 from "./components/portfolio";
import "./App.css";
import items from "./components/items";
import PortfolioItems from "./components/portfolioItems";




function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Works />
      <Portfolio items={items} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;