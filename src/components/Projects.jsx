import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20 bg-slate-100 text-slate-800">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((project) => (
          <div
            key={project}
            className="rounded-xl shadow-lg bg-white p-6 hover:shadow-xl transition"
          >
            <img
              src={`https://source.unsplash.com/random/400x300?sig=${project}`}
              alt="Project"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Project {project}</h3>
            <p className="text-gray-600 mt-2">
              This is a short description of project {project}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
