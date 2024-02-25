import logo from "../../Assets/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "../Hamburger/Hamburger";
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger />
      </div>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <label htmlFor="navbar-toggle" className="navbar-toggle-label"></label>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link"
            onClick={() => scrollToSection("about")}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/experience"
            className="nav-link"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/project"
            className="nav-link"
            onClick={() => scrollToSection("projects")}
          >
            Project
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/illustrations"
            className="nav-link"
            onClick={() => scrollToSection("illustrations")}
          >
            Designs
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
      <style jsx>{`
        @media (max-width: 767px) {
          .navbar ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            height: 100vh;
            width: 50vw;
            margin-top: 50px;
            position: fixed;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
