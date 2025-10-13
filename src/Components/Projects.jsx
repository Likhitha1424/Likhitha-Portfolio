import React from "react";
import { motion } from "framer-motion";
import flf from "../assets/FLF.png";
import tictactoe from "../assets/tictactoeimg.jpeg";
import tsa from "../assets/TSA2.png";
import todo from "../assets/todo.jpeg";
import gimg from "../assets/gimg.jpg";
import img3 from "../assets/img3.jpg";
import img from "../assets/img.jpg";
import img4 from "../assets/img4.jpg";
import aiva from "../assets/aiva.jfif";
import bloodbank from "../assets/bloodbank.jfif";
import vistagram from "../assets/vistagram.jfif";
import nexthire from "../assets/nexthire.jfif";

const projects = [
   {
    title: "AiVA - AI Voice Assistant",
    description: "An interactive AI-powered voice assistant built with MERN Stack, capable of understanding natural language, performing tasks, and providing intelligent responses.",
    icon: "bxs-microphone-alt",
    img: aiva, // Replace with actual image variable
  },
  {
    title: "Next Hire",
    description: "A full-stack job portal built with React.js, Supabase, and Clerk Auth, featuring secure authentication, role-based access, and real-time job application management for 150+ users.",
    icon: "bxl-react",
    img: nexthire, // Replace with actual image variable
  },
  {
    title: "Vistagram",
    description: "A social media web app where users can securely upload, save, and explore pictures shared by others.",
    icon: "bxl-instagram",
    img: vistagram, // Replace with actual image variable
  },
  {
    title: "Blood Bank Management System",
    description: "A Django-based web application that manages blood donations, donors, and requests efficiently with role-based access for admins and users.",
    icon: "bxl-django",
    img: bloodbank, // Replace with actual image variable
  },
  {
    title: "JSON Schema Builder",
    description: "Visually build and manage JSON schemas with shadcn/ui and React.",
    icon: "bxl-react",
    img: img4, // Replace with actual image variable
  },
  {
    title: "Face Recognition Attendance System",
    description: "AI-powered attendance system that marks presence using facial recognition.",
    icon: "bxl-python",
    img: img, // Replace with actual image variable
  },
  {
    title: "Desi Resto",
    description: "A modern and vibrant restaurant landing page built with HTML, CSS, and JS.",
    icon: "bxl-react",
    img: img3, // Replace with actual image variable
  },
  {
    title: "GitHub Users Search",
    description: "Search and explore GitHub user profiles with live data from GitHub API.",
    icon: "bxl-github",
    img: gimg, // Replace with actual image variable
  },
  {
    title: "To-Do List",
    description: "A responsive to-do list app with smooth UI for task tracking.",
    icon: "bx-list-check",
    img: todo,
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "A tool to classify tweets into positive, negative, or neutral categories.",
    icon: "bxl-twitter",
    img: tsa,
  },
  {
    title: "Tic-Tac-Toe",
    description: "A playful two-player Tic-Tac-Toe Game.",
    icon: "bxs-dice-3",
    img: tictactoe,
  },
  {
    title: "Flawless Finds",
    description: "An e-commerce platform exclusively for women's cosmetic products.",
    icon: "bxs-shopping-bag",
    img: flf,
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="bg-transparent text-white py-20 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 glow-text animate-glow-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        My <span className="text-purple-500">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-[280px] bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl p-2 shadow-[0_0_15px_#9f7aea] animate-pulse-neon"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-800 to-black opacity-0 hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center p-5 rounded-xl text-center">
              <h5 className="text-xl font-semibold text-purple-400 glow-text animate-glow-text mb-2">{project.title}</h5>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="mt-4">
                <i className={`bx ${project.icon} text-3xl text-white animate-pulse-neon`}></i>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
