import React from "react";
import {
  FaReact,
  FaCode,
  FaNodeJs,
  FaMobileAlt,
  FaDatabase,
  FaToolbox,
  FaDraftingCompass,
  FaGithub,
} from "react-icons/fa";
const skills = [
    {
      name: "React",
      level: "Expert",
      icon: <FaReact className="text-white w-6 h-6" />,
      color: "from-blue-400 to-cyan-400",
      description: "Hooks, Context, Performance Optimization",
    },
    {
      name: "TypeScript",
      level: "Advanced",
      icon: <FaCode className="text-white w-6 h-6" />,
      color: "from-indigo-400 to-blue-500",
      description: "Type Safety, Generics, Utility Types",
    },
    {
      name: "Redux & RTK",
      level: "Advanced",
      icon: <FaToolbox className="text-white w-6 h-6" />,
      color: "from-purple-400 to-pink-400",
      description: "State Management, RTK Query, Middleware",
    },
    {
      name: "Microfrontends",
      level: "Proficient",
      icon: <FaDraftingCompass className="text-white w-6 h-6" />,
      color: "from-green-400 to-emerald-400",
      description: "Module Federation, Architecture Design",
    },
    {
      name: "React Native",
      level: "Advanced",
      icon: <FaMobileAlt className="text-white w-6 h-6" />,
      color: "from-cyan-400 to-teal-400",
      description: "Mobile UI, Navigation, Native Modules",
    },
    {
      name: "Java & Spring Boot",
      level: "Intermediate",
      icon: <FaNodeJs className="text-white w-6 h-6" />,
      color: "from-orange-400 to-red-400",
      description: "REST APIs, Backend Logic, Microservices",
    },
    {
      name: "GraphQL",
      level: "Proficient",
      icon: <FaDatabase className="text-white w-6 h-6" />,
      color: "from-pink-400 to-rose-400",
      description: "Queries, Mutations, Apollo Client",
    },
    {
      name: "Testing",
      level: "Advanced",
      icon: <FaGithub className="text-white w-6 h-6" />,
      color: "from-yellow-400 to-amber-400",
      description: "Jest, Playwright, E2E Automation",
    },
  ];
  
const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="text-center">
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2 text-white">
                  {skill.name}
                </h3>

                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-gradient-to-r ${skill.color} text-white`}
                >
                  {skill.level}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
