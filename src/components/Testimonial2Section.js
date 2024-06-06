import React, { useEffect } from "react";
import AOS from "aos";

import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/Testimonials.scss";

export default function TestimonialSection() {
  useEffect(() => {
    AOS.init({
      disable: "up",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Placement Highlights</h2>
          <p style={{ textAlign: "center" }}>
            What our placed student say about their placement and what are there
            opinion about University and training and placement cell of our
            university.
          </p>
        </div>

        <Slider
          {...settings}
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                NIT Mizoram is a wonderful place for all the students seeking
                the right career. My college has given me and all my friends a
                lot of opportunities to get the right job. The staff at NIT
                Mizoram is very supportive and really takes a lot of pain to
                develop the students. I am thankful to my faculties, staff and
                management of NIT Mizoram for my success.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Raj Kumar.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Raj Kumar</h3>
              <h4>Larsen & Toubro</h4>
              {/* <!-- <h4>@4.5 LPA</h4> --> */}
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                This side Shristi from EEE, NIT Mizoram. I am really grateful to
                everyone at NIT Mizoram for nurturing my career and giving me
                the right platform to develop the right skills for the corporate
                world. My stay at NIT Mizoram has been filled with lot of
                academic inputs from my faculties clubbed with technical and
                behavioral trainings from external agencies.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Shristi Sharma.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Shristi Sharma</h3>
              <h4>Deloitte</h4>
              {/* <!-- <h4>@4.15 LPA</h4> --> */}
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Kudos to the Faculty and Placement Cell of NIT Mizoram. The
                College has always provided me with every assistance that I have
                always wanted to. I was able to refine my overall Performances
                and build- on my Soft & Hard Skills.. I will always be grateful
                to them for providing me a platform of practical learning and
                preparing me for the corporate life.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Sharda Kumari.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Sharda Kumari</h3>
              <h4>Sagacious IP</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Getting placed during the college is a dream for all the
                students and this dream came to reality when I got placed in
                Adobe. My decision of joining NIT Mizoram proved right when I
                got opportunity to work for Adobe. I and my parents are really
                thankful to the management and college authorities for making my
                dream come into reality..
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Sanskar Sharma.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Sanskar Sharma</h3>
              <h4>Adobe</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>I am very
                happy to be placed with Ashok Leyland. For every student it’s a
                dream to get job during their studies and I was lucky to get
                one. NIT Mizoram takes a lot of pain to develop their students
                for the corporate world throughout four years at the campus. I
                would recommend NIT Mizoram to any student who is looking for a
                fruitful career.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Charishma Barla.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Charishma Barla</h3>
              <h4>Ashok Leyland</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>I am really
                thankful to my college , especially, the Training and Placement
                Cell for giving ample number of opportunities to help me get
                through best of the Companies. The endeavour and enthusiasm of
                Training & Placement Cell is very appreciable and it keeps me
                motivated and determined for my career.I wish good luck to the
                coming batches of my university.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Nihal Kumar.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Nihal Kumar</h3>
              <h4>Unacademy</h4>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>I am really
                very thankful to the faculty and management who are very
                co-operative and always ready to help. My special thanks to my
                faculty for guiding me to improve my knowledge and enhance my
                skills, and last but not least our placement Director Sir for
                providing me this golden opportunity. Thank you very much.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Debanjan Das.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Debanjan Das</h3>
              <h4>Bajaj Capital Ltd.</h4>
              {/* <!-- <h4>@4.5 LPA </h4> --> */}
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Every student’s dream is to get an opportunity to start their
                career with well-known MNC, and I got placed in Vedanta . Thanks
                to Training & Placement department for providing this
                opportunity. I am looking forward for an excellent career.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Palli chanikya.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Palli Chanikya</h3>
              <h4>Vedanta</h4>
              {/* <!-- <h4>@1.32 LPA </h4> --> */}
            </div>
          </div>

          <div class="swiper-slide">
            <div class="testimonial-item">
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Our College has provided us very enhanced and efficient platform
                for the exposure to the training and placement. I am very
                thankful to NIT Mizoram management for providing us the best of
                placement opportunities. Also, the pre-placement trainings have
                helped me a lot for campus placements.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
              <img
                src="assets/img/testimonials/Sonu Kumar Meena.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Sonu Kumar Meena</h3>
              <h4>Vedanta</h4>
              {/* <!-- <h4>@1.7 LPA </h4> --> */}
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
