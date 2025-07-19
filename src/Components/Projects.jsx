import React from "react";
import flf from "../assets/FLF.png";
import tictactoe from "../assets/tictactoeimg.jpeg";
import tsa from "../assets/TSA2.png";
import todo from "../assets/todo.jpeg";
import gimg from "../assets/gimg.jpg";
import img3 from "../assets/img3.jpg";
import img from "../assets/img.jpg";
import img4 from "../assets/img4.jpg";


const projects = [
  {
    title: "Flawless Finds",
    description: "An e-commerce platform exclusively for women's cosmetic products.",
    icon: "bxs-shopping-bag",
    img: flf,
  },
  {
    title: "Tic-Tac-Toe",
    description: "A playful two-player Tic-Tac-Toe Game.",
    icon: "bxs-dice-3",
    img: tictactoe,
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "A tool to classify tweets into positive, negative, or neutral categories.",
    icon: "bxl-twitter",
    img: tsa,
  },
  {
    title: "To-Do List",
    description: "A responsive to-do list app with smooth UI for task tracking.",
    icon: "bx-list-check",
    img: todo,
  },
  {
  title: "GitHub Users Search",
  description: "Search and explore GitHub user profiles with live data from GitHub API.",
  icon: "bxl-github",
  img: gimg, // Replace with actual image variable
},
{
  title: "Desi Resto",
  description: "A modern and vibrant restaurant landing page built with HTML, CSS, and JS.",
  icon: "bxl-react",
  img: img3, // Replace with actual image variable
},
{
  title: "Face Recognition Attendance System",
  description: "AI-powered attendance system that marks presence using facial recognition.",
  icon: "bxl-python",
  img: img, // Replace with actual image variable
},
{
  title: "JSON Schema Builder",
  description: "Visually build and manage JSON schemas with shadcn/ui and React.",
  icon: "bxl-react",
  img: img4, // Replace with actual image variable
},

];

const Projects = () => {
  return (
    <section id="Projects" className="bg-transparent text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        My <span className="text-purple-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-[280px] bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.01] transition-transform"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl p-2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-5 rounded-xl text-center">
              <h5 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h5>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="mt-4">
                <i className={`bx ${project.icon} text-3xl text-white`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
