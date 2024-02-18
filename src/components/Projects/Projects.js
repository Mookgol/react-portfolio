import React from "react";
import "./Project.css";
import img2 from "../../Assets/Project2.png";
import img from "../../Assets/Project1.png";
import img3 from "../../Assets/project3.png";

function Projects() {
  return (
    <div id="projects">
      <h1 className="title"></h1>
      <div className="project-container">
        <div className="project-containers">
          <Project
            imgSrc={img}
            title="Portfolio"
            githubLink="https://github.com/Mookgol/My-New-Portfolio-html-css-and-Javasript"
            liveDemoLink="https://mookgo-lebaka.netlify.app/"
          />
          <Project
            imgSrc={img2}
            title="Game"
            githubLink="https//github.com/Mookgol/Game"
            liveDemoLink="https//github.com/Mookgol/Game"
          />
          <Project
            imgSrc={img3}
            title="kuyasaServices"
            githubLink="https://github.com/Mookgol/Kuyasa-Health-Services"
            liveDemoLink="https://keen-tapioca-29c1f9.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
}

function Project({ imgSrc, alt, title, githubLink, liveDemoLink }) {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imgSrc} alt={alt} className="project-img" />
      </div>
      <h2 className="project-title">{title}</h2>
      <div className="btn-container">
        <button
          className="project-btn"
          onClick={() => (window.location.href = githubLink)}
        >
          Github
        </button>
        <button
          className="project-btn"
          onClick={() => (window.location.href = liveDemoLink)}
        >
          Live
        </button>
      </div>
    </div>
  );
}

export default Projects;
