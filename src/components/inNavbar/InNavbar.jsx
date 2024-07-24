import React from "react";
import "./InNavbar.css";

const InNavbar = () => {
  return (
    <nav className="in-nav">
      <div className="left-bar">
        <div className="leftbar-logo">
          <img src="../../../src/assets/INTERNAL/TSAEXLOGO.png" alt="" />
        </div>

        {/* =============== */}

        <div className="leftbar-links">
          <div className="lb-links">
            <img src="../../../src/assets/INTERNAL/home-04.png" alt="" />
            <a href="">Dashboard</a>
          </div>

          <div className="lb-links">
            <img src="../../../src/assets/INTERNAL/Group 202.png" alt="" />
            <a href="">Community</a>
          </div>

          <div className="lb-links">
            <img src="../../../src/assets/INTERNAL/bag.png" alt="" />
            <a href="">Job Alerts</a>
          </div>

          <div className="lb-links">
            <img src="../../../src/assets/INTERNAL/envelope.png" alt="" />
            <a href="">Projects</a>
          </div>

          <div className="lb-links">
            <img src="../../../src/assets/INTERNAL/propro.png" alt="" />
            <a href="">Profile</a>
          </div>

          <div className="lb-links">
            <img src="../../../src/assets/INTERNAL/engine.png" alt="" />
            <a href="">Settings</a>
          </div>
        </div>

        {/* ============== */}

        <div className="leftbar-copy">
          <p>&copy; Copyright</p>
          <p>TSA Interns | Aug'23</p>
        </div>
      </div>

      {/* =============== */}

      <div className="top-bar">
        <div className="topbar-fil">
          <a href="">Dashboard</a>
        </div>
        <div className="topbar-right">
          <div className="topbar-input">
            <img src="../../../src/assets/INTERNAL/Search img.png" alt="" />
            <input type="text" placeholder="Search" />
          </div>

          <div className="topbar-notice">
            <div className="topbell-red">
              <img
                className="topbar-bell"
                src="../../../src/assets/INTERNAL/bell.png"
                alt=""
              />
              <img className="red-no" src="../../../src/assets/INTERNAL/Ellipse 4.png" alt="" />
            </div>
            <div className="topbar-iden">
              <img
                className="topbar-prof"
                src="../../../src/assets/INTERNAL/proffimg.png"
                alt=""
              />
              <div className="topbar-name">
                <a href="">Wale Ahmed</a>
                <img
                  src="../../../src/assets/INTERNAL/exnavarrdown.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InNavbar;
