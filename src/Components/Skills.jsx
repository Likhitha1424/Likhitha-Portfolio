import React from "react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLinux,
  SiDocker,
  SiPostman,
  SiVercel,
  SiGithub,
  SiGit,
  SiJson,
  SiShadcnui,
  SiClerk
} from "react-icons/si";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "Python", icon: <SiPython /> },
    ],
  },
  {
    title: "Technologies / Frameworks",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "RESTful API", icon: <SiVercel /> },
      { name: "Shadcn/UI", icon: <SiShadcnui /> },
    ],
  },
  {
    title: "Core Skills",
    skills: [
      { name: "OOPS", icon: <SiJavascript /> },
      { name: "Database Management Systems", icon: <SiMysql /> },
      { name: "Operating Systems", icon: <SiLinux /> },
      { name: "Computer Networks", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "JSON", icon: <SiJson /> },
      { name: "Clerk Auth", icon: <SiClerk /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="bg-transparent from-gray-900 via-black to-blue-950 text-white py-16 px-6 md:px-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 glow-text animate-glow-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <span className="text-purple-400">My</span> Skills
      </motion.h2>

      <div className="space-y-12">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold text-purple-300 mb-6 glow-text animate-glow-text">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 0 20px #9f7aea, 0 0 40px #d8b4fe",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-2xl shadow-lg hover:shadow-purple-500/40 glow-border"
                >
                  <div className="text-4xl text-purple-500 mb-2">{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-200">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
