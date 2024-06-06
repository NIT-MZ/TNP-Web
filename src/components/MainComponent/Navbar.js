import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="shadow-md w-full from-[#ffdd76] to-[#87ed33]   bg-gradient-to-r border-b-4 border-green-400">
        <div className="flex flex-col lg:justify-evenly">
          <div className="md:flex flex justify-between md:p-4 lg:justify-around">
            <div className="flex sm:flex-row justify-around pl-4">
              <img
                src="https://www.vidyavision.com/CollegeUploads/Logos/2017-23-5-16-27-56_nit-mizoram-logo.png"
                alt="NIT Mizoram Logo"
                className="self-center mt-4 mr-4 2xl:w-44 2xl:h-44 lg:h-32 sm:h-32 sm:w-32 h-16 w-16 lg:ml-4"
              />
            </div>
            <div className="flex flex-col lg:ml-24 lg:flex-row items-center text-center justify-between mt-4 px-4 lg:mt-0 lg:px-8">
              <div className="justify-between">
                <p className="text-slate-600 lg:font-bold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl sm:text-lg text-xs">
                  प्रशिक्षण एवं नियोजन कार्यालय
                </p>
                <p className="text-slate-600 lg:font-bold md:font-bold font-md lg:text-xl 2xl:text-2xl md:text-xl lg:text-md text-xs">
                  Training And Placement Office
                </p>
                <p className="lg:text-md text-10px font-thin lg:font-bold md:font-semibold 2xl:text-2xl md:text-xl text-xs">
                  National Institute of Technology, Mizoram
                </p>
                <p className="text-black lg:font-medium text-8px lg:text-sm 2xl:text-lg md:text-sm  lg:mt-2 mb-2 mx-2 lg:mx-4 font-extralight text-[10px]">
                  (An Institution of National Importance under the Ministry of
                  Education,Govt.of India)
                </p>
              </div>
            </div>
            <div className="lg:flex lg:justify-end">
              <img
                src="g20.png"
                alt="client "
                className="h-10 w-10 mr-4 lg:h-44 lg:flex lg:w-44 hidden"
              />
              <img
                src="tnplogo.png"
                alt="tnpLogo"
                className=" self-center lg:mt-4 mt-12 lg:mx-4  lg:h-44 lg:w-44 pr-2 pb-2 h-16 w-16 sm:h-32 sm:w-32"
              />
            </div>
          </div>
        </div>
        <nav>
          <div className="w-full md:flex md:items-center md:justify-between md:w-auto">
            <div className="sm-8 md:w-full w-full py-2 justify-evenly text-white lg:font-semibold font-extralight text-xs lg:p-1 lg:text-sm md:text-sm flex bg-gradient-to-r  to-[#f1c130d6]  from-[#4a930edf]  md:h-12 flex-wrap">
            <Link to='/' className="hover:text-white hover:font-semibold"><p className="mx-1 text-[2vw] md:text-lg text-white\">Home</p></Link>
              <a href="#clients" className=" hover:font-semibold">
                <p className="mx-1 text-[2vw] md:text-lg text-white">
                  Past Recruiters
                </p>
              </a>
              <a href="#clients" className=" hover:font-semibold">
                <p className="mx-1 text-[2vw] md:text-lg text-white">
                  Training
                </p>
              </a>

              <a href="#atAGlance" className=" hover:font-semibold">
                <p className="mx-1 text-[2vw] md:text-lg text-white">
                  At A Glance
                </p>
              </a>

              <a href="#clients" className=" hover:font-semibold">
                <p className="mx-1 text-[2vw] md:text-lg text-white">
                  Why recruit us
                </p>
              </a>

              <a
                href="#team"
                className="hover:text-pink-300 hover:font-semibold"
              >
                <p className="mx-1 text-[2vw] md:text-lg text-white">Team</p>
              </a>
              <Link to='/events'
                className="hover:text-pink-300 hover:font-semibold"
              >
                <p className="mx-1 text-[2vw] md:text-lg text-white">Events</p>
                </Link>
              <a
                href="#contact"
                className="hover:text-green-200 hover:font-semibold"
              >
                <p className="mx-1 text-[2vw] md:text-lg text-white">
                  Contact Us{" "}
                </p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
