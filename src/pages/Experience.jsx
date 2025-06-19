import React from "react";
import { experienceData } from "../utils/constant";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="space-y-8">
          {experienceData.map((exp, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <div className="flex justify-between flex-col md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    {exp.position}
                  </h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>
              <p className="text-gray-400 mt-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
