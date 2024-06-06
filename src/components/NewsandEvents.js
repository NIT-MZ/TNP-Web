import React from "react";
import "../stylesheets/NewsandEvents.css";
const NewsandEvents = () => {
  return (
    <div className="events-section-container">
      <section id="atAGlance" className="atAGlance" data-aos="fade-up">
        <div className="section-title">
          <news className="at-a-glance-title">
            At a Glance
          </news>
          <p className="font-bold">
            Various activities happening in & around the campus by Training &
            Placement Cell of NIT Mizoram
          </p>
        </div>
        <div className="card-group text-center">
          <div className="card mb-3">
            <div className="card-header sticky-top bg-gradient-to-r from-[#f3c031] to-[#43920d]">
              <h5 className="card-title">News & Notice</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center ">
                    <a
                      href="https://www.linkedin.com/posts/training-and-placement-cell-nit-mizoram_campusplacements-oncampus-campusrecruitment-activity-7187132863744487424-9V8V?utm_source=share&utm_medium=member_desktop"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Students of B.Tech. ECE Placed in Sagacious IP
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">01</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Placed in Tutorialspoint{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">03</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Placed in Bajaj Capital Ltd
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">18</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Placed in Vedanta Group{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">04</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Placed in Bakliwal Tutorials Pvt
                      Limited{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">02</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Civil Placed in KEC International Ltd.{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">05</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Placed in Corizo{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">03</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students of B.Tech. Placed in Shadowfax{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">04</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students Placed in Deloitte
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">04</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students Placed in Ashok Leyland{" "}
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">05</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students placed in Unacademy
                    </a>
                    <span className="badge bg-primary rounded-pill">01</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Students placed in Ultratech
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">02</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Student Placed in Larsen & Toubro
                    </a>{" "}
                    <span className="badge bg-primary rounded-pill">03</span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          {/* <div className="card mb-3">
            <div className="card-header bg-gradient-to-r from-[#f3c031] to-[#43920d] sticky-top">
              <h5 className="card-title">Events</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      NIT MIZORAM OBSERVED SWACHHATA HI SEVA 2023
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      CONGRATULATIONS TO OUR CRICKET TEAM FOR SECURING RUNNERSUP
                      IN THE RECENTLY CONCLUDED MSU CUP HELD AT AIZAWL
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      PARTICIPATION OF NIT MIZORAM STUDENTS IN THE FINANCIAL
                      LITERACY PROGRAM BY THE RESERVE BANK OF INDIA
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      PARTICIPATION OF NIT MIZORAM IN GOVERNMENT DEVELOPMENT
                      SCHEMES EXPO - 2024
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      7TH CONVOCATION OF NIT MIZORAM: TO BE HELD ON 17TH JANUARY
                      2024.
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      PROF. S. SUNDAR, DIRECTOR, NIT MIZORAM AT SRM UNIVERSITY
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Delegation from NIT Mizoram took part in Innovation Day
                      organised by CSTUP
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      PROF. S. SUNDAR, DIRECTOR NIT MIZORAM, MEETING HON'BLE
                      CHIEF MINISTER OF MIZORAM SHRI LALDUHOMA
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      THE DEPARTMENT OF CSE, NIT MIZORAM ORGANISED A 5-DAYS
                      'NATIONAL WORKSHOP ON NEXT GENERATION (5G/6G)
                      COMMUNICATION NETWORKS: OVERVIEW, TECHNOLOGY AND RECENT
                      TRENDS' FROM 9TH-13TH OCTOBER, 2023
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      ICMEET 2023 CONFERENCE DEPT. OF ECE
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header sticky-top bg-gradient-to-r from-[#f3c031] to-[#43920d]">
              <h5 className="card-title">Campus Placement Drives</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Deloitte <tb />{" "}
                      <span className="badge bg-danger">New</span>
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Vedanta <tb />{" "}
                      <span className="badge bg-danger">New</span>
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Sagacious IP <tb />{" "}
                      <span className="badge bg-danger">New</span>
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Tutorialspoint
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Byju's
                    </a>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Unacademy
                    </a>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Corizo
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Alstom
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for DeltaX
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Adobe
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a href="#" target="_blank">
                      Job Notification for Larsen and Toubro
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default NewsandEvents;
