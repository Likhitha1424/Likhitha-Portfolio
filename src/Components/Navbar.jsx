import React from "react";

const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Services", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1b1b1b] px-10 py-5 flex justify-between items-center z-50 shadow-lg">
      <a
        href="#Home"
        className="text-white text-xl font-bold tracking-widest glow-text animate-glow-text"
      >
        Portfolio
      </a>
      <nav className="space-x-6 ml-auto flex items-center">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={`#${item}`}
            className="text-white text-lg glow-text animate-glow-text hover:text-purple-500 hover:scale-110 transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
