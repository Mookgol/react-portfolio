import React from "react";
import "./Project.css";
import Kuyasa from "../../Assets/project3.png";
import Game from "../../Assets/Project2.png";
import Portfolio from "../../Assets/Project1.png";

const images = [
  {
    url: Kuyasa,
    githubLink: "https://github.com/Mookgol/Kuyasa-Health-Services",
    liveDemoLink: "https://keen-tapioca-29c1f9.netlify.app",
    alt: "Kuyasa",
    description: "Kuyasa Health Services",
    title: "Github",
    title_2: "Live",
  },

  {
    url: Game,
    githubLink: "https://github.com/Mookgol/Game",
    liveDemoLink: "https://github.com/Mookgol/Game",
    alt: "Game",
    description: "Game",
    title: "Github",
    title_2: "Live",
  },

  {
    url: Portfolio,
    githubLink:
      "https://github.com/Mookgol/My-New-Portfolio-html-css-and-Javasript",
    liveDemoLink: "https://mookgo-lebaka.netlify.app/",
    alt: "Portfolio",
    description: "Portfolio",
    title: "Github",
    title_2: "Live",
  },
];
function Projects() {
  return (
    <div id="projects">
      <h1 className="h1_description">My Recent Work</h1>
      <h4 className="h4_description">
        Here are a few projects I've worked on.
      </h4>

      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-tile" key={index}>
            <img src={image.url} alt={image.alt} />
            <div className="image-description">
              <p className="ProjectsCode">{image.description}</p>
              <a href={image.githubLink} target="_blank" className="button">
                {image.title}
              </a>
              <a href={image.liveDemoLink} target="_blank" className="button">
                {image.title_2}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
