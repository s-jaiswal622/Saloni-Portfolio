import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects, TECH_ICON_MAP } from "../utils/constant";

const Projects = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="overflow-x-auto no-scrollbar">
          <div
            className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <motion.div
              className="flex gap-6 w-max"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              animate={!paused ? { x: ["0%", "-50%"] } : { x: 0 }}
              transition={{
                ease: "linear",
                duration: 30,
                repeat: Infinity,
              }}
            >
              {[...projects].map((project, index) => (
                <motion.div
                  key={index}
                  className="min-w-[300px] max-w-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-3 items-center text-purple-300 text-xl">
                    {project.tech.map((tech, i) => {
                      const IconComponent = TECH_ICON_MAP[tech];
                      return (
                        IconComponent && (
                          <div
                            key={i}
                            className="flex items-center gap-1 bg-purple-500/20 px-2 py-1 rounded-full text-sm"
                          >
                            <IconComponent title={tech} />
                            <span className="text-xs text-white">{tech}</span>
                          </div>
                        )
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
