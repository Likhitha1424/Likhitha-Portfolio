import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="contacts bg-tranparent text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-purple-500">Info</span>
        </h2>
        <h4 className="text-xl text-gray-300 mt-2">Let's Connect</h4>
      </div>

      <div className="text-center text-lg space-y-4 mb-10">
        <p>
          <i className="bx bxs-send text-purple-500 mr-2"></i>
          likhithagsetty@gmail.com
        </p>
        <p>
          <i className="bx bxs-phone-call text-purple-500 mr-2"></i>
          +91 9010295102
        </p>
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href="https://linkedin.com/in/likhitha-gangisetty-056bb922b"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-purple-500 flex items-center justify-center rounded-full hover:bg-purple-500 hover:text-black transition"
        >
          <i className="bx bxl-linkedin text-xl"></i>
        </a>
        <a
          href="https://leetcode.com/u/Likhitha1424/"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-purple-500 flex items-center justify-center rounded-full hover:bg-purple-500 hover:text-black transition"
        >
          <i className="bx bx-code-alt text-xl"></i>
        </a>
        <a
          href="https://github.com/Likhitha1424"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-purple-500 flex items-center justify-center rounded-full hover:bg-purple-500 hover:text-black transition"
        >
          <i className="bx bxl-github text-xl"></i>
        </a>
        <a
          href="https://forms.gle/tbJHCRSBWcregZku7"
          target="_blank"
          rel="noreferrer"
          className="w-10 h-10 border-2 border-purple-500 flex items-center justify-center rounded-full hover:bg-purple-500 hover:text-black transition"
        >
          <i className="bx bxs-pencil text-xl"></i>
        </a>
      </div>

      <div className="mt-10 text-center">
        <a
          href="#Home"
          className="inline-flex items-center justify-center w-10 h-10 bg-purple-500 text-black rounded-full hover:shadow-lg"
        >
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
