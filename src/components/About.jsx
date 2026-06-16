import React from "react";
import "../stylesheets/About.scss";

const About = () => {
  return (
    <div className="about-container" data-aos="fade-up">
      <div className="message">
        <h2>MESSAGE FROM TRAINING & PLACEMENT OFFICE</h2>
        <div className="row">
          <div className="col-lg-9 col-md-6 mb-4">
            <p style={{ textAlign: "justify", marginBottom: "16px" }}>
              <i className="fa-solid fa-quote-left" style={{ marginRight: "8px" }}></i>
              Greetings from the Training & Placement (T&P) Office, National Institute of Technology Mizoram! Our office operates as the primary gateway connecting young technical intellects with leading corporate and industrial organizations. Functioning under a structured administrative framework, the cell is managed by senior faculty leadership, departmental faculty placement officers, and a dedicated team of student coordinators who oversee the daily logistics, database management, and ground operations of our recruitment drives.
            </p>
            <p style={{ textAlign: "justify", marginBottom: "16px" }}>
              To meet the demands of rapidly shifting global industries, the institute has integrated highly specialized minor streams into our traditional B.Tech curriculum, offering students targeted expertise in cutting-edge domains such as Artificial Intelligence & Machine Learning, Semiconductor & VLSI Design, and Green Energy & Sustainability. Furthermore, our strategic academic collaborations allow top-performing undergraduate students a unique pathway to complete their final year of study and transition directly into advanced research tracks at premier institutions like the Indian Institute of Technology (IIT) Madras.
            </p>
            <p style={{ textAlign: "justify", marginBottom: "16px" }}>
              The industrial readiness and versatile engineering talent cultivated at our institute are clearly proven by the exceptional performance parameters of our ongoing 2025–2026 placement drive. The recruitment cell has already achieved an outstanding 91.9% overall placement rate for the graduating class, welcoming 117 esteemed recruiting organizations to our campus. This has yielded a strong average package of 9.56 LPA, a highest individual package of 16.10 LPA, and a perfect 100% summer internship conversion rate across all streams. This competitive drive highlights excellent talent distribution, with Computer Science and Engineering securing a 96.2% placement rate, Electronics and Communication Engineering achieving 96.0%, Mechanical standing strong at 93.3%, Civil recording a robust 83.3%, and Electrical Engineering tracking firmly at 81.0%.
            </p>
            <p style={{ textAlign: "justify", marginBottom: "16px" }}>
              All recruitment workflows, pre-placement talks, online technical evaluations, and multi-tier interviews are managed seamlessly through our centralized digital and physical infrastructure located at Academic Block-11 in Chaltlang. We cordially invite our corporate partners to engage with our day-one-ready talent pool. Please feel free to contact the T&P Office at tnp@nitmz.ac.in for any queries. I look forward to a fruitful and mutually beneficial relationship with your esteemed organization.
              <i className="fa-solid fa-quote-right" style={{ marginLeft: "8px" }}></i>
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="about-member p-6 md:p-8 lg:p-[20px]">
              <div className="member-img">
                <img
                  className="lg:w-[250px] lg:h-auto md:w-[150px] md:h-[150px] h-[140px] w-[140px]"
                  src="assets/img/tnp_team/image1.webp"
                  alt="Faculty In-charge T&P"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div className="member-info">
                <h4>Prof. Sukanta Roy</h4>
                <span>
                  Faculty In-charge (FIC), Training and Placement Office
                  Chairman <br />
                </span>
                <span style={{ display: "block", marginTop: "8px" }}>
                  Email: sukanta.me@nitmz.ac.in <br />
                  tnp@nitmz.ac.in
                  <br />
                  Contact: +91-9035385841{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;