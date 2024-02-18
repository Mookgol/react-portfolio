import logo from "../../Assets/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
function Navbar() {
  return (
    <nav className="navbar">
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
            to="/contact"
            className="nav-link"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
