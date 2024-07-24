import React from "react";
import "./JobPosting.css";
import Footer from "../../../components/footer/Footer";

const JobPosting = () => {
  return (
    <section className="jobp_sec">
      <div className="jobp_con">
        <div className="job_req">
          <div className="cancle_back">
            <img src="../../../../src/assets/EXTERNAL/jobparr1.svg" alt="" />
            <p>CANCEL & GO BACK</p>
          </div>

          <h2>Job Requirement</h2>
        </div>

        {/* ================================================ */}

        <form className="post_form">
          <div className="allin_form">
            <div className="jt_jl">
              <div className="jt">
                <label htmlFor="">Job title</label>
                <input
                  type="text"
                  placeholder="Enter job title for this job post"
                />
              </div>

              <div className="jl">
                <label htmlFor="">Job location</label>
                <input
                  type="text"
                  placeholder="Enter job location for this job post"
                />
              </div>
            </div>

            {/* ======================== */}

            <div className="wp_wl">
              <div className="wp">
                <label htmlFor="">What position type are you offering?</label>
                <input type="text" placeholder="Select Job Type" />
                <img
                  src="../../../../src/assets/EXTERNAL/arrowdreq1.png"
                  alt=""
                />
              </div>

              <div className="wl">
                <label htmlFor="">What level of experience do you want?</label>
                <input
                  type="text"
                  placeholder="Choose the minimum experience level required"
                />
                <img
                  src="../../../../src/assets/EXTERNAL/arrowdreq1.png"
                  alt=""
                />
              </div>
            </div>

            {/* =========================== */}

            <div className="j_offer">
              <label htmlFor="">What position type are you offering?</label>
              <textarea name="" id="" placeholder="Select Job Type"></textarea>
            </div>

            {/* ========================= */}

            <div className="min_q">
              <label htmlFor="">Minimum Qualification</label>
              <textarea
                name=""
                id=""
                placeholder="Enter the minimum level of qualification for the position you are hiring for "
              ></textarea>
            </div>

            {/* ========================== */}

            <div className="wsk_wtw">
              <div className="wsk">
                <label htmlFor="">
                  What skills or languages are you looking to hire?
                </label>
                <input type="text" placeholder="Add new skill" />
                <img
                  src="../../../../src/assets/EXTERNAL/plusreq1.png"
                  alt=""
                />
                <div className="skil">
                  <div className="uidx">
                    <p>UI/UX Design</p>
                    <p>Android Development</p>
                  </div>
                  <div className="front_b">
                    <p>Front End Development</p>
                    <p>Back End Development</p>
                  </div>
                </div>
              </div>

              <div className="wtw">
                <label htmlFor="">What tools would be used?</label>
                <input type="text" placeholder="Add new tool" />
                <img
                  src="../../../../src/assets/EXTERNAL/plusreq1.png"
                  alt=""
                />
                <div className="tool">
                  <div className="figa">
                    <p>Figma</p>
                    <p>Adobe XD</p>
                    <p>Invision</p>
                    <p>Cinema 3D</p>
                  </div>

                  <div className="corel_d">
                    <p>Illustrator</p>
                    <p>Corel Draw</p>
                    <p>Photoshop</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================ */}

            <div className="resties">
              <label htmlFor="">Responsibilities</label>
              <textarea
                name=""
                id=""
                placeholder="Enter the list of responsibilities accompanying the position"
              ></textarea>
            </div>

            {/* =========================== */}

            <div className="wpr_fhl">
              <div className="wpr">
                <label htmlFor="">What is the pay range?</label>
                <input type="text" placeholder="Select Amount" />
                <img
                  src="../../../../src/assets/EXTERNAL/arrowdreq1.png"
                  alt=""
                />
              </div>

              <div className="fhl">
                <label htmlFor="">
                  For how long will you be taking applicants?
                </label>
                <input type="text" placeholder="Set application deadline" />
                <img
                  src="../../../../src/assets/EXTERNAL/arrowdreq1.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* ========================= */}

          <div className="low_casu">
            <div className="can_sub">
              <a className="cannc" href="">
                CANCEL
              </a>
              <a className="subbm" href="">
                SUBMIT
              </a>
            </div>
          </div>
        </form>
      </div>
      <>
        <Footer />
      </>
    </section>
  );
};

export default JobPosting;
