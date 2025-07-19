import React from "react";
import aboutImg from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="About" className="bg-tranparent text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About"
            className="rounded-3xl border-4 border-purple-500 w-full max-w-md mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 text-justify">
            I'm an enthusiastic engineering student majoring in Electronics and Communication Engineering (ECE)
            with a strong passion for Software development, Full-stack web development, and UI/UX design. My
            journey in technology started with a solid foundation in C++ and Python, and has since expanded to encompass
            SQL and various web technologies like React.js, Node.js, Tailwind CSS, etc.
            <br /><br />
            I am currently seeking roles where I can utilize my experience and skill.
          </p>
          <a
            href="https://drive.google.com/file/d/1bOQ5LhPWBo2qKeRGcxV_eoyWRj5Ew4yn/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-6 py-2 bg-purple-500 text-black font-semibold rounded-full hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
