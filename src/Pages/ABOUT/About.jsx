import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import Web from "../../assets/web.png";
import Content from "../../assets/content.png";
import Camera from "../../assets/camera.png";
import Client from "../../Components/Client";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="text-white w-[100%] text-justify me-12 mt-5 p-10 z-[999] page_animation"
      >
        <span className="text-white font-semibold text-[2.2em] font-poppins ">
          About Me
        </span>
        <div id="dash" className="rounded-md mt-3 bg-amber-400 h-2 w-20"></div>
        <p className="text-left mt-3 text-zinc-400 text-[1.1rem] leading-[1.5rem] font-poppins">
          I&apos;m a passionate Full-Stack Developer and Graphics Designer from
          Rourkela, Odisha, dedicated to crafting innovative and user-friendly
          web applications with a special touch of UI/UX. I thrive on turning
          complex problems into simple, beautiful, and intuitive designs.
        </p>
        <p className="text-left mt-3 text-zinc-400 text-[1.1rem] leading-[1.5rem] font-poppins">
          My job is to build web applications so that it&apos;s functional,
          user-friendly, and visually stunning. I add a personal touch to your
          product, ensuring it&apos;s eye-catching and easy to use. My aim is to
          bring across your message and identity in the most creative way.
          I&apos;m excited to leverage my skills and knowledge to make a
          meaningful contribution to the ever-evolving field of Web Development.
        </p>
        <div className="text-white font-poppins mt-10 font-semibold">
          <span className="text-2xl">What I&apos;m doing </span>
          <div id="mainbox" className="pad flex mt-5 gap-5 flex-wrap w-[100%]">
            <div
              id="contentbox"
              className="shadow-[inset_0_0_60px_rgb(10,5,4,0.4)] w-[48%] h-40 rounded-2xl bg-zinc-800 border-[3px] border-amber-400"
            >
              <div
                id="boxtext"
                className="text-white font-poppins text-center flex justify-center items-center w-full h-full p-5"
              >
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  style={{ color: "#fbbf24" }}
                  size="2xl"
                  className="m-5"
                />
                <div className="text-left flex flex-col gap-1">
                  <span className="text-[1.4rem] ">Graphics Designer</span>
                  <p id="paratext" className="text-sm">
                    Modern, high-quality design crafted with precision and
                    creativity.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="contentbox"
              className="shadow-[inset_0_0_60px_rgb(10,5,4,0.4)] w-[48%] h-40 rounded-2xl bg-zinc-800 border-[3px] border-amber-400"
            >
              <div
                id="boxtext"
                className="text-white font-poppins text-center flex justify-center items-center w-full h-full p-5"
              >
                <img src={Web} className="m-5 object-contain w-12" />
                <div className="text-left flex flex-col gap-1">
                  <span className="text-[1.4rem] ">Web-Development</span>
                  <p className="text-sm">
                    Crafting dynamic UIs with RESTful APIs for seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="contentbox"
              className="shadow-[inset_0_0_60px_rgb(10,5,4,0.4)] w-[48%] h-40 rounded-2xl bg-zinc-800 border-[3px] border-amber-400"
            >
              <div
                id="boxtext"
                className="text-white font-poppins text-center flex justify-center items-center w-full h-full p-5"
              >
                <img src={Content} className="m-5 object-contain w-12" />
                <div className="text-left flex flex-col gap-1">
                  <span className="text-[1.4rem] ">Content-Writing</span>
                  <p className="text-sm">
                    Created engaging content for my Websites and College Events
                  </p>
                </div>
              </div>
            </div>
            <div
              id="contentbox"
              className="shadow-[inset_0_0_60px_rgb(10,5,4,0.4)] w-[48%] h-40 rounded-2xl bg-zinc-800 border-[3px] border-amber-400"
            >
              <div
                id="boxtext"
                className="text-white font-poppins text-center flex justify-center items-center w-full h-full p-5"
              >
                <img src={Camera} className="m-5 object-contain w-12" />
                <div className="text-left flex flex-col gap-1">
                  <span className="text-[1.4rem] ">Photographer</span>
                  <p className="text-sm">
                    Clicking some absolute eye-catching images of nature and
                    people
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Client />
    </>
  );
}
