import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Samsung R&D Institute India",
    role: "Software Engineering Intern",
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
      "Built scalable test automation dashboards using React.js, Redux Toolkit, and Tailwind CSS, streamlining TV Plus QC workflows.",
      "Integrated RESTful APIs with Flask to visualize real-time test case execution and device-level results.",
      "Developed Excel export and report generation, reducing manual QA tracking by 70%.",
      "Optimized test case workflows and PostgreSQL queries, reducing content certification time by 50%.",
      "Implemented SSO using Corporate Active Directory for secure access and role-based control.",
      "Unified five legacy tools into a single-page app with live logs, HLS video playback, and incident visualization — cutting incident reporting time by 70%."
    ]
  },
  {
    company: "IIIT Bhopal",
    role: "Academic Projects & Freelance Work",
    duration: "2023 – 2024",
    location: "Bhopal, India",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Netlify",
      "Vercel",
      "GitHub",
      "Notion"
    ],
    points: [
      "Built full-stack web apps using React, Node.js, and MongoDB.",
      "Implemented authentication systems with Firebase and deployed apps to Netlify and Vercel.",
      "Collaborated with peers on GitHub and handled project documentation with Notion."
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" }
  })
};

const Experience = () => {
  return (
    <section id="Experience" className="bg-transparent text-white py-20 px-6 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-purple-500">Experience</span>
      </motion.h1>

      <div className="relative border-l-2 border-purple-700 pl-6 md:pl-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 relative group"
          >
            <div className="group-hover:translate-x-1 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-purple-400 mb-1">
                {exp.company}
              </h2>
              <p className="text-sm text-gray-400 mb-1">
                {exp.role} • {exp.duration}
              </p>
              <p className="text-sm text-gray-500 mb-3">{exp.location}</p>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-purple-700/20 text-purple-300 text-xs px-2 py-1 rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <ul className="list-disc list-inside space-y-2 text-gray-200 text-[15px] leading-relaxed">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-purple-400 transition-colors duration-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
