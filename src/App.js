import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import About from './components/About';
import Project from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css'; // Import your CSS file
import logo from './components/logo.png';
import Home from "./components/Home"; // Import your logo image

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
      <Router>
        <div>
          <nav className="navbar">
            <div className="navbar-left">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" onClick={scrollToTop}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={scrollToTop}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/project" className="nav-link" onClick={scrollToTop}>Project</Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link" onClick={scrollToTop}>Experience</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" onClick={scrollToTop}>Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
