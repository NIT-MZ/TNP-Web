import React from "react";
import "../stylesheets/About.css";

const DirectorsMessage = () => {
    return (
        <div className="director-message-container">
            <h2 className="director-message-container-title">From Director's Desk</h2>
            <div className="row">
                <div
                    className="col-lg-3 col-md-6 d-flex"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="member">
                        <div className="member-img">
                            <img
                                className="w-[250px] h-auto"
                                src="assets/img/tnp_team/Director.webp"
                                alt="Director's Photo"
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
                        <i className="fa-solid fa-quote-left"></i> Greetings from the
                        Training & Placement (T&P) Office, National Institute of
                        Technology Mizoram (NIT Mizoram), an Institution of National
                        Importance under the Ministry of Education, Govt. of India!
                        Besides catering to other logistics, the T&P Office provides
                        infrastructural facilities to conduct group discussions,
                        tests, and interviews. The office makes every effort each day
                        to bridge the gap between the dreams and capabilities of our
                        students through training programs to enhance the soft skills
                        and overall personality of students in association with
                        industry. NIT Mizoram began its journey in 2009 to achieve
                        global renown in research and education. Since 2009, the
                        Institute has progressed rapidly. Presently, there are about
                        850 students studying in various disciplines of Engineering,
                        Sciences, Humanities and Social Sciences. The Institute is
                        working untiringly to impart quality education that keeps pace
                        with the latest advances in research and development
                        activities.At present NIT Mizoram is situated in a temporary
                        campus at Aizawl. With the support of the state govt, we are
                        expecting the completion of the partially completed permanent
                        campus at Lengpui, Mizoram within the next two years with best
                        of the facilities for the excellent academic ambience.{" "}
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
