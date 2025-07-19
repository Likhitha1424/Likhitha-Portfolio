import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#252525] px-10 py-5 flex justify-between items-center z-50">
      <a href="#Home" className="text-white text-xl font-bold tracking-widest">Portfolio</a>
      <nav className="space-x-6 mr-30 ml-auto">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
          <a
            key={i}
            href={`#${item}`}
            className="text-white text-lg hover:text-purple-500 transition duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
