import React from "react";

const services = [
  {
    icon: "bx-code",
    title: "Web Development",
  },
  {
    icon: "bx-cube",
    title: "UI / UX Design",
  },
  {
    icon: "bxl-android",
    title: "Software Development",
  },
];

const Services = () => {
  return (
    <section id="Services" className="bg-transparent text-white py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-purple-500">Services</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border-2 border-purple-500 rounded-2xl p-8 text-center hover:shadow-purple-700 hover:shadow-md transition"
          >
            <i className={`bx ${service.icon} text-5xl text-purple-500 mb-4`}></i>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
