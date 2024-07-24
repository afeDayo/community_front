import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <section className="signin">
      <div className="signin_logos">
        <img
          className="sinlogo"
          src="../../../../src/assets/EXTERNAL/TSA community 3.png"
          alt=""
        />
        <img src="../../../../src/assets/EXTERNAL/Signin illu.svg" alt="" />
      </div>

      {/* ========================= */}

      <div className="sinform_con">
        <div className="form_grayin">
          <div className="in_reg">
            <h2>Welcome Back!</h2>
            <p>Let's Help You Get Into Your Account.</p>
          </div>

          {/* ================================= */}

          <div>
            {/* ================ */}

            <form className="signin_form" action="">
              <div className="sinass">
                <label htmlFor="">Email Address</label>
                <input type="text" />
              </div>

              {/* ================ */}

              <div className="sicompass">
                <label htmlFor="">Password</label>
                <input type="text" />
                <img
                  src="../../../../src/assets/EXTERNAL/cancledeye.png"
                  alt=""
                />
                <a href="#">Forgot Password?</a>
              </div>

              {/* ============== */}

              <a className="sireg" href="">
                Login
              </a>
            </form>

            {/* ================================== */}

            <div className="lowersin">
              <div className="ahaalin">
                <p>New User?</p>
                <a href="">Register.</a>
              </div>

              {/* ================= */}

              <div className="line_orin">
                <hr />
                <h3>OR</h3>
              </div>

              <div className="twfagoin">
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

export default SignIn;
