import React, { useState } from "react";
import "../stylesheets/contact.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import { Snackbar, Alert, CircularProgress } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/861b5c421dd6b4118746920651fe0ed1",// 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSnackbarSeverity("success");
        setSnackbarMessage("Thank you! We will reach out to you shortly.");
        setOpenSnackbar(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage("Something went wrong. Please try again.");
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Something went wrong. Please try again.");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            Feel free to contact us for any queries regarding admission,
            placement, campus, or anything else. Your queries are welcomed.
          </p>
        </div>

        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="">
                  <LocationOnOutlinedIcon />
                </i>
                <h4>Location:</h4>
                <p>
                  Training and Placement Office, Academic Block-11, NIT Mizoram,
                  Chaltlang Ding di Veng, Chaltlang, Aizawl, Mizoram – 796012
                </p>
              </div>
              <div className="email">
                <i className="">
                  <EmailOutlinedIcon />
                </i>
                <h4>Email:</h4>
                <a href="mailto:tnp@nitmz.ac.in">
                  <p>tnp@nitmz.ac.in</p>
                </a>
              </div>
              <div className="phone">
                <i className="">
                  <SmartphoneOutlinedIcon />
                </i>
                <h4>Call:</h4>
                <a href="tel:0389-2391236">
                  <p>+91-9035385841 </p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group mt-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" disabled={loading}>
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
