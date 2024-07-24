import React from "react";
import "./CaroselSectionLand.css";

const CaroselSectionLand = () => {
  return (
    <section className="caro_sec">
      <div className="caro_con">
        <div className="each_caro">
          <h2>What Our Graduates Say</h2>
          <p className="caro_p">
            Techstudio Academy Transformed My Career. The Hands-On Training And
            Mentorship Equipped Me With Cutting-Edge Skills. I Landed My Dream
            Job In Tech Within Weeks Of Graduation.
          </p>
          <div className="inner_caro">
            <img src="../../../../../../src/assets/EXTERNAL/caro1.png" alt="" />
            <div className="caro_peps">
              <h3>Queen Tee</h3>
              <p>Product Designer</p>
            </div>
          </div>

          <div className="caro_dots">
            <div className="caro_dot1"></div>
            <div className="caro_dot2"></div>
            <div className="caro_dot3"></div>
            <div className="caro_dot4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaroselSectionLand;
