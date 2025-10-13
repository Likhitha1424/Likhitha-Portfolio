import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="Contact" className="bg-transparent text-white py-20 px-6 md:px-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold glow-text animate-glow-text">
          Contact <span className="text-purple-500">Info</span>
        </h2>
        <h4 className="text-xl text-gray-300 mt-2 glow-text animate-glow-text">
          Let's Connect
        </h4>
      </motion.div>

      <motion.div
        className="text-center text-lg space-y-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false }}
      >
        <p className="hover:text-purple-400 transition-colors">
          <i className="bx bxs-send text-purple-500 mr-2 glow-text animate-glow-text"></i>
          likhithagsetty@gmail.com
        </p>
        <p className="hover:text-purple-400 transition-colors">
          <i className="bx bxs-phone-call text-purple-500 mr-2 glow-text animate-glow-text"></i>
          +91 9010295102
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {[
          { href: "https://linkedin.com/in/likhitha-gangisetty-056bb922b", icon: "bxl-linkedin" },
          { href: "https://leetcode.com/u/Likhitha1424/", icon: "bx-code-alt" },
          { href: "https://github.com/Likhitha1424", icon: "bxl-github" },
          { href: "https://forms.gle/tbJHCRSBWcregZku7", icon: "bxs-pencil" },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 border-2 border-purple-500 flex items-center justify-center rounded-full hover:bg-purple-500 hover:text-black transition-transform duration-300 hover:scale-110 glow-border animate-pulse-neon"
          >
            <i className={`bx ${item.icon} text-xl`}></i>
          </a>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <a
          href="#Home"
          className="inline-flex items-center justify-center w-10 h-10 bg-purple-500 text-black rounded-full hover:shadow-lg glow-border animate-pulse-neon transition-transform duration-300 hover:scale-110"
        >
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
