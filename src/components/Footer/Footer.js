import logo from "../../Assets/logo-footer.png";
import linkedinIcon from "../../Assets/linkedin-icon.png";
import behanceIcon from "../../Assets/behance-icon.png";
import githubIcon from "../../Assets/github-icon.png";
import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <div className="footer">
      <center>
        <img src={logo} className="logo-footer" alt={logo} />
      </center>
      <p className="slogan">
        Learning, Living, & Leveling up one day at a time.
      </p>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/mookgo-lebaka-5377a0199/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            width="40"
            className="linkedin-icon"
          />
        </a>
        <a
          href="https://www.behance.net/mookgolebaka"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={behanceIcon}
            alt="BehanceIcon"
            width="40"
            className="behance-icon"
          />
        </a>
        <a href="https://github.com/Mookgol" target="_blank" rel="noreferrer">
          <img
            src={githubIcon}
            alt="githubIcon"
            width="40"
            className="github-icon"
          />
        </a>
      </div>
      <p className="Copyright">
        Copyright@ 2024 Mookgo Lebaka. All Rights Reserved.
      </p>
    </div>
  );
}
