import React from "react";
import "./Experience.css";
import experience_icon from "../../Assets/experience-icon2.png";
import education_icon from "../../Assets/education-icon1.png";

function Experience() {
  return (
    <div id="experience">
      <div className="column right-column">
        <div className="tile">
          <center>
            <img
              src={experience_icon}
              className="experience-icon1"
              alt={experience_icon}
            />
          </center>
          <p className="experienceHeader">Experience</p>
          <p>6 months Software Development training</p>
          <p>6 years Inkjet specialist and Digital Illustrator</p>
        </div>
        <div className="tile">
          <center>
            <img
              src={education_icon}
              className="Education-icon1"
              alt={education_icon}
            />
          </center>
          <p className="EducationHeader">Education</p>
          <p>6 months Software Development training</p>
          <p> Diploma in Art and Design Majored in Graphic Design</p>
        </div>
        <div className="tile">
          <p className="juniorsoftwareheader">Junior Software Developer</p>

          <p>
            I like clean simple code and enjoy bringing ideas to life in the
            browser.
          </p>

          <p className="language">Languages:</p>

          <p>HTML, CSS, JavaScript and Git</p>

          <p className="devtools">Dev Tools:</p>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Netlify</li>
            <li>VSCode</li>
            <li>Webstorm</li>
          </ul>
        </div>
        <div className="tile">
          <div className="tile">
            <p className="juniorsoftwareheader">Digital illustration</p>

            <p>I value clean illustration with simple colours.</p>

            <p className="language">Things I enjoy Illustrating:</p>

            <p className="books">
              children’s books, book covers and Animated character’s
            </p>

            <p className="devtools">Design Tools:</p>
            <ul className="designtools">
              <li>Indesign</li>
              <li>Photoshop</li>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Procreate</li>
              <li>Pen & paper</li>
              <li>Sketch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
