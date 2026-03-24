import React from "react";
import "../stylesheets/NewsandEvents.scss";

const ListGroupItemClass =
  "list-group-item d-flex justify-content-between align-items-center md:font-bold ";

const items = [
  "12 students placed at Accenture (first-ever hiring at NIT Mizoram).",
  "5 students placed at HSBC (first-ever hiring).",
  "5 students placed at Deloitte.",
  "1 student secured internship at NVIDIA (first-ever milestone).",
  "9 Students placed at ICICI Bank (First Ever Hiring).",
  "3 students placed at Siemens during Campus Placement 2025–26.",
  "22 students placed at Larsen & Toubro (highest recruiter of the season).",
  "2 students placed at eQ Technologic.",
  "1 student placed at Schneider Electric.",
  "1 student secured internship at Accenture.",
  "3 students placed at Reliance Industries Limited through off-campus drive.",
  "2 students placed at Tata Power during Campus Placement 2025–26.",
  "1 student placed at Infosys (first-ever hiring).",
  "9 students placed at NexTurn during Campus Placement 2025–26.",
  "2 students placed at Wakefit and 1 internship secured.",
  "3 students placed at Tata Consulting Engineers Limited.",
  "17 students secured internships at Nandighosh Roadx Motors.",
  "1 student placed at APL Apollo Tubes Ltd.",
  "1 student secured internship at Visa (Batch 2027 milestone).",
  "1 student placed at Siemens.",
  "8 students placed at UNLOX",
  "1 student placed at Cubastion Consulting.",
  "3 students placed at Mechartés.",
  "2 students placed at AMI.",
  "4 students placed at Physics Wallah (PW).",
  "1 student secured internship at BNP Paribas.",
  "4 students placed at ENTNT.",
  "2 students placed at ORC Engineering Pvt. Ltd.",
  "1 student placed at Wissen Technology.",
  


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
            <div className="card-header sticky-top bg-[#264b83]">
              <h4 className="card-title text-lg font-semibold">News & Notice</h4>
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
