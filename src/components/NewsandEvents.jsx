import React from "react";
import "../stylesheets/NewsandEvents.scss";

const ListGroupItemClass =
  "list-group-item d-flex justify-content-between align-items-center md:font-bold ";

const items = [

"JUSPAY conducted a recruitment drive at NIT Mizoram in 2025.",

"Ashok Leyland held a placement drive at NIT Mizoram in 2025.",

"Fidelity International conducted a recruitment drive at NIT Mizoram in 2025.",
"APL Apollo Tubes Ltd. held a placement drive at NIT Mizoram in 2025.",

"Larsen & Toubro held a placement drive at NIT Mizoram in 2025.",
"NVIDIA conducted an internship drive at NIT Mizoram in 2025",

"Dayananda Sagar College of Engineering, BANGALORE conducted a recruitment drive at NIT Mizoram in 2025.",

"eQ Technologic held a placement drive at NIT Mizoram in 2025.",

"Bakliwal Tutorials Pvt Limited conducted a recruitment drive at NIT Mizoram in 2025.",

"Digit Insurance conducted a placement drive at NIT Mizoram in  December 2024.",
"Lumiq conducted a placement drive at NIT Mizoram in  October 2024.",
"Delloite conducted a placement drive at NIT Mizoram in   2024.",

"Larsen & Toubro held a placement drive at NIT Mizoram in 2025.",
  "MAQ Software held a placement drive at NIT Mizoram in March 2024.",
  "Ashok Leyland conducted a hiring event at NIT Mizoram in March 2024.",
  "Tutorials Point conducted a recruitment event at NIT Mizoram in March 2024.",
  "Tech Mahindra conducted a placement drive at NIT Mizoram in March 2024.",
  "Talent Serve conducted a recruitment drive at NIT Mizoram in March 2024.",
  "Fitjee conducted campus placements at NIT Mizoram in January 2024.",
  "Mahindra & Mahindra conducted a placement event at NIT Mizoram in January 2024.",
  "Physics Wallah facilitated a recruitment session at NIT Mizoram in January 2024.",
  "Shadow Fax conducted a placement drive at NIT Mizoram in January 2024.",
  "MYways.ai conducted a hiring event at NIT Mizoram in January 2024.",
  "KEC International organized a placement drive at NIT Mizoram in January 2024.",
  "Nvidia (For Girls) conducted a placement event at NIT Mizoram in January 2024.",
  "SLB held a hiring event at NIT Mizoram in January 2024.",
  "Infosys conducted a placement drive at NIT Mizoram in January 2024.",
  "Go Digit conducted a hiring event at NIT Mizoram in January 2024.",
  "Apollo International held a placement drive at NIT Mizoram in January 2024.",
  "221 Baker Street conducted a recruitment drive at NIT Mizoram in January 2024.",
  
 
 
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
