import React from "react";
import "../stylesheets/Counts.css";
import UserContext from "../context/UserContext";
const CTAsection = () => {
  return (
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Download Our Brochure</h3>
          <p>Know more about the University and the Training & Placement
            Cell</p>
          <a class="cta-btn" href="https://www.nitmz.ac.in/uploaded_files/NITMZ_brochure-revised.pdf"
            target="_blank">Download Brochure</a>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
