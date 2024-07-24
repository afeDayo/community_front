import React from "react";
import "./TalentBody.css";

const TalentBody = () => {
  return (
    <section className="talent_body">
      <div className="talent_employ">
        <h2>How Techstudio works for employers</h2>
        <div className="three_talent">
          <div className="each_talent">
            <div>
              <img src="../../../../../../src/assets/EXTERNAL/talent1.png" alt="" />
              <h3>Post a Job</h3>
              <p className="tal_p1">
                Create an account and a befitting profile to attract job offers
                with ease. Your profile shows employers what make you
              </p>
            </div>
          </div>

          <div className="each_talent">
            <div>
              <img src="../../../../../../src/assets/EXTERNAL/talent2.png" alt="" />
              <h3>Review & Shortlist</h3>
              <p className="tal_p2">
                Create a position on Hired and specify the skills and experience
                you're looking for
              </p>
            </div>
          </div>

          <div className="each_talent">
            <div>
              <img src="../../../../../../src/assets/EXTERNAL/talent3.png" alt="" />
              <h3>Interview & Hire</h3>
              <p className="tal_p3">
                Create an account and a befitting profile to attract job offers
                with ease.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================= */}

      <div className="talent_hire">
        <h2>Hire to fill the most in-demand roles</h2>

        <div className="talent_roles">
          <div>
            <img src="../../../../../../src/assets/EXTERNAL/role1.png" alt="" />
            <h3>Software Engineers</h3>
            <p>
              Learn the user experience, client management, technical, and
              practical skills you need to launch a career as a user experience
              (UX) or user interface (UI) designer.
            </p>
          </div>

          {/* ============================ */}

          <div>
            <img src="../../../../../../src/assets/EXTERNAL/role2.png" alt="" />
            <h3>Front-end Developers</h3>
            <p>
              Learn the user experience, client management, technical, and
              practical skills you need to launch a career as a user experience
              (UX) or user interface (UI) designer.
            </p>
          </div>

          {/* ============================ */}

          <div>
            <img src="../../../../../../src/assets/EXTERNAL/role3.png" alt="" />
            <h3>UI/UX Designers</h3>
            <p>
              Learn the user experience, client management, technical, and
              practical skills you need to launch a career as a user experience
              (UX) or user interface (UI) designer.
            </p>
          </div>

          {/* ============================ */}

          <div>
            <img src="../../../../../../src/assets/EXTERNAL/role4.png" alt="" />
            <h3>Back-end Developers</h3>
            <p>
              Learn the user experience, client management, technical, and
              practical skills you need to launch a career as a user experience
              (UX) or user interface (UI) designer.
            </p>
          </div>

          {/* ============================ */}

          <div>
            <img src="../../../../../../src/assets/EXTERNAL/role5.png" alt="" />
            <h3>Data Analyst</h3>
            <p>
              Learn the user experience, client management, technical, and
              practical skills you need to launch a career as a user experience
              (UX) or user interface (UI) designer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentBody;
