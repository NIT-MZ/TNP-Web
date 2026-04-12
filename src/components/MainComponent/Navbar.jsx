import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../stylesheets/navbar.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const { userDetail } = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleNavigation = (path, anchor) => {
    setIsOpen(false);
    navigate(path);

    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  const onButtonClick = () => {
    const pdfUrl = "Training and Placement Brochure 2025-26.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Training and Placement Brochure 2025-26.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { label: "Home", type: "link", to: "/" },
    { label: "Past Recruiters", type: "anchor", anchor: "clients" },
    { label: "Notices", type: "anchor", anchor: "atAGlance" },
    { label: "Office Team", type: "route", to: "/team" },
    { label: "For Recruiters", type: "route", to: "/recruiters" },
    { label: "Internships", type: "route", to: "/internship" },
    { label: "News Archive", type: "route", to: "/NewsArcheive" },
    { label: "Student Activities", type: "route", to: "/events" },
    { label: "Brochure", type: "action", action: onButtonClick },
    { label: "Contact Us", type: "anchor", anchor: "contact" },
  ];

  const renderNavLink = (item, index, isMobile = false) => {
    const baseClass = isMobile
      ? "navbar-mobile-link"
      : "navbar-desktop-link";

    if (item.type === "link" || item.type === "route") {
      return (
        <Link
          key={index}
          to={item.to}
          className={baseClass}
          onClick={() => {
            setIsOpen(false);
            if (item.type === "link") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {item.label}
        </Link>
      );
    }

    if (item.type === "anchor") {
      return (
        <a
          key={index}
          href={`#${item.anchor}`}
          className={baseClass}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/", item.anchor);
          }}
        >
          {item.label}
        </a>
      );
    }

    if (item.type === "action") {
      return (
        <button
          key={index}
          className={baseClass}
          onClick={() => {
            setIsOpen(false);
            item.action();
          }}
        >
          {item.label}
        </button>
      );
    }
  };

  return (
    <div className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}>
      {/* ===== MOBILE NAVBAR ===== */}
      <div className="navbar-mobile">
        <div className="navbar-mobile-top">
          <img
            src="https://res.cloudinary.com/dwo3wa6k3/image/upload/f_auto,q_auto/v1774089497/tnplogo2_m7uw1r.png"
            alt="tnp_logo"
            className="navbar-mobile-logo"
            onClick={() => handleNavigation("/", "home")}
          />
          <div className="navbar-mobile-title">
            <p className="navbar-mobile-title-main">
              Training & Placement Office
            </p>
            <p className="navbar-mobile-title-sub">
              National Institute of Technology, Mizoram
            </p>
          </div>
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <CloseIcon sx={{ fontSize: 28 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 28 }} />
            )}
          </button>
        </div>

        {/* Dropdown */}
        <nav
          ref={menuRef}
          className={`navbar-mobile-menu ${isOpen ? "navbar-mobile-menu-open" : ""}`}
        >
          {navLinks.map((item, i) => renderNavLink(item, i, true))}
        </nav>
      </div>

      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="navbar-desktop">
        {/* Header Row */}
        <div className="navbar-desktop-header">
          <div className="navbar-desktop-header-inner">
            <img
              src="https://res.cloudinary.com/dwo3wa6k3/image/upload/v1775980269/tnp_logo_ls9uzk.png"
              alt="NIT Mizoram Logo"
              className="navbar-desktop-nit-logo"
              onClick={() => handleNavigation("/", "home")}
            />
            <div className="navbar-desktop-text">
              <p className="navbar-desktop-text-hindi">
                प्रशिक्षण एवं नियोजन कार्यालय
              </p>
              <p className="navbar-desktop-text-main">
                Training And Placement Office
              </p>
              <p className="navbar-desktop-text-institute">
                National Institute of Technology, Mizoram
              </p>
              <p className="navbar-desktop-text-tagline">
                (An Institution of National Importance under the Ministry of
                Education, Govt. of India)
              </p>
            </div>
            <div className="navbar-desktop-logos">
              <img
                src="g20.png"
                alt="G20 Logo"
                className="navbar-desktop-g20"
              />
              <img
                src="https://res.cloudinary.com/dwo3wa6k3/image/upload/f_auto,q_auto/v1774089497/tnplogo2_m7uw1r.png"
                alt="TNP Logo"
                className="navbar-desktop-tnp-logo"
                onClick={() => handleNavigation("/", "home")}
              />
            </div>
          </div>
        </div>

        {/* Nav Links Row */}
        <nav className="navbar-desktop-nav">
          <div className="navbar-desktop-nav-inner">
            {navLinks.map((item, i) => renderNavLink(item, i, false))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
