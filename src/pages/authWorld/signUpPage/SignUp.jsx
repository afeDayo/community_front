import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <section className="signup">
      <div className="signup_logos">
        <img
          className="suplogo"
          src="../../../../src/assets/EXTERNAL/TSA community 3.png"
          alt=""
        />
        <img src="../../../../src/assets/EXTERNAL/signup.png" alt="" />
      </div>

      {/* ========================= */}

      <div className="supform_con">
        <div className="form_gray">
          <div className="up_reg">
            <h2>Register</h2>
            <p>Enter Details To Create Account.</p>
          </div>

          {/* ================================= */}

          <div>
            {/* ================ */}

            <form className="signup_form" action="">
              <div className="sufn_suln">
                <div className="sufn">
                  <label htmlFor="">First Name</label>
                  <input type="text" />
                </div>

                <div className="suln">
                  <label htmlFor="">Last Name</label>
                  <input type="text" />
                </div>
              </div>

              {/* ============= */}

              <div className="sucg">
                <label htmlFor="">Community Group</label>
                <input type="text" placeholder="Select Community" />
                <img
                  src="../../../../src/assets/EXTERNAL/signuparrdown.png"
                  alt=""
                />
              </div>

              {/* ============= */}

              <div className="suea">
                <label htmlFor="">Email Address</label>
                <div className="suea_upin">
                  <img
                    src="../../../../src/assets/EXTERNAL/signupiii.png"
                    alt=""
                  />
                  <p>Input the email you used in registering at TechStudio.</p>
                </div>
                <input type="text" />
              </div>

              {/* ============= */}

              <div className="suchot">
                <label htmlFor="">Cohort</label>
                <input type="text" />
              </div>

              {/* =============== */}

              <div className="supass">
                <label htmlFor="">Password</label>
                <input type="text" />
                <img
                  src="../../../../src/assets/EXTERNAL/cancledeye.png"
                  alt=""
                />
              </div>

              {/* ================ */}

              <div className="sucompass">
                <label htmlFor="">Confirm Password</label>
                <input type="text" />
                <img
                  src="../../../../src/assets/EXTERNAL/cancledeye.png"
                  alt=""
                />
              </div>

              {/* ============== */}

              <a className="sureg" href="">
                Register
              </a>
            </form>

            {/* ================================== */}

            <div className="lowersup">
              <div className="ahaal">
                <p>Already have an account?</p>
                <a href="">Login</a>
              </div>

              {/* ================= */}

              <div className="line_or">
                <hr />
                <h3>OR</h3>
              </div>

              <div className="twfago">
                <img
                  src="../../../../src/assets/EXTERNAL/signuptwitter.png"
                  alt=""
                />
                <img
                  src="../../../../src/assets/EXTERNAL/signupfb.png"
                  alt=""
                />
                <img
                  src="../../../../src/assets/EXTERNAL/signupgoogle.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
