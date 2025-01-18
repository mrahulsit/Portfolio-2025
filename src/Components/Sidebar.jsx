import "./Sidebar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCalendarAlt,
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/index";
import {
  faBehance,
  faFacebook,
  faGithub,
  faHashnode,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="sm:block lg:hidden mt-[0.1em] absolute right-[1.1em] z-10 w-[3rem] h-10 sm:shadow-[inset_0_0_60px_rgb(10,5,4,0.6)] rounded-bl-3xl rounded-tr-3xl bg-zinc-800 button_design"
      >
        <FontAwesomeIcon
          icon={faAngleDown}
          color="#fbb24c"
          size="lg"
          className="mx-auto"
        />
      </button>

      <div
        className={`sidebar bgcolor border-neutral-600 border-2 rounded-3xl box-border ${
          isOpen ? "sidebarOpen" : "sidebarClose"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 mt-16 sdmobile">
          <div className="flex lg:flex-col sm:flex-row items-center gap-6 w-[100%] upper-div">
            <div className="w-44 h-44 bg-neutral-700 rounded-3xl">
              <img
                src={assets.Avatar}
                alt="Logo"
                className="w-44 h-44 rounded-3xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-5 p-0 main-div">
              <h1 className="text-white font-poppins text-3xl font-medium">
                Rahul Mishra
              </h1>
              <div className="bg-neutral-700 px-5 py-2 rounded-xl stack-div">
                <div className="font-poppins text-white text-sm">
                  Full-Stack Developer
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-[0.01em] rounded-md bg-neutral-500 mt-2 dash-line"></div>
          <div className="flex flex-col items-start w-60 h-80 justify-around info-div">
            {/* Email */}
            <div className="flex flex-row gap-2">
              <div className="small-image w-12 h-12 relative rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} color="#fbbf24" size="lg" />
              </div>
              <div className="flex flex-col font-poppins justify-center">
                <span className="text-neutral-400 text-[0.9em]">EMAIL</span>
                <span className="text-white text-[1em]">
                  rahulmishra@gmail.com
                </span>
              </div>
            </div>
            {/* Phone */}
            <div className="flex flex-row gap-2">
              <div className="small-image w-12 h-12 relative rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faMobile} color="#fbbf24" size="lg" />
              </div>
              <div className="flex flex-col font-poppins justify-center">
                <span className="text-neutral-400 text-[0.9em]">PHONE</span>
                <span className="text-white text-[1em]">+91 76088 29333</span>
              </div>
            </div>
            {/* Birthday or DOB */}
            <div className="flex flex-row gap-2">
              <div className="small-image w-12 h-12 relative rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  color="#fbbf24"
                  size="lg"
                />
              </div>
              <div className="flex flex-col font-poppins justify-center ">
                <span className="text-neutral-400 text-[0.9em]">BIRTHDAY</span>
                <span className="text-white text-[1em]">March 04, 2003</span>
              </div>
            </div>
            {/* Address */}
            <div className="flex flex-row gap-2">
              <div className="small-image w-12 h-12 relative rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  color="#fbbf24"
                  size="lg"
                />
              </div>
              <div className="flex flex-col font-poppins justify-center">
                <span className="text-neutral-400 text-[0.9em]">ADDRESS</span>
                <span className="text-white text-[1em]">
                  B-Block, Koelnagar, Rkl-14
                </span>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-[0.01em] rounded-md bg-neutral-500 mt-2 dash-line-mobile"></div>

          {/* Social Icons */}
          <div className="flex flex-row justify-between w-3/4 mt-5 social-div">
            <FontAwesomeIcon icon={faInstagram} color="#fbbf24" size="xl" />
            <FontAwesomeIcon icon={faLinkedin} color="#fbbf24" size="xl" />
            <FontAwesomeIcon icon={faGithub} color="#fbbf24" size="xl" />
            <FontAwesomeIcon icon={faHashnode} color="#fbbf24" size="xl" />
            <FontAwesomeIcon icon={faFacebook} color="#fbbf24" size="xl" />
            <FontAwesomeIcon icon={faBehance} color="#fbbf24" size="xl" />
          </div>
        </div>
      </div>
    </>
  );
}
