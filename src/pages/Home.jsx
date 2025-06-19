import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";
import saloniImg from "../assets/saloni-img.jpg";
import Navbar from "../components/Navbar";
import Contact from "./Contact";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // Delay gives time for hash to be available
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <section
        className="min-h-screen flex items-center relative px-4 w-full"
        id="home"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-16 w-full max-w-full mx-auto">
          <motion.div className="w-96 h-96 lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden shadow-xl flex-shrink-0 lg:ml-20">
            <img
              src={saloniImg}
              alt="Saloni Jaiswal"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-10 w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="space-y-5">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                  Saloni
                </span>
              </h1>
              <TypeAnimation
                sequence={[
                  "Frontend Engineer – React & TypeScript Specialist",
                  2000,
                  "Microfrontend Architect",
                  2000,
                  "UI Engineer | Scalable Web Interfaces",
                  2000,
                  "Creative Problem Solver",
                  2000,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="text-3xl lg:text-4xl text-gray-300 font-light"
              />

              <p className="text-xl text-gray-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                4+ years building scalable web applications with React,
                TypeScript, and Microfrontend architectures. Proven track record
                in performance optimization and seeking senior frontend
                opportunities.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="/Saloni_Jaiswal_Resume.pdf" download>
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1">
                  <FaDownload className="inline mr-2 w-4 h-4" />
                  Download Resume
                </button>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="flex justify-center lg:justify-start gap-6 pt-4"
            >
              {[
                { Icon: FaGithub, href: "https://github.com/s-jaiswal622" },
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/saloni-jaiswal-bb8300150/",
                },
                { Icon: FaEnvelope, href: "mailto:salonijaiswal622@gmail.com" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="p-3 border border-gray-600 rounded-full hover:bg-white/10 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <item.Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <FaChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
