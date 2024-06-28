import React from "react";
import "../stylesheets/Hero.scss";

const carouselItems = [
  {
    src: "assets/img/carousel/IPR.webp",
    alt: "IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO SPECIAL PATENTS AND START-UPS",
    caption:
      "IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO SPECIAL PATENTS AND START-UPS",
  },
  {
    src: "assets/img/carousel/Faculties photo.webp",
    alt: "MEETING WITH DEAN ACADEMIC OF IIT MADRAS",
    caption:
      "NIT Mizoram T&P Officials visited IIT Madras on Students' Exchange and met the Dean (Academic)",
  },
  {
    src: "assets/img/carousel/UAE parliament.webp",
    alt: "UNITED NATIONS MODEL CONFERENCE",
    caption: "UNITED NATIONS MODEL CONFERENCE",
  },
  {
    src: "assets/img/carousel/Sports.webp",
    alt: "bashant panchatmi",
    caption: "Sports Event",
  },
  {
    src: "assets/img/carousel/TCS_seminar.webp",
    alt: "TCS SEMINAR",
    caption: "TCS SEMINAR ON TCS NQT PROGRAM",
  },
  {
    src: "assets/img/carousel/IMG_20240316_163221.webp",
    alt: "bashant panchatmi",
    caption:
      "IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO SPECIAL PATENTS AND START-UPS",
  },
];

const marqueeLinks = [
  {
    href: "recruiters",
    text: "Registration of Companies for 2025",
  },
  {
    href: "https://vedanta.example.com/",
    text: "Registration and JNF For Vedanta",
  },
];

const Hero = () => {
  return (
    <div className="hero-container">
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
              {carouselItems.map((_, index) => (
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
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="3000"
                >
                  <img
                    className="d-block carousel-img"
                    src={item.src}
                    alt={item.alt}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{item.caption}</h5>
                  </div>
                </div>
              ))}
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
          {marqueeLinks.map((link, index) => (
            <div key={index} className={`marquee-content-${index + 1}`}>
              <h6>
                <a
                  href={link.href}
                  target={index === 0 ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                >
                  {link.text}
                  <span className="badge bg-success">New</span>
                </a>
              </h6>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
