import React, { useState } from "react";
import "../stylesheets/Counts.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counts = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section id="counts" className="counts section-bg ">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="container">
          <div className="row justify-content-end">
            <div
              className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
            >
              <div className="count-box">
                <span>
                  {" "}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={92.1}
                      duration={2}
                      delay={0}
                      decimals={1}
                      suffix="%"
                    ></CountUp>
                  )}
                </span>
                <p>Students Placed in Session 2023-24</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
            >
              <div className="count-box">
                <span>
                  {" "}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={90}
                      duration={2}
                      delay={0}
                      suffix="%"
                    ></CountUp>
                  )}
                </span>
                <p>
                  Students Completed their Internship & Summer Training
                  (2024-25)
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
            >
              <div className="count-box">
                <span>35</span>
                <p>Highest Package of B.Tech. Students (in LPA)</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-5 col-6 d-md-flex
              align-items-md-stretch"
            >
              <div className="count-box">
                <span>19</span>
                <a href="https://NIT Mizoram.ac.in/mous/">
                  <p>MoU & Training Programs Signed with Other Institutions</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Counts;
