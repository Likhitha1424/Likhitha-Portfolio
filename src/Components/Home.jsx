import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import profile from "../assets/profile3.jpeg";

const Home = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Software Developer", "Full Stack Developer"],
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
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h3 className="text-3xl md:text-5xl glow-text animate-glow-text">
          Hello, I am
        </h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold my-2 glow-text animate-glow-text">
          Likhitha Gangisetty
        </h1>
        <h4 className="text-xl md:text-2xl mt-4">
          an Engineering student who is a{" "}
          <span className="text-purple-500 glow-text" ref={typedEl}></span>
        </h4>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 my-6 text-purple-500 text-2xl">
          {[
            { href: "https://linkedin.com/in/likhitha-gangisetty-056bb922b", icon: "bxl-linkedin" },
            { href: "https://github.com/Likhitha1424", icon: "bxl-github" },
            { href: "https://leetcode.com/u/Likhitha1424/", icon: "bx-code-alt" },
            { href: "https://forms.gle/tbJHCRSBWcregZku7", icon: "bxs-pencil" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:scale-110 transition-transform duration-300 glow-text animate-glow-text"
            >
              <i className={`bx ${item.icon}`}></i>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1bOQ5LhPWBo2qKeRGcxV_eoyWRj5Ew4yn/view?usp=drive_link"
          className="inline-block px-6 py-2 bg-purple-500 text-black font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all glow-text animate-glow-text"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <img
          src={profile}
          alt="Likhitha Profile"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-500 shadow-lg hover:shadow-purple-700 transition-all duration-300 glow-border animate-pulse-neon"
        />
      </motion.div>
    </section>
  );
};

export default Home;
