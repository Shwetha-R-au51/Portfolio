import React from "react";

function ServiceBox({ imageName, box_name }) {
  return (
    <div className="service_box">
      <img src={imageName} alt="" />

      <h2>{box_name}</h2>

      <p>
      As front-end developers, our job is, essentially, to turn designs into reality via code.
       Understanding, and being competent in, design is an important component of that. 
      
      </p>

      <a href="#" className="service_button">
        Learn More
      </a>
    </div>
  );
}

export default ServiceBox;
