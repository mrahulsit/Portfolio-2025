import { useState } from "react";
import {
  Project1,
  Project10,
  Project11,
  Project12,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
} from "../../assets/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  const [active, setActive] = useState("All");

  const handleClick = (domain) => {
    setActive(domain);
  };

  return (
    <div className="text-white me-12 mt-5 p-10 text_animation">
      <span className="text-white font-semibold text-[2.2em] font-poppins ">
        Projects
      </span>
      <div id="dash" className="rounded-md mt-3 bg-amber-400 h-2 w-20"></div>

      {/* Domains */}
      <div className="mt-8 ">
        <div className="flex flex-row gap-5 cursor-pointer">
          <div>
            <h2
              className={`${
                active === "All" ? "text-amber-400" : "text-neutral-400"
              } text-[1em] font-medium font-poppins`}
              onClick={() => handleClick("All")}
            >
              All
            </h2>
            {active === "All" && (
              <div className="absolute pt-8">
                <div className="grid grid-cols-3 grid-rows-3 gap-8 w-[55em]">
                  {/* First Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project1}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>

                    <h2 className="font-poppins ms-2">
                      Finance
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  {/* Second Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project2}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Finance
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>

                  {/* Third Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project3}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      House Decor
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  {/* Fourth Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project4}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Brawlhalla
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>

                  {/* Fifth Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project5}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      UI Maker
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project6}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      MetaSecurity
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project7}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Finance
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project8}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Task Management
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project9}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Job Tracking
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <h2
              className={`${
                active === "Web Design" ? "text-amber-400" : "text-neutral-400"
              } text-[1em] font-medium font-poppins`}
              onClick={() => handleClick("Web Design")}
            >
              Web Design
            </h2>
            {active === "Web Design" && (
              <div className="absolute pt-8 left-[2.5em]">
                <div className="grid grid-cols-3 grid-rows-2 gap-10 w-[55em]">
                  <div className="flex flex-col gap-3">
                    <img src={Project2} className="rounded-2xl" />
                    <h2 className="font-poppins ms-2">
                      Portfolio
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <img src={Project10} className="rounded-2xl" />
                    <h2 className="font-poppins ms-2">
                      Task Management
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <img src={Project11} className="rounded-2xl" />
                    <h2 className="font-poppins ms-2">
                      Medical
                      <h3 className="text-neutral-400">
                        Web Design & Development
                      </h3>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <img src={Project8} className="rounded-2xl" />
                    <h2 className="font-poppins ms-2">
                      Task Management
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>
                  <div className="flex flex-col gap-3">
                    <img src={Project4} className="rounded-2xl" />
                    <h2 className="font-poppins ms-2">
                      Brawlhalla
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <img src={Project5} className="rounded-2xl" />
                    <h2 className="font-poppins ms-2">
                      UI Maker
                      <h3 className="text-neutral-400">Web Design</h3>
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <h2
              className={`${
                active === "Graphics Design"
                  ? "text-amber-400"
                  : "text-neutral-400"
              } text-[1em] font-medium font-poppins`}
              onClick={() => handleClick("Graphics Design")}
            >
              Graphics Design
            </h2>
          </div>

          <div>
            <h2
              className={`${
                active === "Web Development"
                  ? "text-amber-400"
                  : "text-neutral-400"
              } text-[1em] font-medium font-poppins`}
              onClick={() => handleClick("Web Development")}
            >
              Web Development
            </h2>
            {active === "Web Development" && (
              <div className="absolute pt-8 left-[2.5em]">
                <div className="grid grid-cols-3 grid-rows-3 gap-8 w-[55em]">
                  {/* First Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project1}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>

                    <h2 className="font-poppins ms-2">
                      Finance
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  {/* Third Project */}
                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project3}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      House Decor
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project6}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      MetaSecurity
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project7}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Finance
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="image-container">
                      <div className="absolute mt-[4.5em] mx-[6.5em] w-[3.5em] h-[3.5em] bg-neutral-700 flex items-center justify-center rounded-xl card-image">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-amber-400 size-6"
                        />
                      </div>
                      <img
                        src={Project9}
                        className="rounded-2xl box-border project-image"
                      />
                    </div>
                    <h2 className="font-poppins ms-2">
                      Job Tracking
                      <h3 className="text-neutral-400">Web Development</h3>
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
