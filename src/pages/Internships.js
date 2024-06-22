import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../stylesheets/internships.scss';
import AnimateValue from './AnimateValue';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const companies = [
  {
    name: "CDAC Noida",
    studentsPlaced: 14,
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/cdac.png`,
    ]
  },
  {
    name: "CDAC Kolkata",
    studentsPlaced: 7,
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/cdac.png`,
    ]
  },
  {
    name: "IOCL",
    studentsPlaced: 7,
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/iocl.png`,
    ]
  },
  {
    name: "L&T Construction",
    studentsPlaced: 6,
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/lnt.png`,
    ]
  },
  {
    name: "Hyundai",
    studentsPlaced: 6,
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/hyundai2.png`,
    ]
  },
  {
    name: "Tata Motors",
    studentsPlaced: 4,
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/tatamotors.png`,
    ]
  },
  {
    name: "NTPC, SAIL +",
    studentsPlaced: "12+",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/ntpc.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/sail.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/tatasteel.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/jindalpower.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/centralrail.png`
    ]
  },
  {
    name: "IIT Madras",
    studentsPlaced: "10",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/iitm.png`,
    ]
  },
  {
    name: "BIS",
    studentsPlaced: "9",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/bis.png`,
    ]
  },
  {
    name: "IIT Kanpur, Patna +",
    studentsPlaced: "20",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/iitk.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/iitp.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/iitbhu.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/iith.png`,
      `${process.env.PUBLIC_URL}/assets/img/internships/iitr.png`
    ]
  },
  {
    name: "AAI",
    studentsPlaced: "10",
    images: [
      `${process.env.PUBLIC_URL}/assets/img/internships/aai.png`,
    ]
  },
];

const Internships = () => {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="internship-container">
      <div className="internship-title">Internships</div>
      <div className="internship-details-card-container">
        {companies.map((company, index) => (
          <div key={index} className="internship-details-card">
            <div className="internship-company-images">
              {company.images.map((imageUrl, imgIndex) => (
                <div
                  key={imgIndex}
                  className="internship-company-image"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                ></div>
              ))}
            </div>
            <div className="internship-details" data-aos="fade-right">
              <div className="company-name">{company.name}</div>
              <div className="students-placed">
                <div>Students Joined</div>
                <div className="intern-numbers">
                  {typeof company.studentsPlaced === 'number' ? (
                    <AnimateValue start={0} end={company.studentsPlaced} duration={2000} />
                  ) : (
                    company.studentsPlaced
                  )}
                  <div className="bottom-border"></div>
                  <div className="bottom-border-below"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
      <section id="counts" className="counts section-bg ">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box ">
                <span className="animate-value-container">
                  {" "}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={91}
                      duration={2}
                      delay={0}
                      suffix="%"
                    ></CountUp>
                  )}
                </span>
                <p>Students Joined Internship for 2024-2025 Batch</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span>
                  {" "}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={30}
                      duration={2}
                      delay={0}
                      suffix=" "
                    ></CountUp>
                  )}
                </span>
                <p>Students undergoing Research Internship at IITs</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span>
                  {" "}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={7}
                      duration={2}
                      delay={0}
                      suffix=" "
                    ></CountUp>
                  )}
                </span>
                <p>Students at IIT Madras under Direct PhD programme MoU</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <span>
                  {" "}
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={30}
                      duration={2}
                      delay={0}
                      suffix=" "
                    ></CountUp>
                  )}
                </span>
                <p>Students from Engineering Institutes all over India undergoing Internship at NIT Mizoram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollTrigger>

      <div className="tpo-testimonial-container">
        <div className="tpo-testimonial">
          <div className="tpo-image-container"><img
            className="tpo-image"
            src="assets/img/tnp_team/image1.webp"
            alt="TPO'S"
          /></div>
          <div className="tpo-statement">We are overwhelmed with the number of applications received this year for the inward summer internships. The number of inward applications is a testimony to the quality of our faculty members. We are confident to achieve new highs in the upcoming semesters.</div>
        </div>
        <div className="tpo-testimonial-container-lower"></div>
      </div>
    </div>
  );
};

export default Internships;
