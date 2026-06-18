import { useEffect } from "react";
import AOS from "aos";
import Slider from "react-slick";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/Testimonials.scss";

const testimonials = [
  {
    name: "Pallavi Pandey",
    company: "Bharat Electronics Limited (BEL)",
    message:
      "I wanted to express my heartfelt gratitude to the Training & Placement office at NIT Mizoram for providing me with an incredible platform that led to this wonderful opportunity. I am thrilled to share that I have received an offer from Bharat Electronics Limited, one of India's most prestigious defence and electronics companies. Special thanks to Prof. Sukanta Roy Sir, Chairman of the TNP office, for his invaluable support and guidance throughout the recruitment process. The preparation sessions, mock interviews, and constant encouragement from the entire placement team played a significant role in building my confidence. This achievement would not have been possible without the unwavering support of this great institution.",
    img: "/assets/img/testimonials/Pallavi_Pandey.jpg",
  },
  {
    name: "Anshuman Bhardwaj",
    company: "Accenture",
    message:
      "I am deeply grateful to the Training & Placement office at NIT Mizoram for their relentless efforts in connecting us with top companies and preparing us for the competitive recruitment process. I am overjoyed to announce that I have received a placement offer from Accenture, a global leader in technology and consulting services. Prof. Sukanta Roy Sir and the entire TNP team worked tirelessly behind the scenes to ensure every student had a fair chance at success. Their dedication, guidance, and belief in our potential made all the difference. I am proud to begin my professional journey with Accenture and forever grateful to NIT Mizoram for making this dream a reality.",
    img: "assets/img/testimonials/Anshuman_Bhardwaj.jpg",
  },
  //  {
  //   name: "Ashish Gupta",
  //   company: "TCS",
  //   message:
  //     "I am delighted to have been placed at Tata Consultancy Services (TCS), and I owe this achievement to the strong foundation and support provided by NIT Mizoram. I sincerely thank the Training and Placement Cell, especially Dr. Sukanta Roy, for their continuous efforts in preparing us for placement challenges and bringing in reputed recruiters like TCS. This opportunity marks a key milestone in my career, and I’m truly grateful for their guidance.",
  //   img: "assets/img/testimonials/Gulshan_Raj.jpg",
  // },
   {
    name: "Sandhya Shalini",
    company: " Schneider Electric",
    message:
      "I wanted to take a moment to express my heartfelt thanks to the Training & Placement office at NIT Mizoram for their extraordinary support during the placement season. I am beyond happy to share that I have secured an offer from Schneider Electric, a global leader in energy management and automation. Prof. Sukanta Roy Sir and the TNP team were always there to guide us, motivate us, and ensure we were thoroughly prepared for every stage of the process. The training sessions and industry exposure provided by the college gave me the edge I needed to succeed. This achievement is a reflection of the incredible environment that NIT Mizoram has created for its students.",
    img: "assets/img/testimonials/Sandhya Shalini.jpg",
  },
  {
    name: "Utkarsh Singh",
    company: "HCL Tech",
    message:
      "I am filled with immense joy and gratitude as I share the wonderful news of my placement at HCL Tech, one of India's leading technology companies. The Training & Placement cell at NIT Mizoram deserves tremendous credit for this achievement. Prof. Sukanta Roy Sir and the entire TNP office put in extraordinary efforts to bring top companies to campus and ensure every student was well prepared. The aptitude training, group discussion sessions, and technical preparation provided by the college were extremely helpful throughout the process. I am proud to represent NIT Mizoram at HCL Tech and deeply thankful to everyone who supported me on this journey.",
    img: "assets/img/testimonials/Utkarsh singh.jpg",
  },
   {
    name: " Satvik Sharma",
    company: "Vedanta",
    message:
      "I am overwhelmed with gratitude as I announce that I have received a placement offer from Vedanta, one of India's largest and most respected natural resources companies. This milestone would not have been possible without the tireless support of the Training & Placement office at NIT Mizoram. Prof. Sukanta Roy Sir and the TNP team went above and beyond to ensure every student was industry-ready and well-prepared for campus placements. Their constant encouragement during the most challenging phases of the recruitment process kept me motivated and focused. I thank the entire NIT Mizoram family from the bottom of my heart for this life-changing opportunity.",
    img: "assets/img/testimonials/Satvik Sharma.jpg",
  },
   {
    name: "Aditya Raj",
    company: "Reliance Industries Limited",
    message:
      "I wanted to express my heartfelt gratitude for the incredible platform provided by NIT Mizoram that ultimately led to this outstanding achievement. I am thrilled to share that I have received an offer from Reliance Industries Limited, one of India's most iconic and prestigious corporations. Special thanks to Prof. Sukanta Roy Sir, Chairman of the TNP office, and the entire placement team for their invaluable guidance and support throughout the recruitment process. Their efforts in organizing campus drives and preparing students for industry-level interviews were truly commendable. This achievement fills me with immense pride and I look forward to making NIT Mizoram proud.",
    img: "assets/img/testimonials/Aditya Raj.jpg",
  },
  {
    name: "Shivam Kumar Safi",
    company: "Tata Power",
    message:
      "I am incredibly happy and grateful to share that I have secured a placement offer from Tata Power, one of India's largest and most trusted power companies. The Training & Placement office at NIT Mizoram played an absolutely pivotal role in this achievement. Prof. Sukanta Roy Sir and the dedicated TNP team worked day and night to prepare us for campus placements and connect us with industry-leading companies. The structured training programs, technical workshops, and consistent support provided by the placement cell were instrumental in my success. I am proud to join Tata Power and deeply thankful to NIT Mizoram for giving me this incredible opportunity.",
    img: "assets/img/testimonials/Shivam Kumar Safi.jpg",
  },

  {
    name: " Nalam Deepika",
    company: "Wakefit",
    message:
       "I am overjoyed and deeply grateful to announce that I have received a placement offer from Wakefit, one of India's most innovative and fast-growing consumer tech companies. This achievement is a direct result of the outstanding support and preparation provided by the Training & Placement office at NIT Mizoram. Prof. Sukanta Roy Sir and the entire TNP team were always available to guide us, answer our questions, and ensure we were fully prepared for every round of the recruitment process. The confidence I gained through mock interviews and training sessions at NIT Mizoram made a tremendous difference. I am excited to begin this new chapter and forever grateful to my institution.",
    img: "assets/img/testimonials/Nalam Deepika.jpg",
  },

  {
    name: " Vinay Patel",
    company: "HSBC",
    message:
       "I wanted to express my heartfelt gratitude to the entire Training & Placement team at NIT Mizoram for their incredible support throughout the recruitment process. I am delighted to announce that I have received an offer from HSBC, one of the world's largest and most respected banking and financial services organizations. Prof. Sukanta Roy Sir and the TNP office worked relentlessly to bring prestigious companies to our campus and prepare students for every aspect of the selection process. Their dedication and the belief they showed in every student were truly motivating and made a significant impact on my journey. I am proud to carry the name of NIT Mizoram as I step into this exciting new chapter of my career.",
    img: "assets/img/testimonials/Vinay Patel.jpg",
  },
  {
    name: "Shreya Singh",
    company: "HSBC",
    message:
      "Kudos to the Faculty and Placement Cell of NIT Mizoram. The College has always provided me with every assistance that I have always wanted to. I was able to refine my overall Performances and build- on my Soft & Hard Skills.. I will always be grateful to them for providing me a platform of practical learning and preparing me for the corporate life.",
    img: "assets/img/testimonials/Shreya Singh.jpg",
  },
  {
    name: "Blinty S",
    company: "Deloitte USI",
    message:
      "Getting placed during the college is a dream for all the students and this dream came to reality when I got placed in Deloitte USI. My decision of joining NIT Mizoram proved right when I got opportunity to work for Deloitte USI. I and my parents are really thankful to the management and college authorities for making my dream come into reality.",
    img: "assets/img/testimonials/Blinty S.jpg",
  },
  {
    name: "Aditya Raj Mangalam",
    company: "Infosys",
    message:
      "I am very happy to be placed with Infosys. For every student it’s a dream to get job during their studies and I was lucky to get one. NIT Mizoram takes a lot of pain to develop their students for the corporate world throughout four years at the campus. I would recommend NIT Mizoram to any student who is looking for a fruitful career.",
    img: "assets/img/testimonials/Aditya Raj Mangalam.jpg",
  },
 
 
  {
    name: "Nirbhay Singh",
    company: "Capgemini",
    message:
      "Every student’s dream is to get an opportunity to start their career with well-known MNC, and I got placed in Capgemini. Thanks to Training & Placement department for providing this opportunity. I am looking forward for an excellent career.",
    img: "assets/img/testimonials/Nirbhay Singh.jpg",
  },

  
 
  {
    name: "Prakash Jha",
    company: "Ashok Leyland",
    message:
      "Dear Training and Placement Cell, thank you for your guidance and support throughout my journey. I'm thrilled to have been placed in Ashok Leyland and grateful for your efforts in making it possible. Your dedication and encouragement have meant a lot to me, and I appreciate everything you've done to help me achieve my goal.",
    img: "assets/img/testimonials/Prakash jha.jpg",
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
                  loading="lazy"
                />
              {testimonial.name?.trim() && <h3 className="h3">{testimonial.name}</h3>}
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
