import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import UpArrow from "./components/UpArrow/UpArrow";
import Footer from "./components/Footer/Footer.js";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <UpArrow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
