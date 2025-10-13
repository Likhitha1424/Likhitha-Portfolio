import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Services", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1b1b1b]/90 backdrop-blur-md px-6 md:px-10 py-4 flex justify-between items-center z-50 shadow-lg border-b border-purple-500/30">
      {/* Logo */}
      <a
        href="#Home"
        className="text-white text-xl md:text-2xl font-bold tracking-widest glow-text animate-glow-text"
      >
        Portfolio
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6 ml-auto items-center">
        {navItems.map((item, i) => (
          <motion.a
            key={i}
            href={`#${item}`}
            whileHover={{ scale: 1.1, color: "#a855f7" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-white text-lg glow-text animate-glow-text transition-all duration-300"
          >
            {item}
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-3xl focus:outline-none"
      >
        {menuOpen ? <CgClose /> : <CgMenuRight />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[72px] left-0 w-full bg-[#111]/95 backdrop-blur-lg border-t border-purple-500/40 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 py-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-xl glow-text animate-glow-text hover:text-purple-400 transition-all duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
