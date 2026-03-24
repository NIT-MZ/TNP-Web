import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../stylesheets/navbar.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import UserContext from "../../context/UserContext";

const Navbar = () => {
  const{userDetail}=useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="navbar-container">
     <div className="md:hidden w-full bg-[#3e6db5] border-b-2 border-[#264b83] shadow-md relative">

  {/* TOP ROW (Logo + Menu) */}
  <div className="flex items-center justify-between px-3 py-2">
    
    {/* LOGO */}
    <img
      src="https://res.cloudinary.com/dwo3wa6k3/image/upload/f_auto,q_auto/v1774089497/tnplogo2_m7uw1r.png"
      alt="tnp_logo"
      className="h-10 w-10 object-contain flex-shrink-0"
      onClick={() => handleNavigation("/", "home")}
      style={{ cursor: "pointer" }}
    />

    {/* HAMBURGER BUTTON */}
    <button
      ref={buttonRef}
      onClick={toggleMenu}
      className="text-white focus:outline-none z-50"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <CloseIcon sx={{ fontSize: 30 }} />
      ) : (
        <MenuIcon sx={{ fontSize: 30 }} />
      )}
    </button>
  </div>

  {/* TEXT SECTION (CLEAN + COMPACT) */}
  <div className="text-center px-4 pb-2 space-y-[2px]">
    
    <p className="text-white text-sm font-semibold leading-tight">
      Training & Placement Office
    </p>

    <p className="text-blue-100 text-xs leading-tight">
      National Institute of Technology, Mizoram
    </p>

  </div>

  {/* DROPDOWN MENU */}
  {isOpen && (
    <nav
      ref={menuRef}
      className="absolute top-full right-0 z-50 w-[220px] bg-white shadow-lg rounded-l-lg overflow-hidden"
    >
      <div className="px-2 py-2 space-y-1">

        <a
          href="#home"
          onClick={() => handleNavigation("/")}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Home
        </a>

        <a
          href="#clients"
          onClick={() => handleNavigation("/", "clients")}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Past Recruiters
        </a>

        <a
          href="#atAGlance"
          onClick={() => handleNavigation("/", "atAGlance")}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Notices
        </a>

        <Link
          to="/team"
          onClick={toggleMenu}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Team
        </Link>

        <Link
          to="/recruiters"
          onClick={toggleMenu}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          For Recruiters
        </Link>

        <Link
          to="/internship"
          onClick={toggleMenu}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Internships
        </Link>

        <Link
          to="/NewsArcheive"
          onClick={toggleMenu}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          News Archive
        </Link>

        <Link
          to="/events"
          onClick={toggleMenu}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Student Activities
        </Link>

        <div
          onClick={onButtonClick}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md cursor-pointer"
        >
          Brochure
        </div>

        <a
          href="#contact"
          onClick={() => handleNavigation("/", "contact")}
          className="block px-4 py-2 text-sm text-black font-medium hover:bg-[#3e6db5] hover:text-white rounded-md"
        >
          Contact Us
        </a>

      </div>
    </nav>
  )}

</div>

      <div className="shadow-md w-full bg-[#3e6db5]  hidden md:flex relative">
  <div className="flex flex-col lg:justify-evenly">
    <div className="md:flex md:justify-between md:items-center md:p-4 p-3 lg:justify-around">
      <div className="md:pl-4">
        <img
          src="https://www.vidyavision.com/CollegeUploads/Logos/2017-23-5-16-27-56_nit-mizoram-logo.png"
          alt="NIT Mizoram Logo"
          className="mt-2 2xl:w-44 2xl:h-44 lg:h-32 h-32 w-32 lg:ml-4"
          onClick={() => handleNavigation("/", "home")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="lg:ml-24 items-center text-center md:mt-8 mt-2 md:px-4  lg:mt-0 lg:px-8 relative bottom-4 md:static">
        <div className="md:justify-between w-full">
          <p className="text-white lg:font-bold font-semibold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl sm:text-lg text-xs">
            प्रशिक्षण एवं नियोजन कार्यालय
          </p>
          <p className="text-white lg:font-bold font-semibold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl lg:text-md text-xs">
            Training And Placement Office
          </p>
          <p className="text-blue-100 lg:text-md text-10px font-semibold lg:font-bold md:font-semibold 2xl:text-2xl md:text-xl text-xs">
            National Institute of Technology, Mizoram
          </p>
          <p className="text-blue-200 lg:font-medium text-8px lg:text-sm 2xl:text-lg md:text-sm lg:mt-2 mx-2 lg:mx-4 font-extralight text-[10px]">
            (An Institution of National Importance under the Ministry of
            Education, Govt. of India)
          </p>
        </div>
      </div>
      <div className="lg:flex lg:justify-end">
        <img
          src="g20.png"
          alt="client"
          className="h-10 w-10 mr-4 lg:h-44 lg:flex lg:w-44 hidden"
          style={{ filter: "brightness(1.3) contrast(1.1)" }}
        />
        <img
          src="https://res.cloudinary.com/dwo3wa6k3/image/upload/f_auto,q_auto/v1774089497/tnplogo2_m7uw1r.png"
          alt="tnpLogo"
          className="hidden md:flex self-center lg:mt-4 mt-12 md:mt-6 lg:mx-4 lg:h-36 lg:w-36  h-32 w-32 sm:h-32 sm:w-32 2xl:w-44 2xl:h-44"
          onClick={() => handleNavigation("/", "home")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  </div>
</div>


      <nav>
        <div className=" hidden w-full md:flex md:items-center md:align-middle md:justify-between md:w-auto">
          <div className="nav-menu-full w-full  justify-evenly text-white lg:font-normal  align-middle md:font-normal md:pt-2 text-[8px] lg:pt-4 lg:text-xs text-xs flex bg-gradient-to-r  from-[#264b83]  to-[#3e6db5] border-b-4  border-[#1e3a6e] md:h-10 lg:h-14 flex-nowrap">
            <Link to="/" className="nav-link-text hover:text-blue-200">
              <p className="mx-1 text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Home
              </p>
            </Link>
            <a
              href="#clients"
              onClick={() => handleNavigation("/", "clients")}
              className="nav-link-text hover:text-blue-200"
            >
              <p className=" text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Past Recruiters
              </p>
            </a>

            <a
              href="#atAGlance"
              onClick={() => handleNavigation("/", "atAGlance")}
              className="nav-link-text hover:text-blue-200"
            >
              <p className=" text-[1.2vw] md:text-sm lg:text-lg font-semibold">Notices</p>
            </a>

            <Link
              to="/team"
              className="nav-link-text hover:text-blue-200"
            >
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Office Team
              </p>
            </Link>

            <Link
              to="/recruiters"
              className="hover:text-blue-200 nav-link-text"
            >
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                For Recruiters
              </p>
            </Link>
            <Link
              to="/internship"
              className="hover:text-blue-200 nav-link-text"
            >
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Internships
              </p>
            </Link>

            <Link
              to="/NewsArcheive"
              className="hover:text-blue-200 nav-link-text"
            >
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                News Archive
              </p>
            </Link>

            <Link to="/events" className="hover:text-blue-200 nav-link-text">
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Student Activities
              </p>
            </Link>
            <div
              onClick={onButtonClick}
              className="brochure-button hover:text-blue-200 nav-link-text"
            >
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Brochure
              </p>
            </div>
            <a
              href="#contact"
              onClick={() => handleNavigation("/", "contact")}
              className="nav-link-text hover:text-blue-200"
            >
              <p className="text-[1.2vw] md:text-sm lg:text-lg font-semibold">
                Contact Us
              </p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
