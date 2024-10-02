import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="fot_one">
        <div className="one_fot">
          <Link to="/">
            <img
              src="../../../src/assets/EXTERNAL/TSA community 1.png"
              alt="foot_logo"
            />
          </Link>
          <p>
            Welcome to Tech studio community hub, where you connect with fellow
            tech enthusiasts, share knowledge, and explore endless
            possibilities.
          </p>
        </div>

        <div className="two_fot">
          <p>Quick Links</p>
          <div className="quick_a">
            <Link to="/community">Community</Link>
            <Link to="/find_talent">Find Talent</Link>
            <Link to="/signup">Go to Main Website</Link>
          </div>
        </div>

        <div className="three_fot">
          <p>Subscribe to our newsletter</p>
          <div className="newz_one">
            <input type="email" placeholder="Email Address" />
            <div className="sub_newz">
              <a href="#">Subscribe</a>
              <img src="../../../src/assets/EXTERNAL/Vector.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="fot_two">
        <p>Terms and Policy</p>
        <div>
          <a href="https://x.com/techstudioacdmy" target="_blank">
            <img src="../../../src/assets/EXTERNAL/X.png" alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/techstudioacademy/"
            target="_blank"
          >
            <img src="../../../src/assets/EXTERNAL/IG.png" alt="IG" />
          </a>
          <a href="https://www.facebook.com/techstudioacademy" target="_blank">
            <img src="../../../src/assets/EXTERNAL/FB.png" alt="fb" />
          </a>
          <a
            href="https://www.linkedin.com/company/tech-studio-academy"
            target="_blank"
          >
            <img src="../../../src/assets/EXTERNAL/LINK.png" alt="LINKDEN" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
