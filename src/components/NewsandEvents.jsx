import React from "react";
import "../stylesheets/NewsandEvents.scss";

const ListGroupItemClass =
  "list-group-item d-flex justify-content-between align-items-center md:font-bold ";

const items = [

  "4 students placed in Physics Wallah (PW)",
  "1 student secured a landmark internship at NVIDIA  — first ever from NIT Mizoram.",
  "5 Students placed in ENTNT.",
  "6 students placed in Edu-versity during the campus placement drive.",
  "1 student secured a full-time placement at Schneider Electric .",
  "1 student placed in Siemens .",
  "2 students placed in ORC Engineering Pvt. Ltd. (Telecom domain).",
  "1 student placed in Wissen Technology.",
  "5 students placed in Deloitte .",
  "2 students placed in eQ Technologic across different drives.",
  "1 student got internship opportunity at BNP Paribas.",




"NVIDIA conducted a internship drive at NIT Mizoram in May 2025.",
"Deloitte selected 2 students from Computer Science and 1 from ECE",
"L&T recruited total 10 students 4 from Mechanical Engineering and 2 from ECE 3 from EEE and 1 from CSE",
"Vedanta hired 3 students from Mechanical and 2 from Electrical Engineering",
"Juspay offered placements to 2 students from Computer Science and 1 from ECE",
"TATA Electronics placed 2 students from ECE ",
"TCS  hired  1 student from ECE",
"TCS selected 1 student from Computer Science",
"Capgemini hired 1 student from Computer Science",
"Ashok Leyland recruited 1 student from ECE",
"Fidelity International selected 2 students from Computer Science",
"BT placed 3 students — one each from Computer Science, ECE, and Electrical Engineering",
"Kalpa Taru hired 3 students, from Civil Engineering",
"Dayanand Sagar University offered placements to 3 students from M.Tech",
"Adani Wilmar placed 2 students from Electrical and 1 from Mechanical Engineering",
"Apollo Steel Pipes selected 2 students from Mechanical Engineering",
"Techno DCS Services hired 1 student from Civil Engineering and 2 from Electrical & Mechanical Engineering",

];

const NewsandEvents = () => {
  return (
    <div className="events-section-container">
      <section id="atAGlance" className="atAGlance" data-aos="fade-up">
        <div className="section-title">
          <div className="at-a-glance-title">News and Notices</div>
          <p className="font-bold">
            Various activities happening in & around the campus by Training &
            Placement Cell of NIT Mizoram
          </p>
        </div>
        <div className="card-group text-center">
          <div className="card mb-3">
            <div className="card-header sticky-top bg-gradient-to-r from-[#f3c031] to-[#43920d]">
              <h4 className="card-title text-lg">News & Notice</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                <div className="news-ticker-vertical">
                  <div className="news-ticker-vertical-content">
                    <ul className="list-group list-group-flush ">
                      {items.map((item, index) => (
                        <li key={index} className={ListGroupItemClass}>
                          {item}
                        </li>
                      ))}
                      <li className="gap"></li> {/* Gap between the two sets */}
                      {items.map((item, index) => (
                        <li
                          key={`${index}-duplicate`}
                          className={ListGroupItemClass}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsandEvents;
