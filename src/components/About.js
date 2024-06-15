import React from "react";
import "../stylesheets/About.scss";

const About = () => {
  return (
    // <section id="about" className="about">
      <div className="about-container" data-aos="fade-up">
        {/* <div className="section-title"> */}
          <div className="message">
            <h2 style={{ paddingTop: "35px" }}>
              MESSAGE FROM TRAINING & PLACEMENT OFFICE
            </h2>
            <div className="row">
              <div className="col-lg-9 col-md-6">
                <p style={{ textAlign: "justify" }}>
                  <i className="fa-solid fa-quote-left"></i> Dear Students,
                  Welcome to the new academic year at NIT Mizoram. Our institute
                  is committed to fostering innovation and learning. We're proud
                  of our strong academic programs and our students' impressive
                  academic achievements. Our placement cell is dedicated to
                  ensuring your success beyond the classroom. As we move
                  forward, we'll continue striving for excellence.The T&P
                  Office, NIT Mizoram, facilitates the placement process of
                  students passing out from the Institute, besides collaborating
                  with leading organizations and institutes to set up student
                  internship and training programs. The office liaises with
                  various industrial establishments, corporate houses, etc.,
                  which conduct campus interviews and select graduate and
                  post-graduate students from all disciplines. I am confident
                  that our students will prove themselves and contribute
                  immensely toward pursuing the organization’s ambitions with a
                  ray of hope that our indigenous and global industries will
                  offer internships and jobs to our students at our campus.
                  Further, this relationship will go beyond other engagements
                  and mutual benefits. I sincerely appreciate our industry
                  partners who have recognized the depth of our rich and diverse
                  talent pool and accorded valuable opportunities. More
                  information about the institute and various courses offered to
                  the students is available in the placement brochure. Please
                  feel free to contact the T&P Office, NIT Mizoram, in case of
                  any queries at tnp@nitmz.ac.in. I look forward to a fruitful
                  and mutually beneficial relationship with your esteemed
                  organization.
                  <i className="fa-solid fa-quote-right"></i>
                </p>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="about-member">
                  <div
                    className="member-img"
                    style={{ border: "2px solid #ccc", padding: "10px" }}
                  >
                    <img
                      className="w-[250px] h-auto"
                      src="assets/img/tnp_team/image1.webp"
                      alt="TPO'S"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Dr. Sukanta Roy</h4>
                    <span>
                      Faculty In-charge (FIC), Training and Placement Office
                      Chairman <br />
                    </span>
                    <span>
                      Email: sukanta.me@nitmz.ac.in / tnp@nitmz.ac.in
                      <br /> Contact: +91-9035385841{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    // </section>
  );
};

export default About;
