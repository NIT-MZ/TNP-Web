import React from "react";
import "../stylesheets/About.scss";

const DirectorsMessage = () => {
  return (
    <div className="director-message-container">
      <h2 className="director-message-container-title">From Director's Desk</h2>
      <div className="row">
        <div
          className="dir-img-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member">
            <div className="member-img">
              <img
                className="director-img"
                src="assets/img/tnp_team/Director.webp"
                alt="Director's"
              />
            </div>
            <div className="member-info">
              <h4>Prof. S. Sundar</h4>
              <span>Director, NIT Mizoram</span>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-6 director-message">
          <p style={{ textAlign: "justify" }}>
            <i className="fa-solid fa-quote-left"></i>   NIT Mizoram began its journey in 2009 to achieve global renown in research
 and education. Since 2009, the Institute has progressed rapidly. Presently,
 there are about 850 students studying in various disciplines of Engineering,
 Sciences, Humanities and Social Sciences. The Institute is working untiringly to
 impart quality education that keeps pace with the latest advances in research
 and development activities.
 The year 2024–25 saw 93% campus placements with more than 90
 companies visited for the placements. 100% internship offers were received
 from top-notch companies and IITs. A total of 8 current B.Tech students are
 undergoing Internships at IIT Madras, out of which some will continue their 4th
 year study and Ph.D. at IIT Madras. Leading professors from Germany and the
 USA conducted workshops at NIT Mizoram, leading to faculty and student
 exchange and collaborations. A 4-times increase in sponsored projects and
 consultancy was observed in 2023–25.  
The introduction of Minor streams with regular B.Tech, in Semiconductor & VLSI,
 AI & ML, Green Energy and Sustainability has been a significant milestone.
 Dual-Degree programs for upgradation to M.Tech and Ph.D. are additional
 long-term takeaway in the advanced fields of engineering. MoUs with top
 public sectors like BIS, AAI, Senses Department, NITTTR, Mizoram Police, INAE,
 and The Institution of Engineers have opened up seamless opportunities for
 faculty and students.
www.nitmz.ac.in
 Training and Placement Office
 FROM
 DIRECTOR’S DESK
 At present, NIT Mizoram is situated in a temporary campus at Aizawl. With the
 support of the state government, we are expecting the completion of the
 partially constructed permanent campus at Lengpui, Mizoram within the next
 two years, which will offer the best of facilities and an excellent academic
 ambience.
 Students at NIT Mizoram now have the unique opportunity to enroll in the
 Diploma in Business Management (DBM) and Master’s in Business
 Administration (MBA) program at IIM Visakhapatnam without the requirement
 of the Common Admission Test (CAT), starting in their third year of B.Tech. This
 enables them to complete the DBM within B.Tech duration, followed by an MBA
 degree in a total of five years (4+1) from 2025. In the 2025 admission cycle, 14
 students from NIT Mizoram secured admission to this B.Tech–MBA program.
 The Institute has earned a place of honor, securing its position in the 101–150
 band in the National Institutional Ranking Framework (NIRF) in the current
 year’s national ranking. This achievement underscores the Institute’s relentless
 commitment to academic excellence and innovation, solidifying its reputation
 as a beacon of quality education in the engineering and technology domains.
 The Institute is actively pursuing its goal of being recognized as a premier
 technical institution at both the national and international levels.{" "}
          </p>
          <p>
            Let's make this academic year memorable. Best Wishes...{" "}
            <i className="fa-solid fa-quote-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;
