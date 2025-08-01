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
      <div className="md:hidden shadow-md w-full bg-gradient-to-r from-[#ffdd76] to-[#87ed33] border-b-4 border-green-600">
      <div className="flex flex-col relative">
  <div className="md:flex md:justify-between px-2 pt-1">
    <div className="mr-4">
      <img
        src="tnplogo2.png"
        alt="tnp_Logo"
        className="mt-2 sm:h-38 sm:w-38 h-16 w-16"
        onClick={() => handleNavigation("/", "home")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="items-center text-center -mt-9 relative bottom-4 md:static">
      <div className="w-full mt-2 mb-2">
        <p className="text-slate-600 font-semibold md:font-bold font-md sm:text-lg text-xs">
          प्रशिक्षण एवं नियोजन कार्यालय
        </p>
        <p className="text-slate-600 font-semibold font-md text-xs">
          Training And Placement Office
        </p>
        <p className="text-10px font-semibold text-xs">
          National Institute of Technology, Mizoram
        </p>
      </div>
    </div>
  </div>

  {/* 🔵 Small Blue Icon in Bottom Right */}
 
</div>


        <div className="bg-white">
          {isOpen && (
            <nav
              ref={menuRef}
              className="absolute inset-y-0 right-0 rounded-l-lg duration-300 z-50"
            >
              <div
                className="nav-menu px-2 py-4 space-y-2"
                data-aos="fade-left"
              >
                <a
                  href="#home"
                  onClick={() => handleNavigation("/")}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Home
                </a>
                <a
                  href="#clients"
                  onClick={() => handleNavigation("/", "clients")}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Past recruiters
                </a>
                <a
                  href="#atAGlance"
                  onClick={() => handleNavigation("/", "atAGlance")}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Notices
                </a>
                <a
                  href="#team"
                  onClick={() => handleNavigation("/", "team")}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Team
                </a>
                <Link
                  to="/recruiters"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  For Recruiters
                </Link>
                <Link
                  to="/internship"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Internships
                </Link>

                <Link
                  to="/newsArcheive"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  News Archive
                </Link>
                <Link
                  to="/events"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Student Activities
                </Link>
                <div
                  onClick={onButtonClick}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Brochure
                </div>
                <a
                  href="#contact"
                  onClick={() => handleNavigation("/", "contact")}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          )}

          <div
            ref={buttonRef}
            className="md:hidden hamburger-icon z-50  rounded-xl  border-green-300 p-[3px]"
          >
            <button
              onClick={toggleMenu}
              className="block text-black text-bold text-xl hover:text-black focus:text-black focus:outline-none"
            >
              {isOpen ? (
                <CloseIcon sx={{ fontSize: 40 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 40 }} />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="shadow-md w-full bg-gradient-to-r from-[#ffdd76] to-[#87ed33] hidden md:flex relative">
  <div className="flex flex-col lg:justify-evenly">
    <div className="md:flex md:justify-between md:p-4 p-3 lg:justify-around">
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
          <p className="text-slate-600 lg:font-bold font-semibold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl sm:text-lg text-xs">
            प्रशिक्षण एवं नियोजन कार्यालय
          </p>
          <p className="text-slate-600 lg:font-bold font-semibold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl lg:text-md text-xs">
            Training And Placement Office
          </p>
          <p className="lg:text-md text-10px font-semibold lg:font-bold md:font-semibold 2xl:text-2xl md:text-xl text-xs">
            National Institute of Technology, Mizoram
          </p>
          <p className="text-black lg:font-medium text-8px lg:text-sm 2xl:text-lg md:text-sm lg:mt-2 mx-2 lg:mx-4 font-extralight text-[10px]">
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
        />
        <img
          src="tnplogo2.png"
          alt="tnpLogo"
          className="hidden md:flex self-center lg:mt-4 mt-12 md:mt-6 lg:mx-4 lg:h-44 lg:w-44 pr-2 pb-2 h-32 w-32 sm:h-32 sm:w-32"
          onClick={() => handleNavigation("/", "home")}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  </div>

  {/* ✅ Blue login icon in bottom right */}
  {userDetail?.data?.user?(
   <Link
  to="/adminPage"
  className="absolute top-1 right-1 text-blue-900 underline decoration-white hover:bg-blue-600 hover:text-white md:block hidden px-2 py-1 rounded"
  title="Admin page"
>
  AdminPage
</Link>

  

  ):(

  <Link
    to="/login"
    className="absolute top-1 right-1 bg-[#1E3A8A] hover:bg-green-900 text-white font-semibold p-1 rounded-md shadow-md md:block hidden"
    title="Admin Login"
  >
    Admin Login
  </Link>
  )}
</div>


      <nav>
        <div className=" hidden w-full md:flex md:items-center md:align-middle md:justify-between md:w-auto">
          <div className="nav-menu-full w-full  justify-evenly text-white lg:font-normal  align-middle md:font-normal md:pt-2 text-[14px] lg:pt-4 lg:text-sm text-xs flex bg-gradient-to-r  to-[#f1c130d6]  from-[#4a930edf] border-b-4  border-green-600 md:h-10 lg:h-14 flex-nowrap">
            <Link to="/" className="nav-link-text">
              <p className="mx-1 text-[1.6vw] md:text-sm lg:text-[22px]">
                Home
              </p>
            </Link>
            <a
              href="#clients"
              onClick={() => handleNavigation("/", "clients")}
              className="nav-link-text"
            >
              <p className=" text-[1.6vw] md:text-sm lg:text-[22px]">
                Past Recruiters
              </p>
            </a>

            <a
              href="#atAGlance"
              onClick={() => handleNavigation("/", "atAGlance")}
              className="nav-link-text"
            >
              <p className=" text-[1.6vw] md:text-sm lg:text-[22px]">Notices</p>
            </a>

            <a
              href="#team"
              onClick={() => handleNavigation("/", "team")}
              className="nav-link-text"
            >
              <p className="text-[1.6vw] md:text-sm lg:text-[22px]">
                Office Team
              </p>
            </a>

            <Link
              to="/recruiters"
              className="hover:text-pink-300 nav-link-text"
            >
              <p className="text-[1.6vw] md:text-sm lg:text-[22px]">
                For Recruiters
              </p>
            </Link>
            <Link
              to="/internship"
              className="hover:text-pink-300 nav-link-text"
            >
              <p className="text-[1.6vw] md:text-sm lg:text-[22px]">
                Internships
              </p>
            </Link>

            <Link
              to="/NewsArcheive"
              className="hover:text-pink-300 nav-link-text"
            >
              <p className="text-[1.6vw] md:text-sm lg:text-[22px]">
                News Archive
              </p>
            </Link>

            <Link to="/events" className="nav-link-text">
              <p className=" text-[1.6vw] md:text-sm lg:text-[22px]">
                Student Activities
              </p>
            </Link>
            <div
              onClick={onButtonClick}
              className="brochure-button nav-link-text"
            >
              <p className=" text-[1.6vw] md:text-sm lg:text-[22px]">
                Brochure
              </p>
            </div>
            <a
              href="#contact"
              onClick={() => handleNavigation("/", "contact")}
              className="nav-link-text"
            >
              <p className=" text-[1.6vw] md:text-sm lg:text-[22px]">
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
