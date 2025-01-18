/* eslint-disable react/display-name */
import "./Contact.css";
import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  const GoogleMap = memo(() => (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d461.5660636782537!2d84.89273698878935!3d22.257961129706995!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d22.257966699999997!2d84.89304829999999!4m3!3m2!1d22.257965!2d84.8930489!5e0!3m2!1sen!2sin!4v1722283936032!5m2!1sen!2sin"
      className="w-[100%] h-[30em] border-0 rounded-2xl outline-none"
      loading="lazy"
      title="Google Map"
    ></iframe>
  ));
  return (
    <div className="flex flex-col mt-5 p-10 min-h-screen text-white page_animation">
      <span className="text-white font-semibold text-[2.2em] font-poppins ">
        Contact
      </span>
      <div
        id="dash"
        className="rounded-md mt-3 bg-amber-400 h-2 w-20 mb-5"
      ></div>
      <figure className="w-full">
        <GoogleMap />
      </figure>
      <div className="mt-20 flex flex-col justify-around h-[25em] font-poppins">
        <span className="text-white font-semibold text-[1.8em]">
          Contact Form
        </span>
        <div className="flex flex-row justify-between w-[100%] mt-4 h-16 ptext_color">
          <input
            type="text"
            placeholder="Enter Full Name"
            className="bg-transparent border-[0.1em] border-zinc-700 outline-none w-[28em] rounded-2xl p-5"
          />
          <input
            type="text"
            placeholder="Enter Email Address"
            className="bg-transparent border-[0.1em] border-zinc-700 outline-none w-[28em] rounded-2xl p-5"
          />
        </div>
        <textarea
          type="text"
          placeholder="Enter Your Message Here"
          className="mt-5 mb-5 bg-transparent border-[0.1em] border-zinc-700 outline-none w-[100%] h-60 rounded-2xl p-5"
        ></textarea>
        <div className="flex flex-row justify-end">
          <button className="message text-amber-400 flex gap-3 items-center justify-center">
            <FontAwesomeIcon icon={faPaperPlane} size="lg" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
