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
          <div className="col-lg-9 col-md-6 mb-4">
            <p style={{ textAlign: "justify" }}>
              <i className="fa-solid fa-quote-left"></i> Greetings from the
              Training & Placement (T&P) Office, National Institute of
              Technology Mizoram (NIT Mizoram), an Institution of National
              Importance under the Ministry of Education, Govt. of India! Being
              one of the premier institutes of the country, NIT Mizoram, under
              the Directorship of Prof. S. Sundar, is working determinedly to
              impart quality education to its BTech, MTech, and Ph.D. courses in
              engineering and sciences that keep pace with the latest advances
              in research and development activities and committed to serving
              the societal and industrial needs of the country. The institute is
              situated in the scenic beauty of Mizoram, wrapped between clouds
              and mountains. The T&P Office, NIT Mizoram, facilitates the
              placement process of students passing out from the Institute,
              besides collaborating with leading organizations and institutes to
              set up student internship and training programs. The office
              liaises with various industrial establishments, corporate houses,
              etc., which conduct campus interviews and select graduate and
              post-graduate students from all disciplines. Besides catering to
              other logistics, the T&P Office provides infrastructural
              facilities to conduct group discussions, tests, and interviews.
              The office makes every effort each day to bridge the gap between
              the dreams and capabilities of our students through training
              programs to enhance the soft skills and overall personality of
              students in association with industry and academic experts. The
              placement season runs throughout the year, from July through to
              June. Pre-placement talks are also conducted in this regard as per
              mutual convenience between the industries and the institute. Job
              offers, dates of interviews, selection of candidates, etc., are
              announced through the T&P Office. The Placement Office is assisted
              by a Faculty T&P Committee comprising faculty members from each
              department. Student coordinators and members from various
              undergraduate and post-graduate engineering streams support the
              office via core, executive, and associate team members. The
              committee evolves a broad policy framework yearly besides a set of
              inviolable rules. Student coordinators and members are closely
              co-opted in implementing these policy decisions. I am confident
              that our students will prove themselves and contribute immensely
              toward pursuing the organization’s ambitions with a ray of hope
              that our indigenous and global industries will offer internships
              and jobs to our students at our campus. Further, this relationship
              will go beyond other engagements and mutual benefits. I sincerely
              appreciate our industry partners who have recognized the depth of
              our rich and diverse talent pool and accorded valuable
              opportunities. More information about the institute and various
              courses offered to the students is available in the placement
              brochure. Please feel free to contact the T&P Office, NIT Mizoram,
              in case of any queries at tnp@nitmz.ac.in. I look forward to a
              fruitful and mutually beneficial relationship with your esteemed
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
