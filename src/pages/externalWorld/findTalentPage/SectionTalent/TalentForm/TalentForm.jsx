import React from "react";
import "./TalentForm.css";

const TalentForm = () => {
  return (
    <section className="talent_help">
      <div className="hire_con">
        <div className="hire_text">
          <h2>Let's help you hire</h2>
          <p>
            Let our team of recruitment experts find the right talents fit for
            you. Based on your requirements, we will shortlist talents with
            matching skills and help you schedule interviews with them. We will
            assist you every step of the way.
          </p>
        </div>

        <form className="help_form" action="">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Company Email" />
          <input type="text" placeholder="What role do you want to fill?" />
          <a href="">Send Message</a>
        </form>
      </div>
    </section>
  );
};

export default TalentForm;
