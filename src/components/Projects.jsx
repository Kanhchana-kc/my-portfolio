import React from "react";
import { motion } from "framer-motion";

// Import local images
import pic1 from "../assets/ai.png";
import pic2 from "../assets/PR.png";
import pic3 from "../assets/c#.png";

export default function Projects({ darkMode }) {
  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A clean personal portfolio built with React and Tailwind CSS.",
      image: pic1,
      experience: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "Full-stack e-commerce platform with React, Node.js & MongoDB.",
      image: pic2,
      experience: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Blogging platform with rich text editor and comment system.",
      image: pic3,
      experience: ["React", "Firebase", "Rich Text Editor"],
    },
  ];

  const bgColor = darkMode ? "bg-gray-900" : "bg-slate-100";
  const textColor = darkMode ? "text-gray-200" : "text-slate-800";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const cardText = darkMode ? "text-gray-100" : "text-gray-800";

  return (
    <section id="projects" className={`${bgColor} px-8 py-20 ${textColor}`}>
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-xl shadow-lg ${cardBg} p-6 hover:shadow-2xl transition transform hover:-translate-y-2`}
          >
            <div className="overflow-hidden rounded-md mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${cardText}`}>{project.title}</h3>
            <p className={`mb-4 ${cardText}`}>{project.description}</p>
            <div>
              <h4 className={`font-semibold mb-2 ${cardText}`}>Technologies / Experience:</h4>
              <ul className={`list-disc list-inside ${cardText}`}>
                {project.experience.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
