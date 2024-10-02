import React from "react";
import "./NavBar.css";
import Navlogo from "../../../src/assets/EXTERNAL/TSA community 1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="exnav">
      <div className="inner_nav">
        <Link to="/">
          {" "}
          <img src={Navlogo} alt="TS_logo" />
        </Link>
        <div className="first_a">
          <Link to="/community">Explore Community</Link>
          <Link to="/find_talent">Find Talent</Link>
          <Link to="/job_alert">Job Alerts</Link>
        </div>

        <div className="sec_a">
          <Link to="/signup">
            <button>Register</button>
          </Link>
          <Link to="/signin">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
