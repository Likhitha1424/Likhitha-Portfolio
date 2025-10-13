import React from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "bx-code", title: "Software Development" },
  { icon: "bx-cube", title: "Product Development" },
  { icon: "bxl-android", title: "Full Stack Development" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="Services" className="bg-transparent text-white py-20 px-6 md:px-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold glow-text animate-glow-text">
          My <span className="text-purple-500">Services</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="border-2 border-purple-500 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-purple-700 transition-transform duration-300 hover:-translate-y-2"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <i
              className={`bx ${service.icon} text-5xl text-purple-500 mb-4 animate-pulse-neon`}
            ></i>
            <h3 className="text-2xl font-semibold glow-text animate-glow-text">
              {service.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
