import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../stylesheets/internships.scss';
import AnimateValue from './AnimateValue';

const companies = [
  {
    name: "Company A",
    studentsPlaced: 16,
    imageUrl: `${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg`
  },
  {
    name: "Company B",
    studentsPlaced: 12,
    imageUrl: `${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg`
  },
  {
    name: "Company C",
    studentsPlaced: 8,
    imageUrl: `${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg`
  },
  {
    name: "Company D",
    studentsPlaced: 19,
    imageUrl: `${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg`
  },
  {
    name: "Company E",
    studentsPlaced: 4,
    imageUrl: `${process.env.PUBLIC_URL}/assets/img/carousel/event-dummy.jpg`
  }
];

const Internships = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="internship-container">
      <div className="internship-title">Internships</div>
      <div className="internship-details-card-container">
        {companies.map((company, index) => (
          <div key={index} className="internship-details-card" data-aos="fade-up">
            <div
              className="internship-company"
              style={{
                backgroundImage: `url(${company.imageUrl})`,
              }}
            ></div>
            <div className="internship-details">
              <div className="company-name">{company.name}</div>
              <div className="students-placed">
                <div>Students Placed </div><div className="intern-numbers"><AnimateValue start={0} end={company.studentsPlaced} duration={2000} /><div className="bottom-border"></div><div className="bottom-border-below"></div></div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
