import React from "react";
import "./ServicesSection.css";
import ServiceBox from "./ServiceBox";

import Smiley1 from "../../img/smiley_1.svg";
import Smiley2 from "../../img/smiley_2.svg";
import Smiley3 from "../../img/smiley_3.svg";

function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="circle service_circleOne"></div>
      <div className="circle service_circleThree"></div>

      <h2 className="section_title">Services</h2>

      <div className="service_container bd_grid">
        <div className="serviceImage">
          <ServiceBox imageName={Smiley1} box_name={"Design"} />
          <ServiceBox imageName={Smiley2} box_name={"Developer"} />
          <ServiceBox imageName={Smiley3} box_name={"Ui/Ux"} />
          <ServiceBox imageName={Smiley3} box_name={"Mobile App"} />
        </div>

        <div className="service_text_section">
          <h2 className="service_subtitle">
            My awesome <br /> <span>Services</span>
          </h2>
          <p>
            Please click on Download button and you  may be final copy of resume is available here.
          </p>

          <a href="https://novoresume.com/editor/resume/76e7d420-ad10-11ed-b99d-8173d28021ff" className="button">
            Download CV
            
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
