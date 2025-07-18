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
      "I wanted to express my heartfelt gratitude for providing me with a platform that led to me receiving 3 excellent job offers. I'm thrilled to share that I've received offers from esteemed companies like L&T, Reliance Industries, and Vedanta. Thank you to the entire placement team, and especially to Dr. Sukanta Sir, Chairman of the TNP office, for their invaluable support and guidance throughout the recruitment process. Your efforts played a significant role in my success",
    img: "/assets/img/team/vikash_kumar.png",
  },
  {
    name: "Gulshan Raj",
    company: "Tata Electronics",
    message:
      "My placement at Tata Electronics is a testament to the exceptional support system at our institution. I extend my deepest gratitude to the entire T&P team and especially to our FIC T&P, Dr. Sukanta Roy. Their relentless efforts in training us and bringing in esteemed companies like Tata provided me with the perfect platform to launch my career. I am incredibly thankful for their guidance and belief in me.",
    img: "assets/img/testimonials/Gulshan_Raj.jpg",
  },
  //  {
  //   name: "Ashish Gupta",
  //   company: "TCS",
  //   message:
  //     "I am delighted to have been placed at Tata Consultancy Services (TCS), and I owe this achievement to the strong foundation and support provided by NIT Mizoram. I sincerely thank the Training and Placement Cell, especially Dr. Sukanta Roy, for their continuous efforts in preparing us for placement challenges and bringing in reputed recruiters like TCS. This opportunity marks a key milestone in my career, and I’m truly grateful for their guidance.",
  //   img: "assets/img/testimonials/Gulshan_Raj.jpg",
  // },
   {
    name: "Khusbu Kumari ",
    company: "Delloite",
    message:
      "I am incredibly grateful to have been placed at Deloitte through our college placement program. This opportunity would not have been possible without the continuous support and guidance of our faculty and the Training and Placement Cell. The rigorous academic curriculum, combined with the various workshops and mock interview sessions organized by the department, truly helped me prepare for this moment. I feel proud to be a part of NIT Mizoram and excited to begin this new chapter of my career..",
    img: "assets/img/testimonials/khushbu_k.png",
  },
  {
    name: "Ayush Anand",
    company: "Juspay",
    message:
      "I feel happy to be part of NIT Mizoram. The student coordinators are very helpful, and the personalised placement block really helps students during group discussions and other activities. All the teachers are supportive and are helping students in every possible way.",
    img: "assets/img/testimonials/Ayush_Anand.jpg",
  },
   {
    name: " Chandni Kumari",
    company: "Mahindra & Mahindra Limited",
    message:
      "I am truly grateful to the Training and Placement Cell of NIT Mizoram for their continuous support and dedicated efforts in shaping our career paths. I feel proud to share that I have been placed at Mahindra & Mahindra Limited, and this achievement would not have been possible without the guidance and encouragement provided by our faculty and the T&P Cell. I sincerely thank Dr. Sukanta Roy and the entire placement team for creating valuable opportunities and building a strong platform that connects students with esteemed organizations.",
    img: "assets/img/testimonials/chandni_kumari.png",
  },
   {
    name: "Shubham Kumar",
    company: "Saint Goblin",
    message:
      "I am honored to have received placement offers from Saint-Gobain and DCS Techno Service Pvt. Ltd. This accomplishment reflects the unwavering support and structured guidance provided by the Training and Placement Cell at NIT Mizoram. In my capacity as a Training & Placement Coordinator, I have closely observed the team's commitment to student success. I would like to extend my heartfelt gratitude to the faculty and, in particular, to Dr. Sukanta Roy, Chairman of the T&P Cell, for his exceptional leadership, mentorship, and dedication throughout the placement process.",
    img: "assets/img/testimonials/shubham_kumar.png",
  },
  {
    name: "Kanhaiya Kumar",
    company: "Larsen & Toubro",
    message:
      "I am pleased to share that I have been placed at Larsen & Toubro (L&T). This achievement is the result of the dedicated efforts of the Training and Placement Cell at NIT Mizoram. As a member of the Executive Team of the T&P Cell, I have gained valuable experience while contributing to the placement process. I extend my sincere gratitude to the faculty members, especially to Dr. Sukanta Roy, Chairman of the T&P Cell, and to the Head of the Department, Electrical Engineering, for their continuous support and encouragement. ",
    img: "assets/img/testimonials/kanahiya_kumar2.jpg",
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
    name: "Palli Chanikya",
    company: "Vedanta",
    message:
      "Every student’s dream is to get an opportunity to start their career with well-known MNC, and I got placed in Vedanta. Thanks to Training & Placement department for providing this opportunity. I am looking forward for an excellent career.",
    img: "assets/img/testimonials/Palli chanikya.webp",
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
