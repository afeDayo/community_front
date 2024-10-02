import React from "react";
import "./HerosectionLand.css";
import { Link } from "react-router-dom";

const HeroSectionLand = () => {
  return (
    <header>
      <div className="hero_sec1">
        <div className="hero1_text">
          <h1>Explore, Connect And Innovate</h1>
          <p>
            Dive into a world of limitless possibilities, where coding languages
            speak louder than words and digital innovations shape the future.
            Engage in discussions, collaborate on projects, and build lasting
            relationships that could shape your tech journey.
          </p>

          <div className="hero1_but">
            <Link to="/signup">Join Community</Link>
          </div>
        </div>

        {/* ============== */}

        <div className="hero1_img">
          <img
            className="three_peps"
            src="../../../../../../src/assets/EXTERNAL/Hero section Image.png"
            alt="three_people"
          />

          <img
            className="dot_lines"
            src="../../../../../../src/assets/EXTERNAL/dotted line.png"
            alt="herodots"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSectionLand;
