import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profile from "../assets/profile3.jpeg";

const Home = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Software Developer", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen bg-transparent text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-16 md:py-24 gap-10"
    >
      {/* Left Section */}
      <div className="text-center md:text-left max-w-xl">
        <h3 className="text-3xl md:text-5xl">Hello, I am</h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold my-2">
          Likhitha Gangisetty
        </h1>
        <h4 className="text-xl md:text-2xl mt-4">
          an Engineering student passionate in{" "}
          <span className="text-purple-500" ref={typedEl}></span>
        </h4>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 my-6 text-purple-500 text-2xl">
          <a
            href="https://linkedin.com/in/likhitha-gangisetty-056bb922b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/Likhitha1424"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://leetcode.com/u/Likhitha1424/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="bx bx-code-alt"></i>
          </a>
          <a
            href="https://forms.gle/tbJHCRSBWcregZku7"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="bx bxs-pencil"></i>
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1bOQ5LhPWBo2qKeRGcxV_eoyWRj5Ew4yn/view?usp=drive_link"
          className="inline-block px-6 py-2 bg-purple-500 text-black font-semibold rounded-full hover:shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={profile}
          alt="Likhitha Profile"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
