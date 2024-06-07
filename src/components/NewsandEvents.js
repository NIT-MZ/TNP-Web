import React from "react";
import "../stylesheets/NewsandEvents.css";

const NewsandEvents = () => {
  return (
    <div className="events-section-container">
      <section id="atAGlance" className="atAGlance" data-aos="fade-up">
        <div className="section-title">
          <div className="at-a-glance-title">
            At a Glance
          </div>
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
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <a
                      href="https://www.linkedin.com/posts/training-and-placement-cell-nit-mizoram_campusplacements-oncampus-campusrecruitment-activity-7187132863744487424-9V8V?utm_source=share&utm_medium=member_desktop"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Students of B.Tech. ECE Placed in Sagacious IP
                    </a>
                    <span className="badge bg-primary rounded-pill">01</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Placed in Tutorialspoint
                    </button>
                    <span className="badge bg-primary rounded-pill">03</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Placed in Bajaj Capital Ltd
                    </button>
                    <span className="badge bg-primary rounded-pill">18</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Placed in Vedanta Group
                    </button>
                    <span className="badge bg-primary rounded-pill">04</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Placed in Bakliwal Tutorials Pvt Limited
                    </button>
                    <span className="badge bg-primary rounded-pill">02</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Civil Placed in KEC International Ltd.
                    </button>
                    <span className="badge bg-primary rounded-pill">05</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Placed in Corizo
                    </button>
                    <span className="badge bg-primary rounded-pill">03</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students of B.Tech. Placed in Shadowfax
                    </button>
                    <span className="badge bg-primary rounded-pill">04</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students Placed in Deloitte
                    </button>
                    <span className="badge bg-primary rounded-pill">04</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students Placed in Ashok Leyland
                    </button>
                    <span className="badge bg-primary rounded-pill">05</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students placed in Unacademy
                    </button>
                    <span className="badge bg-primary rounded-pill">01</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Students placed in Ultratech
                    </button>
                    <span className="badge bg-primary rounded-pill">02</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <button className="link-button" onClick={() => alert('No link available')}>
                      Student Placed in Larsen & Toubro
                    </button>
                    <span className="badge bg-primary rounded-pill">03</span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsandEvents;
