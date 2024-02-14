import React from "react";
import experience from "../../Assets/experience-image1.png";
import "./Experience.css";

function Experience() {
  return (
    <div id="experience">
      <div id="background">
        <div id="experienceImage1">
          <img
            src={experience}
            alt="experience-image1"
            id="experience-image1"
          />
          {/*<p>This is the Experience section.</p>*/}
        </div>
      </div>
    </div>
  );
}

export default Experience;
