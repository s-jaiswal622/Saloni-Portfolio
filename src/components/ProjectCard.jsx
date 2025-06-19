import React from "react";

const ProjectCard = ({ project }) => {
    return (
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              Live
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:underline">
              Code
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  