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
            <i className="fa-solid fa-quote-left"></i> NIT Mizoram began its
            journey in 2009 to achieve global renown in research and education.
            Since 2009, the Institute has progressed rapidly. Presently, there
            are about 850 students studying in various disciplines of
            Engineering, Sciences, Humanities and Social Sciences. The Institute
            is working untiringly to impart quality education that keeps pace
            with the latest advances in research and development activities. The
            year ’23-’24 saw 86% Campus Placements. 5 students from the present
            3rd year BTechs are going to IIT Madras for their 4th year study and
            PhD. 4 times increase in Sponsored projects and Consultancy observed
            in ’23-’24. 100% Intern offer issued from top-notch companies and
            IITs. Leading Professors from Germany and USA conducted workshop at
            NIT Mizoram during ’23-’24 leading to faculty and student Exchange
            and collaborations. Introduction of Minor stream with Regular BTechs
            in Semiconductor & VLSI, AI&ML, Sustainable Electric Transportation
            introduced. Dual-Degree for upgradation to MTech and PhD is
            additional long take away. MoU with top public sectors like BIS,
            AAI, Senses Dept, NITTTR, Mizoram Police, INAE, Institute of
            Engineers opened up seamless opportunities for faculty and students.
            At present NIT Mizoram is situated in a temporary campus at Aizawl.
            With the support of the state govt, we are expecting the completion
            of the partially completed permanent campus at Lengpui, Mizoram
            within the next two years with best of the facilities for the
            excellent academic ambience. The faculty, students and staff of NIT
            Mizoram are working hard with utmost sincerity and dedication to
            accept the challenge of making NIT Mizoram a preferred destination
            for high-quality learning, research and innovation. Their new
            initiatives will surely bear rich fruits during the years to come.{" "}
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
