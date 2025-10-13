import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    type: "experience",
    title: "Samsung R&D Institute India",
    subtitle: "Software Engineering Intern",
    duration: "Jan 2025 – July 2025",
    location: "Noida, India",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Flask",
      "PostgreSQL",
      "Corporate AD (SSO)",
      "HLS.js"
    ],
    points: [
      "Developed intuitive UIs for the TV Plus QC Automation Test Suite, enhancing usability and reducing manual QA effort by 30%.",
      "Engineered core modules including Test Case Manager and Device Manager, integrating RESTful APIs to automate 70+ test cases.",
      "Refactored memory-intensive modules, cutting memory usage by 70% and increasing runtime efficiency.",
      "Deployed and tested workloads on AWS EC2 instances, ensuring scalability and seamless integration."
    ]
  },
  {
    type: "education",
    title: "Indian Institute of Information Technology (IIIT) Bhopal",
    subtitle: "Bachelor of Technology, ECE",
    duration: "2021 – 2025",
    location: "Bhopal, India",
    points: [
      "CGPA: 9.22 / 10.0",
      "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks.",
      "Active participant in competitive programming contests and hackathons."
    ]
  },
  {
    type: "education",
    title: "Narayan Junior College",
    subtitle: "High School",
    duration: "2019 – 2021",
    location: "Nellore, Andhra Pradesh, India",
    points: [
      "Achieved a score of 97.1% in the Board Examination by BIEAP.",
      "Specialized in Physics, Chemistry, and Mathematics.",
    ]
  }
];

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Experience = () => {
  return (
    <section id="Experience" className="bg-transparent text-white py-20 px-4 md:px-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-20 glow-text animate-glow-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        My <span className="text-purple-500">Education & Experience</span>
      </motion.h1>

      <div className="relative max-w-5xl mx-auto">
        {/* RESPONSIVE TIMELINE BAR: Left on mobile, center on desktop */}
        <div className="absolute top-0 h-full w-1 bg-purple-700 left-4 md:left-1/2 md:-translate-x-1/2"></div>

        {timelineData.map((item, idx) => (
          // RESPONSIVE WRAPPER: Default block on mobile, flex on desktop
          <div
            key={idx}
            className={`relative mb-12 md:mb-16 md:flex ${
              idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* RESPONSIVE DOT: Aligns with the timeline bar */}
            <motion.div
              className="absolute top-2 w-4 h-4 left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              {/* <div className="bg-purple-500 rounded-full border-2 border-gray-900 animate-pulse-neon h-full w-full"></div> */}
            </motion.div>
            
            {/* RESPONSIVE CARD: Margin on mobile, alternating width on desktop */}
            <motion.div
              custom={idx % 2 === 0 ? "left" : "right"}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              className={`w-auto ml-10 md:ml-0 md:w-5/12 p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-purple-500
                border-l-4 md:border-l-0 ${ /* Mobile: Left border. Desktop: Alternating borders */
                  idx % 2 === 0 ? "md:border-r-4" : "md:border-l-4"
                }`}
            >
              <h2 className="text-xl font-semibold text-purple-400 glow-text">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
              <p className="text-gray-500 text-sm mb-3">{item.duration} • {item.location}</p>

              {item.type === "experience" && item.technologies && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs px-2 py-1 rounded-full font-mono glow-text animate-glow-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <ul className="list-disc list-inside space-y-2 text-gray-200 text-[15px] leading-relaxed">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-purple-400 transition-colors duration-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;