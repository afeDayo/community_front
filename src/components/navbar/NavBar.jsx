import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="exnav">
      <div className="inner_nav">
        <img src="../../../src/assets/EXTERNAL/TSA community 1.png" alt="TS_logo" />
        <div className="first_a">
          <a href="#">Explore Community</a>
          <a href="#">Find Talent</a>
          <a href="#">Job Alerts</a>
        </div>

        <div className="sec_a">
          <button>Register</button>
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
