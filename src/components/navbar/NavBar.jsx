import React from "react";
import "./NavBar.css";
import Navlogo from "../../../src/assets/EXTERNAL/TSA community 1.png";

const NavBar = () => {
  return (
    <nav className="exnav">
      <div className="inner_nav">
        <img src={Navlogo} alt="TS_logo" />
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
