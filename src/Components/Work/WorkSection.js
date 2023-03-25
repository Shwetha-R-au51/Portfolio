import React from "react";
import "./WorkSection.css";

import BrandImage from "../../img/clients_group.svg";

function WorkSection() {
  return (
    <section className="work section" id="work">
      <div className="circle work_circleOne"></div>
      <div className="circle work_circleThree"></div>

      <h2 className="section_title">Work</h2>

      <div className="work_container bd_grid">
        <div className="work_image">
          <img src={BrandImage} alt="" />
        </div>

        <div className="work_text_section">
          <h2 className="work_subtitle">
            We work for all this <br />
            <span>Brand & Clients to build websites </span>
          </h2>
          <p>
* Develop and maintain web services and interfaces

* Contribute to front-end and back-end development processes

* Build new product features or APIs

* Perform tests, troubleshoot software, and fix bugs

* Collaborate with other departments on projects and sprints
          </p>

          <a href="#" className="button">
            Details
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
