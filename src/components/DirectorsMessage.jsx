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
                alt="Director"
              />
            </div>
            <div className="member-info">
              <h4>Prof. S. Sundar</h4>
              <span>Director, NIT Mizoram</span>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-6 director-message">
          <p style={{ textAlign: "justify", marginBottom: "16px" }}>
            <i className="fa-solid fa-quote-left" style={{ marginRight: "8px" }}></i>
            Since its inception in 2010 under the aegis of the Ministry of Education, Government of India, National Institute of Technology Mizoram has rapidly progressed as an institution of national importance. We are working untiringly to impart quality, multidisciplinary education that keeps pace with contemporary research and industrial advancements. Presently, we host a vibrant community of over 850 students studying across various disciplines of Engineering, Sciences, Humanities, and Social Sciences. As we operate from our temporary campus in Aizawl, we are actively supported by the state government and eagerly anticipate the completion of our permanent campus at Lengpui within the next two years, which will offer world-class facilities and an excellent academic ambience.
          </p>
          <p style={{ textAlign: "justify", marginBottom: "16px" }}>
            Our rigorous academic curriculum is continuously upgraded and strengthened by industry-aligned minor streams in Artificial Intelligence & Machine Learning, Semiconductor & VLSI, and Green Energy & Sustainability. These advanced specializations are complemented by elite academic pathways, including our dual-degree B.Tech–MBA program in collaboration with IIM Visakhapatnam—which saw 14 of our students secure admission this cycle—and direct transition opportunities into premier research ecosystems like IIT Madras for 4th-year studies and Ph.D. programs. Furthermore, a remarkable four-fold increase in sponsored projects, alongside strategic MoUs with organizations like BIS, AAI, NITTTR, INAE, and The Institution of Engineers, has opened seamless opportunities for innovation, ensuring our graduates are highly competent, versatile, and day-one ready for the global corporate landscape.
          </p>
          <p style={{ textAlign: "justify", marginBottom: "16px" }}>
            The stellar performance of our ongoing 2025–2026 placement drive stands as a direct reflection of this institutional resilience. With over 112 companies visiting, we have secured a phenomenal 91.9% overall placement rate, yielding a strong average package of 9.56 LPA, a highest package of 16.10 LPA, and a perfect 100% summer internship conversion rate. This commitment to professional excellence is further underscored by our position in the 101–150 band in the National Institutional Ranking Framework (NIRF). We warmly invite our corporate partners, public sector undertakings, and industry leaders to engage with our bright, energetic student community through our synchronized offline and online evaluation processes at Academic Block-11. We are confident that our students will bring immense analytical value and innovative technical expertise to your esteemed organizations.
          </p>
          <p style={{ textAlign: "justify", marginTop: "24px", fontWeight: "600" }}>
            Best Wishes, <br />
            Prof. S. Sundar <br />
            Director, National Institute of Technology Mizoram
            <i className="fa-solid fa-quote-right" style={{ marginLeft: "8px", fontWeight: "normal" }}></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;