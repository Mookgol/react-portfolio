import React from "react";
import "./About.css";
import desktop from "../../Assets/desktop.png";
import mookgo from "../../Assets/Mookgo.png";
function About() {
  return (
    <div id="about">
      <div id="upper-div"></div>
      <div id="lower-div">
        <div id="about-inner-section">
          <img src={desktop} alt="desktop" className="desktop" />
        </div>
        <div className="image-section">
          <img src={mookgo} alt="mookgo" className="mookgo" />
          <div>
            <h4 className="about-text">
              I am a dedicated Junior Software Developer and Digital illustrator{" "}
              <br />
              based in Cape Town, South Africa. 📍
            </h4>
            <p id="about-paragraph">
              As a Junior Software Developer and Digital illustrator, I possess
              an impressive arsenal of skills in HTML, CSS, JavaScript and React
              js. <br />I excel in designing and maintaining responsive websites
              that offer a smooth user experience. <br />I am also a team player
              who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
