import React from "react";

const Skills = () => {
  return (
    <section id="Skills" className="bg-transparent text-white py-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-10">
        My <span className="text-purple-500">Skills</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-around gap-10">
        {/* Technical Skills */}
       <div className="w-full md:w-1/2">
  <h2 className="text-2xl font-semibold text-center mb-6 underline underline-offset-4 decoration-4 decoration-purple-500">
    Technical Skills
  </h2>
  <div className="flex flex-wrap justify-center gap-6">
    {[
      { name: "C/C++", icon: "bxl-c-plus-plus" },
      { name: "React.js", icon: "bxl-react" },
      { name: "Tailwind", icon: "bxl-tailwind-css" },
      { name: "Python", icon: "bxl-python" },
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "SQL", icon: "bxl-postgresql" },
      { name: "Node.js", icon: "bxl-nodejs" },
    ].map((skill, idx) => (
      <div key={idx} className="flex flex-col  text-center">
        <i className={`bx ${skill.icon} text-9xl`} style={{ color: "#921fea" }}></i>
        <span className="mt-2 text-base font-medium">{skill.name}</span>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;
