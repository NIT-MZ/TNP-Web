import React from "react";
import "../stylesheets/Counts.scss";

const CTAsection = () => {
  const onButtonClick = () => {
    const pdfUrl = "NITMZ_brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "NITMZ_brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>Download Our Brochure</h3>
          <p>Know more about the University and the Training & Placement
            Cell</p>
          <div
            onClick={onButtonClick}
            className="cta-btn"
          >
            Brochure
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
