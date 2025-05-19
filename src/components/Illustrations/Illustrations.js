import React from "react";
import "./Illustrations.css";
import night_time from "../../Assets/Night-time.png";
import headboys from "../../Assets/headboys.png";
import illustrations from "../../Assets/illustrations.png";

const images = [
  {
    url: headboys,
    alt: "headboys",
    description: "Graphic Design",
    longer_description: "A selection of my design work.",
    web_url:
      "https://www.behance.net/gallery/214611279/Graphic-Design-Portfolio",
    title: "See more on Behance",
  },

  {
    url: night_time,
    alt: "night time",
    description: "Children's Book Illustrations",
    longer_description:
      "Captivating children's illustrations from my stories with vibrant colors, whimsical characters, and enchanting landscapes.",
    web_url: "https://www.behance.net/gallery/225832311/ADVENTURE-BOOK",
    title: "See more on Behance",
  },
  {
    url: illustrations,
    alt: "illustrations",
    description: "Illustrations",
    longer_description:
      "illustrations from my daily illustrations with vibrant colors, whimsical characters, and enchanting landscapes.",
    title: "See more on Behance",
    web_url: "https://www.behance.net/gallery/192213261/kids-illustrations",
  },
];

const Illustrations = () => {
  return (
    <div id="illustrations">
      <h1 className="h1_description">My Design Portfolio</h1>
      <h4 className="h4_description">
        Here are a few design projects I've worked on.
      </h4>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-tile" key={index}>
            <img src={image.url} alt={image.alt} />
            <div className="image-description">
              <p className="childrenIllustration">{image.description}</p>
              <h4 className="longer_descriptions">
                {image.longer_description}
              </h4>
              <a href={image.web_url} target="_blank" className="button">
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
