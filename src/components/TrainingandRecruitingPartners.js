import React, { useEffect } from "react";
import AOS from "aos";
import ImageComponent from "./ImageComponent";
import "aos/dist/aos.css";
import "../stylesheets/Clients.scss";
const TrainingandRecruitingPartners = () => {
  useEffect(() => {
    const offset = window.innerWidth < 768 ? 50 : 200; // adjust values as needed
    AOS.init({ offset, disable: "up" });
  }, []);

  const CSimages = [
    "image1.webp",
    "image51.webp",
    "image52.webp",
    "image2.webp",
    "image3.webp",
    "image4.webp",
    "image5.webp",
    "image6.webp",
    "image7.webp",
    "image8.webp",
    "image9.webp",
    "image10.webp",
    "image11.webp",
    "image12.webp",
    "image13.webp",
    "image53.webp",
    "image54.webp",
    "image14.webp",
    "image15.webp",
    "image16.webp",
    "image17.webp",
    "image18.webp",
    "image19.webp",
  ];
  const ECImages = [
    "image23.webp",
    "image24.webp",
    "image25.webp",
    "image26.webp",
    "image27.webp",
    "image28.webp",
    "image29.webp",
    "image30.webp",

    "image22.webp",
    "image55.webp",
    "image56.webp",
  ];

  const MEImages = [
    "image34.webp",
    "image39.webp",
    "image40.webp",
    "image57.webp",
    "image58.webp",
    "image31.webp",
    "image33.webp",
    "image32.webp",

    "image31.webp",
    "image39.webp",
    "image40.webp",
  ];

  const CEImages = [
    "image59.webp",
    "image60.webp",
    "image39.webp",
    "image42.webp",
    "image43.webp",
    "image44.webp",
    "image45.webp",
    "image46.webp",

    "image47.webp",
    "image48.webp",
    "image49.webp",
  ];

  return (
    <div>
      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Our Training & Recruiting Partners</h2>
            <p>
              We tied-up with the industry experts and leader across vast
              domains to provide the best hands-on opportunities to learn,
              intern and work with best companies.
            </p>
          </div>
          <div className="row recruiting-row" data-aos="fade-up" data-aos-delay="500">
            <h3 style={{ padding: "30px" }}>
              <strong>COMPUTER SCIENCE AND ENGINEERING</strong>
            </h3>
            {CSimages.map((image, index) => (
              <ImageComponent
                key={index}
                className="image-slide-in"
                src={`assets/img/clients/3_Top Recruiters_Images_Super_Tool/${image}`}
              />
            ))}{" "}
            <div className="row " data-aos="fade-up" data-aos-delay="500">
              <h3 style={{ padding: "30px" }}>
                <strong>ELECTRONICS AND COMMUNICATION ENGINEERING</strong>
              </h3>
              {ECImages.map((image, index) => (
                <ImageComponent
                  key={index}
                  className="image-slide-in"
                  src={`assets/img/clients/3_Top Recruiters_Images_Super_Tool/${image}`}
                />
              ))}{" "}
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="500">
              <h3 style={{ padding: "30px" }}>
                <strong>ELECTRICAL ENGINEERING</strong>
              </h3>
              {ECImages.map((image, index) => (
                <ImageComponent
                  key={index}
                  className="image-slide-in"
                  src={`assets/img/clients/3_Top Recruiters_Images_Super_Tool/${image}`}
                />
              ))}{" "}
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="500">
              <h3 style={{ padding: "30px" }}>
                <strong>MECHANICAL ENGINEERING</strong>
              </h3>
              {MEImages.map((image, index) => (
                <ImageComponent
                  key={index}
                  className="image-slide-in"
                  src={`assets/img/clients/3_Top Recruiters_Images_Super_Tool/${image}`}
                />
              ))}{" "}
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="500">
              <h3 style={{ padding: "30px" }}>
                <strong>CIVIL ENGINEERING</strong>
              </h3>
              {CEImages.map((image, index) => (
                <ImageComponent
                  key={index}
                  className="image-slide-in"
                  src={`assets/img/clients/3_Top Recruiters_Images_Super_Tool/${image}`}
                />
              ))}{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingandRecruitingPartners;
