import React, { useEffect } from "react";
import AOS from "aos";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/Testimonials.scss";

const testimonials = [
  {
    name: "Vikash Kumar",
    company: "Larsen & Toubro",
    message:
      "I wanted to express my heartfelt gratitude for providing me with a platform that led to me receiving 3 excellent job offers - 2 through campus placements and 1 off-campus. I'm thrilled to share that I've received offers from esteemed companies like L&T, Reliance Industries, and Vedanta. Thank you to the entire placement team, and especially to Dr. Sukanta Sir, Chairman of the TNP office, for their invaluable support and guidance throughout the recruitment process. Your efforts played a significant role in my success",
    img: "/assets/img/team/vikash_kumar.png",
  },
  {
    name: "Gulshan Raj",
    company: "Tata Electronics",
    message:
      "My placement at Tata Electronics is a testament to the exceptional support system at our institution. I extend my deepest gratitude to the entire T&P team and especially to our FIC T&P, Dr. Sukanta Roy. Their relentless efforts in training us and bringing in esteemed companies like Tata provided me with the perfect platform to launch my career. I am incredibly thankful for their guidance and belief in me.",
    img: "assets/img/testimonials/Gulshan_Raj.jpg",
  },
  {
    name: "Ayush Anand",
    company: "Juspay",
    message:
      "I feel happy to be part of NIT Mizoram. The student coordinators are very helpful, and the personalised placement block really helps students during group discussions and other activities. All the teachers are supportive and are helping students in every possible way.",
    img: "assets/img/testimonials/Ayush_Anand.jpg",
  },
  {
    name: "Raj Kumar",
    company: "Larsen & Toubro",
    message:
      "NIT Mizoram is a wonderful place for all the students seeking the right career. My college has given me and all my friends a lot of opportunities to get the right job. The staff at NIT Mizoram is very supportive and really takes a lot of pain to develop the students. I am thankful to my faculties, staff and management of NIT Mizoram for my success.",
    img: "assets/img/testimonials/Raj Kumar.webp",
  },
  {
    name: "Shristi Sharma",
    company: "Deloitte",
    message:
      "This side Shristi from EEE, NIT Mizoram. I am really grateful to everyone at NIT Mizoram for nurturing my career and giving me the right platform to develop the right skills for the corporate world. My stay at NIT Mizoram has been filled with lot of academic inputs from my faculties clubbed with technical and behavioral trainings from external agencies.",
    img: "assets/img/testimonials/Shristi Sharma.webp",
  },
  {
    name: "Sharda Kumari",
    company: "Sagacious IP",
    message:
      "Kudos to the Faculty and Placement Cell of NIT Mizoram. The College has always provided me with every assistance that I have always wanted to. I was able to refine my overall Performances and build- on my Soft & Hard Skills.. I will always be grateful to them for providing me a platform of practical learning and preparing me for the corporate life.",
    img: "assets/img/testimonials/Sharda Kumari.webp",
  },
  {
    name: "Sanskar Sharma",
    company: "Adobe",
    message:
      "Getting placed during the college is a dream for all the students and this dream came to reality when I got placed in Adobe. My decision of joining NIT Mizoram proved right when I got opportunity to work for Adobe. I and my parents are really thankful to the management and college authorities for making my dream come into reality.",
    img: "assets/img/testimonials/Sanskar Sharma.webp",
  },
  {
    name: "Charishma Barla",
    company: "Ashok Leyland",
    message:
      "I am very happy to be placed with Ashok Leyland. For every student it’s a dream to get job during their studies and I was lucky to get one. NIT Mizoram takes a lot of pain to develop their students for the corporate world throughout four years at the campus. I would recommend NIT Mizoram to any student who is looking for a fruitful career.",
    img: "assets/img/testimonials/Charishma Barla.webp",
  },
  {
    name: "Nihal Kumar",
    company: "Unacademy",
    message:
      "I am really thankful to my college, especially, the Training and Placement Cell for giving ample number of opportunities to help me get through best of the Companies. The endeavour and enthusiasm of Training & Placement Cell is very appreciable and it keeps me motivated and determined for my career. I wish good luck to the coming batches of my university.",
    img: "assets/img/testimonials/Nihal Kumar.webp",
  },
  {
    name: "Debanjan Das",
    company: "Bajaj Capital Ltd.",
    message:
      "I am really very thankful to the faculty and management who are very co-operative and always ready to help. My special thanks to my faculty for guiding me to improve my knowledge and enhance my skills, and last but not least our placement Director Sir for providing me this golden opportunity. Thank you very much.",
    img: "assets/img/testimonials/Debanjan Das.webp",
  },
  {
    name: "Palli Chanikya",
    company: "Vedanta",
    message:
      "Every student’s dream is to get an opportunity to start their career with well-known MNC, and I got placed in Vedanta. Thanks to Training & Placement department for providing this opportunity. I am looking forward for an excellent career.",
    img: "assets/img/testimonials/Palli chanikya.webp",
  },
  {
    name: "Sonu Kumar Meena",
    company: "Vedanta",
    message:
      "Our College has provided us very enhanced and efficient platform for the exposure to the training and placement. I am very thankful to NIT Mizoram management for providing us the best of placement opportunities. Also, the pre-placement trainings have helped me a lot for campus placements.",
    img: "assets/img/testimonials/Sonu Kumar Meena.webp",
  },
  {
    name: "Akanksha",
    company: "KEC International",
    message:
      "I am thrilled to share that I have been placed at KEC International, thanks to the exceptional education and support I received at NIT Mizoram. The institute's comprehensive curriculum, experienced faculty, and state-of-the-art facilities have equipped me with the necessary skills and knowledge to excel in the field of civil engineering. Additionally, the Training and Placement Cell played a pivotal role in guiding me through the placement process, providing invaluable resources and support. I am immensely grateful to NIT Mizoram for creating an environment that fosters growth and excellence, paving the way for my successful career.",
    img: "assets/img/testimonials/akanksha.jpg",
  },
  {
    name: "Rupesh Gupta",
    company: "Pando AI",
    message:
      "This is Rupesh Gupta from ECE, NIT Mizoram. I am deeply grateful to everyone at NIT Mizoram for their support and guidance. The college has provided me with a strong foundation through its excellent academic programs and practical training. The placements cell has been outstanding, offering many opportunities and thoroughly preparing us for successful careers.",
    img: "assets/img/testimonials/rupesh.jpg",
  },
  {
    name: "Priti Bharti",
    company: "CDAC Noida",
    message:
      "Dear Training and Placement Cell, thank you for your guidance and support throughout my journey. I'm thrilled to have been placed in CDAC and grateful for your efforts in making it possible. Your dedication and encouragement have meant a lot to me, and I appreciate everything you've done to help me achieve my goal. Thanks, Priti Bharti.",
    img: "assets/img/testimonials/priti.jpg",
  },
];

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
            What our placed students say about their placement and what are
            their opinions about University and training and placement cell of
            our university.
          </p>
        </div>

        <Slider
          {...settings}
          className="testimonials-slider swiper"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {testimonials.map((testimonial, index) => (
            <div className="swiper-slide" key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonial.message}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.img}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3 className="h3">{testimonial.name}</h3>
                <h4 className="text-xs text-slate-600">
                  {testimonial.company}
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
