import React from "react";
import "../stylesheets/NewsandEvents.scss";

const ListGroupItemClass =
  "list-group-item d-flex justify-content-between align-items-center md:font-bold ";

const items = [
  // --- LATEST VERIFIED 2025-26 PLACEMENT HIGHLIGHTS (Source: ANI News) ---
  "Outstanding overall placement rate of 91.9% achieved for the 2025-26 graduating class.",
  "117 companies participated in the placement drive, reflecting strong and diverse industry demand.",
  "The highest package offered stands at 16.10 LPA, with an impressive average package of 9.56 LPA.",
  "More than 50% of students secured multiple job offers during the placement season.",
  "Computer Science and Engineering (CSE) led with an outstanding 96.2% placement rate and an average package of 10.41 LPA.",
  "Electronics and Communication Engineering (ECE) recorded 96.0% placements with an average package of 9.86 LPA.",
  "Mechanical Engineering achieved a 93.3% placement rate across core manufacturing, energy, and infrastructure companies.",
  "Civil Engineering and Electrical & Electronics Engineering recorded strong placement rates of 83.3% and 81.0%, respectively.",
  "Prominent organizations such as Bharat Electronics, TNGCL, Accenture, Vedanta, Tata Power, and L&T participated in the drive.",
  "Top recruiters include TCE, HCL, Schneider Electric, Siemens, Nvidia, Deloitte, HSBC, and ICICI Bank.",
  "Students secured coveted global internships at multinational corporations including Nvidia, Accenture, Visa, L&T, Tata Steel, Adani Power, and Titan.",
  // --- INTERNSHIP HIGHLIGHTS (2025-2026 Batch) ---
  "15 students joined research internships at IIT Madras, including selections under the Direct Ph.D. programme MoU.",
  "20 students secured prestigious research internships at premier institutes including IIT Kanpur and IIT Patna.",
  "14 students joined CDAC Noida and 7 students joined CDAC Kolkata for advanced technical internships.",
  "Public Sector Undertaking (PSU) milestones: 10 students joined the Airports Authority of India (AAI) and 9 students joined the Bureau of Indian Standards (BIS).",
  "12+ students secured internships at major government and public sector organizations including NTPC and SAIL.",
  "Core engineering internship highlights include 7 students at IOCL, 6 at L&T Construction, 6 at Hyundai, and 4 at Tata Motors.",
  "NIT Mizoram successfully hosted its inward summer internship program, welcoming a massive number of applicants from engineering institutes all over India.",

  /* 
  --- PREVIOUS SPECIFIC HEADCOUNTS ---
  (Commented out to prevent data mismatch until verified for the current session)
  
  "3 Students placed at Vedanta Group.",
  "4 students placed at HCL Technologies.",
  "1 student placed at Renew Power .",
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
  "1 student placed at Bakliwal Tutorials.",
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
  */
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
              <div className="card-text">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsandEvents;
