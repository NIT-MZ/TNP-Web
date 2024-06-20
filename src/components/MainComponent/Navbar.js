import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef();
  const buttonRef = useRef();

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

  return (
    <div>
      <div className="md:hidden shadow-md w-full bg-gradient-to-r from-[#ffdd76] to-[#87ed33] border-b-4 border-green-600">
        <div className="flex flex-col lg:justify-evenly">
          <div className="md:flex md:justify-between md:p-4 px-3 pt-1 lg:justify-around">
            <div className="md:pl-4">
              <img
                src="https://www.vidyavision.com/CollegeUploads/Logos/2017-23-5-16-27-56_nit-mizoram-logo.png"
                alt="NIT Mizoram Logo"
                className="mt-2 2xl:w-44 2xl:h-44 lg:h-32 sm:h-38 sm:w-38 h-16 w-16 lg:ml-4"
              />
            </div>
            <div className="lg:ml-24 items-center text-center mt-2  lg:mt-0 lg:px-8 relative bottom-4 md:static">
              <div className="md:justify-between w-full">
                <p className="text-slate-600 lg:font-bold font-semibold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl sm:text-lg text-xs">
                  प्रशिक्षण एवं नियोजन कार्यालय
                </p>
                <p className="text-slate-600 lg:font-bold font-semibold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl lg:text-md text-xs">
                  Training And Placement Office
                </p>
                <p className="  lg:text-md text-10px font-semibold lg:font-bold md:font-semibold 2xl:text-2xl md:text-xl text-xs">
                  National Institute of Technology, Mizoram
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white">
          {isOpen && (
            <nav
              ref={menuRef}
              className="md:hidden absolute inset-y-0 right-0 w-3/4  shadow-md rounded-l-lg transition-transform duration-300 z-50"
            >
              <div className="bg-green-200 hover:bg-green-300 bg-opacity-100 px-2 py-4 space-y-2">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Home
                </Link>
                <a
                  href="#clients"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Past recruiters
                </a>
                <a
                  href="#atAGlance"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  News and Notice
                </a>
                <a
                  href="#team"
                  onClick={toggleMenu}
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
                  to="/events"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Student Activities
                </Link>
                <a
                  href="https://www.nitmz.ac.in/uploaded_files/NITMZ_brochure-revised.pdf"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Brochure
                </a>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="block rounded-md text-black text-sm font-medium hover:bg-green-500 hover:text-white px-4 py-2"
                >
                  Contact Us
                </a>
              </div>
            </nav>
          )}

          {/* Hamburger menu button - shown on mobile */}
          <div
            ref={buttonRef}
            className="md:hidden absolute bottom-[75px] right-4 z-50  rounded-xl  border-green-300 p-[3px]"
          >
            <button
              onClick={toggleMenu}
              className="block text-black text-bold text-xl hover:text-black focus:text-black focus:outline-none"
            >
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 5h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2zm0 6h14a1 1 0 110 2H3a1 1 0 110-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="shadow-md w-full bg-gradient-to-r from-[#ffdd76] to-[#87ed33]   hidden md:flex">
        <div className="flex flex-col lg:justify-evenly">
          <div className="md:flex md:justify-between md:p-4 p-3 lg:justify-around">
            <div className="md:pl-4">
              <img
                src="https://www.vidyavision.com/CollegeUploads/Logos/2017-23-5-16-27-56_nit-mizoram-logo.png"
                alt="NIT Mizoram Logo"
                className="mt-2 2xl:w-44 2xl:h-44 lg:h-32 h-32 w-32 lg:ml-4"
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
                <p className="  lg:text-md text-10px font-semibold lg:font-bold md:font-semibold 2xl:text-2xl md:text-xl text-xs">
                  National Institute of Technology, Mizoram
                </p>
                <p className="  text-black lg:font-medium text-8px lg:text-sm 2xl:text-lg md:text-sm lg:mt-2 mx-2 lg:mx-4 font-extralight text-[10px]">
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
                src="tnplogo.png"
                alt="tnpLogo"
                className="hidden md:flex self-center lg:mt-4 mt-12  md:mt-6 g:mx-4 lg:h-44 lg:w-44 pr-2 pb-2 h-16 w-16 sm:h-32 sm:w-32"
              />
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className=" hidden w-full md:flex md:items-center md:align-middle md:justify-between md:w-auto">
          <div className="  w-full  justify-evenly text-white lg:font-normal  align-middle md:font-normal md:pt-2 text-[14px] lg:pt-4 lg:text-sm text-xs flex bg-gradient-to-r  to-[#f1c130d6]  from-[#4a930edf] border-b-4  border-green-600 md:h-10 lg:h-14 flex-nowrap">
            <Link to="/" className="hover:text-white hover:font-semibold">
              <p className="mx-1 text-[1.6vw] md:text-sm lg:text-[22px] text-white\">
                Home
              </p>
            </Link>
            <a href="#clients" className=" hover:font-semibold">
              <p className=" text-[1.6vw] md:text-sm text-white lg:text-[22px] ">
                Past Recruiters
              </p>
            </a>

            <a href="#atAGlance" className=" hover:font-semibold">
              <p className=" text-[1.6vw] md:text-sm text-white lg:text-[22px] ">
                News and Notice
              </p>
            </a>

            {/* <a href="#clients" className=" hover:font-semibold">
                <p className="mx-1 text-[1.8vw] md:text-lg text-white">
                  Why recruit us
                </p>
              </a> */}

            <a href="#team" className="hover:text-pink-300 hover:font-semibold">
              <p className="text-[1.6vw] md:text-sm text-white lg:text-[22px]">
                Office Team
              </p>
            </a>

            <Link
              to="/recruiters"
              className="hover:text-pink-300 hover:font-semibold"
            >
              <p className="text-[1.6vw] md:text-sm text-white lg:text-[22px] ">
                For Recruiters
              </p>
            </Link>
            <Link
              to="/internship"
              className="hover:text-pink-300 hover:font-semibold"
            >
              <p className="text-[1.6vw] md:text-sm text-white lg:text-[22px] ">
                Internships
              </p>
            </Link>
            <Link
              to="/events"
              className="hover:text-pink-300 hover:font-semibold"
            >
              <p className=" text-[1.6vw] md:text-sm text-white lg:text-[22px]">
                Student Activities
              </p>
            </Link>
            <Link
              to="https://www.nitmz.ac.in/uploaded_files/NITMZ_brochure-revised.pdf"
              className="hover:text-pink-300 hover:font-semibold"
            >
              <p className="text-[1.6vw] md:text-sm text-white lg:text-[22px]">
                Brochure
              </p>
            </Link>
            <a
              href="#contact"
              className="hover:text-green-200 hover:font-semibold"
            >
              <p className=" text-[1.6vw] md:text-sm text-white lg:text-[22px]">
                Contact Us{" "}
              </p>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
