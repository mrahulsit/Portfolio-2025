import Sidebar from "../../Components/Sidebar";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "../ABOUT/About";
import Resume from "../RESUME/Resume";
import Projects from "../PROJECTS/Projects";
import Blogs from "../BLOGS/Blogs";
import Contact from "../CONTACT/Contact";
import "./Navbar.css";
import "./Home.css";

export default function Home() {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/about":
        return <About />;
      case "/resume":
        return <Resume />;
      case "/projects":
        return <Projects />;
      case "/blogs":
        return <Blogs />;
      case "/contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <div className="p-20 z-[-10] homecontain">
        <Sidebar />
        <div className="main-content-div bgcolor w-[100%] border-neutral-600 border-2 ms-5 rounded-3xl box-border sticky">
          <Navbar />
          <div className="content mt-10">{renderContent()}</div>
        </div>
      </div>
    </>
  );
}

export function Navbar() {
  const [activeLink, setActiveLink] = useState("/about");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <nav
        id="navbar"
        className="navbar font-poppins bgnav w-[66.3%] flex flex-row gap-14 justify-center p-5 text-md rounded-tr-3xl rounded-bl-3xl"
      >
        <Link
          to="/about"
          className={activeLink === "/about" ? "text-amber-400" : "text-white"}
          onClick={() => handleLinkClick("/about")}
        >
          About
        </Link>
        <Link
          to="/resume"
          className={activeLink === "/resume" ? "text-amber-400" : "text-white"}
          onClick={() => handleLinkClick("/resume")}
        >
          Resume
        </Link>
        <Link
          to="/projects"
          className={
            activeLink === "/projects" ? "text-amber-400" : "text-white"
          }
          onClick={() => handleLinkClick("/projects")}
        >
          Projects
        </Link>
        <Link
          to="/blogs"
          className={activeLink === "/blogs" ? "text-amber-400" : "text-white"}
          onClick={() => handleLinkClick("/blogs")}
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          className={
            activeLink === "/contact" ? "text-amber-400" : "text-white"
          }
          onClick={() => handleLinkClick("/contact")}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
