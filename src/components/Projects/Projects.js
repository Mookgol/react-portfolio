import React from "react";
import "./Project.css";
import img2 from "../../Assets/Project2.png";
import img from "../../Assets/Project1.png";
import img3 from "../../Assets/project3.png";

function Projects() {
  return (
    <section id="projects">
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <Project
            imgSrc={img}
            title="Portfolio"
            githubLink="https://github.com/"
            liveDemoLink="https://github.com/"
          />
          <Project
            imgSrc={img2}
            title="Portfolio"
            title="Game"
            githubLink="https://github.com/"
            liveDemoLink="https://github.com/"
          />
          <Project
            imgSrc={img3}
            title="kuyasaServices"
            githubLink="https://github.com/"
            liveDemoLink="https://github.com/"
          />
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
}

function Project({ imgSrc, alt, title, githubLink, liveDemoLink }) {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imgSrc} alt={alt} className="project-img" />
      </div>
      <h2 className="experience-sub-title project-title">{title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => (window.location.href = githubLink)}
        >
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => (window.location.href = liveDemoLink)}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
}

export default Projects;
