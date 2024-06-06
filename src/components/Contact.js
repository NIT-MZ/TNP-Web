import React from 'react';
import '../stylesheets/contact.scss';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Feel free to contact us for any queries regarding admission, placement, campus, or anything else.
            Your queries are welcomed.
          </p>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className=""><LocationOnOutlinedIcon /></i>
                <h4>Location:</h4>
                <p>National Institute of Technology - Mizoram, PPXF+W39, Chaltlang Rd, Chaltlang Venglai, Chaltlang, Aizawl, Mizoram 796012</p>
              </div>
              <div className="email">
                <i className=""><EmailOutlinedIcon /></i>
                <h4>Email:</h4>
                <a href="mailto:tnp@nitmz.ac.in">
                  <p>tnp@nitmz.ac.in</p>
                </a>
              </div>
              <div className="phone">
                <i className=""><SmartphoneOutlinedIcon /></i>
                <h4>Call:</h4>
                <a href="tel:0389-2391236">
                  <p>0389-2391236</p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form method="post" role="form" className="php-email-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-3">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
