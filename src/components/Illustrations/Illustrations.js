import React from "react";
import "./Illustrations.css";
import night_time from "../../Assets/Night-time.png";
import headboys from "../../Assets/headboys.png";
import illustrations from "../../Assets/illustrations.png";

const images = [
  {
    url: night_time,
    alt: "night time",
    description: "Children's Illustrations",
    web_url: "https://www.behance.net/mookgolebaka",
    title: "See more on Behance",
  },
  {
    url: headboys,
    alt: "headboys",
    description: "Portraits",
    web_url: "https://www.behance.net/mookgolebaka",
    title: "See more on Behance",
  },
  {
    url: illustrations,
    alt: "illustrations",
    description: "Illustrations",
    title: "See more on Behance",
    web_url: "https://www.behance.net/mookgolebaka",
  },
];

const Illustrations = () => {
  return (
    <div id="illustrations">
      <h1 className="h1_description">My Recent Digital Illustrations</h1>
      <h4 className="h4_description">
        Here are a few design projects I've worked on.
      </h4>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-tile" key={index}>
            <img src={image.url} alt={image.alt} />
            <div className="image-description">
              <p className="childrenIllustration">{image.description}</p>
              <a href={image.githubLink} target="_blank" className="button">
                {image.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Illustrations;
