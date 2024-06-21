import React from "react";
import "../stylesheets/Counts.scss";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Counts = () => {
  const { count } = useContext(UserContext);

  return (
    <section id="counts" className="counts section-bg ">
      <div className="container">
        <div className="row justify-content-end">
          <div
            className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div className="count-box">
              <span>{count[0]}%</span>
              <p>Students Placed in Session 2023-24</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div className="count-box">
              <span>{count[1]}</span>
              <p>Students Completed their Internship & Summer Training</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div className="count-box">
              <span>{count[2]}</span>
              <p>Highest Package of B.Tech. Students (in LPA)</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
          >
            <div className="count-box">
              <span>{count[3]}</span>
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
