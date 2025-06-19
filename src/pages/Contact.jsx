import React from "react";
import { contactInfo } from "../utils/constant";
import {FaCommentDots} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Let's{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="text-lg text-gray-400 mb-12">
          Open to senior frontend developer opportunities and exciting
          collaborations
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <item.Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.value}</p>
            </a>
          ))}
        </div>

        <a
          href="mailto:salonijaiswal622@gmail.com"
          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-full font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
        >
          <FaCommentDots className="inline mr-2 w-5 h-5" />
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
