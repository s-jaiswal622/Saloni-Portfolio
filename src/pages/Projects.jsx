import React from 'react';
import ProjectCard from "../components/ProjectCard";
import { projects } from "../utils/constant";

const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
