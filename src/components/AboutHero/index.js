import React from "react";
import "./styles.css";

// Imports the about hero image
import Hero from "./../../assets/About-Hero-Bean-Bush.jpg";

// Notes
// The About Hero function exports the the Hero image used in About.js section using a prop

const AboutHero = (props) => {
  return (
    <div className="about-hero">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Hero})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutHero;
