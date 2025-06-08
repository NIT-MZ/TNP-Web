import React from "react";
import "../stylesheets/Hero.scss";

const carouselItems = [
  {
    src: "assets/img/carousel/tnp2025.png",
    alt: "placement",
    caption: "Placements Statistics 2024-2025",
  },
  {
    src: "assets/img/carousel/NSD_2024NITMZ.png",
    alt: "IPR AWARENESS AND SKILL DEVELOPMENT WITH REFERENCE TO SPECIAL PATENTS AND START-UPS",
  },
  {
    src: "assets/img/carousel/yuvamathan1.png",
    alt: "Yuvamanthan NIT Mizoram",
  },

  {
    src: "assets/img/carousel/b.jpg",
    alt: "All NIT T&P Conclave 2024 (ANTPC 2024) held at NIT Trichy",
    caption:
      "Dr. Sukanta Roy, Chairman Training and Placement Committee of NIT Mizoram participated in the All NIT T&P Conclave 2024 (ANTPC 2024) held at NIT Trichy",
  },

  {
    src: "assets/img/carousel/Faculties photo.webp",
    alt: "MEETING WITH DEAN ACADEMIC OF IIT MADRAS",
    caption:
      "NIT Mizoram T&P Officials visited IIT Madras on Students' Exchange and met the Dean (Academic)",
  },
  {
    src: "assets/img/carousel/Yuvamanthan.png",
    alt: "YuvaManthan Model united states",
  },
  {
    src: "assets/img/carousel/engineer_day.png",
    alt: "Engineer Day NIT Mizoram",
  },
  {
    src: "assets/img/carousel/semicon.png",
    alt: "Semicon Company",
  },
  {
    src: "assets/img/carousel/usconsulate.png",
    alt: "US Consulate",
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
    type: "link",
    href: "https://forms.gle/LeYQhi8EJeDCAVBF7",
    text: "Registration of Companies for 2025",
  },
  
  {
    type: "alert",
    text: "NVIDIA",
  },
  
 
 
];

const Hero = () => {
  const handleAlertClick = () => {
    alert(
      "Please check your official training & placement WhatsApp group for further process. Wishing you the best."
    );
  };

  // Splitting marqueeLinks into two halves
  const halfLength = Math.ceil(marqueeLinks.length / 2);
  const firstHalf = marqueeLinks.slice(0, halfLength);
  const secondHalf = marqueeLinks.slice(halfLength);

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
                  <div className="carousel-caption d-none d-md-block ">
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
          <div className="marquee-row move-right">
            {firstHalf.map((link, index) => (
              <div key={index} className={`marquee-content-${index + 1}`}>
                <h6>
                  {link.type === "link" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-link-button"
                    >
                      {link.text}
                      <span className="badge bg-success">New</span>
                    </a>
                  ) : (
                    <button
                      onClick={handleAlertClick}
                      className="alert-button"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        fontSize: "inherit",
                      }}
                    >
                      {link.text}
                      <span className="badge bg-success">New</span>
                    </button>
                  )}
                </h6>
              </div>
            ))}
          </div>
          <div className="marquee-row move-left">
            {secondHalf.map((link, index) => (
              <div key={index} className={`marquee-content-${index + 1}`}>
                <h6>
                  {link.type === "link" ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                      <span className="badge bg-success">New</span>
                    </a>
                  ) : (
                    <button
                      onClick={handleAlertClick}
                      className="alert-button"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        fontSize: "inherit",
                      }}
                    >
                      {link.text}
                      <span className="badge bg-success">New</span>
                    </button>
                  )}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
