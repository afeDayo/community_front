import React, { useState } from "react";
import "./FilterSectionLand.css";

const FilterSectionLand = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter By");

  const homeToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const homeOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selecting an option
  };

  return (
    <section className="filter_works">
      <div className="works_con">
        <div className="recent_works">
          <h2>Recent Projects</h2>
          <div className="filter_p" onClick={homeToggleDropdown}>
            <p>{selectedOption}</p>
            <img
              src="../../../../../../src/assets/EXTERNAL/arrowdown1.png"
              alt=""
              className={isOpen ? "" : "home_rotate"}
            />
          </div>
          {isOpen && (
            <div className="home_dropdown">
              <p
                onClick={() => {
                  homeOptionClick("Data Analysis");
                }}
              >
                Data Analysis
              </p>
              <p
                onClick={() => {
                  homeOptionClick("Web Development");
                }}
              >
                Web Development
              </p>
              <p
                onClick={() => {
                  homeOptionClick("Product Design");
                }}
              >
                Product Design
              </p>
            </div>
          )}
        </div>

        <div className="filter_recent">
          <div className="each_project">
            <img
              src="../../../../../../src/assets/EXTERNAL/project.png"
              alt="project_card"
            />
            <div className="lower_project">
              <div className="lil_pic">
                <img
                  src="../../../../../../src/assets/EXTERNAL/beauty.png"
                  alt="girl"
                />
                <p>joseph gift</p>
              </div>

              <div className="engage">
                <div className="likes">
                  <img
                    src="../../../../../../src/assets/EXTERNAL/heart.png"
                    alt="love"
                  />
                  <p>232</p>
                </div>
                <div className="views">
                  <img
                    src="../../../../../../src/assets/EXTERNAL/clarity_eye-line.png"
                    alt="eyes"
                  />
                  <p>1.4k</p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================= */}
        </div>
      </div>
    </section>
  );
};

export default FilterSectionLand;
