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

  const images = [
    "juspay.png",
    "nvidia.png",
    "siemens.png",
    "tata.jpeg",
    "l&t.jpeg",
    "vedanta.jpeg",
    "client-6.webp",
    "ashok.png",
    "eq.jpeg",
    "powergrid.png",
    "adobe.jpeg",
    "adani.png",
    "f.jpeg",
    "volvo.png",
    "skoda.jpeg",
    "kala.jpeg",
    "ey.png",
    "cubastion.png",

    "image1.webp",
    "image51.webp",
    "image52.webp",
    "image2.webp",
    "image3.webp",
    "image4.webp",
    "image5.webp",
    "image6.webp",
    "image7.webp",
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
    "image24.webp",
    "image25.webp",
    "image26.webp",
    "image27.webp",
    "image28.webp",
    "image29.webp",
    "image30.webp",
    "image67.webp",
  
    "image94.webp",
    "image70.webp",
    "image66.webp",
    "image22.webp",
    "image55.webp",
    "image56.webp",
    "image55.webp",

    "image89.webp",
    "image24.webp",
    "image25.webp",
    "image8.webp",
    "image26.webp",
    "image70.webp",
    "image78.webp",
    "image40.webp",
    "image45.webp",
    "image101.webp",
    "image57.webp",
    "image23.webp",
    "image33.webp",
    "image59.webp",
    "image60.webp",
    "image39.webp",
    "image42.webp",
    "image43.webp",
    "image44.webp",
    "image46.webp",
    "image107.webp",
    "image47.webp",
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
          <div
            className="row recruiting-row"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 style={{ padding: "30px" }}>
             
            </h3>
            {images.map((image, index) => (
              <ImageComponent
                key={index}
                className="image-slide-in"
                src={`assets/img/clients/3_Top Recruiters_Images_Super_Tool/${image}`}
              />
            ))}{" "}
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingandRecruitingPartners;
