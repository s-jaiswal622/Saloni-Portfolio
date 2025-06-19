import React from "react";
import { contactInfo } from "../utils/constant";
import { FaCommentDots } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Let’s{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto">
          Open to senior frontend developer opportunities and exciting collaborations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-md hover:shadow-purple-400/30 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <item.Icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 break-words">{item.value}</p>
            </a>
          ))}
        </div>

        <a
          href="mailto:salonijaiswal622@gmail.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-full font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
        >
          <FaCommentDots className="w-5 h-5" />
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
