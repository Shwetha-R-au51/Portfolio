import React from "react";
import "./AboutSection.css";

import ModelMan from "../../img/model.jpg";

function AboutSection() {
  return (
    <section className="about section" id="about">
      <div className="circle about_circleOne"></div>
      <div className="circle about_circleThree"></div>

      <h2 className="section_title">About</h2>

      <div className="about_container bd_grid">
        <div className="about_text_section">
          <h2 className="about_subtitle">
          Shwetha R
          <p>Senior Technical Engineer/Developer</p>
          <p>Gmail  : 1999shwethar@gmail.com</p>
          <p>Phone  : 9113291348</p>
          <p>Addres : Chintamani, Chikkabalapura, Bengaluru, Karnataka, India</p>
          <br />
            <span>from me</span>
          </h2>
        </div>

        <div className="about_image">
          <img src={ModelMan} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
