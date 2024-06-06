import React from "react";
import "./Hero.css";
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
            className="carousel slide
          carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="8"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="9"
                aria-label="Slide 10"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  className="d-block w-100"
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
              <div className="carousel-item" data-bs-interval="3000">
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
              </div>

              <div className="carousel-item " data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/Faculties photo.webp"
                  alt="MEETING WITH DEAN ACADEMIC OF IIT MADRAS"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    NIT Mizoram T&P Officials visited IIT Madras on Students'
                    Exchange and met the Dean (Academic){" "}
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
                  alt="bashant panchatmi "
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5></h5>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets/img/carousel/TCS_seminar.webp"
                  alt="TCS SEMINAR "
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>TCS SEMINAR ON TCS NQT PROGRAM</h5>
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="3000">
                <img
                  className="d-block w-100"
                  src="assets\img\carousel\IMG_20240316_163221.webp
                "
                  alt="bashant panchatmi "
                />
                <div className="carousel-caption d-none d-md-block"></div>
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
        <marquee behavior="scroll" direction="right">
          <h6>
            <a href="" target="_blank">
              Registration and JNF for TCS Hiring{" "}
              <span className="badge bg-danger">New</span>
            </a>
          </h6>
        </marquee>
        <marquee behavior="scroll" direction="left">
          <h6>
            <a href="" target="_blank">
              Registration and JNF For vedanta{" "}
              <span className="badge bg-danger">New</span>
            </a>
          </h6>
        </marquee>
      </section>
    </div>
  );
};

export default Hero;
