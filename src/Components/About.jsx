import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="About" className="bg-transparent text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-3xl border-4 border-purple-500 w-full max-w-md mx-auto shadow-[0_0_20px_#9f7aea] hover:scale-105 transition-transform duration-500 animate-pulse-neon"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            About <span className="text-purple-500 glow-text animate-glow-text">Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 text-justify">
            Passionate Software Developer skilled in full-stack and product development, with expertise in C++, Python, and modern web technologies. Focused on building scalable, user-centric solutions with clean architecture and efficient design. Committed to turning ideas into impactful digital products.
            <br /><br />
            I am currently seeking roles where I can utilize my experience and skill.
          </p>
          <a
            href="https://drive.google.com/file/d/1bOQ5LhPWBo2qKeRGcxV_eoyWRj5Ew4yn/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-purple-500 text-black font-semibold rounded-full hover:shadow-[0_0_25px_#9f7aea] glow-button animate-pulse-neon transition-all duration-500"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
