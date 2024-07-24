import React from "react";
import "./TalentHead.css";

const TalentHead = () => {
  return (
    <section className="talent_sec">
      <div className="talent_con">
        <div className="talent_text">
          <h2>Find the best talents to grow your team</h2>
          <p>
            TechStudio is relied upon by a good amount of great companies for
            finding competent talents. We mould our talents to fit into their
            needed positions and your company culture.
          </p>
        </div>

        {/* ================================= */}

        <div className="talent_form">
          <form action="">
            <input
              className="thead_in"
              type="text"
              placeholder="Your Full Name"
            />
            <input className="thead_in" type="text" placeholder="Your Email" />
            <a className="thead_a" href="">
              Get Started
            </a>
          </form>
          <img
            src="../../../../../../src/assets/EXTERNAL/ellipsses.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default TalentHead;
