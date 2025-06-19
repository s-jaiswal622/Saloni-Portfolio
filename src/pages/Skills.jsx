import React from "react";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaVial,
  FaUsersCog,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJira,
  FaJava,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiNextdotjs,
  SiGraphql,
  SiJest,
  SiConfluence,
  SiMobx,
} from "react-icons/si";

const skillIconMap = {
  "JavaScript (ES6+)": <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-sky-400" />,
  "React (Redux, Router, Query)": <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-gray-300" />,
  MobX: <SiMobx className="text-orange-300" />,
  GraphQL: <SiGraphql className="text-pink-400" />,
  "Microfrontend Architecture": <FaReact className="text-purple-400" />,
  "React Native": <FaReact className="text-cyan-400" />,
  HTML: <FaHtml5 className="text-orange-400" />,
  CSS: <FaCss3Alt className="text-blue-400" />,
  "Material UI": <FaLayerGroup className="text-indigo-400" />,
  "System Design": <FaCode className="text-purple-300" />,
  "Java (Spring Boot, Mockito)": <FaJava className="text-red-400" />,
  RabbitMQ: <FaDatabase className="text-green-400" />,
  "RESTful APIs": <FaDatabase className="text-emerald-300" />,
  OOP: <FaCode className="text-pink-300" />,
  Jest: <SiJest className="text-rose-400" />,
  Playwright: <FaVial className="text-green-400" />,
  Coralogix: <FaTools className="text-teal-400" />,
  Jenkins: <FaTools className="text-orange-400" />,
  "Build Piper": <FaTools className="text-yellow-300" />,
  Git: <FaGitAlt className="text-red-500" />,
  Jira: <FaJira className="text-blue-400" />,
  Confluence: <SiConfluence className="text-blue-300" />,
  "VS Code": <FaCode className="text-indigo-400" />,
};

const skillsData = [
  {
    title: "Frontend",
    icon: <FaCode className="text-pink-400 text-lg" />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React (Redux, Router, Query)",
      "Next.js",
      "MobX",
      "GraphQL",
      "Microfrontend Architecture",
      "React Native",
      "HTML",
      "CSS",
      "Material UI",
      "System Design",
    ],
  },
  {
    title: "Backend",
    icon: <FaDatabase className="text-pink-400 text-lg" />,
    skills: [
      "Java (Spring Boot, Mockito)",
      "RabbitMQ",
      "RESTful APIs",
      "OOP",
    ],
  },
  {
    title: "Testing / CI/CD",
    icon: <FaVial className="text-pink-400 text-lg" />,
    skills: ["Jest", "Playwright", "Coralogix", "Jenkins", "Build Piper"],
  },
  {
    title: "Tools",
    icon: <FaTools className="text-pink-400 text-lg" />,
    skills: ["Git", "Jira", "Confluence", "VS Code"],
  },
];

const softSkills = {
  title: "Soft Skills",
  icon: <FaUsersCog className="text-pink-400 text-lg" />,
  skills: [
    "Leadership",
    "Mentorship",
    "Communication",
    "Stakeholder Management",
    "Problem-Solving",
    "Cross-Team Collaboration",
    "Agile Development",
  ],
};

const SkillCard = ({ title, icon, skills }) => (
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
    <h3 className="text-white font-semibold text-lg flex items-center gap-2 mb-4">
      {icon} {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, idx) => (
        <span
          key={idx}
          className="flex items-center gap-2 text-sm text-white/90 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full shadow-sm hover:shadow-purple-500/20 transition-all duration-200"
        >
          {skillIconMap[skill] && (
            <span className="text-base">{skillIconMap[skill]}</span>
          )}
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-br from-[#1d1a33] via-purple-900 to-[#2e026d] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Technical & <span className="text-pink-400">Soft Skills</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          Here's a creative breakdown of the tools and qualities I bring to the table.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {skillsData.map((section, idx) => (
            <SkillCard
              key={idx}
              title={section.title}
              icon={section.icon}
              skills={section.skills}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <SkillCard
            title={softSkills.title}
            icon={softSkills.icon}
            skills={softSkills.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
