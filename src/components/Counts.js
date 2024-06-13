import React from "react";
import "../stylesheets/Counts.css";

const Counts = () => {
  return (
    <section id="counts" class="counts section-bg ">
      <div class="container">
        <div class="row justify-content-end">
          <div
            class="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div class="count-box">
              <span>85%</span>
              <p>Students Placed in Session 2023-24</p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div class="count-box">
              <span>90%</span>
              <p>Students Completed their Internship & Summer Training</p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div class="count-box">
              <span>14.5</span>
              <p>Highest Package of B.Tech. Students (in LPA)</p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div class="count-box">
              <span>19</span>
              <a href="https://NIT Mizoram.ac.in/mous/">
                <p>MoU & Training Programs Signed with Other Institutions</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
