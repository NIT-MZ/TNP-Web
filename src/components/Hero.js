import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container position-relative"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {Array.from({ length: 6 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  className="d-block carousel-img"
                  src="assets/img/carousel/IPR.webp"
                  alt="IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO SPECIAL PATENTS AND START-UPS"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO
                    SPECIAL PATENTS AND START-UPS
                  </h5>
                </div>
              </div>
              {/* <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/IPR2.webp"
                  alt="IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO SPECIAL PATENTS AND START-UPS"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO
                    SPECIAL PATENTS AND START-UPS
                  </h5>
                </div>
              </div> */}

              <div className="carousel-item " data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/Faculties photo.webp"
                  alt="MEETING WITH DEAN ACADEMIC OF IIT MADRAS"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    NIT Mizoram T&P Officials visited IIT Madras on Students'
                    Exchange and met the Dean (Academic)
                  </h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/UAE parliament.webp"
                  alt="UNITED NATIONS MODEL CONFERENCE"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>UNITED NATIONS MODEL CONFERENCE</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/Sports.webp"
                  alt="bashant panchatmi"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Sports Event</h5>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/TCS_seminar.webp"
                  alt="TCS SEMINAR"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>TCS SEMINAR ON TCS NQT PROGRAM</h5>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/IMG_20240316_163221.webp"
                  alt="bashant panchatmi"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO
                    SPECIAL PATENTS AND START-UPS
                  </h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div className="marquee-wrapper">
          <div className="marquee-content-1">
            <h6>
              <a
                href="https://example.com/tcs-hiring"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registration and JNF for TCS Hiring
                <span className="badge bg-success">New</span>
              </a>
            </h6>
          </div>
          <div className="marquee-content-2">
            <h6>
              <a
                href="https://example.com/vedanta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Registration and JNF For Vedanta
                <span className="badge bg-success">New</span>
              </a>
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
