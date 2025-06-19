import React from "react";

const projects = [
  {
    title: "Employee Invoice Management System",
    description:
      "Built with React, TypeScript, Redux, and Microfrontend Architecture. Reduced user touchpoints by 40% and enhanced UX with advanced state management.",
    tech: ["React", "TypeScript", "Redux", "Microfrontends"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    live: "#",
    github: "#",
  },
  {
    title: "Real-time Business Dashboard",
    description:
      "Dashboard using React and Redux Toolkit. Reduced business decision turnaround time by 50%.",
    tech: ["React", "Redux Toolkit", "WebSocket", "MUI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                <a
                  href={project.live}
                  className="text-purple-400 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  className="text-gray-300 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
