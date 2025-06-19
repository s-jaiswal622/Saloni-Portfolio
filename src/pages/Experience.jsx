import React from "react";
import { experienceData } from "../utils/constant";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-4 scroll-smooth">
          {experienceData.map((exp, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 min-w-[320px] lg:w-1/2"
            >
              <div className="flex justify-between items-start flex-col md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300">
                    {exp.position}
                  </h3>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <div className="relative overflow-hidden py-4">
                <ul className="mt-6 flex flex-col gap-4">
                  {exp.bulletPoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white/20 backdrop-blur-md border border-white/30 text-sm text-white/90 px-4 py-3 rounded-xl shadow-md hover:shadow-purple-500/30 transition-all duration-300 font-medium"
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
