import React from "react";
import "../stylesheets/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const FooterSection = () => {
  // const col1items = [
  //   { name: "ACADEMIC" },
  //   { name: "PROGRAMMES" },
  //   { name: "RULES AND REGULATIONS" },
  //   { name: "HEALTH FACILITY" },
  // ];

  // const col2items = [
  //   { name: "DASA" },
  //   { name: "JEE MAINS" },
  //   { name: "ACTIVITIES" },
  //   { name: "FACILITIES" },
  // ];

  // const col3items = [
  //   { name: "RTI ACT" },
  //   { name: "FEE STRUCTURE" },
  //   { name: "CONTACT US" },
  //   { name: "SENATE" },
  // ];

  const socials = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://www.facebook.com/tnp.nitmz",
    },

    { name: "Twitter", icon: XIcon },

    { name: "Instagram", icon: InstagramIcon },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/company/training-and-placement-cell-nit-mizoram/ ",
    },
  ];

  return (
    <div className="footer-section-container">
      <div className="footer-section-top">
        {/*  <div className="footer-section-left">
        <div className="footer-col">
            {col1items.map((item, index) => (
              <li key={index} className="footer-list-item">
                {item.name}
              </li>
            ))}
          </div>
          <div className="footer-col">
            {col2items.map((item, index) => (
              <li key={index} className="footer-list-item">
                {item.name}
              </li>
            ))}
          </div>

          <div className="footer-col">
            {col3items.map((item, index) => (
              <li key={index} className="footer-list-item">
                {item.name}
              </li>
            ))}
          </div>
        </div>
        </div<*/}
        <div className="footer-section-right">
          <div className="footer-follow-text">Follow Us</div>
          <div className="footer-socials">
            {socials.map((item, index) => (
              <div key={index} className="footer-social-icon">
                <a href={item.href} target="_blank" rel="noreferrer">
                  {React.createElement(item.icon, {
                    style: { fontSize: "2rem" },
                  })}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-section-bottom">
        Copyright © 2024. All Right Reserved. Designed & Developed by NITMZ TnP
        Web Team
      </div>
    </div>
  );
};

export default FooterSection;
