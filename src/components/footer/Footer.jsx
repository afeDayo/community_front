import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="fot_one">
        <div className="one_fot">
          <img
            src="../../../src/assets/EXTERNAL/TSA community 1.png"
            alt="foot_logo"
          />
          <p>
            Welcome to Tech studio community hub, where you connect with fellow
            tech enthusiasts, share knowledge, and explore endless
            possibilities.
          </p>
        </div>

        <div className="two_fot">
          <p>Quick Links</p>
          <div className="quick_a">
            <a href="#">Community</a>
            <a href="#">Find Talent</a>
            <a href="#">Go to Main Website</a>
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
          <img src="../../../src/assets/EXTERNAL/X.png" alt="twitter" />
          <img src="../../../src/assets/EXTERNAL/IG.png" alt="IG" />
          <img src="../../../src/assets/EXTERNAL/FB.png" alt="fb" />
          <img src="../../../src/assets/EXTERNAL/LINK.png" alt="LINKDEN" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
