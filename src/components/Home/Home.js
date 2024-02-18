import React from "react";
import "./Home.css";
import hero1 from "../../Assets/hero1.png";
import resumePdf from "../../Assets/resume-example.pdf";
import linkedinIcon from "../../Assets/linkedin-icon.png";
import behanceIcon from "../../Assets/behance-icon.png";
import githubIcon from "../../Assets/github-icon.png";

function Home() {
  const handleDownloadCv = () => {
    window.open(resumePdf);
  };

  const handleContactinfo = () => {
    window.location.href = "./#contact";
  };

  return (
    <section id="profile">
      <div className="profile__container">
        <div className="section__text">
          <h1 className="section__text__p1">Hello, I'm</h1>
          <h1 className="title">Mookgo Lebaka</h1>
          <h1>
            {" "}
            A passionate Junior Software Developer and Digital Illustrator
            <br />
            based in Cape Town, South Africa.
          </h1>
          <h4>I Design and code beautiful simple things.</h4>
          <button className="btn btn-color-2" onClick={handleDownloadCv}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactinfo}>
            Contact Info
          </button>
          <div className="social-icons">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              width="40"
              className="linkedin-icon"
            />
            <img
              src={behanceIcon}
              alt="BehanceIcon"
              width="40"
              className="behance-icon"
            />
            <img
              src={githubIcon}
              alt="githubIcon"
              width="40"
              className="github-icon"
            />
          </div>
        </div>
        <div className="image__container">
          <img src={hero1} alt="Hero" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
