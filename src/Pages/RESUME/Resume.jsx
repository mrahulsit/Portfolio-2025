import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Resume.css";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Experience from "../../assets/experience.png";
export default function Resume() {
  return (
    <div className="text-white w-[100%] text-justify me-12 mt-5 p-10 z-[999] page_animation">
      <span className="text-white font-semibold text-[2.2em] font-poppins ">
        Resume
      </span>
      <div id="dash" className="rounded-md mt-3 bg-amber-400 h-2 w-20"></div>
      {/* Education */}
      <div className="mt-12">
        <div className="flex flex-row gap-1 items-center">
          <div className="w-[3.5em] h-[3.5em] shadow-[0_0_60px_rgb(10,5,4,0.1)] bg-neutral-700 rounded-xl flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-amber-400 size-7"
            />
          </div>
          <h2 className="text-3xl font-semibold font-poppins ms-4">
            Education
          </h2>
        </div>
        <div className="flex w-14 justify-center">
          <div className="timeline flex flex-col items-center gap-28">
            <div className="flex flex-row">
              <div className="timeline-circle flex justify-center items-center mt-8"></div>
              <div className="absolute font-poppins font-semibold text-[1.1em] w-[45em] ms-10 mt-7">
                Senior Secondary from Saint Pauls School
                <div className="text-amber-400 text-base">
                  Duration : 2018-2019
                </div>
                <p className="text-base font-normal text-neutral-300">
                  Successfully completed my Senior Secondary education with a
                  focus on academic excellence and personal growth.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="timeline-circle flex justify-center items-center"></div>
              <div className="absolute font-poppins font-semibold text-[1.1em] w-[45em] ms-10">
                Higher Secondary from Deepika English Medium School
                <div className="text-amber-400 text-base">
                  Duration : 2019-2021
                </div>
                <div className="text-base font-normal text-neutral-300">
                  Graduated Higher Secondary with a focus on Computer Science,
                  building a deeper understanding and honing skills essential
                  for my academic and career aspirations.
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="timeline-circle flex justify-center items-center"></div>
              <div className="absolute font-poppins font-semibold text-[1.1em] w-[45em] ms-10 mt-[-0.2em]">
                B.Tech from Silicon University
                <div className="text-amber-400 text-base">
                  Duration : 2021-2025
                </div>
                <div className="text-base font-normal text-neutral-300">
                  Graduated Higher Secondary with a focus on Computer Science,
                  building a deeper understanding and honing skills essential
                  for my academic and career aspirations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-32">
        <div className="flex flex-row gap-1 items-center">
          <div className="w-[3.5em] h-[3.5em] shadow-[0_0_60px_rgb(10,5,4,0.1)] bg-neutral-700 rounded-xl flex items-center justify-center">
            <img src={Experience} className="w-[2.5em] h-[2.5em]" />
          </div>
          <h2 className="text-3xl font-semibold font-poppins ms-4">
            Experience
          </h2>
        </div>
        <div className="flex w-14 justify-center">
          <div className="timeline flex flex-col items-center justify-self-auto gap-28">
            <div className="flex flex-row items-start ">
              <div className="timeline-circle flex justify-center items-center mt-8"></div>
              <div className="absolute font-poppins font-semibold text-[1.1em] w-[45em] ms-10 mt-7">
                Senior Secondary from Saint Pauls School
                <div className="text-amber-400 text-base">
                  Duration : 2018-2019
                </div>
                <p className="text-base font-normal text-neutral-300">
                  Successfully completed my Senior Secondary education with a
                  focus on academic excellence and personal growth.
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="timeline-circle flex justify-center items-center"></div>
              <div className="absolute font-poppins font-semibold text-[1.1em] w-[45em] ms-10">
                Higher Secondary from Deepika English Medium School
                <div className="text-amber-400 text-base">
                  Duration : 2019-2021
                </div>
                <div className="text-base font-normal text-neutral-300">
                  Graduated Higher Secondary with a focus on Computer Science,
                  building a deeper understanding and honing skills essential
                  for my academic and career aspirations.
                </div>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="timeline-circle flex justify-center items-center"></div>
              <div className="absolute font-poppins font-semibold text-[1.1em] w-[45em] ms-10 mt-[-0.2em]">
                B.Tech from Silicon University
                <div className="text-amber-400 text-base">
                  Duration : 2021-2025
                </div>
                <div className="text-base font-normal text-neutral-300">
                  Graduated Higher Secondary with a focus on Computer Science,
                  building a deeper understanding and honing skills essential
                  for my academic and career aspirations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="mt-32">
        <h3 className="font-poppins font-semibold text-2xl">My Skills</h3>
        <div className="pt-5">
          <div className="content-card p-10 pt-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-poppins font-medium text-lg flex flex-row gap-2">
                Frontend Design & Development
                <h5 className="text-neutral-400">80%</h5>
              </h4>
              <div className="w-full h-[10px] rounded-xl bg-neutral-700">
                <div className="w-[80%] h-[10px] rounded-xl bg-amber-400"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-poppins font-medium text-lg flex flex-row gap-2">
                Graphics Design
                <h5 className="text-neutral-400">70%</h5>
              </h4>
              <div className="w-full h-[10px] rounded-xl bg-neutral-700">
                <div className="w-[70%] h-[10px] rounded-xl bg-amber-400"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-poppins font-medium text-lg flex flex-row gap-2">
                Backend Design & Cloud
                <h5 className="text-neutral-400">50%</h5>
              </h4>
              <div className="w-full h-[10px] rounded-xl bg-neutral-700">
                <div className="w-[50%] h-[10px] rounded-xl bg-amber-400"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-poppins font-medium text-lg flex flex-row gap-2">
                Content Writing
                <h5 className="text-neutral-400">90%</h5>
              </h4>
              <div className="w-full h-[10px] rounded-xl bg-neutral-700">
                <div className="w-[90%] h-[10px] rounded-xl bg-amber-400"></div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-poppins font-medium text-lg flex flex-row gap-2">
                MS-Office & Tools
                <h5 className="text-neutral-400">60%</h5>
              </h4>
              <div className="w-full h-[10px] rounded-xl bg-neutral-700">
                <div className="w-[60%] h-[10px] rounded-xl bg-amber-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
