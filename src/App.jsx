import React from "react";
import img from "./assets/images.png"; // make sure the path and filename are correct
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";

function App() {
  return (
   <div
  className="relative min-h-screen bg-black text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${img})` }}
>
  {/* Overlay for dark blur effect */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  {/* Main content sits above the overlay */}
  <div className="relative z-10">
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Services />
    <Contact />
  </div>
</div>
  );
}

export default App;
