import React from "react";
import Navbar from "./Components/Navbars/Navbar"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Fixed from "./Components/Fixed/Fixed";
import Particle from "./particle";
import AnimeCursor from "./Components/AnimeCursor";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Analytics/>
      <Particle/>
      <AnimeCursor/>
      <Fixed/>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
